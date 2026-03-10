"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeonButton from "./NeonButton";

const NAV_LINKS = [
  { label: "Prestations", href: "#prestations" },
  { label: "Galerie", href: "#galerie" },
  { label: "Réserver", href: "#reserver" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold neon-glow-violet">
          BRIDER BARBER
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-text/80 transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <NeonButton href="#reserver">Réserver</NeonButton>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
          type="button"
        >
          <span
            className={`block h-0.5 w-6 bg-text transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-text transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-3/4 flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-2xl text-text"
              aria-label="Fermer"
              type="button"
            >
              ✕
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold uppercase tracking-wider text-text"
              >
                {link.label}
              </a>
            ))}
            <NeonButton href="#reserver" onClick={() => setIsOpen(false)}>
              Réserver
            </NeonButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
