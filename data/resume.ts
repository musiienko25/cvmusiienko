import { Resume } from "./types";

import education from "./resume/education";
import experiences from "./resume/experiences";
import projects from "./resume/projects";
import publications from "./resume/publications";
import skills from "./resume/skills";
import about from "./resume/about";

const resume: Resume = {
  name: "Oleksii Musiienko",
  image: "/avatar.webp",
  title: "Full-Stack Developer",
  sections: [
    about,
    education,
    experiences,
    projects,
    // publications,
    skills,
  ],
};

export default resume;
