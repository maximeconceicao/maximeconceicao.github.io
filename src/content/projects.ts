import type { Project } from "@/lib/types";
import {
  BriefcaseBusiness,
  Origami,
  Palette,
  Sprout,
  User,
} from "lucide-react";

export const projects: Project[] = [
  {
    name: "about",
    title: "QUI SUIS-JE ?",
    subtitle: "Développeur Full Stack JS/TS",
    description:
      "J'aime construire des produits simples et intuitifs. Je travaille principalement avec React et NestJS.",
    icon: User,
    color: "chart-1",
    period: "1997 - auj.",
    tags: ["Work in progress"],
    links: [
      {
        name: "README.md",
        url: "https://github.com/maximeconceicao#",
      },
      {
        name: "CV",
        url: "/files/CV-MAXIME-CONCEICAO.pdf",
      },
    ],
  },
  {
    name: "digital-garden",
    title: "DIGITAL GARDEN",
    subtitle: "Un espace pour penser, créer, relier",
    description:
      "Ce jardin regroupe mes notes et mes réflexions sur des sujets aussi variés que la tech, la musique ou la spiritualité.",
    icon: Sprout,
    color: "chart-2",
    period: "2025 - auj.",
    tags: ["Website", "Astro"],
    links: [
      {
        name: "Digital Garden",
        url: "https://maximeconceicao.github.io/temple-of-reflection/",
      },
      {
        name: "Digital Garden sur Github",
        url: "https://github.com/maximeconceicao/temple-of-reflection",
      },
    ],
  },
  {
    name: "zendō",
    title: "ZENDŌ",
    subtitle: "Carnet de méditation",
    description:
      "Zendō est une petite application de suivi de méditation, conçue pour observer ses habitudes et progresser dans sa pratique.",
    icon: Origami,
    color: "chart-3",
    period: "2025 - auj.",
    tags: ["Mobile App", "React Native"],
    links: [
      {
        name: "Zendō sur Github",
        url: "https://github.com/maximeconceicao/zendo",
      },
    ],
  },
  {
    name: "portfolio",
    title: "PORTFOLIO",
    subtitle: "Comme un air de déjà-vu",
    description:
      "J'espère que vous appréciez parcourir ce portfolio. Au fait, avez-vous trouvé tous les easter eggs ?",
    icon: BriefcaseBusiness,
    color: "chart-4",
    period: "2025",
    tags: ["Website", "Astro"],
    links: [
      {
        name: "Portfolio",
        url: "https://www.youtube.com/watch?v=yRKh34Ofg50",
      },
      {
        name: "Portfolio sur Github",
        url: "https://github.com/maximeconceicao/maximeconceicao.github.io",
      },
    ],
  },
  {
    name: "processing",
    title: "PROCESSING",
    subtitle: "Découverte du creative coding",
    description:
      "J'ai débuté le code créatif avec Processing. Certains de mes anciens sketches sont disponibles sur OpenProcessing.org.",
    icon: Palette,
    color: "chart-5",
    period: "2019 - 2021",
    tags: ["Generative art", "p5.js"],
    links: [
      {
        name: "Sketches sur OpenProcessing",
        url: "https://openprocessing.org/user/416730?o=1&view=sketches",
      },
    ],
  },
];
