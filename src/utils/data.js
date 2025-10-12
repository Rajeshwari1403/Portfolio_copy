import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaInstagram,
  FaLinkedin,
  FaBrain,
  FaProjectDiagram,
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

export const SKILLS_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Database", value: "database" },
  { id: "05", label: "Tools", value: "tools" },
  { id: "06", label: "Skills", value: "skills" },
];

export const SKILLS = [
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    type: "frontend",
    description: "Building responsive web apps using React’s component-based approach, Hooks, Context API, and Redux.",
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML5",
    type: "frontend",
    description: "Developing the skill of writing semantic and accessible HTML for structured web application development. Concentrated on writing clean markup and best practices in order to to ensure cross-modern browser/device compatibility, scalability, and maintainability for seamless user experiences.",
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS3",
    type: "frontend",
    description: "Expert in creating responsive, user-friendly designs using CSS. Knowledgeable in layouts and styling components, creating visually pleasing designs, and cross-browser compatibility. Dedicated to providing clean, maintainable code and contemporary design methods for engaging user interfaces.",
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "JavaScript",  
    type: "frontend",
    description: "Experienced in using JavaScript for developing responsive, dynamic web applications. Knowledgeable about core concepts such as DOM manipulation, event handling, and asynchronous programming. Committed to writing clean, maintainable code that enhances functionality.",
  },
  {
    id: "05",
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    type: "frontend",
    description: "Adept in utilizing the Tailwind CSS utility-first framework to quickly translate designs into consistent, responsive layouts. Proficient in building reusable design patterns and well-structured class names to create user interfaces that are visually appealing, maintainable, and scalable—all while improving the overall speed of development.",
  },
  {
    id: "06",
    icon: FaNodeJs,
    skill: "Node JS",
    type: "backend",
    description: "Proficient in using Node.js as a web server in the context of optimized web development, which is centered on building event-driven, scalable applications. Familiar with implementing asynchronous programming, routing and managing application programming interfaces (APIs), and integrating databases.",
  },
  {
    id: "07",
    icon: SiExpress,
    skill: "Express JS",
    type: "backend",
    description: "Experienced in the development of RESTful APIs and server-side applications through the application of Express.js. Knowledgeable in facilitating routing, having integrated middleware, and in using HTTP requests. Dedicated to creating fast, simple, and maintainable backend development for the web applications.",
  },
  {
    id: "08",
    icon: SiMongodb,
    skill: "MongoDB",
    type: "database",
    description: "Experienced in MongoDB for designing scalable, flexible, and document-oriented databases. Experienced in designing collections, managing schemas, and performing CRUD functions. Specializing in integrating MongoDB with web apps to work with dynamic data while considering performance, reliability, and maintainability.",
  },
  {
    id: "09",
    icon: SiMysql,
    skill: "MySQL",
    type: "database",
    description: "Proficient in using MySQL relational databases to manage structured data. Familiar with schema design, writing optimized queries, and relationship management. Experienced in integrating MySQL with backend applications to ensure a secure, scalable, and consistent database for data-driven web solutions.",
  },
  {
    id: "10",
    icon: VscVscode,
    skill: "VS Code",
    type: "tools",
    description: "Skilled in using VS Code for web and software development. Experienced in customizing the environment with extensions, managing projects efficiently, and writing maintainable code for both frontend and backend development.",
  },
  {
    id: "11",
    icon: VscCommentUnresolved,
    skill: "Postman",
    type: "tools",
    description: "Skilled in using Postman to test APIs and validate endpoints. Able to send requests, analyze responses, and debug issues effectively. Focused on ensuring smooth API communication for reliable backend and frontend integration.",
  },
  {
    id: "12",
    icon: FaGitAlt,
    skill: "Git and Github",
    type: "tools",
    description: "Skilled in using Git for version control and GitHub for remote repository management. Experienced in branching, merging, pull requests, and issue tracking to maintain organized, collaborative, and efficient workflows for software development projects.",
  },
  {
    id: "13",
    icon: SiFigma,
    skill: "Figma",
    type: "tools",
    description: "Proficient in Figma to create interactive and aesthetically-pleasing UI/UX designs. Experienced in wireframing, prototyping, and design systems in collaboration to help create user-centric, cohesive, and maintainable designs for mobile and web applications.",
  },
  {
    id: "14",
    icon: MdHome,
    skill: "Microsoft Excel",
    type: "tools",
    description: "Skilled in using Microsoft Excel for data organization, analysis, and visualization. Experienced in applying formulas, creating charts, and managing datasets efficiently to support data-driven decisions and project reporting.",
  },
  {
    id: "15",
    icon: MdHome,
    skill: "Eclipse IDE",
    type: "tools",
    description: "Proficient in using Eclipse IDE for Java development and small-scale web projects. Experienced in managing code, debugging, and integrating basic plugins to support development workflows while maintaining clean and well-structured code.",
  },
  {
    id: "16",
    icon: SiApache,
    skill: "Xampp",
    type: "tools",
    description: "Proficient in using XAMPP to set up local web servers for PHP and database-driven projects. Experienced in managing MySQL databases, testing web applications locally, and ensuring seamless development and deployment workflows.",
  },
  {
    id: "17",
    icon: FaBook,
    skill: "Problem Solving",
    type: "skills",
    description: "Able to analyze problems, break them into smaller parts, and find practical solutions. Skilled in applying logical thinking and algorithms to troubleshoot issues, debug code, and improve efficiency in programming and development tasks.",
  },
  {
    id: "18",
    icon: FaBook,
    skill: "Self Learning",
    type: "skills",
    description: "Able to learn new technologies independently through online courses, documentation, and practice. Focused on building practical understanding by applying concepts to projects. Continuously improving skills to stay updated with modern tools and development practices.",
  },
];

