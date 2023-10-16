import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  netflixclone,
  threejs,
  cardeals,
  portfolio

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Website",
    icon: web,
  },
  {
    title: "React js Developer",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Web Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];


const projects = [
  {
    name: "DL-CARS",
    description:
      "This is a website for a car deals made with website template from www.PHPJabber.com.I aaded 3d models and animations for better view",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",
      },
    ],
    image: cardeals,
    source_code_link: "https://github.com/sahlairsha/DL-CARS",
  },
  {
    name: "Netflix Clone",
    description:
      "This is a netflix clone project that are made for my portfolio project with help of youtube tutorials (Brototype Malayalam Youtube Channel)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Html5",
        color: "green-text-gradient",
      },
    ],
    image: netflixclone,
    source_code_link: "https://github.com/sahlairsha/netflix-clone",
  },
  {
    name: "Portfolio",
    description:
      "This is a simple portfolio website for Irshad V by using Html5 , Css and Javascript.And  it is deployed in Netlify website.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "netlify",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/sahlairsha/irsha-portfolio.git",
  },
];

export { services, technologies, projects };
