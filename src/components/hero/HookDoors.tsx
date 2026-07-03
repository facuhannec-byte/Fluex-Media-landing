"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBackdrop from "@/components/SectionBackdrop";

const FLUEX = "Fluex".split("");
const MEDIA = "Media".split("");

export default function HookDoors() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const arrowPathRef = useRef<SVGPathElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<Array<HTMLSpanElement | null>>(Array(10).fill(null));

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = letterRefs.current;

      gsap.set(letters, { opacity: 0, y: 16 });
      gsap.set(labelRef.current, { opacity: 0, y: 10 });
      gsap.set(arrowPathRef.current, { strokeDashoffset: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: sceneRef.current,
        },
      });

      tl.to(leftPanelRef.current, { xPercent: -100, ease: "none", duration: 1 }, 0)
        .to(rightPanelRef.current, { xPercent: 100, ease: "none", duration: 1 }, 0)
        .to(hintRef.current, { opacity: 0, duration: 0.08 }, 0)
        .fromTo(
          arrowPathRef.current,
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.35, ease: "power1.inOut" },
          0.15,
        )
        .fromTo(
          labelRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
          0.45,
        );

      letters.forEach((el, index) => {
        if (!el) return;
        const isAccent = index === 4;
        const position = 0.55 + index * 0.045;
        if (isAccent) {
          tl.fromTo(
            el,
            { opacity: 0, scale: 1.9, y: 0 },
            { opacity: 1, scale: 1, y: 0, duration: 0.22, ease: "back.out(2.5)" },
            position,
          );
        } else {
          tl.fromTo(
            el,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" },
            position,
          );
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[280vh]">
    <section
      ref={sceneRef}
      className="sticky top-0 h-screen w-full overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-cream">
        <SectionBackdrop variant="cta" />
        <svg
          viewBox="0 0 120 36"
          className="h-7 w-24 text-accent-soft"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path
            ref={arrowPathRef}
            pathLength={1}
            strokeDasharray={1}
            d="M4 28 C 32 2, 72 2, 96 14 M86 6 L98 14 L88 24"
          />
        </svg>
        <span
          ref={labelRef}
          className="text-xs uppercase tracking-[0.4em] text-accent-soft"
        >
          Bienvenido a
        </span>
        <h1 className="flex items-baseline gap-3 font-display text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
          <span className="flex">
            {FLUEX.map((char, i) => (
              <span
                key={`fluex-${i}`}
                ref={(el) => {
                  letterRefs.current[i] = el;
                }}
                className={`inline-block ${i === 4 ? "text-accent" : ""}`}
              >
                {char}
              </span>
            ))}
          </span>
          <span className="flex">
            {MEDIA.map((char, i) => (
              <span
                key={`media-${i}`}
                ref={(el) => {
                  letterRefs.current[5 + i] = el;
                }}
                className="inline-block"
              >
                {char}
              </span>
            ))}
          </span>
        </h1>
      </div>

      <div
        ref={leftPanelRef}
        className="absolute left-0 top-0 z-10 flex h-full w-1/2 items-center justify-end overflow-hidden bg-cream pr-1"
      >
        <p className="font-display text-4xl font-medium leading-tight text-ink sm:text-6xl md:text-7xl">
          Tu empresa está
        </p>
      </div>
      <div
        ref={rightPanelRef}
        className="absolute right-0 top-0 z-10 flex h-full w-1/2 items-center justify-start overflow-hidden bg-cream pl-1"
      >
        <p className="font-display text-4xl font-medium leading-tight text-ink sm:text-6xl md:text-7xl">
          por crecer.
        </p>
      </div>

      <div
        ref={hintRef}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-brown-dark"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          Deslizá para continuar
        </span>
        <span aria-hidden className="text-xl">
          ↑
        </span>
      </div>
    </section>
    </div>
  );
}
