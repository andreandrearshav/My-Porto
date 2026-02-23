import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function About() {
  return (
    <div className="text-white p-6 md:min-h-screen max-h-[560px] overflow-y-scroll sticky top-0">
      <div className="bg-slate-700/40 rounded p-5 shadow-lg shadow-cyan-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="order-2 md:order-1">
            <h2 className="text-xl font-bold mb-5 text-lime-400 border-b border-lime-400/30 pb-2">
              About Me
            </h2>
            <p className="mb-4 md:text-justify text-center">
              Saya merupakan lulusan S1 Teknik Informatika yang memiliki
              ketertarikan pada pengembangan aplikasi web. Saat ini saya fokus
              mempelajari pengembangan web serta membangun project sederhana
              sebagai media belajar.
            </p>
          </div>
          <div className="flex order-1 md:order-2 flex-col justify-center items-center">
            <img
              src="andre.png"
              className="rounded-full mb-5 md:w-56 md:h-56 h-40 w-40 object-cover shadow-lg hover:shadow-purple-500 transition duration-300 hover:scale-105"
              alt="Andre"
            />
            <div className="md:flex grid grid-cols-1 gap-3">
              <a
                href="https://github.com/andreandrearshav"
                target="_blank"
                className="flex gap-2 group items-center transition-colors duration-300 rounded">
                <FaGithub
                  size={18}
                  className="group-hover:text-gray-300 text-black"
                />
                <span className="group-hover:font-bold">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/andre-bagus-syamantha-64a499316/"
                target="_blank"
                className="flex gap-2 group items-center transition-colors duration-300 rounded">
                <FaLinkedin size={18} className="group-hover:text-blue-500" />
                <span className="group-hover:font-bold">Linkedin</span>
              </a>
              <a
                href="https://www.instagram.com/ande_bagus_/"
                target="_blank"
                className="flex gap-2 group items-center transition-colors duration-300 rounded">
                <FaInstagram size={18} className="group-hover:text-red-500" />
                <span className="group-hover:font-bold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Tech */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TechStack tittle="Tools">
          <ul className="text-cyan-300 space-y-2">
            <li>• VS Code</li>
            <li>• Postman</li>
            <li>• MySQL</li>
          </ul>
        </TechStack>

        <TechStack tittle="Focus Area">
          <ul className="text-cyan-300 space-y-2">
            <li>• Web Dashboard</li>
            <li>• CRUD Application</li>
            <li>• Backend Logic</li>
          </ul>
        </TechStack>
      </div>
    </div>
  );
}

function TechStack({ tittle, children }) {
  return (
    <div className="bg-slate-600 p-4 rounded mt-6 shadow-lg">
      <h3 className="text-lime-400 font-semibold mb-3 border-b border-lime-400/30 pb-2">
        {tittle}
      </h3>
      {children}
    </div>
  );
}