export const CERTIFICATES_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend & UI/UX", value: "frontend" },
  { id: "03", label: "Version Control & Tools", value: "tools" },
  { id: "04", label: "Data Structures", value: "dsa" },
  { id: "05", label: "Automation with Python", value: "automation" },
  { id: "06", label: "Artificial Intelligence", value: "ai" },
];

export const CERTIFICATES = [
  {
    id: "01",
    icon: FaReact,
    name: "React JS",
    organization: "Scalar",
    description: "Built dynamic web applications and learned React fundamentals including components, state management, and hooks.",
    link: "https://moonshot.scaler.com/s/sl/eH1LxFwn00?_gl=1*bqkkwg*_gcl_au*MTA2NTg5ODY5MC4xNzQzNDAwNjQ0LjE3NjIzODAxNjEuMTc0MzQwMDgzMS4xNzQzNDAwODMx*FPAU*ODQzNTM1NDI2LjE3NDIzODU4MTY.*_ga*Mjc0NTEyOTAuMTc0MjM4NTgxNA..*_ga_53S71ZZG1X*MTc0MzQxODE5Mi42LjEuMTc0MzQyMzY3MC4wLjAuMjY3MTIwMDUz",
    tags: ["React JS"],
    category: "frontend",
  },
  {
    id: "02",
    icon: SiFigma,
    name: "Figma",
    organization: "Udemy",
    description: "Gained skills in UI/UX design, creating wireframes, prototypes, and interactive designs for web and mobile applications.",
    link: "https://www.udemy.com/certificate/UC-5827d1fa-15a5-4a8a-90dc-f0f15e8d682e/",
    tags: ["Figma fundamentals", "UI/UX design", "Prototyping"],
    category: "frontend",
  },
  {
    id: "03",
    icon: SiGithub,
    name: "Version Control",
    organization: "Coursera",
    description: "Learned Git and GitHub workflows including branching, merging, version control, and collaborative software development.",
    link: "https://coursera.org/share/2e84a51c6d1900e2288d27f4a3bf813f",
    tags: ["Git", "GitHub", "Version control", "Collaboration"],
    category: "tools",
  },
  {
    id: "04",
    icon: SiPostman,
    name: "Postman API Fundamentals",
    organization: "Postman",
    description: "Learned API fundamentals, sending requests, testing endpoints, and automating workflows using Postman tools.",
    link: "https://badgr.com/public/assertions/1eLWCUSZSRq_PY_hYXdyQQ",
    tags: ["APIs", "Postman", "API testing", "Automation"],
    category: "tools",
  },
  {
    id: "05",
    icon: FaProjectDiagram,
    name: "Data Structure",  
    organization: "Great Learning",
    description: "Mastered core data structures concepts for efficient algorithm implementation.",
    link: "https://www.mygreatlearning.com/certificate/LNRHBUFZ",
    tags: ["Queue", "Stack", "Trees", "Array", "Graphs", "Hashing", "Linked list"],
    category: "dsa",
  },
  {
    id: "06",
    icon: SiPython,
    name: "Crash Course On Python",
    organization: "Coursera",
    description: "Learned Python programming fundamentals including syntax, data structures, and writing efficient scripts.",
    link: "https://www.coursera.org/account/accomplishments/verify/AUYPD55DCWE5",
    tags: ["Python Programming", "Scripting", "Debugging", "Development Environment"],
    category: "automation"
  },
  {
    id: "07",
    icon: SiPython,
    name: "Python OS Interaction",
    organization: "Coursera",
    description: "Learned how to automate tasks and interact with the operating system using Python scripts and libraries.",
    link: "https://www.coursera.org/account/accomplishments/verify/NJHOBY1SIQ3F",
    tags: ["Python", "Automation", "Operating Systems", "Shell Script", "Command-Line Interface"],
    category: "automation"
  },
  {
    id: "08",
    icon: FaBrain,
    name: "Artificial Intelligence",
    organization: "Infosys Springboard",
    description: "Gained foundational knowledge in AI concepts, machine learning algorithms, and their practical applications.",
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