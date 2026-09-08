import fotoPerfil from "../../assets/images/foto-perfil.jpg";
import { motion } from "framer-motion";
import { FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { useLanguage } from "../../i18n/LanguageContext";

function About() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <FaCode />,
      title: t.about.cards.experiencia.title,
      text: t.about.cards.experiencia.text,
      extra: t.about.cards.experiencia.extra,
      link: "#projects",
    },
    {
      icon: <FaBriefcase />,
      title: t.about.cards.profesional.title,
      text: t.about.cards.profesional.text,
      extra: t.about.cards.profesional.extra,
      link: "https://www.indalcopvc.com/",
    },
    {
      icon: <FaGraduationCap />,
      title: t.about.cards.educacion.title,
      text: t.about.cards.educacion.text,
      extra: t.about.cards.educacion.extra,
      link: "/notas-kevin-daw.pdf",
    },
  ];

  const techStack = [
    { icon: SiHtml5, color: "#E34F26", name: "HTML5", experience: t.about.tech.html },
    { icon: SiCss, color: "#1572B6", name: "CSS3", experience: t.about.tech.css },
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript", experience: t.about.tech.js },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript", experience: t.about.tech.ts },
    { icon: SiReact, color: "#61DAFB", name: "React", experience: t.about.tech.react },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS", experience: t.about.tech.tailwind },
    { icon: SiNodedotjs, color: "#5FA04E", name: "Node.js", experience: t.about.tech.node },
    { icon: SiExpress, color: "#000000", name: "Express", experience: t.about.tech.express },
    { icon: SiGit, color: "#F05032", name: "Git", experience: t.about.tech.git },
    { icon: SiGithub, color: "#181717", name: "GitHub", experience: t.about.tech.github },
    { icon: SiMysql, color: "#4479A1", name: "MySQL", experience: t.about.tech.mysql },
    { icon: DiVisualstudio, color: "#007ACC", name: "VS Code", experience: t.about.tech.vscode },
  ];

  return (
    <motion.section
      id="about"
      className="w-full px-4 sm:px-8 xl:px-[6%] py-10 scroll-mt-20 mb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.7 }}
    >
      <h4 className="text-center mb-2 text-lg">
        {t.about.conoceMas}
      </h4>

      <h2 className="text-center text-5xl font-semibold">
        {t.about.titulo}
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 my-20">

        {/* FOTO */}

        <div className="w-56 sm:w-72 lg:w-72 xl:w-80 2xl:w-100 rounded-3xl overflow-hidden lg:self-start lg:mt-16 xl:mt-28 2xl:translate-x-18">
          <img
            src={fotoPerfil}
            alt="Foto de Kevin"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENIDO */}

        <div className="flex-1">

          <motion.p
            className="text-left mb-12 max-w-3xl mx-auto lg:-translate-x-8 text-gray-700 dark:text-[#e3e3e3] leading-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            {t.about.descripcion}
          </motion.p>


          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto 2xl:-translate-x-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card) => (
              <li
                key={card.link}
                className="w-full max-w-xs min-h-[350px] border-[0.5px] border-gray-400 dark:border-[#848b96] rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[6px_6px_0px_#a7a7a7] flex flex-col"
              >
                <div className="text-2xl mt-3 mb-4 text-gray-700 dark:text-[#e3e3e3]">
                  {card.icon}
                </div>

                <h3 className="my-4 font-semibold  min-h-[3.5rem]">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-[#838383] min-h-[2.5rem]">
                  {card.text}
                </p>

                <p className="text-sm font-semibold mt-3 mb-4 min-h-[3.75rem]">
                  {card.extra}
                </p>

                
                  <a href={card.link}
                  target={card.link.startsWith("#") ? undefined : "_blank"}
                  rel={card.link.startsWith("#") ? undefined : "noopener noreferrer"}
                  className="mt-auto w-fit flex items-center justify-center gap-2 border-[0.5px] border-gray-400 dark:border-[#848b96] rounded-xl px-12 py-2 text-sm whitespace-nowrap transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#363636]"
                >
                  {t.about.verMas}
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="w-full flex flex-col items-center mt-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-center mt-6 mb-8 text-lg font-medium">
              {t.about.stackTecnologico}
            </h4>

            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div key={index} className="group w-18 h-18 [perspective:1000px]">
                    <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                      <div className="absolute inset-0 [backface-visibility:hidden] border border-gray-200 dark:border-[#363636] rounded-xl bg-white dark:bg-[#363636] shadow-sm flex flex-col items-center justify-center gap-2 px-2">
                        <Icon size={28} color={tech.color} />
                        <span className="text-xs font-medium text-gray-700 dark:text-[#e3e3e3] text-center">
                          {tech.name}
                        </span>
                      </div>

                      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-gray-200 dark:border-[#363636] rounded-xl bg-white dark:bg-[#363636] shadow-sm flex items-center justify-center px-3">
                        <span className="text-[11px] font-medium text-gray-600 dark:text-[#e3e3e3] text-center leading-snug">
                          {tech.experience}
                        </span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
}

export default About;