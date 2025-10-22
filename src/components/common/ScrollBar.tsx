'use client';

import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-40 h-[4px] origin-[0%] bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400"
      style={{
        scaleX,
      }}
    />
  );
}
