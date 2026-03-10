"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG } from "@/data/config";
import ScrollReveal from "./ScrollReveal";

export default function Map() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-wider text-text md:text-5xl">
            OÙ ME TROUVER
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div
            ref={containerRef}
            className="overflow-hidden rounded-xl border border-neon-violet/20"
          >
            {isVisible ? (
              <iframe
                src={CONFIG.googleMapsEmbed}
                width="100%"
                height="400"
                style={{
                  border: "none",
                  borderRadius: "12px",
                  filter: "grayscale(30%)",
                }}
                loading="lazy"
                title="Localisation Brider Barber"
                allowFullScreen
              />
            ) : (
              <div className="shimmer-placeholder flex h-[400px] items-center justify-center rounded-xl">
                <p className="text-muted">Chargement de la carte...</p>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 flex flex-col items-center gap-2 text-center text-muted">
            <p className="flex items-center gap-2">
              <span aria-hidden="true">📍</span> {CONFIG.address}
            </p>
            <a
              href={CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-neon-violet"
            >
              <span aria-hidden="true">📸</span> @{CONFIG.instagram}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
