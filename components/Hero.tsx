"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  radius: number;
}

function createParticles(width: number, height: number): readonly Particle[] {
  return Array.from({ length: 50 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    color: Math.random() > 0.5 ? "#8b00ff" : "#ff6a00",
    radius: Math.random() * 2 + 1,
  }));
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let particles = createParticles(width, height);
    let rafId: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = createParticles(width, height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const updatedParticles = particles.map((p) => {
        let newX = p.x + p.vx;
        let newY = p.y + p.vy;
        let newVx = p.vx;
        let newVy = p.vy;

        if (newX < 0 || newX > width) newVx = -newVx;
        if (newY < 0 || newY > height) newVy = -newVy;

        newX = Math.max(0, Math.min(width, newX));
        newY = Math.max(0, Math.min(height, newY));

        ctx.beginPath();
        ctx.arc(newX, newY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;

        return { ...p, x: newX, y: newY, vx: newVx, vy: newVy };
      });

      particles = updatedParticles;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-bg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="neon-glow-violet font-black leading-none"
          style={{ fontSize: "clamp(60px, 12vw, 140px)" }}
        >
          BRIDER
          <br />
          BARBER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg tracking-widest text-text/70 uppercase"
        >
          Barbier indépendant &bull; Toulouse
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pulse-badge rounded-full border border-neon-violet/40 bg-neon-violet/10 px-5 py-2 text-sm text-neon-violet"
        >
          ✦ Disponible — Réserve maintenant
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <NeonButton href="#reserver">PRENDRE RDV →</NeonButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-bounce absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a href="#prestations" aria-label="Défiler vers le bas">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-text/40"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
