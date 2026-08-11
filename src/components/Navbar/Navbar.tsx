import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-5 sm:px-8 xl:px-[6%] py-4 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-lg shadow-sm"
        : "bg-transparent"
        }`}
    >
      {/* LOGO */}
      <div className="flex items-center min-[950px]:flex-1">
        <a href="#inicio">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight cursor-pointer whitespace-nowrap">
            Kevin Mecinas
          </h2>
        </a>
      </div>

      {/* MENÚ ESCRITORIO - SOLO DESDE 950px */}
      <ul className="hidden min-[950px]:flex items-center gap-6 px-8 py-3.5 rounded-full bg-white/90 backdrop-blur-lg shadow-sm font-medium">
        <li>
          
            <a href="#inicio"
            className="cursor-pointer transition-colors hover:text-gray-500"
          >
            Inicio
          </a>
        </li>

        <li>
          
            <a href="#about"
            className="cursor-pointer transition-colors hover:text-gray-500"
          >
            Sobre mí
          </a>
        </li>

        <li>
          
            <a href="#skills"
            className="cursor-pointer transition-colors hover:text-gray-500"
          >
            Habilidades
          </a>
        </li>

        <li>
          
            <a href="#projects"
            className="cursor-pointer transition-colors hover:text-gray-500"
          >
            Proyectos
          </a>
        </li>

        <li>
          
            <a href="https://github.com/mkdev000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 cursor-pointer transition-colors hover:text-gray-500"
          >
            <FaGithub className="text-base" color="#181717" />
            GitHub
          </a>
        </li>

        <li>
          
            <a href="https://www.linkedin.com/in/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 cursor-pointer transition-colors hover:text-gray-500"
          >
            <FaLinkedin className="text-base" color="#0A66C2" />
            LinkedIn
          </a>
        </li>
      </ul>

      {/* CONTROLES DERECHA */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 min-[950px]:flex-1 min-[950px]:justify-end">

        {/* GITHUB MÓVIL/TABLET */}
        
          <a href="https://github.com/TU_USUARIO"
          target="_blank"
          rel="noopener noreferrer"
          className="block min-[950px]:hidden cursor-pointer"
        >
          <FaGithub className="text-xl" color="#181717" />
        </a>

        {/* LINKEDIN MÓVIL/TABLET */}
        
          <a href="https://www.linkedin.com/in/TU_USUARIO"
          target="_blank"
          rel="noopener noreferrer"
          className="block min-[950px]:hidden cursor-pointer"
        >
          <FaLinkedin className="text-xl" color="#0A66C2" />
        </a>

        {/* MODO OSCURO */}
        <button
          aria-label="Cambiar tema"
          className="cursor-pointer text-[#1F1F1F]"
        >
          <FaMoon className="text-lg" />
        </button>

        {/* IDIOMA */}
        <button className="w-6 cursor-pointer font-medium text-[#1F1F1F]">
          ES
        </button>

        {/* MENÚ HAMBURGUESA */}
        <button
          className="min-[950px]:hidden ml-1 cursor-pointer text-[#1F1F1F]"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>

        {/* BOTÓN CONTACTAR - SOLO DESDE 950px */}
        
          <a href="#contacto"
          className="hidden min-[1180px]:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4 group transition-colors duration-300"
        >

          Contáctame
          <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL/TABLET */}
      {menuOpen && (
        <ul className="min-[950px]:hidden absolute top-full right-4 sm:right-5 mt-3 w-[calc(100vw-2rem)] max-w-64 flex flex-col gap-5 py-8 px-8 rounded-2xl bg-white/95 backdrop-blur-lg shadow-lg font-medium">
          <li>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Inicio
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Habilidades
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
          </li>

          <li>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>
              Contáctame
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;