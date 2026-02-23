import { FolderX } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Folder, User, Code, GraduationCap } from "lucide-react";
import { FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="p-6 text-white ">
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-400 mb-6">Portfolio Overview</p>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card title="Tech Stack" value="Laravel & Tailwind" icon={<Code />} />
        <Card title="Learning Status" value="On Progress" icon={<BookOpen />} />
        <Card title="Projects" value="In Progress" icon={<FolderX />} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* RECENT PROJECT */}
        <div className="bg-slate-600/40 p-4 rounded">
          <h2 className="font-bold mb-3">Learning Progress</h2>
          <ul className="space-y-2 text-gray-300 ">
            <li>✔ React Basic & Component</li>
            <li>✔ Laravel Basic & Component</li>
            <li>✔ React Router</li>
            <li>✔ Tailwind Layout</li>
            {/* <li>⏳ Portfolio Website Development</li> */}
          </ul>
        </div>
        {/* Progress */}
        <div className="bg-slate-600/40 p-4  rounded-md">
          <h3 className="text-2xl font-bold text-center mb-4">
            Learning Progress
          </h3>
          <Progress
            title={"React "}
            value={60}
            icon={<FaReact size={20} color="cyan" />}
          />
          <Progress
            title={"Laravel "}
            value={75}
            icon={<FaLaravel size={20} color="red" />}
          />
          <Progress
            title={"Html "}
            value={75}
            icon={<FaHtml5 size={20} color="red" />}
          />
          <Progress
            title={"CSS "}
            value={75}
            icon={<FaCss3 size={20} color="cyan" />}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="bg-slate-700/40 p-4 rounded flex items-center gap-3">
      <div className="text-indigo-400">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="font-bold">{value}</h3>
      </div>
    </div>
  );
}

function Progress({ title, value, icon }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center text-sm mb-1">
        <div className="p-3 rounded-md gap-3 flex">
          <div className="flex items-center gap-2">
            <span>{icon}</span>
            <span>{title}</span>
          </div>
          <span className="text-yellow-400">{value}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="w-full h-2 bg-indigo-700 rounded-full transition-all"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}
