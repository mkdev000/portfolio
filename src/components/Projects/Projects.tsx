import taskManagerImg from "../../assets/images/projects/task-manager.jpg";
import sportsPlatformImg from "../../assets/images/projects/sports-platform.jpg";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const techIcons = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "#000000" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rotation = index % 2 === 1 ? "rotate-3" : "-rotate-3";

  return (
    <motion.div
      className="group relative grid lg:grid-cols-2 gap-10 items-center rounded-3xl p-6 lg:p-10 transition-all duration-700 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-[280px] object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-500 ${rotation} group-hover:rotate-0 group-hover:scale-[1.02]`}
        />
      </div>

      <div className={`relative ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>

        <span className="absolute -top-8 right-0 text-6xl font-bold text-gray-100 dark:text-[#363636] select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="relative text-3xl font-semibold">
          {project.title}
        </h3>

        <p className="relative mt-5 text-gray-600 dark:text-[#838383] leading-8">
          {project.description}
        </p>

        <div className="relative flex flex-wrap gap-3 mt-6 mb-8">
          {project.technologies.map((tech: string) => {
            const Icon = techIcons[tech as keyof typeof techIcons]?.icon;
            const color = techIcons[tech as keyof typeof techIcons]?.color;

            return (
              <span
                key={tech}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-[#363636] text-sm">
                {Icon && <Icon color={color} size={16} />}
                {tech}
              </span>
            );
          })}
        </div>

        <div className="relative flex gap-3">


          <a href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
           className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-black dark:bg-[#363636] text-white dark:text-[#e3e3e3] text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[4px_4px_0px_#a7a7a7]"
          >
            Demo
            <FaArrowRight size={12} />
          </a>


          <a href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border-[0.5px] border-gray-400 dark:border-[#363636] text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[4px_4px_0px_#a7a7a7]"
          >
            <FaGithub size={15} />
            GitHub
          </a>
        </div>

      </div>

    </motion.div>
  );
}

const projects = [
  {
    title: "Gestor de Tareas",
    description:
      "Aplicación Full Stack para organizar tareas mediante autenticación de usuarios, gestión de proyectos y panel personalizado.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
    ],
    image: taskManagerImg,
    github: "#",
    demo: "#",
  },
  {
    title: "Plataforma Deportiva",
    description:
      "Aplicación web para la gestión de equipos, partidos y usuarios con autenticación y panel de administración.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
    ],
    image: sportsPlatformImg,
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="w-full px-4 sm:px-8 xl:px-[6%] py-10 scroll-mt-20 mb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h4 className="text-center mb-2 text-lg">
        Explora mis
      </h4>

      <h2 className="text-center text-5xl font-semibold">
        Proyectos
      </h2>

      <motion.p
        className="text-center mt-6 max-w-2xl mx-auto text-gray-600 dark:text-[#e3e3e3] leading-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Una selección de proyectos que reflejan mi evolución como desarrollador web. Cada uno de ellos ha sido diseñado para poner en práctica tecnologías modernas y resolver problemas reales mediante soluciones escalables y bien estructuradas.
      </motion.p>

      <div className="max-w-6xl mx-auto mt-16 flex flex-col gap-16">

        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}

      </div>

    </motion.section>
  );
}

export default Projects;