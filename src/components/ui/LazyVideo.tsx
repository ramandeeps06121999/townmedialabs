"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = React.ComponentPropsWithoutRef<"video"> & {
  children?: React.ReactNode;
};

export default function LazyVideo({ children, src, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} src={isVisible ? src : undefined} {...props}>
      {isVisible ? children : null}
    </video>
  );
}
