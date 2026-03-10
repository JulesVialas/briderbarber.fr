"use client";

import { useEffect, useRef, useState } from "react";
import { CONFIG } from "@/data/config";
import ScrollReveal from "./ScrollReveal";
import NeonButton from "./NeonButton";

const IS_PLACEHOLDER = CONFIG.calendlyUrl.includes("TON_USERNAME");

function buildCalendlyEmbedUrl(): string {
  const params = new URLSearchParams({
    background_color: "0a0a0a",
    text_color: "f0f0f0",
    primary_color: "8b00ff",
  });
  return `${CONFIG.calendlyUrl}?${params.toString()}`;
}

export default function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (IS_PLACEHOLDER) return;

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
    <section
      id="reserver"
      className="px-6 py-24"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(139,0,255,0.15) 0%, transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-4xl font-black uppercase tracking-wider text-text md:text-5xl">
            RÉSERVE TA PLACE
          </h2>
          <p className="mb-12 text-center text-lg text-muted">
            Choisis ton créneau directement dans mon agenda
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div ref={containerRef} className="overflow-hidden rounded-xl">
            {IS_PLACEHOLDER ? (
              <div className="flex flex-col items-center gap-6 rounded-xl border border-neon-violet/20 bg-[#111] px-8 py-16">
                <p className="text-center text-lg text-muted">
                  Prends rendez-vous directement sur Calendly
                </p>
                <NeonButton
                  href={CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RÉSERVER SUR CALENDLY →
                </NeonButton>
              </div>
            ) : isVisible ? (
              <iframe
                src={buildCalendlyEmbedUrl()}
                width="100%"
                height="700"
                frameBorder="0"
                title="Réservation Brider Barber"
                loading="lazy"
                style={{ border: "none", borderRadius: "12px" }}
              />
            ) : (
              <div className="shimmer-placeholder flex h-[700px] items-center justify-center rounded-xl">
                <p className="text-muted">Chargement...</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
