import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import fotoPerfil from "../../assets/images/foto-perfil.jpg";


function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-8 pt-24"
    >

      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={fotoPerfil}
            alt="Foto de Kevin"
            className="w-36 h-36 rounded-full object-cover border-2 border-gray-50"
          />
        </motion.div>

        <motion.p
          className="text-lg sm:text-2xl text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          ¡Hola! Soy Kevin Mecinas Jiménez
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          Desarrollador Web
        </motion.h1>

        <motion.p
          className="text-base sm:text-xl text-gray-700 leading-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          Enfocado en crear interfaces limpias, rápidas y usables. Construyo soluciones digitales utilizando React y Node.js, apoyándome en tecnologías modernas para desarrollar proyectos completos. Actualmente busco unirme a un equipo donde pueda seguir creciendo profesionalmente y aportar valor desde el primer día.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <motion.a
            href="#contacto"
            className="group flex items-center gap-2 bg-black text-white px-10 py-3 rounded-full font-medium transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.15 }}
          >
            Contáctame
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 border border-gray-500 px-10 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Descargar CV
            <FaDownload />
          </motion.a>
        </div>

      </div>
    </section>
  );
}

export default Hero;