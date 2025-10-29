'use client';
import React, { useEffect, useRef, useState } from 'react';

interface FuzzyTextProps {
  className?: string;
  children: React.ReactNode;
  fontSize?: number | string;
  fontWeight?: string | number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
}

const FuzzyText: React.FC<FuzzyTextProps> = ({
  className,
  children,
  fontSize = 'clamp(1rem, 6vw, 3rem)',
  fontWeight = 900,
  fontFamily = 'inherit',
  color = '#fff',
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement & { cleanupFuzzyText?: () => void }>(null);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;

    const parent = canvas.parentElement;
    const resizeObserver = new ResizeObserver(() => setRenderKey(prev => prev + 1));
    resizeObserver.observe(parent);

    const handleResize = () => setRenderKey(prev => prev + 1);
    window.addEventListener('resize', handleResize);

    const frame = requestAnimationFrame(() => setRenderKey(prev => prev + 1));

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      if (document.fonts?.ready) await document.fonts.ready;
      if (isCancelled) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === 'inherit'
          ? window.getComputedStyle(canvas).fontFamily || 'sans-serif'
          : fontFamily;

      const temp = document.createElement('span');
      temp.style.position = 'absolute';
      temp.style.visibility = 'hidden';
      temp.style.fontSize = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
      document.body.appendChild(temp);
      const computedSize = parseFloat(window.getComputedStyle(temp).fontSize);
      document.body.removeChild(temp);
      const numericFontSize = computedSize;

      const text = React.Children.toArray(children).join('');

      // 오프스크린 렌더링
      const offscreen = document.createElement('canvas');
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${numericFontSize}px ${computedFontFamily}`;
      const metrics = offCtx.measureText(text);
      const width = Math.ceil(metrics.width);
      const height = Math.ceil(
        (metrics.actualBoundingBoxAscent ?? numericFontSize) +
          (metrics.actualBoundingBoxDescent ?? numericFontSize * 0.25)
      );

      offscreen.width = width;
      offscreen.height = height;
      offCtx.font = `${fontWeight} ${numericFontSize}px ${computedFontFamily}`;
      offCtx.fillStyle = color;
      offCtx.textBaseline = 'top';
      offCtx.fillText(text, 0, 0);

      const parentWidth = canvas.parentElement?.clientWidth ?? width;
      const scale = parentWidth < width ? parentWidth / width : 1;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * scale * dpr;
      canvas.height = height * scale * dpr;
      ctx.setTransform(scale * dpr, 0, 0, scale * dpr, 0, 0);

      let isHovering = false;
      const fuzzRange = 30;

      const run = () => {
        if (isCancelled) return;
        ctx.clearRect(0, 0, width, height);
        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < height; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(offscreen, 0, j, width, 1, dx, j, width, 1);
        }
        animationFrameId = requestAnimationFrame(run);
      };

      run();

      const handleMove = (e: MouseEvent) => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        isHovering = x > 0 && x < rect.width;
      };
      const handleLeave = () => (isHovering = false);

      if (enableHover) {
        canvas.addEventListener('mousemove', handleMove);
        canvas.addEventListener('mouseleave', handleLeave);
      }

      canvas.cleanupFuzzyText = () => {
        cancelAnimationFrame(animationFrameId);
        canvas.removeEventListener('mousemove', handleMove);
        canvas.removeEventListener('mouseleave', handleLeave);
      };
    };

    init();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      if (canvas && canvas.cleanupFuzzyText) canvas.cleanupFuzzyText();
    };
  }, [
    renderKey,
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
  ]);

  return <canvas ref={canvasRef} className={className} />;
};

export default FuzzyText;
