import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

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

  const tools = ["VS Code", "Postman", "MySQL"];
  const focusAreas = ["Web Development", "CRUD Application", "Backend Logic"];

  return (
    <div id="about" ref={ref} className="text-white scroll-mt-20 py-16 px-4">
      {/* Header */}
      <div
        className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            Me
          </span>
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div
          className={`md:col-span-2 md:order-1 order-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            Lulusan S1 Teknik Informatika yang memiliki ketertarikan pada
            pengembangan aplikasi web. Saat ini fokus mempelajari pengembangan
            web serta membangun project sederhana sebagai media belajar.
          </p>

          <div className="flex gap-3 mt-6">
            <Social
              icon={<FaGithub size={16} />}
              label="Github"
              link="https://github.com/andreandrearshav"
            />
            <Social
              icon={<FaLinkedin size={16} />}
              label="LinkedIn"
              link="https://www.linkedin.com/in/andre-bagus-syamantha-64a499316/"
            />
            <Social
              icon={<FaInstagram size={16} />}
              label="Instagram"
              link="https://www.instagram.com/ande_bagus_/"
            />
          </div>
        </div>

        {/* Photo Card */}
        <div
          className={`bg-white/5 backdrop-blur-md md:order-2 order-1 border border-white/10 rounded-2xl p-6 flex items-center justify-center transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 blur-xl scale-110" />
            <img
              src="andre.png"
              className="relative rounded-full w-32 h-32 md:w-40 md:h-40 object-cover ring-2 ring-white/10 hover:ring-purple-400/50 hover:scale-105 transition-all duration-300"
              alt="Andre"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Tools */}
        <div
          className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
            Tools
          </p>
          <ul className="space-y-2">
            {tools.map((item, i) => (
              <li
                key={item}
                className={`flex items-center gap-2 text-xs text-slate-200 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${400 + i * 80}ms` }}>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Focus Area */}
        <div
          className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 transition-all duration-700 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
            Focus Area
          </p>
          <ul className="space-y-2">
            {focusAreas.map((item, i) => (
              <li
                key={item}
                className={`flex items-center gap-2 text-xs text-slate-200 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${500 + i * 80}ms` }}>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Status Card */}
        <div
          className={`md:col-span-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-5 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
            Status
          </p>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-medium">
              Open to opportunities
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Sedang aktif belajar dan mencari kesempatan untuk berkembang di
            bidang web development.
          </p>
        </div>
      </div>
    </div>
  );
}

function Social({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200">
      {icon}
      {label}
    </a>
  );
}
