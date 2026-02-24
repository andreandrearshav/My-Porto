import { useState } from "react";
import educationData from "../data/education";
import sertif from "../data/sertif";
import { useRef } from "react";
export default function Education() {
  const wrapper = useRef(null);
  return (
    <div className="text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">Education</h1>
      <p className="text-gray-400 mb-6">Formal & Non-Formal Education</p>
      <p className="font-bold mb-4">Formal </p>
      <div ref={wrapper} className="grid grid-cols-1 mb-5 md:grid-cols-2 gap-3">
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
      <p className="font-bold mb-6">Non-Formal </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sertif.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-sm bg-slate-700/40 border hover:border-lime-400/40 hover:shadow-lime-500/10 transition border-white/5 rounded shadow p-4">
            <div className="flex flex-col gap-3">
              <img
                src={item.logo}
                className="w-full h-36 object-cover rounded-lg"
                alt=""
              />
              <div className=" space-y-1">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-xs">
                  {item.organization} • {item.year}
                </p>
                <ul className="list-disc pl-3 text-xs">
                  {item.desc.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
                <a
                  href={item.file}
                  target="_blank"
                  className="mt-2 inline-block text-xs text-lime-500 hover:text-lime-400 transition">
                  📄 View Certificate
                </a>
              </div>
            </div>
          </div>
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
