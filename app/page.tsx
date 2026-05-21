"use client";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Linkedin, Mail, Github, Twitter, Code2 } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { ProjectCard } from "@/components/project-card";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const handleHeroMove = (e: React.MouseEvent) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const rx = ((e.clientY - cy) / cy) * 8;
    const ry = ((e.clientX - cx) / cx) * -8;
    setHeroTilt({ x: rx, y: ry });
  };

  if (!mounted) return <div className="min-h-screen bg-background-primary" />;

  // Reveal Animation Props
  const revealProps: any = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="relative">
      {/* === NAV === */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-16 py-5 bg-[#050810]/70 backdrop-blur-xl border-b border-accent/15">
        <div className="text-[1.1rem] font-extrabold tracking-[-0.02em] text-accent-two">VK.</div>
        <div className="hidden md:flex gap-10">
          {['About', 'Skills', 'Projects', 'Experience', 'Connect'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-muted text-[0.85rem] tracking-[0.1em] uppercase relative group hover:text-text-main transition-colors">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-two transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      {/* === HERO === */}
      <section id="hero" 
         className="min-h-screen flex flex-col justify-center items-center text-center px-8 md:px-8 pt-24 pb-16 relative z-10"
         style={{ perspective: "1000px" }}
         onMouseMove={handleHeroMove}
         onMouseLeave={() => setHeroTilt({ x: 0, y: 0 })}
      >
         {/* Float Cards */}
         <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            <div className="absolute bg-accent/[0.06] border border-accent/15 rounded-xl backdrop-blur-[4px] px-5 py-4 font-mono text-[0.7rem] text-accent/60 animate-float1 fc1" style={{ top: "20%", left: "5%" }}>const ai = new GeminiAPI()<br/>→ 500 users served 🚀</div>
            <div className="absolute bg-accent/[0.06] border border-accent/15 rounded-xl backdrop-blur-[4px] px-5 py-4 font-mono text-[0.7rem] text-accent/60 animate-float2 fc2" style={{ top: "35%", right: "6%" }}>⚡ LLMs · RAG · Agents<br/>learning every day</div>
            <div className="absolute bg-accent/[0.06] border border-accent/15 rounded-xl backdrop-blur-[4px] px-5 py-4 font-mono text-[0.7rem] text-accent/60 animate-float3 fc3" style={{ bottom: "25%", left: "8%" }}>☁️ GCP Certified<br/>Cloud Engineer</div>
            <div className="absolute bg-accent/[0.06] border border-accent/15 rounded-xl backdrop-blur-[4px] px-5 py-4 font-mono text-[0.7rem] text-accent/60 animate-float1-reverse fc4" style={{ top: "15%", right: "20%" }}>React + Node + Firebase<br/>shipped & live ✓</div>
         </div>

         <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent/40 rounded-[100px] text-[0.75rem] tracking-[0.1em] text-accent mb-8 bg-accent/[0.08] font-mono relative z-10 mx-auto">
           <div className="w-[6px] h-[6px] bg-[#00ff88] rounded-full animate-pulse shadow-[0_0_0_0_rgba(0,255,136,0.4)]" />
           Available for Gen AI Roles
         </motion.div>

         <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            style={{ transform: `rotateX(${heroTilt.x}deg) rotateY(${heroTilt.y}deg)`, transformStyle: "preserve-3d" }}
            className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-gradient relative z-10"
         >
           Venkateswarlu<br/>Kasireddy
         </motion.h1>

         <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-[clamp(1rem,2.5vw,1.4rem)] text-muted mt-[1.2rem] tracking-[0.02em] font-normal relative z-10">
           Full-Stack Engineer <span className="text-accent-two">| Aspiring Gen AI Developer</span>
         </motion.p>
         
         <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }} className="max-w-[520px] mx-auto mt-6 text-[#4a5a8a] leading-[1.7] text-[0.85rem] font-mono relative z-10">
           2+ years shipping production apps @ TCS · Google Account<br/>
           Now going deep into LLMs · Agentic AI · LangChain · RAG
         </motion.p>

         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} className="flex flex-wrap items-center justify-center gap-4 mt-10 relative z-10">
            <a href="#projects" className="px-8 py-[0.85rem] bg-accent text-white rounded-lg text-[0.9rem] font-bold transition-all duration-300 hover:bg-[#7c73ff] hover:-translate-y-0.5 shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:shadow-[0_0_50px_rgba(108,99,255,0.6)]">View My Work</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=venkateswarlu.kasireddy18@gmail.com" target="_blank" rel="noreferrer" className="px-8 py-[0.85rem] bg-transparent border border-border-line text-text-main rounded-lg text-[0.9rem] font-bold transition-all duration-300 hover:border-accent-two hover:text-accent-two hover:-translate-y-0.5">Get In Touch</a>
         </motion.div>

         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-[0.75rem] tracking-[0.1em] font-mono">
           scroll
           <div className="w-[1px] h-[40px] bg-gradient-to-b from-accent to-transparent animate-scroll origin-top"></div>
         </motion.div>
      </section>

      {/* === ABOUT === */}
      <section id="about" className="border-t border-border-line relative z-10">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-24">
          <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent-two uppercase block mb-3">01 · about</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1] mb-12">
            Engineer by <span className="text-gradient-accent">craft</span>,<br/>AI builder by <span className="text-gradient-accent">choice</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div {...revealProps} className="text-[#7080b0] leading-[1.8] text-[0.95rem] space-y-4">
              <p>I'm a <strong className="text-text-main font-bold">Full-Stack Software Engineer</strong> at TCS working on Google's client account in Bangalore. I build fast, scalable apps with React, Node, and Firebase — and I've already shipped AI-powered products using the Gemini API and Vertex AI.</p>
              <p>Now I'm going deeper. I'm actively learning <strong className="text-text-main font-bold">LLMs, Prompt Engineering, LangChain, RAG pipelines, and Agentic AI</strong> — building toward my goal of becoming a Gen AI Developer.</p>
              <p>I believe in <strong className="text-text-main font-bold">learning in public, shipping real things, and growing every single day.</strong></p>
            </motion.div>
            
            <motion.div {...revealProps} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} className="grid grid-cols-2 gap-4">
              <div className="stat-card bg-card border border-border-line rounded-xl p-6 text-center transition-all duration-300 transform-gpu hover:border-accent hover:-translate-y-1 hover:rotate-x-[5deg]" style={{ perspective: "1000px" }}>
                <div className="text-[2.2rem] font-extrabold text-gradient-accent leading-none"><AnimatedCounter value={2} suffix="+" /></div>
                <div className="text-[0.75rem] text-muted tracking-[0.05em] mt-1">Years Experience</div>
              </div>
              <div className="stat-card bg-card border border-border-line rounded-xl p-6 text-center transition-all duration-300 transform-gpu hover:border-accent hover:-translate-y-1 hover:rotate-x-[5deg]" style={{ perspective: "1000px" }}>
                <div className="text-[2.2rem] font-extrabold text-gradient-accent leading-none"><AnimatedCounter value={750} suffix="+" /></div>
                <div className="text-[0.75rem] text-muted tracking-[0.05em] mt-1">DSA Problems Solved</div>
              </div>
              <div className="stat-card bg-card border border-border-line rounded-xl p-6 text-center transition-all duration-300 transform-gpu hover:border-accent hover:-translate-y-1 hover:rotate-x-[5deg]" style={{ perspective: "1000px" }}>
                <div className="text-[2.2rem] font-extrabold text-gradient-accent leading-none"><AnimatedCounter value={500} suffix="+" /></div>
                <div className="text-[0.75rem] text-muted tracking-[0.05em] mt-1">Active Users Served</div>
              </div>
              <div className="stat-card bg-card border border-border-line rounded-xl p-6 text-center transition-all duration-300 transform-gpu hover:border-accent hover:-translate-y-1 hover:rotate-x-[5deg]" style={{ perspective: "1000px" }}>
                <div className="text-[2.2rem] font-extrabold text-gradient-accent leading-none"><AnimatedCounter value={3} /></div>
                <div className="text-[0.75rem] text-muted tracking-[0.05em] mt-1">Cloud Certifications</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SKILLS === */}
      <section id="skills" className="bg-gradient-to-b from-background-primary to-background-secondary border-t border-border-line relative z-10">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-24">
          <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent-two uppercase block mb-3">02 · skills</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1] mb-12">My <span className="text-gradient-accent">tech</span> arsenal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚛️', name: 'Frontend', tags: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind", "Axios"] },
              { icon: '🔧', name: 'Backend & DB', tags: ["Node.js", "Firebase", "Firestore", "MySQL", "REST APIs", "Python"] },
              { icon: '🤖', name: 'AI & Cloud', tags: ["Gemini API", "Vertex AI", "LLM Integration", "GCP", "Cloud Logging", "IAM"] },
              { icon: '🛠️', name: 'Tools', tags: ["Git", "Vercel", "VS Code", "Jupyter", "Pandas", "NumPy"] }
            ].map((skill, idx) => (
              <motion.div key={idx} {...revealProps} transition={{ delay: idx * 0.1, duration: 0.8 }} className="skill-category group bg-card border border-border-line rounded-2xl p-7 relative overflow-hidden transition-all duration-400 hover:border-accent/40 hover:-translate-y-1.5 hover:rotate-x-[3deg] hover:shadow-[0_20px_60px_rgba(108,99,255,0.15)]" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-two scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                <div className="text-[1.8rem] mb-4">{skill.icon}</div>
                <div className="font-mono text-[0.8rem] tracking-[0.12em] text-accent-two uppercase mb-4">{skill.name}</div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map(tag => (
                     <span key={tag} className="px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-md text-[0.75rem] text-[#9090c0] font-mono transition-colors duration-200 group-hover:bg-accent/25 group-hover:text-text-main group-hover:border-accent">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...revealProps} className="mt-16">
            <div className="font-mono text-[1rem] text-muted mb-6 tracking-[0.05em]">
              <span className="text-[#00ff88]">// currently learning</span> — the Gen AI path 🚀
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Large Language Models (LLMs)', 'Prompt Engineering', 'LangChain & LlamaIndex', 'RAG Pipelines', 'Agentic AI & AI Agents', 'Vector Databases'].map(item => (
                <div key={item} className="bg-[#00ff88]/[0.04] border border-[#00ff88]/15 rounded-[10px] p-4 flex items-center gap-3">
                  <div className="w-[8px] h-[8px] bg-[#00ff88] rounded-full shrink-0 animate-pulse shadow-[0_0_0_0_rgba(0,255,136,0.4)]" />
                  <span className="text-[0.8rem] text-[#80a0a0] font-mono leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* === PROJECTS === */}
      <section id="projects" className="border-t border-border-line relative z-10">
         <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-24">
           <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent-two uppercase block mb-3">03 · projects</span>
           <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1] mb-12">Things I've <span className="text-gradient-accent">shipped</span></h2>
           
           <div className="flex flex-col gap-8">
             <motion.div {...revealProps}>
               <ProjectCard 
                 num="01 / AI Product" title="Scan2Fit" tagline="// AI Fitness & Nutrition Platform"
                 desc="Full-stack AI app with Gemini Vision for real-time food image recognition and LLM-powered personalised diet & workout plans. Freemium model with Firebase-backed usage tracking."
                 metrics={[{val:"500+",label:"Active users"},{val:"60%",label:"API errors reduced"},{val:"<1s",label:"Global response"}]}
                 tech={["React.js","Node.js","Gemini API","Firebase","Vertex AI","Vercel"]}
                 liveUrl="https://scan2fit.vercel.app" codeUrl="https://github.com/venkatesh520556/scan2fit"
                 accentColor="var(--color-accent)"
               />
             </motion.div>
             <motion.div {...revealProps} transition={{ delay: 0.1, duration: 0.8 }}>
               <ProjectCard 
                 num="02 / AI Tool" title="AI Resume Analyzer" tagline="// ATS Scoring & Keyword Extractor"
                 desc="Serverless LLM-powered app for ATS score calculation, keyword extraction, and AI-driven resume improvement suggestions. Reduced manual review effort by 60%."
                 metrics={[{val:"60%",label:"Review effort saved"},{val:"50%",label:"Faster processing"},{val:"99%",label:"Uptime"}]}
                 tech={["React.js","Python","LLMs","Serverless","Vercel"]}
                 codeUrl="https://github.com/venkatesh520556/ai-resume-analyzer"
                 accentColor="var(--color-accent-two)"
               />
             </motion.div>
             <motion.div {...revealProps} transition={{ delay: 0.2, duration: 0.8 }}>
               <ProjectCard 
                 num="03 / Full-Stack" title="FlixVerse" tagline="// Movie Discovery Platform"
                 desc="Full-stack movie discovery platform integrating TMDB REST API with infinite scroll, lazy loading, and Axios client-side caching. Handles 1,000+ daily API requests efficiently."
                 metrics={[{val:"1K+",label:"Daily API calls"},{val:"35%",label:"Network calls reduced"},{val:"CI/CD",label:"Auto deployed"}]}
                 tech={["React.js","Node.js","Axios","TMDB API","Vercel"]}
                 codeUrl="https://github.com/venkatesh520556/flixverse"
                 accentColor="var(--color-accent-three)"
               />
             </motion.div>
           </div>
         </div>
      </section>

      {/* === EXPERIENCE === */}
      <section id="experience" className="bg-background-secondary border-t border-border-line relative z-10">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-24">
          <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent-two uppercase block mb-3">04 · experience</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1] mb-12">Where I've <span className="text-gradient-accent">worked</span></h2>
          
          <motion.div {...revealProps} className="bg-card border border-border-line rounded-[20px] p-8 md:p-10 relative overflow-hidden max-w-4xl">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent to-accent-two rounded-r-[2px]" />
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
              <div>
                <div className="text-[1.3rem] font-extrabold tracking-[-0.02em]">Tata Consultancy Services</div>
                <div className="text-accent-two font-mono text-[0.85rem] mt-1">Software Engineer · Google Client Account</div>
              </div>
              <div className="font-mono text-[0.75rem] text-muted md:text-right">
                May 2024 — Present<br/>
                <span className="text-accent inline-block mt-1">Ahmedabad, India</span>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "Built and maintained scalable full-stack web apps with React.js, Node.js, and Firebase — improved team delivery efficiency by **30%** across 5 teams with reusable component libraries.",
                "Integrated REST APIs across multi-tier services using Axios; reduced server response times by **25%** and eliminated redundant API calls on business-critical features.",
                "Monitored app performance using **GCP Cloud Logging**; resolved production incidents via root cause analysis — cut resolution time by **20%** with zero rollback incidents.",
                "Owned full delivery cycle in Agile/Scrum — from design and API integration through automated testing, code review, deployment, and documentation."
              ].map((point, i) => (
                <li key={i} className="flex gap-3 text-[0.88rem] text-[#6070a0] leading-[1.6]">
                  <span className="text-accent shrink-0 mt-[2px] leading-none">▸</span>
                  <span>{point.split('**').map((part, index) => index % 2 === 1 ? <strong key={index} className="text-accent-two font-bold">{part}</strong> : part)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* === CERTIFICATIONS === */}
      <section id="certifications" className="border-t border-border-line relative z-10">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-24">
          <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent-two uppercase block mb-3">05 · certifications</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1] mb-12">Badges I've <span className="text-gradient-accent">earned</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '☁️', name: 'GCP Associate Cloud Engineer', issuer: 'Google Cloud', bg: 'rgba(66,133,244,0.15)', border: 'rgba(66,133,244,0.3)' },
              { icon: '🤖', name: 'Azure AI Fundamentals (AZ-900)', issuer: 'Microsoft', bg: 'rgba(0,164,239,0.15)', border: 'rgba(0,164,239,0.3)' },
              { icon: '⚡', name: '750+ Problems Solved', issuer: 'LeetCode · CodeStudio · GFG', bg: 'rgba(255,161,22,0.15)', border: 'rgba(255,161,22,0.3)' }
            ].map((cert, i) => (
              <motion.div key={i} {...revealProps} transition={{ delay: i * 0.1, duration: 0.8 }} className="bg-card border border-border-line rounded-[14px] p-6 flex gap-4 items-start transition-all duration-300 transform-gpu hover:border-accent/40 hover:-translate-y-1 hover:rotate-x-[4deg] hover:shadow-[0_15px_40px_rgba(108,99,255,0.1)]" style={{ transformStyle: "preserve-3d" }}>
                <div className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center text-[1.3rem] shrink-0" style={{ backgroundColor: cert.bg, borderColor: cert.border, borderWidth: 1 }}>{cert.icon}</div>
                <div>
                  <div className="text-[0.88rem] font-bold leading-[1.3] mb-1">{cert.name}</div>
                  <div className="text-[0.72rem] text-muted font-mono">{cert.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === GITHUB CTA === */}
      <section id="github-cta" className="border-t border-border-line bg-gradient-to-b from-background-secondary to-background-primary relative z-10">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-24">
          <motion.div {...revealProps} className="github-box bg-card border border-accent/30 rounded-[24px] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(108,99,255,0.08)_0%,transparent_70%)]" />
            <h2 className="text-[2.5rem] font-extrabold tracking-[-0.03em] mb-3 relative z-10">Want to see more?</h2>
            <div className="text-muted font-mono text-[0.85rem] mb-8 relative z-10">// All my experiments, AI projects & code lives here</div>
            <a href="https://github.com/venkatesh520556" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-text-main text-background-primary rounded-xl font-bold text-[1rem] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(232,234,246,0.2)] relative z-10">
              <Github size={22} /> Visit GitHub Profile
            </a>
          </motion.div>
        </div>
      </section>

      {/* === CONNECT === */}
      <section id="connect" className="border-t border-border-line relative z-10 text-center pb-24 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 pt-24">
          <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent-two uppercase block mb-3">06 · connect</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1] mb-4">Let's <span className="text-gradient-accent">build</span> together</h2>
          <p className="text-muted font-mono text-[0.85rem] mb-10">Open to Gen AI / Full-Stack roles · Collaborations · Conversations</p>
          
          <motion.div {...revealProps} className="flex flex-wrap justify-center gap-4">
             <a href="https://www.linkedin.com/in/venkateswarlu-kasireddy-51a5b0197/" target="_blank" rel="noreferrer" className="connect-link flex items-center gap-2.5 px-6 py-3 bg-card border border-border-line rounded-[10px] text-muted font-mono text-[0.8rem] transition-all duration-300 hover:text-text-main hover:border-accent-two hover:bg-[#00d4ff]/[0.06] hover:-translate-y-1">
               <Linkedin size={16} /> LinkedIn
             </a>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=venkateswarlu.kasireddy18@gmail.com" target="_blank" rel="noreferrer" className="connect-link flex items-center gap-2.5 px-6 py-3 bg-card border border-border-line rounded-[10px] text-muted font-mono text-[0.8rem] transition-all duration-300 hover:text-text-main hover:border-accent-two hover:bg-[#00d4ff]/[0.06] hover:-translate-y-1">
               <Mail size={16} /> Email
             </a>
             <a href="https://github.com/venkatesh520556" target="_blank" rel="noreferrer" className="connect-link flex items-center gap-2.5 px-6 py-3 bg-card border border-border-line rounded-[10px] text-muted font-mono text-[0.8rem] transition-all duration-300 hover:text-text-main hover:border-accent-two hover:bg-[#00d4ff]/[0.06] hover:-translate-y-1">
               <Github size={16} /> GitHub
             </a>
             <a href="https://leetcode.com/u/venkatesh556/" target="_blank" rel="noreferrer" className="connect-link flex items-center gap-2.5 px-6 py-3 bg-card border border-border-line rounded-[10px] text-muted font-mono text-[0.8rem] transition-all duration-300 hover:text-text-main hover:border-accent-two hover:bg-[#00d4ff]/[0.06] hover:-translate-y-1">
               <Code2 size={16} /> LeetCode
             </a>
             <a href="https://x.com/Kasired85061173" target="_blank" rel="noreferrer" className="connect-link flex items-center gap-2.5 px-6 py-3 bg-card border border-border-line rounded-[10px] text-muted font-mono text-[0.8rem] transition-all duration-300 hover:text-text-main hover:border-accent-two hover:bg-[#00d4ff]/[0.06] hover:-translate-y-1">
               <Twitter size={16} /> Twitter
             </a>
          </motion.div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t border-border-line py-8 px-6 text-center text-muted font-mono text-[0.75rem] tracking-[0.05em] relative z-10">
        <p>Designed & built by Venkateswarlu Kasireddy · Bangalore, India 🇮🇳</p>
        <p className="mt-2 text-[#2a3060]">Open to Gen AI · Full-Stack · AI Engineer roles</p>
      </footer>
    </div>
  );
}
