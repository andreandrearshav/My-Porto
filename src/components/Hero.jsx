import { Folder } from "lucide-react";
import { GraduationCapIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { Info } from "lucide-react";
import { useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
export default function Hero() {
  const [open, setOpen] = useState(true);
  const btn = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "About", icon: <Info />, path: "/about" },
    { name: "Project", icon: <Folder />, path: "/project" },
    { name: "Education", icon: <GraduationCapIcon />, path: "/education" },
  ];
  const location = useLocation();
  const title = {
    "/": "Home",
    "/about": "About Me",
    "/project": "Project",
    "/education": "Education",
  };
  const pageTitle = title[location.pathname] || "My Portofolio";
  return (
    <>
      <section className="min-h-screen flex bg-slate-800">
        <div
          className={`shadow-lg shadow-lime-400/30  min-h-screen transition-all duration-300 ${open ? "w-56" : "w-16"}`}>
          <div className="px-3  mb-6 mt-4 flex justify-center gap-2 items-center">
            <div>
              <img
                src="andre.png"
                className="w-10 h-10 object-cover rounded-full shadow-lg shadow-lime-200"
                alt=""
              />
            </div>
            <h1
              className={`font-bold text-sm text-white ${open ? "w-40" : "hidden"}`}>
              My Portofolio
            </h1>
          </div>
          <div
            className={` border-t flex flex-col gap-2 ${open ? "p-6" : "p-2"}`}>
            {btn.map((i, index) => (
              <NavLink
                title={i.name}
                key={index}
                to={i.path}
                className={({ isActive }) => `text-white w-full  flex gap-3
                px-3 py-2 rounded-md
                ${isActive ? "bg-slate-600" : "hover:bg-slate-600"}
                transition duration-200`}>
                {i.icon}
                <span className={`${open ? "w-36" : "hidden"}`}>{i.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <main className="flex-1">
          <div className="shadow-xl p-7">
            <div className="flex gap-4">
              <button
                onClick={() => setOpen(!open)}
                className="px-1 bg-indigo-50 rounded text-black transition-all duration-300">
                {open ? <span className="p-1">X</span> : <span>☰</span>}
              </button>
              <h1 className="font-bold text-lime-400">{pageTitle}</h1>
            </div>
          </div>
          <div className={open ? "w-full" : ""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </div>
        </main>
      </section>
      {/* mobile */}
    </>
  );
}
