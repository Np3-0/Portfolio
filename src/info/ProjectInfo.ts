import eosus1 from "../assets/spinner/1.svg";
import eosus2 from "/eosus2.png";
import eosus3 from "/eosus.png"
import eosus4 from "/eosus4.png"
import tavio1 from "../assets/spinner/2.svg";
import tavio3 from "/tavio.png";
import pitk from "/pitk.png";
import pitk3 from "/pitk3.png";
import walkmini from "../assets/spinner/4.svg";
import walkmini3 from "/walkmini3.png";


const ProjectInfo = [
    {
        title: "Eosus",
        colors: [
            "#111827",
            "#902D41",
            "#D8DBE2"
        ],
        statement: "Eosus is a web application built to increase community awareness of natural disasters and provide real-time information.",
        skills: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
        design: "Eosus was built to be simple and intuitive, with a focus on putting information at the forefront. The color scheme was chosen to not take away a user's attention from the info on the page.",
        debug: `Eosus was the first full-stack website I built, so I had to create my own processes for debugging. When an issue occurred, I would try to isolate variables, until I could find the issue. 
            Then, I would do research to determine how I could possibly fix the issue. For example, there was an issue with uploading images. By isolating, I found out that my authentication tokens were
            not generating properly. To fix this, I learned how to ensure that the user said who they were, by checking each time they loaded a page.`,
        link: "https://github.com/Np3-0/Eosus",
        images: [eosus1, eosus2, eosus3, eosus4],
        image_captions: ["N/A", "Delete's a user's comments.", "N/A", "Makes sure user is logged in."]
    },
    {
        title: "Tavio",
        colors: [
            "#E7E7E7",
            "#2364AA",
            "#131313"
        ],
        statement: "Tavio is a mobile application designed to make it easier for visually-impaired users to find and order from restaurants.",
        skills: ["Flutter", "Dart", "Python", "AWS"],
        design: "Tavio was built with accessibility being the foundation of the experience. Using data from the Perkins School for the Blind, we kept with using high contrast and vibrant colors, such as white, black, and blue.",
        debug: `Compared to my other projects, Tavio was the most difficult to debug, since this was my first experience with Flutter. I spent countless hours looking at documentation and experimenting with features to fix key errors.
            For example, I focused a lot of debugging on voice control. The packages I were using had little documentation, so I spent a lot of time trying out different combinations to see what would work.`,
        link: "https://github.com/Np3-0/Tavio-Frontend",
        images: [tavio1, eosus2, tavio3, eosus4],
        image_captions: ["N/A", "Sending post to database to be posted.", "N/A", "Makes sure user is logged in."]
    },
    {
        title: "Please Impress the King",
        colors: [
            "#7EB4FE",
            "#FCE837",
            "#EFF6FE"
        ],
        statement: "Please Impress the King is a 2D RPG game where you take the role of a civilian, who meets diverse characters in order to become a knight.",
        skills: ["Unity", "C#", "Blender"],
        design: "Please Impress the King was meant to be fun and get the user invested into the story. Taking interest from media such as Monty Python, we made designs with a focus on comedic value, in order to make the game more enjoyable.",
        debug: `This game was developed very rapidly, meaning features were changed constantly. Debugging often consisted of looking for conflicts between code, and trying to mitigate the issues.
            One example is that the fighting system would overwrite actions in the main game, causing a multitude of issues. This was solved by coding states in, which ensured the scene that the player was in. `,
        link: "https://github.com/Np3-0/2026-SkillsUSA-Submission",
        images: [pitk, eosus2, pitk3, eosus4],
        image_captions: ["N/A", "Sending post to database to be posted.", "N/A", "Makes sure user is logged in."]
    },
    {
        title: "Walk-Mini",
        colors: [
            "#C537CC",
            "#AA2AAA",
            "#FFDB83"
        ],
        statement: "Walk-Mini is a fully custom built music player that allows users to have a personalized way to enjoy their music collection.",
        skills: ["C++", "KiCAD", "CAD", "Soldering"],
        design: "Walk-Mini's main goal was personalization. I programmed multiple themes, and all files are available for users to modify, meaning they can make the changes they want.",
        debug: `Compared to the other projects, Walk-Mini is hardware-based. This meant that most of my time was spent developing a PCB. With this, documentation on parts can be sparse,
            so I had to do extensive research in order to make sure I would not cause any major issues with my design. Specifically, I had to look through multiple datasheets to ensure
            that I was using the correct resistors for certain components.`,
        link: "https://github.com/Np3-0/walkmini",
        images: [walkmini, eosus2, walkmini3, eosus4],
        image_captions: ["N/A", "Sending post to database to be posted.", "Photo of the PCB", "Makes sure user is logged in."]
    }
]

export default ProjectInfo;