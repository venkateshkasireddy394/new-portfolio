"use client";
import React, { useEffect, useRef } from "react";

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let stars: any[] = [];
    let animationId: number;

    class Star {
      x = Math.random() * W;
      y = Math.random() * H;
      r = Math.random() * 1.2 + 0.2;
      speed = Math.random() * 0.3 + 0.05;
      opacity = Math.random() * 0.6 + 0.1;
      twinkle = Math.random() * 0.02;
      phase = Math.random() * Math.PI * 2;
    }

    for (let i = 0; i < 220; i++) stars.push(new Star());

    const drawStars = () => {
      ctx.clearRect(0, 0, W, H);
      
      stars.forEach(s => {
        s.phase += s.twinkle;
        const op = s.opacity * (0.7 + 0.3 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 190, 255, ${op})`;
        ctx.fill();
        s.y -= s.speed;
        
        if (s.y < -2) {
          s.y = H + 2;
          s.x = Math.random() * W;
        }
      });

      // Nebula glow blobs
      const nebulas = [
        { x: W * 0.2, y: H * 0.3, r: 250, c: 'rgba(108,99,255,0.025)' },
        { x: W * 0.8, y: H * 0.6, r: 300, c: 'rgba(0,212,255,0.02)' },
        { x: W * 0.5, y: H * 0.1, r: 200, c: 'rgba(255,107,107,0.015)' },
      ];
      nebulas.forEach(n => {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        g.addColorStop(0, n.c);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      animationId = requestAnimationFrame(drawStars);
    };

    drawStars();

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full z-0 pointer-events-none" 
    />
  );
}
