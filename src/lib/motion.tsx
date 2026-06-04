import { motion, useInView, useReducedMotion, Variants, type Transition } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const premiumTiming: Transition = {
  duration: 0.7,
  // Use a numeric bezier but cast easing to any to satisfy typings
  ease: [0.22, 1, 0.36, 1] as any,
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: premiumTiming },
  exit: { opacity: 0, y: -20, transition: { duration: 0.45, ease: 'easeInOut' } },
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: premiumTiming },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

export const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: premiumTiming },
};

export const hoverLift = {
  whileHover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  whileTap: { scale: 0.98 },
};

export function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'initial'}
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={shouldReduceMotion ? { opacity: 1, y: 0, scale: 1 } : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

export function MotionImage(props: React.ComponentPropsWithoutRef<'img'>) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.img
      {...(props as any)}
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: premiumTiming.ease as any }}
    />
  );
}

// Motion's generic typing for external components can be strict; cast to `any` to allow `Link` props like `to`.
export const MotionLink = motion(Link) as unknown as React.ComponentType<any>;

export function AnimatedCounter({
  target,
  suffix = '',
  duration = 1.2,
  className,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = Math.max(1, Math.round(60 * duration));
    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setValue(Math.round(target * progress));
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [duration, isInView, target]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
