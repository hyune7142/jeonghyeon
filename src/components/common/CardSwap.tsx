'use client';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import gsap from 'gsap';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  onCardClick?: (idx: number) => void;
  easing?: 'linear' | 'elastic';
  children: ReactNode;
  minWidth?: number; // 컨테이너 최소 너비
  minCardWidth?: number; // 카드 최소 너비
}

export interface CardSwapHandle {
  goTo: (index: number) => void;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  ['data-title']?: string;
}

type CardRef = RefObject<HTMLDivElement | null>;

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, children, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(35,35,35,0.95)_0%,rgba(10,10,10,0.95)_100%)] shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md [will-change:transform] [backface-visibility:hidden] [transform-style:preserve-3d] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <p className="ml-3 text-sm font-medium text-gray-300">{rest['data-title'] ?? 'Window'}</p>
      </div>
      <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-black/50 to-black/90">
        {children}
      </div>
    </div>
  )
);
Card.displayName = 'Card';

const makeSlot = (i: number, _distX: number, distY: number, total: number): Slot => ({
  x: 0,
  y: -i * distY,
  z: -i * 180,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot): void => {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    transformOrigin: '50% 50%',
    zIndex: slot.zIndex,
    force3D: true,
  });
};

const CardSwap = forwardRef<CardSwapHandle, CardSwapProps>(function CardSwap(
  {
    width = '100%',
    height = '100%',
    cardDistance = 50,
    verticalDistance = 60,
    delay = 5000,
    onCardClick,
    easing = 'elastic',
    children,
    minWidth = 320,
    minCardWidth = 340,
  },
  ref
) {
  const [viewportScale, setViewportScale] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      let scale = 1;
      if (w >= 1440) scale = 1;
      else if (w >= 1024) scale = 0.9 + ((w - 1024) / 416) * 0.1;
      else if (w >= 768) scale = 0.85 + ((w - 768) / 256) * 0.05;
      else if (w >= 480) scale = 0.85;
      else scale = 0.9; // ✅ 모바일 확대 유지
      setViewportScale(scale);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const config = useMemo(
    () =>
      easing === 'elastic'
        ? {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: 'power1.inOut',
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing]
  );

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(
    () => Array.from({ length: childArr.length }, () => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const normalizeZIndex = React.useCallback((): void => {
    const total = refs.length;
    order.current.forEach((idx, i) => {
      const el = refs[idx].current;
      if (el) {
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        gsap.set(el, { zIndex: slot.zIndex, z: slot.z });
      }
    });
  }, [refs, cardDistance, verticalDistance]);

  const swap = React.useCallback((): void => {
    if (order.current.length < 2 || isAnimating) return;
    const total = refs.length;
    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    if (!elFront) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      overwrite: 'auto',
      onComplete: () => setIsAnimating(false),
    });
    tlRef.current = tl;

    const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
    tl.set(elFront, { zIndex: backSlot.zIndex - 3 });

    tl.to(elFront, {
      y: '+=400',
      z: '-=100',
      opacity: 0.6,
      duration: config.durDrop,
      ease: config.ease,
    });

    tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      const slot = makeSlot(i, cardDistance, verticalDistance, total);
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          zIndex: slot.zIndex + 1,
          opacity: 1,
          duration: config.durMove,
          ease: config.ease,
        },
        `promote+=${i * 0.12}`
      );
    });

    tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        opacity: 1,
        duration: config.durReturn,
        ease: config.ease,
        onStart: () => void gsap.set(elFront, { zIndex: backSlot.zIndex - 5 }),
      },
      'return'
    );

    tl.call(() => {
      order.current = [...rest, front];
      normalizeZIndex();
    });
  }, [isAnimating, refs, cardDistance, verticalDistance, config, normalizeZIndex]);

  const goTo = React.useCallback(
    (targetIndex: number): void => {
      if (isAnimating) return;
      setIsAnimating(true);

      tlRef.current?.kill();
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      const total = refs.length;
      const curOrder = order.current.slice();
      const pos = curOrder.indexOf(targetIndex);
      if (pos <= 0) {
        setIsAnimating(false);
        return;
      }

      const newOrder = [targetIndex, ...curOrder.filter(x => x !== targetIndex)];
      const speedFactor = 0.6;

      const tl = gsap.timeline({
        overwrite: 'auto',
        onComplete: () => {
          order.current = newOrder;
          normalizeZIndex();
          setIsAnimating(false);
          intervalRef.current = window.setInterval(swap, delay);
        },
      });
      tlRef.current = tl;

      const targetEl = refs[targetIndex].current;
      if (targetEl) {
        tl.set(targetEl, { zIndex: total + 3 });
        tl.to(targetEl, {
          scale: 1.08,
          rotationY: 10,
          duration: 0.25 * speedFactor,
          ease: 'power2.out',
        });
      }

      newOrder.forEach((idx, i) => {
        const el = refs[idx].current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            zIndex: slot.zIndex,
            duration: 0.9 * speedFactor,
            ease: 'power2.inOut',
          },
          '<+=0.05'
        );
      });

      if (targetEl) {
        const slot0 = makeSlot(0, cardDistance, verticalDistance, total);
        tl.to(
          targetEl,
          {
            scale: 1,
            rotationY: 0,
            z: slot0.z,
            duration: 0.4 * speedFactor,
            ease: 'power2.inOut',
          },
          '>-0.2'
        );
      }
    },
    [isAnimating, delay, refs, cardDistance, verticalDistance, normalizeZIndex, swap]
  );

  useImperativeHandle(ref, () => ({ goTo }), [goTo]);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      const el = r.current;
      if (el) placeNow(el, makeSlot(i, cardDistance, verticalDistance, total));
    });

    const frame = requestAnimationFrame(() => {
      swap();
      intervalRef.current = window.setInterval(swap, delay);
    });

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      cancelAnimationFrame(frame);
    };
  }, [cardDistance, verticalDistance, delay]);

  const rendered = childArr.map((child, i) => {
    if (!isValidElement<CardProps>(child)) return child;
    const element = child as ReactElement<CardProps & React.RefAttributes<HTMLDivElement>>;
    return cloneElement(element, {
      key: i,
      ref: refs[i],
      style: {
        width,
        height,
        minWidth: minCardWidth, // ✅ 카드 크기 보정
        maxWidth: 700,
        ...(child.props.style ?? {}),
      },
      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isAnimating) {
          child.props.onClick?.(e);
          onCardClick?.(i);
        }
      },
    });
  });

  return (
    <div
      ref={container}
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      style={{
        transform: `scale(${viewportScale})`,
        transformOrigin: '50% 50%',
        perspective: `${1000}px`,
        minWidth,
      }}
    >
      {rendered}
    </div>
  );
});

export default CardSwap;
