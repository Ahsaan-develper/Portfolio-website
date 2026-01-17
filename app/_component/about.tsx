"use client";

import { useState, useEffect } from "react";

export default function AboutSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const skills = ["Next.js Developer", "FastAPI Specialist", "AI Agent Architect", "Full Stack Engineer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % skills.length;
      const fullText = skills[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 40 : 80);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#ffffff] px-6 py-24 overflow-hidden" id="about">
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal { opacity: 0; animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT SIDE: Typography */}
        <div className="lg:col-span-7 z-10">
          <div className="space-y-10">
            
            {/* Status Badge */}
            <div className="animate-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">System Architect</span>
            </div>

            {/* Main Name */}
            <div className="space-y-2">
              <h1 className="animate-reveal [animation-delay:200ms] text-[10vw] lg:text-[100px] font-black text-slate-900 leading-[0.8] tracking-[-0.05em]">
                Ahsan <br />
                <span className="text-blue-600">Ali<span className="text-slate-200"></span></span>
              </h1>
              
              <div className="animate-reveal [animation-delay:400ms] flex items-center gap-4 text-slate-400 font-bold text-lg md:text-2xl pt-4">
                <span className="w-10 h-1px bg-slate-200" />
                <p className="tracking-tight">
                  Expert  <span className="text-slate-900 underline decoration-blue-600/20 underline-offset-8"> {text}</span>
                  <span className="text-blue-600 animate-pulse ml-1">|</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="animate-reveal [animation-delay:600ms] text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
              Developing high-performance backends and agentic AI systems. I specialize in turning complex logic into <span className="text-slate-900 font-semibold">seamless user experiences</span>.
            </p>

            {/* CTA Buttons */}
            <div className="animate-reveal [animation-delay:800ms] flex flex-wrap gap-4 items-center">
              <a href="#work" className="px-10 py-5 bg-blue-600 text-white rounded-full font-black text-xs tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1 uppercase">
                Explore Work
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Circular Image Design */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          
          {/* Rotating Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] animate-spin-slow opacity-20 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="circlePath" fill="none" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                <text className="text-[6px] font-bold uppercase tracking-[0.5em] fill-slate-900">
                  <textPath href="#circlePath">Next.js • FastAPI • AI Architect • OpenAI •</textPath>
                </text>
             </svg>
          </div>

          {/* Fully Rounded Image Container */}
          <div className="animate-reveal [animation-delay:500ms] relative group">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] bg-slate-100">
              <img 
                src="/Ahsan.jpeg" 
                alt="Ahsan Ali" 
                className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Experience Badge - Optional info can be added inside here later */}
            <div className="absolute -bottom-2 -left-2 md:bottom-10 md:-left-10 bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-50 text-center animate-bounce duration-[3000ms]">
              <span className="text-[10px] font-black text-blue-600 uppercase">Available for Hire</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}