import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaInstagram,
  FaLinkedin,
  FaBrain,
  FaProjectDiagram,
  FaServer,
  FaDatabase,
  FaFigma,
  FaLaptopCode,
} from 'react-icons/fa';
import MicrosoftExcel from '../assets/Images/Excel.png';
import { FaBook } from 'react-icons/fa';
import {BiLogoJavascript} from "react-icons/bi";
import { MdHome } from 'react-icons/md';
import { SiTailwindcss, 
         SiMongodb, 
         SiExpress, 
         SiGithub, 
         SiMysql, SiPython, 
         SiPostman, 
         SiFigma, 
         SiLeetcode, 
         SiGeeksforgeeks,
         SiApache
        } from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc';
import { FaGitAlt, FaDribbble } from 'react-icons/fa';
//import { MdGroup3 } from 'react-icons/md';

import travel from '../assets/Images/Travel.jpg';
import weather from '../assets/Images/Weather.png';
import football from '../assets/Images/FootBall_Match_Prediction.jpg';
import ecommerce from '../assets/Images/Ecommerce_Web.jpg';
import event from '../assets/Images/Event.jpg';
import linkedin from '../assets/Images/LinkedIn.jpg';

import caratlane from '../assets/Images/caratlane.png';
import alpixn from '../assets/Images/alpixn.png';

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -70, to: "hero" },
  { id: "02", label: "About Me", offset: -70, to: "about" },
  { id: "03", label: "Education", offset: -70, to: "education"},
  { id: "04", label: "Skills", offset: -70, to: "skills"},
  { id: "05", label: "Projects", offset: -70, to: "projects"},
  { id: "06", label: "Certificates", offset: -70, to: "certificates"},
  { id: "07", label: "Internships", offset: -70, to: "internships"},
  { id: "08", label: "Contact", offset: -70, to: "contact"},
];

export const STATS = [
  //{ id: "01", count: "Student", label: "Years Of Experience" },
  { id: "02", count: "08", label: "Certifications \nEarned" },
  { id: "03", count: "06", label: "Projects \nCompleted" },
  //{ id: "04", count: "00", label: "Happily \n Clients"},
];

