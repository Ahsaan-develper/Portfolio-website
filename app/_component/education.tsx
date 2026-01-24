"use client";

export default function EducationPage() {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">
            Education
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Academic <span className="text-blue-600">Background</span>
          </h3>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">

          {/* Degree + Status */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
              Bachelor of Software Engineering
            </h4>

            <span className="inline-block text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit">
              Currently Studying
            </span>
          </div>

          {/* University */}
          <p className="text-slate-700 text-sm sm:text-base md:text-lg font-medium mb-1">
            National Textile University (NTU), Faisalabad
          </p>

          {/* Duration */}
          <p className="text-slate-500 text-xs sm:text-sm mb-4 sm:mb-6">
            Batch: <span className="font-semibold text-slate-700">2024 – 2028(Expected)</span>
          </p>

          {/* Description */}
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Currently pursuing a Bachelor’s degree in Software Engineering with a strong
            focus on modern web development, backend systems, artificial intelligence,
            and scalable software architectures. Actively building real-world projects
            alongside academic learning.
          </p>

          {/* Subjects / Skills */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Data Structures",
              "OOP",
              "Web Development",
              "Databases",
              "Software Design",
              "AI Fundamentals",
            ].map((skill, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
