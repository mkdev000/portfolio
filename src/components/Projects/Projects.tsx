import taskManagerImg from "../../assets/images/projects/task-manager.jpg";
import sportsPlatformImg from "../../assets/images/projects/sports-platform.jpg";
import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";

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
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-gray-200 shadow-sm p-6 lg:p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className={`overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[320px] object-cover transition duration-500 hover:scale-105" />

      </div>

      <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>

        <h3 className="text-3xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-5 text-gray-600 leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">

          {project.technologies.map((tech: string) => {
            const Icon = techIcons[tech as keyof typeof techIcons]?.icon;
            const color = techIcons[tech as keyof typeof techIcons]?.color;

            return (
              <span
                key={tech}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm">
                {Icon && <Icon color={color} size={16} />}
                {tech}
              </span>
            );
          })}

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={project.demo}
            target="_blank"
            className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
            Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition">
            GitHub
          </a>

        </div>

      </div>

    </div>
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
    <section
      id="projects"
      className="w-full px-4 sm:px-8 xl:px-[6%] py-10 scroll-mt-20 mb-24"
    >
      <h4 className="text-center mb-2 text-lg">
        Explora mis
      </h4>

      <h2 className="text-center text-5xl font-semibold">
        Proyectos
      </h2>

      <p className="text-center mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
        Una selección de proyectos que reflejan mi evolución como desarrollador web. Cada uno de ellos ha sido diseñado para poner en práctica tecnologías modernas y resolver problemas reales mediante soluciones escalables y bien estructuradas.
      </p>

      <div className="max-w-6xl mx-auto mt-16 flex flex-col gap-16">

        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}

      </div>

    </section>
  );
}

export default Projects;