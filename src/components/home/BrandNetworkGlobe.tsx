"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/** Cards are centered on orbital points so they never crowd one side of the sphere. */
type FloatingBrand = {
  name: string;
  src: string;
  x: string;
  y: string;
  delay: string;
};

/* Even ring of seven brands around the globe (inset enough to avoid clipping). */
const FLOATING: FloatingBrand[] = [
  { name: "Clutch", src: "/brands/clutch.svg", x: "50%", y: "14%", delay: "0s" },
  { name: "GoodFirms", src: "/brands/goodfirms.jpg", x: "78%", y: "28%", delay: "0.4s" },
  { name: "DesignRush", src: "/brands/designrush.svg", x: "84%", y: "58%", delay: "0.8s" },
  { name: "LinkedIn", src: "/brands/linkedin.svg", x: "66%", y: "84%", delay: "1.2s" },
  { name: "Freelancer", src: "/brands/freelancer.svg", x: "34%", y: "84%", delay: "0.2s" },
  { name: "Fiverr", src: "/brands/fiverr.jpg", x: "16%", y: "58%", delay: "0.6s" },
  { name: "Upwork", src: "/brands/upwork.svg", x: "22%", y: "28%", delay: "1s" },
];

type Point = { x: number; y: number; z: number };

function spherePoints(count: number): Point[] {
  const pts: Point[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
  }
  return pts;
}

function rotateY(p: Point, angle: number): Point {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: p.x * c - p.z * s, y: p.y, z: p.x * s + p.z * c };
}

function rotateX(p: Point, angle: number): Point {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points = spherePoints(64);
    const links: Array<[number, number]> = [];
    const maxDist = 0.52;
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        if (dx * dx + dy * dy + dz * dz < maxDist * maxDist) links.push([i, j]);
      }
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let running = true;
    let angle = 0.35;
    let last = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width || canvas.clientWidth;
      const h = rect.height || canvas.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) render(performance.now());
    };

    const render = (now: number) => {
      const dt = Math.min(now - last, 48) / 1000;
      last = now;
      if (!reduce) angle += dt * 0.22;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width || canvas.clientWidth;
      const h = rect.height || canvas.clientHeight;
      if (!w || !h) return;
      const cx = w / 2;
      const cy = h / 2;
      const size = Math.min(w, h);
      const scale = size * 0.38;
      const tilt = 0.38;
      const light = document.documentElement.classList.contains("light");

      ctx.clearRect(0, 0, w, h);

      const projected = points.map((p) => {
        const r = rotateX(rotateY(p, angle), tilt);
        return { ...r, px: cx + r.x * scale, py: cy + r.y * scale };
      });

      ctx.lineCap = "round";
      for (const [a, b] of links) {
        const pa = projected[a];
        const pb = projected[b];
        const depth = (pa.z + pb.z) * 0.5;
        const alpha = light ? 0.12 + (depth + 1) * 0.16 : 0.16 + (depth + 1) * 0.22;
        ctx.strokeStyle = light ? `rgba(20, 28, 48, ${alpha})` : `rgba(230, 232, 240, ${alpha})`;
        ctx.lineWidth = 1.15;
        ctx.beginPath();
        ctx.moveTo(pa.px, pa.py);
        ctx.lineTo(pb.px, pb.py);
        ctx.stroke();
      }

      for (const p of projected) {
        const depth = (p.z + 1) / 2;
        const r = 1.7 + depth * 1.6;
        const alpha = 0.28 + depth * 0.62;
        ctx.beginPath();
        ctx.fillStyle = light ? `rgba(18, 24, 40, ${alpha})` : `rgba(245, 245, 245, ${alpha})`;
        ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = (now: number) => {
      if (!running) return;
      render(now);
      if (!reduce) frame = requestAnimationFrame(draw);
    };

    resize();
    draw(performance.now());
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const themeWatcher = new MutationObserver(() => {
      if (reduce || !running) render(performance.now());
    });
    themeWatcher.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const start = () => {
      if (reduce || running) return;
      running = true;
      last = performance.now();
      frame = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    let onScreen = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && !document.hidden) start();
        else stop();
      },
      { rootMargin: "120px" },
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (onScreen) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      themeWatcher.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="relative z-10 block aspect-square h-full w-full object-contain" aria-hidden="true" />;
}

export function BrandNetworkGlobe() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem] px-1 sm:max-w-[30rem] sm:px-2 lg:max-w-[34rem] lg:px-4">
      <div className="relative mx-auto aspect-square w-full">
        <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,196,176,0.42),rgba(196,30,36,0.08)_46%,transparent_72%)]" />
        <div className="pointer-events-none absolute inset-0">
          <NetworkGlobe />
        </div>
        {FLOATING.map((brand) => (
          <div
            key={brand.name}
            className="brand-float-card"
            style={{
              left: brand.x,
              top: brand.y,
              animationDelay: brand.delay,
            }}
          >
            <span className="brand-float-plate">
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                title={brand.name}
                width={100}
                height={30}
                sizes="100px"
                className="h-4 w-auto max-w-[4.75rem] object-contain sm:h-[1.15rem] sm:max-w-[5.5rem]"
                loading="lazy"
                unoptimized={brand.src.endsWith(".svg")}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

