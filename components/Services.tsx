"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "@/data/config";
import ScrollReveal from "./ScrollReveal";

function ServiceIcon({ icon }: { readonly icon: string }) {
  switch (icon) {
    case "cut":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neon-violet"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "razor":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neon-violet"
        >
          <path d="M7 20l10-16M17 20V4M7 20V4" />
        </svg>
      );
    case "star":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neon-violet"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    default:
      return null;
  }
}

function AnimatedPrice({ value }: { readonly value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1000;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            start = Math.round(progress * value);
            setCount(start);
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl font-black text-neon-orange">
      {count}€
    </span>
  );
}

export default function Services() {
  return (
    <section id="prestations" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2
            className="glitch mb-16 text-center text-4xl font-black uppercase tracking-wider text-text md:text-5xl"
            data-text="MES PRESTATIONS"
          >
            MES PRESTATIONS
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {CONFIG.services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-neon-violet/20 bg-[#111] p-8 transition-all duration-300 hover:border-neon-violet/60 hover:shadow-[0_0_30px_rgba(139,0,255,0.15)]"
              >
                {"popular" in service && service.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-neon-orange px-3 py-1 text-xs font-bold uppercase text-white">
                    Populaire
                  </span>
                )}

                <div className="mb-4">
                  <ServiceIcon icon={service.icon} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-text">
                  {service.name}
                </h3>
                <p className="mb-6 text-sm text-muted">{service.description}</p>

                <AnimatedPrice value={service.price} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
