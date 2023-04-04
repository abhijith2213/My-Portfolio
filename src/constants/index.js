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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  DLogo,
  avalon,
  pap,
  events,
  talentf,
  ecommerce,
  threejs,
  nextjs,
  bootstrap,
} from "../assets"

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
  {
    id: "linkedIn",
    title: "LinkedIn",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Designing",
    icon: creator,
  },
]

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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
]

const experiences = [
  {
    title: "Digital-Marketing Intern",
    company_name: "WHOLE ONE TECH ENTERPRISEINDIA LLP",
    icon: DLogo,
    iconBg: "#E6DEDD",
    date: "March 2021 - Sep 2021",
    points: [
      "Learned the basics of digital Marketing and tools.",
      "Get part in some projects to assist the lead as a web designer and social-media marketing.",
      "Gained th knowledge about how the digital marketing works and its importance in current era.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Pack-a-Peer pvt Ltd",
    icon: pap,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Learned about latest web development technologies in MERN domain by doing several projects.",
      "Developed Two web applications using React.js and other related technologies.",
      "All the projects are under proper guidence of industrial experts for maintaining current standards.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "AvalonTribe Infotech",
    icon: avalon,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility with real-time data handling.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "Currently all testimonials are random contents. You can share your thoughts with me.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Allusers shown here is displayed using random api datas.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I Like to optimize your website , and build good attractive websites for your business!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Events App",
    description:
      "This is an web based application which users can see events in different places and register for that events. This project is still not completed and under work. I plan to add more features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: events,
    source_code_link: "https://github.com/abhijith2213/Event-App",
  },
  {
    name: "Talentf",
    description:
      "Web application that enables users to search for freelance job openings, and also share there thoughts like social-media. Also have realtime chatting and profile management. ",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "socket-io",
        color: "green-text-gradient",
      },
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo-db",
        color: "orange-text-gradient",
      },
    ],
    image: talentf,
    source_code_link: "https://github.com/abhijith2213/talentf",
  },
  {
    name: "Ecommerce",
    description:
      "This is an furniture ecommerce application. Have implemented all ecorce features and payment gateway integrations.Admin side for product and offer managements",
    tags: [
      {
        name: "Express Js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo db",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap css",
        color: "pink-text-gradient",
      },
      {
        name: "HBS",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/abhijith2213/Muebles-Ecommerce",
  },
]

export { services, technologies, experiences, testimonials, projects }
