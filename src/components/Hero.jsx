import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
import LiquidEther from "@/component/LiquidEther";
import { useState } from "react";
import { useEffect } from "react";

export default function Hero() {
  // const btn = [
  //   { name: "Home", path: "/" },
  //   { name: "About", path: "/about" },
  //   { name: "Project", path: "/project" },
  //   { name: "Education", path: "/education" },
  // ];

  const [active, setActive] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActive("home");
        return;
      }
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const btn = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Project", id: "project" },
  ];
  const navLink = ({ isActive }) =>
    `px-4 py-1.5 rounded-full text-sm transition-all duration-150 ${
      isActive
        ? "bg-white/20 text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        : "text-white/60 hover:text-white hover:bg-white/10"
    }`;

  return (
    <>
      {/* LiquidEther background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B497CF"
        />
      </div>

      {/* Desktop navbar */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-8rem)] max-w-3xl rounded-full bg-black/20 backdrop-blur-md border border-white/10">
        <div className="px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="andre.png"
              className="w-8 h-8 object-cover rounded-full ring-2 ring-white/20"
              alt=""
            />
            <span className="font-medium text-sm text-white">Andre</span>
          </div>
          <div className="flex items-center gap-1">
            {btn.map((item, index) => (
              // <NavLink
              //   key={index}
              //   to={item.path}
              //   end={item.path === "/"}
              //   className={navLink}>
              //   {item.name}
              // </NavLink>
              <a
                key={index}
                href={`#${item.id}`}
                className={`px-4 py-1.5 rounded-full text-sm transition-all duration-150 ${
                  active === item.id
                    ? "bg-white/20 text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 min-h-screen bg-transparent md:pt-28 pb-20 md:pb-0">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-0">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
          </Routes> */}
          <Home />
          <About />
          <Project />
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed top-3 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-8rem)] max-w-3xl rounded-full bg-black/20 backdrop-blur-md border border-white/10">
        <div className="flex justify-around py-2">
          {btn.map((item, index) => (
            // <NavLink
            //   key={index}
            //   to={item.path}
            //   end={item.path === "/"}
            //   className={({ isActive }) =>
            //     `flex flex-col items-center text-xs py-1 px-4 rounded-full transition ${
            //       isActive
            //         ? "text-white font-medium"
            //         : "text-white/50 hover:text-white"
            //     }`
            //   }>
            //   {item.name}
            // </NavLink>
            <a
              key={index}
              href={`#${item.id}`}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-150 ${
                active === item.id
                  ? "bg-white/20 text-white font-medium shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
