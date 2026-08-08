import { FaHandshake, FaServer } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-4 sm:px-8 xl:px-[6%] py-10 scroll-mt-20 mb-24"
    >
      <h4 className="text-center mb-2 text-lg">
        Estas son mis
      </h4>

      <h2 className="text-center text-5xl font-semibold">
        Habilidades
      </h2>

      <p className="text-center mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
        Mi perfil combina una base técnica sólida en tecnologías frontend y backend con la resiliencia y el trabajo en equipo desarrollados en entornos de alta exigencia. Esta suma de habilidades me permite afrontar retos complejos con una mentalidad estructurada, adaptable y siempre orientada a resultados.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14">

        {/* SOFT SKILLS */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:bg-purple-50">
          <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <FaHandshake className="text-purple-700" size={20} />
          </div>

          <h3 className="font-semibold mb-3">Soft Skills</h3>

          <ul className="list-disc list-inside flex flex-col gap-3 text-sm text-gray-600 marker:text-gray-400">
            <li>Trabajo en equipo</li>
            <li>Pensamiento crítico</li>
            <li>Resolución de problemas</li>
            <li>Adaptabilidad</li>
            <li>Comunicación efectiva</li>
          </ul>
        </div>

        {/* FRONTEND */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:bg-blue-50">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <SiReact className="text-blue-700" size={20} />
          </div>

          <h3 className="font-semibold mb-3">Frontend</h3>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiHtml5 color="#E34F26" size={16} /> HTML
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiCss color="#1572B6" size={16} /> CSS
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiJavascript color="#F7DF1E" size={16} /> JavaScript
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiTypescript color="#3178C6" size={16} /> TypeScript
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiReact color="#61DAFB" size={16} /> React
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiTailwindcss color="#06B6D4" size={16} /> Tailwind CSS
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>
          </ul>
        </div>

{/* BACKEND */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] hover:bg-green-50">
          <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <FaServer className="text-green-700" size={18} />
          </div>

          <h3 className="font-semibold mb-3">Backend</h3>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiNodedotjs color="#5FA04E" size={16} /> Node.js
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiExpress color="#000000" size={16} /> Express
              </span>
              <span className="text-xs text-gray-400">Intermedio</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiMysql color="#4479A1" size={16} /> MySQL
              </span>
              <span className="text-xs text-gray-400">Intermedio</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiGit color="#F05032" size={16} /> Git
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <SiGithub color="#181717" size={16} /> GitHub
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700">
                <DiVisualstudio color="#007ACC" size={16} /> VS Code
              </span>
              <span className="text-xs text-gray-400">Avanzado</span>
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;