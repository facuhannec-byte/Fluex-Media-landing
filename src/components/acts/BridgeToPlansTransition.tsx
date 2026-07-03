"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BridgeToPlansTransition() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(circleRef.current, { scale: 0 });

      gsap.to(circleRef.current, {
        scale: 3,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: sceneRef.current,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[180vh]">
      <div
        ref={sceneRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-brown-dark"
      >
        <div
          ref={circleRef}
          className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream"
          aria-hidden
        />
      </div>
    </div>
  );
}
