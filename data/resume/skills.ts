import {Section} from "../types";

const skills: Section = {
  title: "SKILLS",
  subsections: [
    {
      title: "★★★★★",
      description: "I am confident with these technologies",
      body: [
        {
          type: "pills",
          items: [
            "JavaScript",
            "TypeScript",
            "React",
            "HTML5",
            "CSS3",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Mongoose",
            "Lodash",
            "Git",
            "Docker",
            "Docker Compose",
            "SCSS",
            "Styled Components",
            "Testing",
            "Jest",
            "ES6",
            "REST API",
            "Tailwind CSS",
            "Bootstrap",
            "Material UI",
          ],
        },
      ],
    },
    {
      title: "★★★★",
      description:
        "I am familiar with these technologies, but need some practice",
      body: [
        {
          type: "pills",
          items: [
            "Next.js",
            "Redux",
            "MobX",
            "Node.js",
            "JWT",
            "ExpressJS",
            "Mocha",
            "Firebase",
          ],
        },
      ],
    },
    {
      title: "★★★",
      description:
        "I worked with these technologies in the past, but need some time to remember",
      body: [
        {
          type: "pills",
          items: [
            "PHP",
            "Laravel",
          ],
        },
      ],
    },
  ],
};

export default skills;