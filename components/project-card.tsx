"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

interface ProjectProps {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  metrics: { val: string; label: string }[];
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  accentColor: string;
}

export function ProjectCard({ num, title, tagline, desc, metrics, tech, liveUrl, codeUrl, accentColor }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const xPct = useMotionValue(0.5);
  const yPct = useMotionValue(0.5);
  
  const springX = useSpring(mx, { stiffness: 300, damping: 30 });
  const springY = useSpring(my, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(springY, [-1, 1], ["4deg", "-4deg"]);
  const rotateY = useTransform(springX, [-1, 1], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // For 3D transform (-1 to 1)
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;
    
    mx.set(normX);
    my.set(normY);
    
    // For radial gradient (0 to 1)
    xPct.set(x / rect.width);
    yPct.set(y / rect.height);
  };

  const handleMouseLeave = () => {
    mx.set(0); my.set(0);
  };

  return (
    <motion.div
       ref={ref}
       onMouseMove={handleMouseMove}
       onMouseLeave={handleMouseLeave}
       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
       className="project-card group relative bg-card border border-border-line rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start overflow-hidden transition-all duration-500 hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
    >
      {/* Interactive Radial Glow on Hover */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background: useTransform(() => `radial-gradient(circle at ${xPct.get() * 100}% ${yPct.get() * 100}%, rgba(108,99,255,0.08) 0%, transparent 60%)`)
        }}
      />
      
      {/* Corner Static Glow Accent */}
      <div 
        className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[60px] opacity-[0.06] pointer-events-none" 
        style={{ backgroundColor: accentColor }} 
      />

      <div className="flex-1" style={{ transform: "translateZ(30px)" }}>
        <div className="font-mono text-[0.7rem] text-muted tracking-[0.15em] mb-3">{num}</div>
        <h3 className="text-2xl md:text-[1.6rem] font-extrabold tracking-[-0.02em] mb-2">{title}</h3>
        <div className="font-mono text-[0.85rem] text-muted mb-5">{tagline}</div>
        
        <p className="text-[#6070a0] leading-[1.7] text-[0.9rem] mb-6 max-w-[500px]">
          {desc}
        </p>
        
        <div className="flex gap-8 mb-6">
          {metrics.map((m, i) => (
            <div key={i} className="font-mono text-[0.75rem]">
              <span className="text-accent-two text-base font-medium block mb-0.5">{m.val}</span>
              <span className="text-muted text-[0.7rem] uppercase">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="px-2.5 py-1 rounded-full text-[0.7rem] font-mono bg-[#00d4ff]/[0.08] border border-[#00d4ff]/20 text-[#60b0d0]">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-row md:flex-col gap-3 self-stretch md:self-auto justify-end md:items-end w-full md:w-auto pt-4 md:pt-0" style={{ transform: "translateZ(40px)" }}>
         {liveUrl && (
           <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[0.8rem] font-mono border border-accent/40 bg-accent/15 text-accent transition-all duration-300 hover:bg-accent/30 hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:scale-105">
             ↗ Live App
           </a>
         )}
         {codeUrl && (
           <a href={codeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[0.8rem] font-mono border border-border-line bg-transparent text-muted transition-all duration-300 hover:text-text-main hover:border-muted hover:scale-105">
             ⌥ Code
           </a>
         )}
      </div>
    </motion.div>
  );
}
