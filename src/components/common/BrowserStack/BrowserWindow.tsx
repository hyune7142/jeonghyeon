'use client';

import React, { forwardRef } from 'react';

export interface BrowserWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  title?: string;
}

const BrowserWindow = forwardRef<HTMLDivElement, BrowserWindowProps>(
  ({ customClass, children, title, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(240,240,240,0.9)_100%)] shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md [will-change:transform] [backface-visibility:hidden] [transform-style:preserve-3d] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(35,35,35,0.95)_0%,rgba(10,10,10,0.95)_100%)] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
      >
        <div className="flex items-center gap-2 border-b border-black/10 bg-[rgba(0,0,0,0.05)] px-4 py-2 transition-colors duration-300 dark:border-white/10 dark:bg-[rgba(255,255,255,0.04)]">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <p className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            {title ?? 'Window'}
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-white/50 to-white/80 dark:from-black/50 dark:to-black/90">
          {children}
        </div>
      </div>
    );
  }
);

BrowserWindow.displayName = 'BrowserWindow';
export default BrowserWindow;
