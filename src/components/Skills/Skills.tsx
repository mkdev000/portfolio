import { FaHandshake, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
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
    <motion.section
  id="skills"
  className="w-full px-4 sm:px-8 xl:px-[6%] py-10 scroll-mt-20 mb-24"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.7 }}
>
      <h4 className="text-center mb-2 text-lg">
        Estas son mis
      </h4>

      <h2 className="text-center text-5xl font-semibold">
        Habilidades
      </h2>

      <motion.p
  className="text-center mt-6 max-w-2xl mx-auto text-gray-600 dark:text-[#e3e3e3] leading-8"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.6 }}
>
  Mi perfil combina una base técnica sólida en tecnologías frontend y backend con la resiliencia y el trabajo en equipo desarrollados en entornos de alta exigencia. Esta suma de habilidades me permite afrontar retos complejos con una mentalidad estructurada, adaptable y siempre orientada a resultados.
</motion.p>

      <motion.div
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ duration: 0.6 }}
>

        {/* SOFT SKILLS */}
        <div className="border border-gray-200 dark:border-[#363636] rounded-xl p-6 bg-white dark:bg-[#363636] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[6px_6px_0px_#a7a7a7] hover:bg-purple-50 dark:hover:bg-[#363636]">
          <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center mb-4">
            <FaHandshake className="text-purple-700" size={20} />
          </div>

          <h3 className="font-semibold mb-3">Soft Skills</h3>

          <ul className="list-disc list-inside flex flex-col gap-3 text-sm text-gray-600 dark:text-[#e3e3e3] marker:text-gray-400 dark:marker:text-[#838383]">
            <li>Trabajo en equipo</li>
            <li>Pensamiento crítico</li>
            <li>Resolución de problemas</li>
            <li>Adaptabilidad</li>
            <li>Comunicación efectiva</li>
          </ul>
        </div>

        {/* FRONTEND */}
        <div className="border border-gray-200 dark:border-[#363636] rounded-xl p-6 bg-white dark:bg-[#363636] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[6px_6px_0px_#a7a7a7] hover:bg-blue-50 dark:hover:bg-[#363636]">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <SiReact className="text-blue-700" size={20} />
          </div>

          <h3 className="font-semibold mb-3">Frontend</h3>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiHtml5 color="#E34F26" size={16} /> HTML
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiCss color="#1572B6" size={16} /> CSS
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiJavascript color="#F7DF1E" size={16} /> JavaScript
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiTypescript color="#3178C6" size={16} /> TypeScript
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiReact color="#61DAFB" size={16} /> React
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiTailwindcss color="#06B6D4" size={16} /> Tailwind CSS
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>
          </ul>
        </div>

{/* BACKEND */}
        <div className="border border-gray-200 dark:border-[#363636] rounded-xl p-6 bg-white dark:bg-[#363636] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[6px_6px_0px_#a7a7a7] hover:bg-green-50 dark:hover:bg-[#363636]">
          <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <FaServer className="text-green-700" size={18} />
          </div>

          <h3 className="font-semibold mb-3">Backend</h3>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-400 dark:text-[#e3e3e3]">
                <SiNodedotjs color="#5FA04E" size={16} /> Node.js
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiExpress color="#000000" size={16} /> Express
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Intermedio</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiMysql color="#4479A1" size={16} /> MySQL
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Intermedio</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiGit color="#F05032" size={16} /> Git
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <SiGithub color="#181717" size={16} /> GitHub
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 dark:text-[#e3e3e3]">
                <DiVisualstudio color="#007ACC" size={16} /> VS Code
              </span>
              <span className="text-xs text-gray-400 dark:text-[#838383]">Avanzado</span>
            </li>
          </ul>
        </div>

       </motion.div>

    </motion.section>
  );
}

export default Skills;