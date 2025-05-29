"use client";

import React, { useEffect, useRef, useCallback } from "react";
import "./PixelDiv.css";
// Shared props type
interface AnimatedCoverProps {
  variant?: 'waves' | 'bubbles' | 'gradient' |"particles" | "starfield";
  zIndex?: number;
  opacity?: number;
}

// ------------------
// Particle Canvas
// ------------------
const ParticleCanvas: React.FC<{ zIndex: number; opacity: number }> = ({
  zIndex,
  opacity,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });

  const initParticles = (width: number, height: number) => {
    const arr = [];
    for (let i = 0; i < 150; i++) {
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        size: Math.random() * 2 + 1,
      });
    }
    particles.current = arr;
  };

  const animate = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          p.vx += dx * 0.001;
          p.vy += dy * 0.001;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      }

      requestAnimationFrame(() => animate(ctx, width, height));
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    animate(ctx, canvas.width, canvas.height);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
};

// ------------------
// Starfield Canvas
// ------------------
interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
  size: number;
}

const StarfieldCanvas: React.FC<{ zIndex: number; opacity: number }> = ({
  zIndex,
  opacity,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });

  const createStars = (w: number, h: number) => {
    const newStars: Star[] = [];
    for (let i = 0; i < 400; i++) {
      newStars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * w,
        pz: Math.random() * w,
        size: Math.random() * 1.5 + 0.5,
      });
    }
    stars.current = newStars;
  };

  const animate = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, w, h);

      for (const star of stars.current) {
        star.z -= 2;
        if (star.z < 1) {
          star.x = Math.random() * w;
          star.y = Math.random() * h;
          star.z = w;
          star.pz = w;
        }

        const sx = (star.x - w / 2) * (w / star.z) + w / 2;
        const sy = (star.y - h / 2) * (w / star.z) + h / 2;
        const psx = (star.x - w / 2) * (w / star.pz) + w / 2;
        const psy = (star.y - h / 2) * (w / star.pz) + h / 2;

        const dx = sx - mouse.current.x;
        const dy = sy - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          star.z += 5;
        }

        // Star glow with radial gradient
        const gradient = ctx.createRadialGradient(
          sx,
          sy,
          0,
          sx,
          sy,
          star.size * 3
        );
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(sx, sy, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Trail effect
        ctx.beginPath();
        ctx.moveTo(psx, psy);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - star.z / w})`;
        ctx.lineWidth = star.size;
        ctx.stroke();

        star.pz = star.z;
      }

      requestAnimationFrame(() => animate(ctx, w, h));
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    animate(ctx, canvas.width, canvas.height);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
};

const AnimatedCover: React.FC<AnimatedCoverProps> = ({
  variant = "waves",
  zIndex = -1,
  opacity = 1,
}) => {
//   if (variant === "particles") {
//     return <ParticleCanvas zIndex={zIndex} opacity={opacity} />;
//   }
  if (variant === "starfield") {
    return <StarfieldCanvas zIndex={zIndex} opacity={opacity} />;
  }

  return (
    <div className={`cover-container ${variant}`} style={{ zIndex, opacity }} />
  );
};

export default AnimatedCover;
