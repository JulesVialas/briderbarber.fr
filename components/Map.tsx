"use client";

import { CONFIG } from "@/data/config";
import ScrollReveal from "./ScrollReveal";

export default function Map() {
  return (
    <section className="bg-bg px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-wider text-text md:text-5xl">
            OÙ ME TROUVER
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-hidden rounded-xl border border-neon-violet/20">
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
