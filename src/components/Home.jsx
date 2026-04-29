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

  return (
    <div
      id="home"
      className="min-h-screen flex items-center scroll-mt-24 py-10 px-4 md:px-6">
      <div className="w-full max-w-4xl mx-auto">
        {/* HERO */}
        <div className="mb-10 md:mb-14">
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
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6">
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mb-4 md:mb-5">
              Yang sudah dipelajari
            </p>

            <ul className="space-y-2 md:space-y-3">
              {checks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SKILLS */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6">
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 mb-4 md:mb-5">
              Progress skill
            </p>

            <div className="space-y-3 md:space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-[10px] md:text-xs text-slate-300 mb-1">
                    <span>{s.name}</span>
                    <span>{s.value}%</span>
                  </div>

                  <div className="h-1.5 md:h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${s.value}%`,
                        background: `linear-gradient(to right, ${s.color}, white)`,
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
