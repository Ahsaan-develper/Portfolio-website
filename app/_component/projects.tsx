"use client";

import { useState } from "react";

export default function ProjectShowcase() {
  const [showMore, setShowMore] = useState(false);

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
      desc: "Automated blog and social media generation engine powered by GPT-4o and Gemini models.",
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_nextjs-django-aiwebapp-activity-7362194555334541312-HKBG"
    },
    {
      title: "Food Delivery Web",
      category: "E-Commerce",
      desc: "Modern restaurant ordering interface featuring a seamless checkout and real-time order tracking.",
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_fooddeliveryapp-restaurantapp-nextjsproject-activity-7354098010965819392-iR8g"
    },
    {
      title: "Complain Management",
      category: "SaaS",
      desc: "Centralized ticketing system for streamlined customer support and issue resolution.",
      link: "https://www.linkedin.com/posts/ahsaan-ali-785445361_nextjs-fastapi-mongodb-activity-7415319996072976384-x9q9"
    }
  ];

  return (
    <section
      id="work"
      className="py-20 md:py-32 bg-slate-50 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-3">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Featured Projects
          </h3>
          <div className="w-14 h-1 bg-blue-600 mt-5 rounded-full"></div>
        </div>

        {/* Main Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-14 md:mb-16">
          {mainProjects.map((p, i) => (
            <div
              key={i}
              className={`group relative bg-white p-6 md:p-10 rounded-3xl border-t-4 ${p.color} shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${p.glow}`}
            >
              <span className="inline-block text-xs md:text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-md border mb-5">
                {p.category}
              </span>

              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>

              <p className="text-slate-500 text-base md:text-sm leading-relaxed mb-6 md:mb-8 md:h-20 md:overflow-hidden">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs md:text-[10px] font-bold text-blue-600/70 bg-blue-50 px-2 py-1 rounded-md"
                  >
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
                View Case Study →
              </a>
            </div>
          ))}
        </div>

        {/* Expandable Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-hidden transition-all duration-700 ${
            showMore ? "max-h-[2000px] opacity-100 mb-14" : "max-h-0 opacity-0"
          }`}
        >
          {secondaryProjects.map((p, i) => (
            <div
              key={i}
              className="bg-slate-100 p-6 rounded-2xl border hover:bg-white hover:border-blue-200 transition"
            >
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                {p.category}
              </span>
              <h4 className="text-lg font-bold text-slate-800 mt-2 mb-2">
                {p.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {p.desc}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-slate-400 hover:text-blue-600 uppercase tracking-wide"
              >
                LinkedIn Post ↗
              </a>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-white border border-slate-200 rounded-full font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition active:scale-95 shadow-lg"
          >
            <span className="text-sm tracking-widest">
              {showMore ? "COLLAPSE PROJECTS" : "EXPLORE ARCHIVE"}
            </span>
            <span
              className={`transition-transform duration-500 ${
                showMore ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
