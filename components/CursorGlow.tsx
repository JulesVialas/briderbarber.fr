"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    cursor.style.display = "block";

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    let rafId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      posRef.current = {
        x: lerp(posRef.current.x, targetRef.current.x, 0.12),
        y: lerp(posRef.current.y, targetRef.current.y, 0.12),
      };
      if (cursor) {
        cursor.style.transform = `translate(${posRef.current.x - 6}px, ${posRef.current.y - 6}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9998] hidden h-3 w-3 rounded-full"
      style={{
        background: "var(--neon-violet)",
        boxShadow: "0 0 12px var(--neon-violet), 0 0 24px var(--neon-violet)",
      }}
    />
  );
}
