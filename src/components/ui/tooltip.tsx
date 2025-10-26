'use client';

import * as React from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>;

const Tooltip = ({ children, ...props }: TooltipProps) => {
  const [open, setOpen] = React.useState(false);
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;

  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const props = child.props as Record<string, unknown>;
      if (child.type === TooltipPrimitive.Trigger || props.asChild) {
        return React.cloneElement(
          child as React.ReactElement,
          {
            onTouchStart: () => setOpen(true),
            onTouchEnd: () => setTimeout(() => setOpen(false), 1500),
          } as React.DOMAttributes<HTMLElement>
        );
      }
    }
    return child;
  });

  return (
    <TooltipPrimitive.Root
      open={isTouchDevice ? open : undefined}
      onOpenChange={isTouchDevice ? setOpen : props.onOpenChange}
      delayDuration={props.delayDuration ?? 200}
    >
      {enhancedChildren}
    </TooltipPrimitive.Root>
  );
};

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden rounded-md px-3 py-1.5 text-xs shadow-md',
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
