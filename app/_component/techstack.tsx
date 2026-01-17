"use client";

export default function TechStack() {
  const skillGroups = [
    {
      title: "Frontend & Design",
      skills: ["Next.js", "React", "Tailwind CSS", "Redux"],
      icon: "01",
    },
    {
      title: "AI & Backend",
      // Removed stray comma here
      skills: ["FastAPI", "OpenAI SDK", "PostgreSQL", "MongoDB", "Django"],
      icon: "02",
    },
    {
      // Removed stray comma before this object
      title: "Basic Skills",
      skills: ["SQL", "C#", "C++"],
      icon: "03",
    },
  ];

  return (
    <section className="py-24 bg-white px-6 overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Minimal Header */}
        <div className="mb-20 text-center">
          <h2 className="text-blue-600 text-[11px] font-black uppercase tracking-[0.4em] mb-4">
            Technical Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            The <span className="text-blue-600">Tech Skills</span>
          </h3>
          <p className="mt-4 text-blue-500/60 font-medium text-sm">
            Specialized in Agentic AI & Modern Web
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-[2rem] border border-blue-50 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.1)] transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(37,99,235,0.2)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Accent Number */}
              <span className="absolute -right-4 -top-4 text-8xl font-black text-blue-50 opacity-40 transition-transform group-hover:scale-110">
                {group.icon}
              </span>

              <h4 className="relative z-10 text-blue-600 font-black text-xs uppercase tracking-widest mb-10 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-blue-600"></span>
                {group.title}
              </h4>

              <ul className="relative z-10 space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-blue-900 font-bold text-lg hover:text-blue-600 transition-colors cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Decorative Blue Gradient Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-blue-50/50 rounded-tl-full -mr-10 -mb-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}