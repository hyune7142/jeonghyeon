'use client';
import React, { useState, useMemo, useRef, useEffect } from 'react';

import { P } from '@/components/common/Typography';

interface FolderItem {
  label?: React.ReactNode;
}

interface FolderProps {
  name?: string;
  color?: string;
  size?: number;
  items?: FolderItem[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.floor(r * (1 - percent));
  g = Math.floor(g * (1 - percent));
  b = Math.floor(b * (1 - percent));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

// React Bits Folder + AI 채찍질의 결과...
const ProjectFolder: React.FC<FolderProps> = ({
  name = '새 폴더',
  color = '#5227FF',
  size = 1,
  items = [],
  className = '',
}) => {
  const maxItems = 3;
  const validItems = items.slice(0, maxItems);
  const [open, setOpen] = useState(false);
  const [frontZ, setFrontZ] = useState(1000);
  const folderRef = useRef<HTMLDivElement>(null);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const initialOffsets = useMemo(
    () => Array.from({ length: validItems.length }, () => ({ x: 0, y: 0 })),
    [validItems.length]
  );
  const [paperOffsets, setPaperOffsets] = useState(initialOffsets);

  if (paperOffsets.length !== validItems.length) {
    queueMicrotask(() => {
      setPaperOffsets(initialOffsets);
    });
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (folderRef.current && !folderRef.current.contains(e.target as Node)) {
        setOpen(false);
        setTimeout(() => setFrontZ(1000), 300);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const folderBackColor = darkenColor(color, 0.08);
  const paperColors = ['#eeeeee', '#f8f8f8', '#ffffff'];

  const handleClick = () => {
    if (open) {
      setTimeout(() => setFrontZ(1000), 300);
    } else {
      setFrontZ(10);
    }
    setOpen(prev => !prev);
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.1;
    const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.1;
    setPaperOffsets(prev => {
      const next = [...prev];
      if (!next[index]) return prev;
      next[index] = { x: offsetX, y: offsetY };
      return next;
    });
  };

  const handlePaperMouseEnter = (index: number) => setHoveredIndex(index);
  const handlePaperMouseLeave = (index: number) => {
    setHoveredIndex(null);
    setPaperOffsets(prev => {
      const next = [...prev];
      if (!next[index]) return prev;
      next[index] = { x: 0, y: 0 };
      return next;
    });
  };

  // ✅ 수정된 getOpenTransform — items 개수 기반 분기
  const getOpenTransform = (index: number) => {
    const total = validItems.length;

    if (total === 1) {
      // 가운데 하나만
      return 'translate(-50%, -80%) rotate(0deg)';
    }

    if (total === 2) {
      // 좌우 양쪽으로 살짝 벌리기
      return index === 0
        ? 'translate(-120%, -75%) rotate(-10deg)'
        : 'translate(20%, -75%) rotate(10deg)';
    }

    if (total === 3) {
      // 왼쪽, 가운데, 오른쪽
      if (index === 0) return 'translate(-130%, -70%) rotate(-15deg)';
      if (index === 1) return 'translate(-50%, -90%) rotate(0deg)';
      if (index === 2) return 'translate(30%, -70%) rotate(15deg)';
    }

    return '';
  };

  const scaleStyle = { transform: `scale(${size})`, transformOrigin: 'center center' };

  return (
    <div ref={folderRef} style={scaleStyle} className={`flex flex-col items-center ${className}`}>
      <div
        className={`group relative cursor-pointer transition-all duration-200 ease-in ${
          !open ? 'hover:-translate-y-2' : ''
        }`}
        onClick={handleClick}
        style={{
          transform: open ? 'translateY(-8px)' : undefined,
          backgroundColor: folderBackColor,
          width: 100,
          height: 80,
          borderRadius: '0 10px 10px 10px',
        }}
      >
        {/* 탭 */}
        <span
          className="absolute bottom-[98%] left-0 z-0 h-[10px] w-[30px] rounded-tl-[5px] rounded-tr-[5px]"
          style={{ backgroundColor: folderBackColor }}
        />

        {/* 종이 */}
        {validItems.map((item, i) => {
          const transformStyle = open
            ? `${getOpenTransform(i)} translate(${paperOffsets[i]?.x ?? 0}px, ${
                paperOffsets[i]?.y ?? 0
              }px)`
            : undefined;

          const dynamicZ = hoveredIndex === i ? 100 : 20 + i;

          return (
            <div
              key={i}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseEnter={() => handlePaperMouseEnter(i)}
              onMouseLeave={() => handlePaperMouseLeave(i)}
              className={`absolute bottom-[10%] left-1/2 transition-transform duration-500 ease-out ${
                !open ? '-translate-x-1/2 translate-y-[10%] transform' : 'hover:scale-105'
              }`}
              style={{
                transform: open ? transformStyle : undefined,
                width: `${75 + i * 10}%`,
                height: open ? '80%' : `${60 + i * 10}%`,
                backgroundColor: paperColors[i],
                borderRadius: '10px',
                boxShadow:
                  hoveredIndex === i ? '0 3px 8px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                zIndex: dynamicZ,
              }}
            >
              {item.label && (
                <div className="absolute inset-0 flex items-center justify-center p-2 text-gray-800">
                  <P className="w-full text-center text-xs font-medium break-words">{item.label}</P>
                </div>
              )}
            </div>
          );
        })}

        {/* 앞면 */}
        <div
          className={`absolute h-full w-full origin-bottom transition-all duration-300 ease-in-out ${
            !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
          }`}
          style={{
            backgroundColor: color,
            borderRadius: '0 10px 10px 10px',
            zIndex: open ? 15 : 999,
            ...(open && { transform: 'skew(15deg) scaleY(0.6)' }),
          }}
        />
        <div
          className={`absolute h-full w-full origin-bottom transition-all duration-300 ease-in-out ${
            !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
          }`}
          style={{
            backgroundColor: color,
            borderRadius: '0 10px 10px 10px',
            zIndex: open ? 15 : 999,
            ...(open && { transform: 'skew(-15deg) scaleY(0.6)' }),
          }}
        />
        <div
          className={`absolute h-full w-full origin-bottom transition-all duration-300 ease-in-out ${
            !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
          }`}
          style={{
            backgroundColor: color,
            borderRadius: '0 10px 10px 10px',
            zIndex: frontZ,
            ...(open && { transform: 'skew(-15deg) scaleY(0.6)' }),
          }}
        />
      </div>

      <div className="mt-2 w-[110px] truncate text-center font-medium">{name}</div>
    </div>
  );
};

export default ProjectFolder;
