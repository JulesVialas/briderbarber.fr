"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG } from "@/data/config";
import ScrollReveal from "./ScrollReveal";
import NeonButton from "./NeonButton";

export default function InstagramSection() {
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
    <section id="galerie" className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-wider text-text md:text-5xl">
            MES DERNIERS TRAVAUX
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div ref={containerRef} className="overflow-hidden rounded-xl">
            {isVisible ? (
              <iframe
                src={CONFIG.instagramEmbedUrl}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Feed Instagram Brider Barber"
                loading="lazy"
                style={{ border: "none", borderRadius: "12px" }}
              />
            ) : (
              <div className="shimmer-placeholder flex h-[600px] items-center justify-center rounded-xl">
                <p className="text-muted">Chargement...</p>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 text-center">
            <NeonButton
              href={CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="violet"
            >
              Suivre @{CONFIG.instagram} →
            </NeonButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
