import { useEffect, useRef, useState } from "react";

export default function Home() {
  const checks = [
    "React Basic & Component",
    "Laravel Basic & Component",
    "Tailwind Layout",
    "Portfolio Website Development",
  ];

  const skills = [
    { name: "React", value: 60, color: "#378ADD" },
    { name: "Laravel", value: 70, color: "#E24B4A" },
    { name: "HTML", value: 70, color: "#D85A30" },
    { name: "CSS", value: 70, color: "#1D9E75" },
  ];

  const [visible, setVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const ref = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSkillsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex items-center scroll-mt-24 py-10 px-4 md:px-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* HERO */}
        <div
          ref={ref}
          className={`mb-10 md:mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <h1 className="text-2xl md:text-5xl font-semibold text-white leading-tight mb-3 md:mb-4">
            Halo, saya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Andre
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
            Frontend developer yang sedang belajar React, Laravel, dan Tailwind.
            Fokus membangun UI modern dan pengalaman pengguna yang clean.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {/* CHECKLIST */}
          <div
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mb-4 md:mb-5">
              Yang sudah dipelajari
            </p>
            <ul className="space-y-2 md:space-y-3">
              {checks.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-200 transition-all duration-500 ${
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}>
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SKILLS */}
          <div
            ref={skillsRef}
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mb-4 md:mb-5">
              Progress skill
            </p>
            <div className="space-y-3 md:space-y-4">
              {skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-[10px] md:text-xs text-slate-300 mb-1">
                    <span>{s.name}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="h-1.5 md:h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: skillsVisible ? `${s.value}%` : "0%",
                        background: `linear-gradient(to right, ${s.color}, white)`,
                        transitionDelay: `${400 + i * 150}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
