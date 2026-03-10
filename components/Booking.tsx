"use client";

import { InlineWidget } from "react-calendly";
import { CONFIG } from "@/data/config";
import ScrollReveal from "./ScrollReveal";

// 1. Créer compte gratuit sur calendly.com
// 2. Remplacer TON_USERNAME dans /data/config.ts

export default function Booking() {
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
          <div className="overflow-hidden rounded-xl">
            <InlineWidget
              url={CONFIG.calendlyUrl}
              styles={{ height: "700px" }}
              pageSettings={{
                backgroundColor: "0a0a0a",
                primaryColor: "8b00ff",
                textColor: "f0f0f0",
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