export const SKILLS = [
  {
    icon: FaReact,
    color: "text-cyan-800",
    title: "Frontend Development",
    items: ["React JS", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: FaServer,
    color: "text-green-700",
    title: "Backend Development",
    items: ["Node JS", "Express JS"],
  },
  {
    icon: FaDatabase,
    color: "text-blue-900",
    title: "Database Technologies",
    items: ["MongoDB", "MySQL"],
  },
  {
    icon: FaFigma,
    color: "text-pink-700",
    title: "UI/UX & Design",
    items: ["Figma", "Responsive Design", "Modern Layouts"],
  },
  {
    icon: FaGitAlt,
    color: "text-red-700",
    title: "Version Control & Collaboration",
    items: ["Git", "GitHub", "Branching", "Pull Requests"],
  },
  {
    icon: FaLaptopCode,
    color: "text-purple-700",
    title: "Development Environments",
    items: ["VS Code", "Eclipse IDE", "XAMPP"],
  },
  {
    icon: SiPostman,
    color: "text-orange-700",
    title: "API & Automation",
    items: ["Postman", "API Testing", "Automation Workflows"],
  },
  {
    icon: FaBook,
    color: "text-yellow-700",
    title: "Core & Soft Skills",
    items: ["Problem Solving", "Self Learning", "Analytical Thinking"],
  },
];

/*export const CERTIFICATES_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend & UI/UX", value: "frontend" },
  { id: "03", label: "Version Control & Tools", value: "tools" },
  { id: "04", label: "Data Structures", value: "dsa" },
  { id: "05", label: "Automation with Python", value: "automation" },
  { id: "06", label: "Artificial Intelligence", value: "ai" },
];*/

export const CERTIFICATES = [
  {
    id: "01",
    icon: FaReact,
    color: "text-cyan-800",
    name: "React JS",
    organization: "Scaler",
    link: "https://moonshot.scaler.com/s/sl/eH1LxFwn00",
    tags: ["React JS"],
    category: "frontend",
  },
  {
    id: "02",
    icon: SiFigma,
    color: "text-pink-700",
    name: "Figma",
    organization: "Udemy",
    link: "https://www.udemy.com/certificate/UC-5827d1fa-15a5-4a8a-90dc-f0f15e8d682e/",
    tags: ["UI/UX Design", "Prototyping"],
    category: "frontend",
  },
  {
    id: "03",
    icon: SiGithub,
    color: "text-red-700",
    name: "Version Control",
    organization: "Coursera",
    link: "https://coursera.org/share/2e84a51c6d1900e2288d27f4a3bf813f",
    tags: ["Git", "GitHub", "Collaboration"],
    category: "tools",
  },
  {
    id: "04",
    icon: SiPostman,
    color: "text-orange-700",
    name: "Postman API Fundamentals",
    organization: "Postman",
    link: "https://badgr.com/public/assertions/1eLWCUSZSRq_PY_hYXdyQQ",
    tags: ["API Testing", "Automation"],
    category: "tools",
  },
  {
    id: "05",
    icon: FaProjectDiagram,
    color: "text-blue-900",
    name: "Data Structures",
    organization: "Great Learning",
    link: "https://www.mygreatlearning.com/certificate/LNRHBUFZ",
    tags: ["Queue", "Stack", "Trees", "Graphs"],
    category: "dsa",
  },
  {
    id: "06",
    icon: SiPython,
    color: "text-green-700",
    name: "Google IT Automation with Python",
    organization: "Coursera",
    link: "",
    tags: ["Python", "Automation", "OS Interaction", "Scripting"],
    category: "automation",
  },
  {
    id: "07",
    icon: FaBrain,
    color: "text-yellow-700",
    name: "Artificial Intelligence",
    organization: "Infosys Springboard",
    link: "",
    tags: ["AI", "Machine Learning", "Data Science"],
    category: "ai",
  },
];

export const ABOUT_ME = {
  content: `I am a Computer Science student with a strong interest in full-stack development, Python-based automation, and AI technologies, with experience in Python, the MERN stack, and MySQL. I enjoy developing responsive, user-friendly applications and exploring how software can solve real-time problems, think intelligently, and build automated, data-driven systems. I also enjoy learning the latest technologies and applying them to real-world, scalable projects.`,
  socialLinks: [
    { id: "01", label: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/rajeshwari-r-cmc" },
    { id: "02", label: "Github", icon: SiGithub, link: "https://github.com/Rajeshwari1403"},
    { id: "03", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/it_z_rathi05/"},
    { id: "04", label: "Leetcode", icon: SiLeetcode, link: "https://leetcode.com/u/rajeshwariravi2005/"},
    { id: "05", label: "GeeksforGeeks", icon: SiGeeksforgeeks, link: "https://www.geeksforgeeks.org/user/rajeshwb6d9/"}
  ],

  email: "rajeshwari.cmc@gmail.com",
  phone: "+91 90809 15451",
  linkedin: "https://www.linkedin.com/in/rajeshwari-r-cmc",
  instagram: "https://www.instagram.com/it_z_rathi05/",
  github: "https://github.com/Rajeshwari1403",
  leetcode: "https://leetcode.com/u/rajeshwariravi2005/",
  geeksforgeeks: "https://www.geeksforgeeks.org/user/rajeshwb6d9/",
};

export const EDUCATION = [
  {
    id: "01",
    main: "COLLEGE",
    title: "College of Engineering, Guindy — Chennai",
    course: " M.Sc. (Integrated) - Computer Science",
    year: "2022 - 2027",
    cgpa: ""
  },
  {
    id: "02",
    main: "HSC",
    title: " Nazareth Matriculation Higher Secondary School — Avadi",
    course: "HSC in Tamil Nadu State Board Education",
    year: "2020 - 2022",
    percentage: "95.33%"
  },
  {
    id: "03",
    main: "SSLC",
    title: "Holy Immanuel Matriculation School — Avadi",
    course: " SSLC in Tamil Nadu State Board Education",
    year: "2015 - 2020",
    percentage: "90%"
  },
];

export const PROJECTS = [
  {
    id: "01",
    title:
    "Travel Diary Calendar",
    image: travel,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    link: "https://github.com/Rajeshwari1403/Travel_Diary_Calendar",
    deployed_link: "",
  },
  {
    id: "02",
    title:
    "Weather App",
    image: weather,
    tags: ["React JS", "Weather API"],
    link: "https://github.com/Rajeshwari1403/WeatherAPI",
    deployed_link: "https://weather-api-phi-lyart.vercel.app/",
  },
  {
    id: "03",
    title:
    "Ecommerce Website",
    image: ecommerce,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    link: "https://github.com/Rajeshwari1403/Ecommerce_web",
    deployed_link: "",
  },
  {
    id: "04",
    title:
    "Event Management Application",
    image: event,
    tags: ["HTML", "CSS", "MySql"],
    link: "https://github.com/Rajeshwari1403/Restro",
    deployed_link: "",
  },
  {
    id: "05",
    title:
    "Linkedin Clone",
    image: linkedin,
    tags: ["React", "Node JS", "Express JS", "MongoDB"],
    link: "https://github.com/Rajeshwari1403/LinkedIn-Clone",
    deployed_link: "",
  },
  {
    id: "06",
    title:
    "Football Match Prediction (Py)",
    image: football,
    tags: ["Python", "ML"],
    link: "https://github.com/Rajeshwari1403/ML-Football-Match-Prediction",
    deployed_link: "",
  },
];

export const INTERNSHIPS_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "CaratLane Trading Private Limited", value: "CaratLane Trading Private Limited" },
  { id: "03", label: "Alpixn Technologies Private Limited", value: "Alpixn Technologies Private Limited" },
];

export const INTERNSHIPS = [
  {
    id: "01",
    image: caratlane,
    ex: "CaratLane Trading Private Limited",
    title: "CaratLane Trading Private Limited - OnSite",
    role: "Quality Engineer",
    Project_Title: "Post-Purchase Service Management System",
    description: " Working on based post-sales project; responsible for test case design, bug tracking, and QA validation.",
    duration: "July 2025 - Present"
  },
  {
    id: "02",
    image: alpixn,
    ex: "Alpixn Technologies Private Limited",
    title: "Alpixn Technologies Private Limited - Remote",
    role: "Full Stack Developer",
    Project_Title: "AI App Builder",
    description: "Contributed to end-to-end feature development and debugging across frontend (React) and backend (Node.js) stacks",
    duration: "June 2025"
  }
];