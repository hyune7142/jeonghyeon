'use client';

import React, { ReactNode } from 'react';

import { motion } from 'motion/react';

import { H3 } from '@/components/common/Typography';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface SectionProps {
  sectionId: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}

export default function Section({ sectionId, className, title, children }: SectionProps) {
  return (
    <motion.section
      id={sectionId}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={cn('flex scroll-mt-[80px] flex-col', className)}
    >
      {title && (
        <>
          <H3>{title}</H3>
          <Separator className="mt-3 mb-6" />
        </>
      )}
      {children}
    </motion.section>
  );
}
