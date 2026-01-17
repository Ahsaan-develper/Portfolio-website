"use client";

import { useState } from "react";

export default function ProjectShowcase() {
  const [showMore, setShowMore] = useState(false);

  // Added your actual LinkedIn links here
  const mainProjects = [
    {
      title: "Agentic Career Bridge",
      category: "AI / Agents",
      desc: "Autonomous AI system matching candidates to roles using advanced gap analysis and agentic workflows.",
      tech: ["OpenAISDK", "Next.js", "FastAPI", "WebSockets", "Postgres"],
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_ai-nextjs-fastapi-activity-7411429237993414656-0Hk6",
      color: "border-blue-500",
      glow: "group-hover:shadow-blue-500/20"
    },
    {
      title: "AI Interview Taker",
      category: "Real-time AI",
      desc: "Real-time voice and text simulation platform providing instant sentiment analysis and technical feedback.",
      tech: ["Next.js", "FastAPI", "Gemini", "MongoAtlas"],
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_softwareengineer-fullstackdeveloper-nextjs-activity-7366514370777931778-jU8F",
      color: "border-purple-500",
      glow: "group-hover:shadow-purple-500/20"
    },
    {
      title: "Smart Inventory System",
      category: "Enterprise / SaaS",
      desc: "Comprehensive full-stack management system with predictive analytics and real-time stock tracking.",
      tech: ["Next.js", "FastAPI", "MongoAtlas"],
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_softwareengineer-fullstackdeveloper-nextjs-activity-7374103474675941376--DA6",
      color: "border-emerald-500",
      glow: "group-hover:shadow-emerald-500/20"
    },
  ];

  const secondaryProjects = [
    {
      title: "AI Content Creator",
      category: "Automation",
      desc: "Automated blog and social media generation engine powered by GPT-4o/Gemini models.",
      tech: ["Gemini", "Next.js", "Django", "MongoAtlas"],
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_nextjs-django-aiwebapp-activity-7362194555334541312-HKBG"
    },
    {
      title: "Food Delivery Web",
      category: "E-Commerce",
      desc: "Modern restaurant ordering interface featuring a seamless checkout and real-time order tracking.",
      tech: ["Next.js", "MongoAtlas", "Tailwind"],
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_fooddeliveryapp-restaurantapp-nextjsproject-activity-7354098010965819392-iR8g"
    },
    {
      title: "Complain Management",
      category: "SaaS",
      desc: "Centralized ticketing system for streamlined customer support and issue resolution.",
      tech: ["Next.js", "FastAPI", "MongoDB"],
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_nextjs-fastapi-mongodb-activity-7415319996072976384-x9q9"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 px-6" id="work">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-3">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Featured Projects</h3>
          <div className="w-16 h-1 bg-blue-600 mt-6 rounded-full"></div>
        </div>

        {/* Main 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {mainProjects.map((p, i) => (
            <div 
              key={i} 
              className={`group relative bg-white p-10 rounded-[2.5rem] border-t-4 ${p.color} shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${p.glow}`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                  {p.category}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 h-20 overflow-hidden">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold text-blue-600/70 bg-blue-50/50 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-slate-900 group-hover:text-blue-600 group-hover:gap-4 transition-all"
              >
                View Case Study <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Expandable Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out overflow-hidden ${
          showMore ? "max-h-[2000px] opacity-100 mb-16" : "max-h-0 opacity-0"
        }`}>
          {secondaryProjects.map((p, i) => (
            <div key={i} className="group bg-slate-100/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 hover:bg-white hover:border-blue-200 transition-all duration-300">
              <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">{p.category}</span>
              <h3 className="text-lg font-bold text-slate-800 mt-2 mb-3">{p.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">{p.desc}</p>
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-black text-slate-400 group-hover:text-blue-600 uppercase tracking-tighter transition-colors"
              >
                LinkedIn Post ↗
              </a>
            </div>
          ))}
        </div>

        {/* Premium See More Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="group flex items-center gap-4 px-12 py-5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95 shadow-xl shadow-slate-200/50"
          >
            <span className="text-sm tracking-widest">
              {showMore ? "COLLAPSE PROJECTS" : "EXPLORE ARCHIVE"}
            </span>
            <div className={`transition-transform duration-500 ${showMore ? "rotate-180" : ""}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}