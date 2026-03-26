"use client";

import { useEffect, useRef } from "react";

/**
 * Deferred smooth scroll — loads Lenis only after the first paint + idle callback.
 * This keeps Lenis JS out of the critical rendering path, improving LCP and TBT.
 * Unlike SmoothScrollProvider which wraps children (creating a client boundary),
 * this is a standalone component that initialises Lenis independently.
 */
export function DeferredSmoothScroll() {
  const lenisRef = useRef<InstanceType<typeof import("lenis").default> | null>(null);

  useEffect(() => {
    // Use requestIdleCallback (or setTimeout fallback) to defer Lenis loading
    // until the browser is idle after the initial paint.
    const schedule =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 200);

    const id = schedule(() => {
      import("lenis").then(({ default: Lenis }) => {
        if (lenisRef.current) return; // guard against double-init in strict mode

        const lenis = new Lenis({
          autoRaf: true,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2,
        });

        lenisRef.current = lenis;
      });
    }, { timeout: 3000 });

    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as number);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
