"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBackdrop from "@/components/SectionBackdrop";
import { LOGO_ARROW_POINTS, LOGO_LINE_PATH, LOGO_VIEWBOX } from "@/components/Logo";

const FLUEX = "Fluex".split("");
const MEDIA = "Media".split("");
const LABEL = "Bienvenido".split("");
const LABEL_A = "a".split("");

export default function HookDoors() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const arrowPathRef = useRef<SVGPathElement>(null);
  const arrowHeadRef = useRef<SVGPolygonElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const labelLetterRefs = useRef<Array<HTMLSpanElement | null>>(
    Array(LABEL.length + LABEL_A.length).fill(null),
  );
  const letterRefs = useRef<Array<HTMLSpanElement | null>>(Array(10).fill(null));

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = letterRefs.current;
      const labelLetters = labelLetterRefs.current;

      gsap.set(letters, { opacity: 0, y: 16 });
      gsap.set(labelLetters, { opacity: 0, y: 10 });
      gsap.set(arrowPathRef.current, { strokeDashoffset: 1 });
      gsap.set(arrowHeadRef.current, { opacity: 0, scale: 0.7, transformOrigin: "50% 50%" });

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
          { strokeDashoffset: 0, duration: 0.32, ease: "power1.inOut" },
          0.08,
        )
        .fromTo(
          arrowHeadRef.current,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.14, ease: "power2.out" },
          0.38,
        );

      labelLetters.forEach((el, index) => {
        if (!el) return;
        tl.fromTo(
          el,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.15, ease: "power2.out" },
          0.44 + index * 0.02,
        );
      });

      const SLOT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const randomChar = () =>
        SLOT_CHARS[Math.floor(Math.random() * SLOT_CHARS.length)];

      letters.forEach((el, index) => {
        if (!el) return;
        const isAccent = index === 4;
        const finalChar = el.textContent ?? "";
        const decoys = [randomChar(), randomChar(), randomChar()];
        const spinPosition = 0.72 + index * 0.035;
        const spinDuration = 0.1;

        tl.fromTo(
          el,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.05, ease: "power1.out" },
          spinPosition,
        );

        const reel = { step: 0 };
        tl.to(
          reel,
          {
            step: decoys.length,
            duration: spinDuration,
            ease: `steps(${decoys.length})`,
            onUpdate: () => {
              const i = Math.min(Math.floor(reel.step), decoys.length - 1);
              el.textContent = decoys[i];
            },
            onComplete: () => {
              el.textContent = finalChar;
            },
          },
          spinPosition,
        );

        if (isAccent) {
          tl.fromTo(
            el,
            { scale: 1.9 },
            { scale: 1, duration: 0.15, ease: "back.out(2.5)" },
            spinPosition + spinDuration,
          );
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[220vh]">
      <section
        ref={sceneRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-ink"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-cream">
          <SectionBackdrop variant="cta" />
          <svg
            viewBox={LOGO_VIEWBOX}
            className="h-10 w-auto text-accent-soft sm:h-12"
            fill="none"
            stroke="currentColor"
            strokeWidth={6.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path
              ref={arrowPathRef}
              pathLength={1}
              strokeDasharray={1}
              d={LOGO_LINE_PATH}
            />
            <polygon
              ref={arrowHeadRef}
              points={LOGO_ARROW_POINTS}
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <span className="flex gap-2 text-xs uppercase tracking-[0.4em] text-accent-soft">
            <span className="flex">
              {LABEL.map((char, i) => (
                <span
                  key={`label-${i}`}
                  ref={(el) => {
                    labelLetterRefs.current[i] = el;
                  }}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="flex">
              {LABEL_A.map((char, i) => (
                <span
                  key={`label-a-${i}`}
                  ref={(el) => {
                    labelLetterRefs.current[LABEL.length + i] = el;
                  }}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
            </span>
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
          <span aria-hidden className="animate-bounce-y text-xl">
            ↑
          </span>
        </div>
      </section>
    </div>
  );
}
