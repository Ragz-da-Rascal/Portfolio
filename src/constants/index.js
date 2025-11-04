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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Developer",
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
    title: "UI/UX Designer",
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "AI Trainer",
    company_name: "Data Annotation",
    icon: starbucks, // Replace with your company logo
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Enhanced artificial reasoning in complex applications by refining data-driven responses with a focus on Clean Code standards and performance optimization.",
      "Refined chatbot-generated responses to meet industry standards, integrating principles of UI/UX Design to improve clarity and effectiveness.",
      "Collaborated on training large language models with an emphasis on performance and accuracy.",
      "Demonstrated attention to debugging and effective analysis in fast-paced environments.",
    ],
  },
  {
    title: "Certificate in Computer Information Science",
    company_name: "El Camino College",
    icon: tesla, // Replace with school logo
    iconBg: "#E6DEDD",
    date: "Completed May 2023",
    points: [
      "Completed comprehensive coursework in computer science fundamentals.",
      "Gained practical experience in software development methodologies.",
      "Developed strong foundation in data structures and algorithms.",
      "Applied theoretical knowledge to real-world programming projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jaron's attention to detail and clean code practices made our project a success.",
    name: "Sarah Chen",
    designation: "Project Manager",
    company: "Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Exceptional problem-solving skills and great communication throughout the project.",
    name: "Michael Rodriguez",
    designation: "Senior Developer",
    company: "Digital Innovations",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Delivered a responsive, user-friendly application that exceeded our expectations.",
    name: "Lisa Wang",
    designation: "UX Designer",
    company: "Creative Agency",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "All-American Eats",
    description:
      "Full-featured restaurant website with menu display, shopping cart, and order placement functionality. Integrated Firebase database for real-time updates and email notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace with your project screenshot
    source_code_link: "https://github.com/yourusername/react-meals",
    live_link: "https://allamericaneats.vercel.app/",
  },
  {
    name: "NYT Archived Crosswords",
    description:
      "Interactive crossword puzzle application featuring random puzzle generation, Stripe payment integration, offline support, and responsive dark/light theme toggle.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "pwa",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace with your project screenshot
    source_code_link: "https://github.com/ragz-da-rascal/Archived-NYT-Crosswords",
    live_link: "https://ragz-da-rascal.github.io/Archived-NYT-Crosswords/",
  },
];

export { services, technologies, experiences, testimonials, projects };