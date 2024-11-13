import { generateParagraph, randomCaesarCipher } from "@/helpers/utils";
import { Project } from "@/helpers/types";

const hiddenMessages =
  "Yes, it was indeed a hidden message. I don't really know if this is what you were looking for but here it is. Feels a bit awkward now. Do you like ping pong? me, not too much";

const state = {
  projects: [
    {
      name: "blog",
      title: "BLOG",
      subtitle: "A little blog about guitar",
      description:
        "Besides web development, I'm learning guitar. I created this Astro.js blog as a sort of logbook for my musical journey.",
      mediaUrl: require("../../assets/images/blog.jpg"),
      mediaType: "image",
      tags: [],
      links: [
        {
          name: "Blog Website",
          url: "https://maximeconceicao.github.io/blog",
        },
        {
          name: "Blog on Github",
          url: "https://github.com/maximeconceicao/blog",
        },
      ],
    },
    {
      name: "reading-room",
      title: "READING ROOM",
      subtitle: "A tiny voice-controlled <br> note-taking app",
      description:
        "Reading Room was an experiment to create a WebSocket client intended to be used with the open-source Vosk Server from Alpha Cephei.",
      mediaUrl: require("../../assets/videos/reading-room.mp4"),
      mediaType: "video",
      tags: [],
      links: [
        {
          name: "Reading Room on Github",
          url: "https://github.com/maximeconceicao/reading-room",
        },
      ],
    },
    {
      name: "portfolio",
      title: "PORTFOLIO",
      subtitle: "Like a sense of deja vu",
      description:
        "I hope you enjoy browsing this portfolio. By the way, have you found all the easter eggs?",
      mediaUrl: require("../../assets/videos/portfolio.mp4"),
      mediaType: "video",
      links: [
        {
          name: "Sweet Portfolio on Github",
          url: "https://github.com/maximeconceicao/maximeconceicao.github.io",
        },
        {
          name: "Sweet Portfolio Website",
          url: "https://www.youtube.com/watch?v=yRKh34Ofg50",
        },
      ],
      tags: [],
    },
    {
      name: "processing",
      title: "PROCESSING",
      subtitle: "First steps in the world <br> of creative coding",
      description:
        "I started creative coding by learning basic concepts and exploring things through Processing. You can find some of my old sketches on OpenProcessing.org.",
      mediaUrl: require("../../assets/images/waves.png"),
      mediaType: "image",
      links: [
        {
          name: "Sketches on OpenProcessing",
          url: "https://openprocessing.org/user/416730?o=1&view=sketches",
        },
      ],
      tags: [],
    },
    {
      name: "wip",
      title: "??? (WIP)",
      subtitle: generateParagraph(3),
      description: randomCaesarCipher(hiddenMessages),
      mediaUrl: require("../../assets/videos/glitch.mp4"),
      mediaType: "video",
      tags: [],
    },
  ],
};

const getters = {
  getProjectByName:
    (state: { projects: Project[] }) => (projectName: string) => {
      return state.projects.find(
        (project: Project) => project.name === projectName
      );
    },
};

export default {
  namespaced: true,
  state,
  getters,
};
