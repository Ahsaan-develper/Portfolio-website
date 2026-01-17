"use client";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Agent Ecosystems",
      description: "Autonomous agents designed for tool-calling and reasoning using LangChain and OpenAI.",
      features: ["RAG Pipelines", "API Integration", "Workflows"],
    },
    {
      title: "Next.js Performance",
      description: "Optimized full-stack apps using Server Components and Parallel Routing for speed.",
      features: ["SEO", "Edge Runtime", "Lighthouse 100"],
    },
    {
      title: "FastAPI Architectures",
      description: "High-performance backend systems with async logic and Pydantic validation.",
      features: ["Async Processing", "JWT Auth", "Scalability"],
    },
    {
      title: "Generative AI Strategy",
      description: "Strategic LLM integration focused on prompt engineering and token efficiency.",
      features: ["Token Optimization", "Fine-tuning", "Prompting"],
    }
  ];

  return (
    <section className="py-20 bg-white px-6" id="services">
      <div className="max-w-6xl mx-auto">
        
        {/* Clean Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] mb-2">My Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Specialized in <span className="text-blue-600">Modern Tech.</span>
          </h3>
        </div>

        {/* Smaller, Professional Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Minimal Icon Style */}
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Minimal Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {service.features.map((feature, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-2 pl-6 bg-slate-50 rounded-full border border-slate-100">
            <span className="text-sm font-medium text-slate-600">Ready to build something intelligent?</span>
          
          </div>
        </div>

      </div>
    </section>
  );
}