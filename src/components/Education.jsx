import { useState } from "react";
import educationData from "../data/education";
import { useRef } from "react";
export default function Education() {
  const wrapper = useRef(null);
  return (
    <div className="text-white p-6 min-h-screen">
      <div ref={wrapper} className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {educationData.map((edu) => (
          <Card
            key={edu.id}
            school={edu.school}
            logo={edu.logo}
            year={edu.year}
            status={edu.status}
            desc={edu.desc}
          />
        ))}
      </div>
    </div>
  );
}
function Card({ school, year, status, logo, desc }) {
  return (
    <div
      className="bg-slate-700/40 mt-2 p-5 rounded-lg border border-white/5
      hover:border-lime-400/40 hover:shadow-lg hover:shadow-lime-500/10
      transition">
      <div className="flex gap-4">
        <img
          src={logo}
          className="w-10 h-10 rounded-full object-cover"
          alt=""
        />
        <div className="p-2 space-y-2">
          <h3 className="font-bold">{school}</h3>
          {/* {desc && ( */}
          <ul className="list-disc text-xs">
            {desc.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-end">
          <h3 className="text-white text-xs">{status}</h3>
          <span className="px-1 py-1  rounded bg-lime-700/50 text-xs text-lime-100">
            {year}
          </span>
        </div>
      </div>
    </div>
  );
}
