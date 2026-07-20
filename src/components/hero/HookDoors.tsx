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

// Misma forma de zigzag ascendente que el ícono, pero estirada a todo el
// ancho de la escena: una versión panorámica del mismo trazo, para que la
// composición no dependa solo del bloque central de texto. Los tres nodos
// marcan los quiebres del recorrido.
const PATH_VIEWBOX = "0 0 1000 200";
const WIDE_PATH = "M20 170 L360 120 L620 150 L980 30";
const PATH_NODES = [
  { cx: 360, cy: 120, at: 0.32 },
  { cx: 620, cy: 150, at: 0.58 },
  { cx: 980, cy: 30, at: 1 },
];

const FLUEX = "FLUEX".split("");
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
  const widePathRef = useRef<SVGPathElement>(null);
  const nodeRefs = useRef<Array<SVGCircleElement | null>>(
    Array(PATH_NODES.length).fill(null),
  );
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const labelLetterRefs = useRef<Array<HTMLSpanElement | null>>(
    Array(LABEL.length + LABEL_A.length).fill(null),
  );
  const letterRefs = useRef<Array<HTMLSpanElement | null>>(
    Array(FLUEX.length).fill(null),
  );

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const letters = letterRefs.current;
      const labelLetters = labelLetterRefs.current;
      const nodes = nodeRefs.current;

      gsap.set(letters, { opacity: 0, y: 16 });
      gsap.set(labelLetters, { opacity: 0, y: 10 });
      // GSAP redondea las propiedades CSS numéricas al píxel entero: con un
      // rango de 0 a 1 (pathLength=1) el trazo queda binario (0 o 1px, sin
      // pasos intermedios) y se ve como un flash. Escalar a 0-1000 le da
      // resolución de sobra para que el dibujo se vea gradual.
      gsap.set(sketchPathRef.current, { strokeDashoffset: 1000 });
      gsap.set(widePathRef.current, { strokeDashoffset: 1000 });
      gsap.set(nodes, { scale: 0, opacity: 0, transformOrigin: "center" });
      gsap.set(iconImageRef.current, { opacity: 0 });
      gsap.set(taglineRef.current, { opacity: 0, y: 8 });
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
          // el progreso real, dando más margen para leer "FLUEX".
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
        // El trazo panorámico se dibuja de fondo durante casi todo el
        // recorrido: la escena nunca se siente vacía mientras se scrollea.
        .fromTo(
          widePathRef.current,
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 0.62, ease: "none" },
          0.02,
        )
        .fromTo(
          sketchPathRef.current,
          { strokeDashoffset: 1000 },
          { strokeDashoffset: 0, duration: 0.32, ease: "none" },
          0.08,
        )
        .to(sketchGroupRef.current, { opacity: 0, duration: 0.22 }, 0.4)
        .fromTo(
          iconImageRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.22 },
          0.4,
        );

      PATH_NODES.forEach((node, index) => {
        const el = nodes[index];
        if (!el) return;
        tl.to(
          el,
          { scale: 1, opacity: 1, duration: 0.1, ease: "back.out(3)" },
          0.02 + node.at * 0.6,
        );
      });

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
        const position = 0.68 + index * 0.03;
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

      tl.to(
        taglineRef.current,
        { opacity: 1, y: 0, duration: 0.16, ease: "power2.out" },
        0.92,
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[220vh]">
      <section
        ref={sceneRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-ink"
      >
        <SectionBackdrop variant="cta" />
        <svg
          viewBox={PATH_VIEWBOX}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 top-1/2 h-40 w-full -translate-y-1/2 text-accent-soft opacity-[0.16] sm:h-56"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path
            ref={widePathRef}
            pathLength={1000}
            strokeDasharray={1000}
            d={WIDE_PATH}
            vectorEffect="non-scaling-stroke"
          />
          {PATH_NODES.map((node, index) => (
            <circle
              key={index}
              ref={(el) => {
                nodeRefs.current[index] = el;
              }}
              cx={node.cx}
              cy={node.cy}
              r={10}
              fill="currentColor"
              stroke="none"
            />
          ))}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center text-cream">
          <div className="relative h-10 w-16 sm:h-12 sm:w-20">
            <svg
              ref={sketchGroupRef}
              viewBox={SKETCH_VIEWBOX}
              className="absolute inset-0 h-full w-full text-accent"
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
          <h1 className="flex items-baseline font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
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
          </h1>
          <p
            ref={taglineRef}
            className="text-xs uppercase tracking-[0.3em] text-cream/60"
          >
            Socios estratégicos de crecimiento
          </p>
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
          <span className="max-w-[190px] text-center text-[10px] uppercase leading-relaxed tracking-[0.15em] sm:max-w-none sm:whitespace-nowrap sm:text-xs sm:tracking-[0.3em]">
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
