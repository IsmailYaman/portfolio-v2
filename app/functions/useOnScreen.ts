'use client'
import { useEffect, useState, useRef } from 'react';

interface UseOnScreenOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useOnScreen = (options?: UseOnScreenOptions) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Ensure window is defined (this means we're on the client-side)
    if (typeof window === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting] as const;
};

export default useOnScreen;
