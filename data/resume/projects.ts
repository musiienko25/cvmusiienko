import { Section } from "../types";

const projects: Section = {
  title: "PROJECTS",
  subsections: [
    {
      title: "Amplify",
      titleHref: "https://amplify.com/",
      description: "Electron, React.js, Redux, Node, Express, MongoDB",
      body: [
        {
          type: "list",
          items: [
            "Creation of new lessons and functionality for them by type.",
            "Working with connecting third-party libraries.",
            "Participation in the creation of architecture",
            "Development of reusable components according to design",
            "Integrated an editor where you can draw.",
            "Developed a scientific calculator that acts as an assistant when performing any task.",
            "Implementation of tests and various steppers, where the result is summarized and given.",
            "Implemented autosave in the editor. After a certain time, the information entered by the student is automatically saved"
            ],
        },
      ],
    },
    {
      title: "Rakwireless",
      description: "Electron, React.js, Redux",
      body: [
        {
          type: "list",
          items: [
            "Building an app from scratch",
            "Writing reusable components",
            "Working with the webpack project builder, adding new modules to it",
            "Creation of architecture",
            "Writing terminal commands",
            "Switching between several such devices",
            "Various settings"
            ],
        },
      ],
    },
    {
      title: "Eucerin",
      description: "HTML, CSS, React, JS, Node, Express, PostgreSQL",
      body: [
        {
          type: "list",
          items: [
            "Back-end architecture",
            "Working with API",
            "Adaptive layout",
            "Participation in the development of the admin panel",
            "Bug ﬁxing, improving functionality",
            "Working with CMS",
            "Switching between several such devices",
            "Testing, supporting and updating data"
            ],
        },
      ],
    },
    {
      title: "Fit4you",
      // titleHref: "https://github.com/debkh/juken",
      description: "React, Redux, HTML, CSS, Framer Motion, Material UI",
      body: [
        {
          type: "list",
          items: [
            "Creating fitness SPA from scratch",
            "Creation of architecture",
            "Working with API",
            "Integrated new services into applications",
            "Developed authorization, search, reusable components, implemented video communication using libraries",
            "Implemented video communication using the Twilio library",
            "Implementation of a search for a coach in the entire database with filtering",
            "Authorization and writing reusable components"
            ],
        },
      ],
    },
  ],
};

export default projects;