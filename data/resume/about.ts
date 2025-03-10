import { Section } from "../types";

const about: Section = {
  title: "ABOUT",
  subsections: [
    {
      body: [
        {
          type: "list",
          items: [
            // {
            //   type: "link",
            //   text: "dmytro-oplachko.com",
            //   href: "https://dmytro-oplachko.com",
            // },
            {
              type: "paragraph ",
              items: [
                { type: "important", text: "Github: " },
                {
                  type: "link",
                  text: "github.com/musiienko25",
                  href: "https://github.com/musiienko25",
                },
              ],
            },
            
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Last Updated: " },
                "Apr 1, 2023",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default about;