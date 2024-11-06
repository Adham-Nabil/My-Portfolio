import project1 from "../assets/projects/portfolio.png";
import project2 from "../assets/projects/chat.png";
import Depi from "../assets/Experience/DEPI.png";
import Manara from "../assets/Experience/manara.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting iteractive and user-friendly web applications. With 1 year of experience, I have improved my skills in front-end technologies like React, and also learnt basics of back-end technologies like Node.js, MongoDB, Express. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. With 1 year of experience, I have worked with a technologies, like React, HTML & CSS, JavaScript, NodeJs, Express, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges, My Goal is to become a MERN Stack developer. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    image: Depi,
    role: "React Web Developer",
    company: "Digital Egypt Pioneers Initiative",
    description: `An internship where i Learnt alot about front-end and some about back-end. I worked on many tasks and made a Graduation Real-time Chat applicaiton project working on a team as a front-end developer`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Git & Github",
    ],
  },
  {
    image: Manara,
    role: "Frontend Engineering with React",
    company: "Manara Tech",
    description: `Took this self-paced learning path to strength my knowledge and understanding to front-end web development`,
    technologies: ["HTML", "CSS","Git & Github","JavaScript", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "An amazing personal portfolio website showcasing projects, experience, and contact information.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Real-time Chat App",
    image: project2,
    description:
      "An application for chatting, with features such as real-time chat messaging, user authentication, profile settings , room creating and add user to a room.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "Socket.io",
    ],
  },
];

export const CONTACT = {
  address: "Banha City, Qalyubia Governorate, Egypt",
  phoneNo: "+20 120 386 8497",
  email: "adhammohammed151@gmail.com",
};
