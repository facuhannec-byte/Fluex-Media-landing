"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBackdrop from "@/components/SectionBackdrop";

// Trazo genérico simple (no intenta calcar la flecha del logo real) que
// se dibuja y luego hace crossfade hacia /fluex-logo-icon.png.
const SKETCH_VIEWBOX = "0 0 100 60";
const SKETCH_PATH = "M4 54 L38 24 L58 40 L96 6";

const FLUEX = "Fluex".split("");
const MEDIA = "Media".split("");
const LABEL = "Bienvenido".split("");
const LABEL_A = "a".split("");

export default function HookDoors() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const sketchPathRef = useRef<SVGPathElement>(null);
  const sketchGroupRef = useRef<SVGSVGElement>(null);
  const iconImageRef = useRef<HTMLDivElement>(null);
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
      // GSAP redondea las propiedades CSS numéricas al píxel entero: con un
      // rango de 0 a 1 (pathLength=1) el trazo queda binario (0 o 1px, sin
      // pasos intermedios) y se ve como un flash. Escalar a 0-1000 le da
      // resolución de sobra para que el dibujo se vea gradual.
      gsap.set(sketchPathRef.current, { strokeDashoffset: 1000 });
      gsap.set(iconImageRef.current, { opacity: 0 });
      // Las puertas giran como si tuvieran una bisagra en el borde exterior
      // (perspectiva 3D), en vez de solo deslizar en línea recta.
      gsap.set(leftPanelRef.current, {
        transformPerspective: 1400,
        transformOrigin: "left center",
      });
      gsap.set(rightPanelRef.current, {
        transformPerspective: 1400,
        transformOrigin: "right center",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          // Un scrub más alto = más "colchón": aunque el gesto de scroll sea
          // muy rápido, la animación tarda al menos este tiempo en alcanzar
          // el progreso real, dando más margen para leer "Fluex Media".
          scrub: 0.9,
          pin: sceneRef.current,
        },
      });

      tl.to(
          leftPanelRef.current,
          { xPercent: -100, rotateY: -28, ease: "none", duration: 1 },
          0,
        )
        .to(
          rightPanelRef.current,
          { xPercent: 100, rotateY: 28, ease: "none", duration: 1 },
          0,
        )
        .to(hintRef.current, { opacity: 0, duration: 0.08 }, 0)
        .fromTo(
          sketchPathRef.current,
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 0.32, ease: "none" },
          0.08,
        )
        .to(sketchGroupRef.current, { opacity: 0, duration: 0.14 }, 0.4)
        .fromTo(
          iconImageRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.14 },
          0.4,
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

      letters.forEach((el, index) => {
        if (!el) return;
        const isAccent = index === 4;
        const position = 0.72 + index * 0.03;
        if (isAccent) {
          tl.fromTo(
            el,
            { opacity: 0, scale: 1.9, y: 0 },
            { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "back.out(2.5)" },
            position,
          );
        } else {
          tl.fromTo(
            el,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
            position,
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
          <div className="relative h-10 w-16 sm:h-12 sm:w-20">
            <svg
              ref={sketchGroupRef}
              viewBox={SKETCH_VIEWBOX}
              className="absolute inset-0 h-full w-full text-accent-soft"
              fill="none"
              stroke="currentColor"
              strokeWidth={7}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path
                ref={sketchPathRef}
                pathLength={1000}
                strokeDasharray={1000}
                d={SKETCH_PATH}
              />
            </svg>
            <div
              ref={iconImageRef}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/fluex-logo-icon.png"
                alt=""
                width={477}
                height={307}
                className="h-full w-auto"
                aria-hidden
              />
            </div>
          </div>
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
          className="absolute left-0 top-0 z-10 flex h-full w-1/2 items-center justify-end overflow-hidden bg-cream px-3 sm:px-4"
        >
          <p className="text-right font-display text-2xl font-medium leading-tight text-ink sm:text-6xl md:text-7xl">
            Tu empresa está
          </p>
        </div>
        <div
          ref={rightPanelRef}
          className="absolute right-0 top-0 z-10 flex h-full w-1/2 items-center justify-start overflow-hidden bg-cream px-3 sm:px-4"
        >
          <p className="text-left font-display text-2xl font-medium leading-tight text-ink sm:text-6xl md:text-7xl">
            por crecer.
          </p>
        </div>

        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-brown-dark sm:bottom-10"
        >
          <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.25em] sm:text-xs sm:tracking-[0.3em]">
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
