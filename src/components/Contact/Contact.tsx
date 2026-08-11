import { FiMail, FiArrowRight, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



    setLoading(true);

    try {
      await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setError(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch {
      setSuccess(false);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);

    } finally {
      setLoading(false);
    }
  };


  return (

    <motion.section
      id="contacto"
      className="w-full px-4 sm:px-8 xl:px-[6%] py-10 scroll-mt-20 mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >

      <h2 className="text-center text-5xl font-semibold">
        Contáctame
      </h2>

      <p className="text-center mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
        Si tienes alguna pregunta, consulta o feedback, no dudes en contactarme.
      </p>

      <motion.div
        className="max-w-3xl mx-auto mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              required
              placeholder="Introduce tu nombre"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
            />

            <input
              type="email"
              required
              placeholder="Introduce tu correo electrónico"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          <textarea
            required
            rows={7}
            placeholder="Introduce tu mensaje"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-black transition"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-fit mx-auto flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,0.15)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : <>Enviar <FiArrowRight /></>}
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium mt-4">
              Formulario enviado con éxito.
            </p>
          )}

          {error && (
            <p className="text-red-600 text-center font-medium mt-4">
              Ha ocurrido un error. Inténtalo de nuevo.
            </p>
          )}

        </form>

        <div className="flex items-center justify-center gap-2 mt-10 text-gray-600">
          <FiMail className="text-lg" />
          <span>kevin009673@gmail.com</span>
        </div>

      </motion.div>

      <motion.div
        className="flex items-center justify-between mt-16 pt-6 border-t border-gray-200 text-sm text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >

        <div className="flex items-center gap-1.5">
          <span>Desarrollado por Kevin</span>
          <FiHeart className="text-pink-400" />
        </div>

        <div className="flex items-center gap-5">

          <a href="https://github.com/mkdev000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-600 visited:text-gray-600 hover:text-black transition">
            <FaGithub className="text-base" color="#181717" />
            GitHub
          </a>

          <a href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-600 visited:text-gray-600 hover:text-black transition"
          >
            <FaLinkedin className="text-base" color="#0A66C2" />
            LinkedIn
          </a>
        </div>

      </motion.div>

    </motion.section>
  );
}

export default Contact;