"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const TOTAL_CIRCLES = 15;

export default function CursorTrail() {
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const positions = Array.from({ length: TOTAL_CIRCLES }, () => ({
      x: mouse.x,
      y: mouse.y,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(updateTrail);

    function updateTrail() {
      positions[0].x += (mouse.x - positions[0].x) * 0.35;
      positions[0].y += (mouse.y - positions[0].y) * 0.35;

      for (let i = 1; i < TOTAL_CIRCLES; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.35;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.35;
      }

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        gsap.set(circle, {
          x: positions[index].x,
          y: positions[index].y,
          xPercent: -50,
          yPercent: -50,
        });
      });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(updateTrail);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TOTAL_CIRCLES }).map((_, index) => {
        const size = 18 - index;

        return (
          <div
            key={index}
            ref={(el) => {
              if (el) circlesRef.current[index] = el;
            }}
            style={{
              width: `${Math.max(size, 3)}px`,
              height: `${Math.max(size, 3)}px`,
              opacity: 1 - index / TOTAL_CIRCLES,
            }}
            className="hidden lg:block fixed top-0 left-0 rounded-full pointer-events-none z-[999999] bg-blue-500 shadow-[0_0_10px_#3b82f6,0_0_25px_#3b82f6]"
          />
        );
      })}
    </>
  );
}