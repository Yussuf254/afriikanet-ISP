"use client"

import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const steps = 60;
            const increment = numericValue / steps;
            const stepDuration = duration / steps;
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
              step++;
              current = Math.min(increment * step, numericValue);
              setCount(current);

              if (step >= steps) {
                clearInterval(timer);
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${prefix}-${suffix}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [value, duration, hasAnimated, prefix, suffix]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
    }
    return num.toFixed(1).replace(/\.0$/, '');
  };

  const displayValue = typeof value === 'string' ? value : formatNumber(count);

  return (
    <span id={`counter-${prefix}-${suffix}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
