import { GraduationCap, BookOpen, Target, Award } from "lucide-react";
import { education } from "@/lib/content";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28" aria-labelledby="education-heading">
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="education-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-4"
          >
            Education & Academic Context
          </h2>
          <p className="text-base sm:text-lg text-[#8b95a8] max-w-2xl mx-auto">
            Rigorous undergraduate curriculum paired with applied complex engineering projects.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <article className="p-6 md:p-8 rounded-2xl border border-[#1a2438] bg-[#0e162a]/60 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={28} className="text-[#00d4aa]" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#e8eaf0] mb-1">
                  {education.degree}
                </h3>
                <p className="text-lg text-[#00d4aa] font-medium mb-1">
                  {education.university}
                </p>
                <p className="text-sm text-[#8b95a8]">{education.location}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1a2438]">
              <h4 className="text-base font-medium text-[#e8eaf0] mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#00d4aa]" aria-hidden="true" />
                Focus Areas & Core Coursework
              </h4>
              <div className="flex flex-wrap gap-2" role="list">
                {education.focusAreas.map((area, index) => (
                  <span
                    key={area}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-colors ${
                      index % 3 === 0
                        ? "bg-[#00d4aa]/10 border-[#00d4aa]/30 text-[#00d4aa]"
                        : "bg-[#0a0f1d] border-[#1a2438] text-[#8b95a8]"
                    }`}
                    role="listitem"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Three pillars */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-[#1a2438] bg-[#0e162a]/40 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center">
                <Target size={22} className="text-[#00d4aa]" aria-hidden="true" />
              </div>
              <h4 className="font-medium text-[#e8eaf0] mb-1 text-sm sm:text-base">Engineering Primitives</h4>
              <p className="text-xs sm:text-sm text-[#8b95a8]">Digital logic, Verilog RTL, FPGA, signals & networks</p>
            </div>

            <div className="p-5 rounded-xl border border-[#1a2438] bg-[#0e162a]/40 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center">
                <BookOpen size={22} className="text-[#00d4aa]" aria-hidden="true" />
              </div>
              <h4 className="font-medium text-[#e8eaf0] mb-1 text-sm sm:text-base">CEP Implementations</h4>
              <p className="text-xs sm:text-sm text-[#8b95a8]">SENTRYX ALPR, MRI DIP, POSIX scheduler, SISOTOOL</p>
            </div>

            <div className="p-5 rounded-xl border border-[#1a2438] bg-[#0e162a]/40 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center">
                <Award size={22} className="text-[#00d4aa]" aria-hidden="true" />
              </div>
              <h4 className="font-medium text-[#e8eaf0] mb-1 text-sm sm:text-base">Empirical Rigor</h4>
              <p className="text-xs sm:text-sm text-[#8b95a8]">Benchmarking on real silicon without theoretical assumptions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
