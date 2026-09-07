export const translations = {
  es: {
    navbar: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      habilidades: "Habilidades",
      proyectos: "Proyectos",
      contactame: "Contáctame",
    },
  },
  en: {
    navbar: {
      inicio: "Home",
      sobreMi: "About",
      habilidades: "Skills",
      proyectos: "Projects",
      contactame: "Contact me",
    },
  },
};

export type Language = keyof typeof translations;