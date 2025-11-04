import React from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

const H1: React.FC<Props> = ({ className, children, ...rest }) => (
  <h1
    {...rest}
    className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
  >
    {children}
  </h1>
);

const H2: React.FC<Props> = ({ className, children, ...rest }) => (
  <h2
    {...rest}
    className={cn(
      'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      className
    )}
  >
    {children}
  </h2>
);

const H3: React.FC<Props> = ({ className, children, ...rest }) => (
  <h3 {...rest} className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
    {children}
  </h3>
);

const H4: React.FC<Props> = ({ className, children, ...rest }) => (
  <h4 {...rest} className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>
    {children}
  </h4>
);

const P: React.FC<Props> = ({ className, children, ...rest }) => (
  <p {...rest} className={cn('leading-7 whitespace-pre-line', className)}>
    {children}
  </p>
);

const Blockquote: React.FC<Props> = ({ className, children, ...rest }) => (
  <blockquote {...rest} className={cn('mt-6 border-l-2 pl-6 italic', className)}>
    {children}
  </blockquote>
);

const InlineCode: React.FC<Props> = ({ className, children, ...rest }) => (
  <code
    {...rest}
    className={cn(
      'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      className
    )}
  >
    {children}
  </code>
);

const Lead: React.FC<Props> = ({ className, children, ...rest }) => (
  <p {...rest} className={cn('text-muted-foreground text-sm sm:text-base md:text-lg', className)}>
    {children}
  </p>
);

const Text: React.FC<Props> = ({ className, children, ...rest }) => (
  <p {...rest} className={cn('text-foreground', className)}>
    {children}
  </p>
);

const Large: React.FC<Props> = ({ className, children, ...rest }) => (
  <div {...rest} className={cn('text-lg font-semibold', className)}>
    {children}
  </div>
);

const Muted: React.FC<Props> = ({ className, children, ...rest }) => (
  <p {...rest} className={cn('text-muted-foreground text-sm', className)}>
    {children}
  </p>
);

export { H1, H2, H3, H4, P, Lead, Text, Large, Muted, Blockquote, InlineCode };
