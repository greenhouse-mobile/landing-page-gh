import type {Translatable} from "../models/Translatable.ts";
import type {TeamMember} from "../models/TeamMember.ts";

interface AboutUsData {
  title: string;
  project: {
    title: string;
    description: string;
  },
  team: {
    title: string;
    description: string;
  },
  carouselTitle: string,
  members: Array<TeamMember>;
}

export const aboutStrings: Translatable<AboutUsData> = {
  en: {
    title: "About",
    project: {
      title: "About the project",
      description: "Greenhouse seeks to offer an advanced technological solution to the mushroom industry in Peru."
    },
    team: {
      title: "About the team",
      description: "Integradis seeks to offer an advanced technological solutions in Peru."
    },
    carouselTitle: "Members",
    members: [
      {
        name: "Alan Galavis",
        description: "I am a detail oriented, design-minded software engineering student. My goal is to develop functional and scalable software solutions.",
        githubUrl: "https://github.com/alanegd",
        linkedinUrl: "https://www.linkedin.com/in/alan-galavis/"
      },
      {
        name: "Andrés Soto",
        description: "I am capable of working under pressure and solving problems efficiently.",
        githubUrl: "https://github.com/asotito",
        linkedinUrl: "https://www.linkedin.com/in/andres-soto-0429a127b/"
      },
      {
        name: "Carlo Seminario",
        description: "I am capable of identifying and proposing solutions to problems.",
        githubUrl: "https://github.com/CarloLSG",
        linkedinUrl: "https://www.linkedin.com/in/carlo-luca-seminario/"
      },
      {
        name: "Eric Cuevas",
        description: "I am a responsible and colaborative person. I have participated in front-end and back-end development projects.",
        githubUrl: "https://github.com/Ericcuevas03",
        linkedinUrl: "http://www.linkedin.com/in/ericcuevasrios"
      },
      {
        name: "Lucero Obispo",
        description: "I consider myself an empathetic, organized and committed person, which allows me to successfully colaborate on team software development projects.",
        githubUrl: "https://github.com/LuceroObispoRios",
        linkedinUrl: "http://www.linkedin.com/in/luceroobispo"
      },
      {
        name: "Nicolás Espinoza",
        description: "I have been studying software engineering at the UPC since 2021. I consider myself a creative and imaginative person.",
        githubUrl: "https://github.com/EspinozaNaer",
        linkedinUrl: "https://www.linkedin.com/in/nicol%C3%A1s-espinoza-394b84225/"
      },
    ]
  },
  es: {
    title: "Acerca de",
    project: {
      title: "Acerca del proyecto",
      description: "Greenhouse busca ofrecer una solución tecnológica avanzada dirigidada a la industria champiñonera del Perú."
    },
    team: {
      title: "Acerca de nosotros",
      description: "Integradis busca ofrecer soluciones tecnológicas avanzadas en Peru."
    },
    carouselTitle: "Miembros",
    members: [
      {
        name: "Alan Galavis",
        description: "Soy un estudiante de ingeniería de software detallista y orientado al diseño. Mi objetivo es desarrollar soluciones de software funcionales y escalables.",
        githubUrl: "https://github.com/alanegd",
        linkedinUrl: "https://www.linkedin.com/in/alan-galavis/"
      },
      {
        name: "Andrés Soto",
        description: "Soy capaz de trabajar bajo presión y resolver problemas eficientemente.",
        githubUrl: "https://github.com/asotito",
        linkedinUrl: "https://www.linkedin.com/in/andres-soto-0429a127b/"
      },
      {
        name: "Carlo Seminario",
        description: "Soy capaz de identificar y proponer soluciones a problemas.",
        githubUrl: "https://github.com/CarloLSG",
        linkedinUrl: "https://www.linkedin.com/in/carlo-luca-seminario/"
      },
      {
        name: "Eric Cuevas",
        description: "Soy una persona responsable y colaborativa. He participado en proyectos de desarrollo front-end y back-end.",
        githubUrl: "https://github.com/Ericcuevas03",
        linkedinUrl: "http://www.linkedin.com/in/ericcuevasrios"
      },
      {
        name: "Lucero Obispo",
        description: "Me considero una persona empática, organizada y comprometida, lo que me permite colaborar exitosamente en proyectos de desarrollo de software en equipo.",
        githubUrl: "https://github.com/LuceroObispoRios",
        linkedinUrl: "http://www.linkedin.com/in/luceroobispo"
      },
      {
        name: "Nicolás Espinoza",
        description: "Estudio ingeniería del software en la UPC desde 2021. Me considero una persona creativa e imaginativa.",
        githubUrl: "https://github.com/EspinozaNaer",
        linkedinUrl: "https://www.linkedin.com/in/nicol%C3%A1s-espinoza-394b84225/"
      },
    ]
  }
}