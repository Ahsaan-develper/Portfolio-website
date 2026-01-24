"use client";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Agent Ecosystems",
      description:
        "Autonomous agents designed for tool-calling, reasoning, and orchestration using LangChain and OpenAI.",
      features: ["RAG Pipelines", "API Integration", "Workflows"],
    },
    {
      title: "Next.js Performance",
      description:
        "Highly optimized full-stack applications using Server Components, caching, and parallel routing.",
      features: ["SEO", "Edge Runtime", "Lighthouse 100"],
    },
    {
      title: "FastAPI Architectures",
      description:
        "Scalable backend systems with async logic, clean architecture, and strong validation.",
      features: ["Async Processing", "JWT Auth", "Scalability"],
    },
    {
      title: "Generative AI Strategy",
      description:
        "LLM integrations focused on prompt engineering, token efficiency, and cost control.",
      features: ["Token Optimization", "Fine-tuning", "Prompting"],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-white px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">
            My Expertise
          </h2>
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Specialized in{" "}
            <span className="text-blue-600">Modern Tech</span>
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Content */}
              <div>
                {/* Icon */}
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <svg
                    className="w-5 h-5 text-blue-600 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h4>

                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-50 rounded-full border border-slate-200">
            <span className="text-sm md:text-base font-medium text-slate-600">
              Ready to build something intelligent?
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
