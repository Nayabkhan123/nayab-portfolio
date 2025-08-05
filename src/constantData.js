// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import socketioLogo from './assets/tech_logo/socket.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import openai from './assets/tech_logo/openai.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import gdgLogo from './assets/company_logo/gdg.png';
import LahmLogo from './assets/company_logo/Lahm.png';

// Education Section Logo's
import jamiaLogo from './assets/education_logo/jamiaLogo.png';
import interLogo from './assets/education_logo/interLogo.webp';
import highLogo from './assets/education_logo/highLogo.png';

// Project Section Logo's
import primeMart from './assets/Project/primeMart.png';
import echoChat from './assets/Project/echoChat.png';
import DocMentor from './assets/Project/docMentor.png';
import healthWiser from './assets/Project/healthWiser.png';
import alumni from './assets/Project/alumni.png';
import passwordGenerator from './assets/Project/passwordGenerator.png';
import music from './assets/Project/music.png';
import Calculator from './assets/Project/calculator.png';
import gallery from './assets/Project/gallery.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'NextJS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Socket.io', logo: socketioLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'OpenAI', logo: openai },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: LahmLogo,
      role: "Frontend Developer",
      company: "Lahm India",
      date: "December 2024 - January 2025",
      desc: "Developed dynamic and responsive user interfaces using React, HTML, CSS, and JavaScript. Worked closely with cross-functional teams to design and implement intuitive UI/UX, integrate frontend with RESTful APIs, and ensure high performance, accessibility, and cross-browser compatibility in an agile environment.",
      skills: [
        "React JS",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: gdgLogo,
      role: "Web Developer Team Member",
      company: "GDG",
      date: "March 2024 - March 2025",
      desc: "Member of GDG JMI’s Web Development team — building responsive websites, contributing to tech projects, and helping organize events that promote learning and collaboration",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: jamiaLogo,
      school: "Jamia Millia Islamia, New Delhi",
      date: "Nov 2022 - July 2026",
      grade: "8.24 CGPA",
      desc: "I am currently pursuing a Bachelor’s degree in Computer Science and Engineering (CSE) from Jamia Millia Islamia, New Delhi. As a final-year student, I have built a strong foundation in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development (MERN and Next.js), and Software Engineering. Alongside academics, I have actively participated in workshops, hackathons, and technical societies like SAE and IEEE, applying my skills to practical projects and collaborative problem-solving. My time at Jamia has been instrumental in sharpening my technical abilities and preparing me to contribute effectively as a software developer.",
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)",
    },
    {
      id: 1,
      img: interLogo,
      school: "Hira Islamia Inter College, Banda",
      date: "June 2020 - July 2021",
      grade: "76.8%",
      desc: "I completed my 12th grade with a focus on Physics, Chemistry, and Mathematics (PCM) from Hira Islamia Inter College, Banda. During my schooling, I built a strong foundation in analytical thinking and problem-solving, which sparked my interest in technology and programming. My time at Hira Islamia Inter College helped me develop discipline, logical reasoning, and a curiosity for learning — qualities that motivated me to pursue a career in computer science and software development.",
      degree: "Higher Secondary (Class XII) – PCM (Physics, Chemistry, Mathematics)",
    },
    {
      id: 2,
      img: highLogo,
      school: "Hazrat Maulana Siddique Memorial Public School, Banda",
      date: "June 2018 - May 2019",
      grade: "86%",
      desc: "I completed my Class 10 education from Hazrat Maulana Siddique Memorial Public School, Banda, under the UP Board, where I focused on core subjects like Science and Mathematics.",
      degree: "High School (Class X)",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "PrimeMart",
      description:
        "PrimeMart: A comprehensive e-commerce platform offering a seamless online shopping experience. Users can browse products, manage their cart, and make secure payments. Admins gain full control to manage products, users, and orders, ensuring efficient store operations.",
      image: primeMart,
      tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary", "Stripe"],
      github: "https://github.com/Nayabkhan123/PrimeMart",
      webapp: "https://prime-mart-wb8b.vercel.app/",
    },
    {
      id: 1,
      title: "Echo Chat",
      description:
        "A real-time chat app using React, Node.js, Express, MongoDB, Socket.io, and TailwindCSS. Users can chat via text, images, and videos, see who's online in real time, view unread message counts, update profiles, and use secure login/logout features.",
      image: echoChat,
      tags: ["React JS", "Socket.io", "Node.js", "MongoDB", "Express.js", "TailwindCSS",],
      github: "https://github.com/Nayabkhan123/EchoChat",
      webapp: "https://github.com/Nayabkhan123/EchoChat",
    },
    {
      id: 2,
      title: "DocMentorAI",
      description:
        "DocMentor AI lets users upload PDF documents and ask questions directly from them. It processes files with AI, extracts and embeds content, and uses vector search to retrieve relevant chunks. Powered by Google Gemini, it answers queries with context and cites exact sources from the PDFs for clarity and trust. ",
      image: DocMentor,
      tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "Clerk", "LangChain", "Qdrant", "BullMQ", "Redis", "Google Gemini"],
      github: "https://github.com/Nayabkhan123/DocMentorAI",
      webapp: "https://github.com/Nayabkhan123/DocMentorAI",
    },
    {
      id: 3,
      title: "HealthWiser",
      description:
        "HealthWiser is an AI-driven health assistant that predicts possible diseases based on user symptoms. It provides detailed disease descriptions, precautions, suggested medications, personalized diet plans, and custom workout routines to help users stay informed and healthy.",
      image: healthWiser,
      tags: ["Python", "Scikit-learn", "React JS", "Node.js", , "Pandas", "NumPy"],
      github: "https://github.com/Nayabkhan123/HealthWiser",
      webapp: "https://github.com/Nayabkhan123/HealthWiser",
    },
    {
      id: 4,
      title: "Alumni Portal",
      description:
        "Alumni Connect is a full-stack web application that helps alumni stay connected and engaged. Built with React on the frontend and Express.js on the backend, it features user authentication, alumni directory with search/filter, a community feed for posts, and profile management. The portal promotes networking and interaction.",
      image: alumni,
      tags: ["React.jS","Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", ],
      github: "https://github.com/Nayabkhan123/JmiHackathon",
      webapp: "https://alumni-connect-jmi.vercel.app/",
    },
    {
      id: 5,
      title: "Password Generator",
      description:
        "A responsive Password Generator built with HTML, CSS, and JavaScript. Users can customize length, include uppercase/lowercase letters, numbers, and symbols, and view password strength. Features include password shuffling, one-click copy, and a clear button. Lightweight, fast, and works on all devices.",
      image: passwordGenerator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nayabkhan123/PasswordGenerator",
      webapp: "https://nayabkhan123.github.io/PasswordGenerator/",
    },
    {
      id: 6,
      title: "NovaMusic",
      description:
        "A sleek and responsive Music Player web app with volume control, song progress bar, play/pause, next/prev buttons, keyboard shortcuts, and real-time duration updates. Includes dynamic UI, like/unlike feature, audio metadata, animated loading icon, and seamless user interaction.",
      image: music,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nayabkhan123/NovaMusic",
      webapp: "https://nayabkhan123.github.io/NovaMusic/",
    },
    
    {
      id: 7,
      title: "Calculator",
      description:
        "A clean, responsive calculator web app built with HTML, CSS, and JavaScript. It supports basic arithmetic operations, clear and backspace functions, and a toggleable dark mode for better usability. Fully responsive design adapts to all screen sizes. Lightweight and easy to customize.",
      image: Calculator,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Nayabkhan123/Calculator",
      webapp: "https://calculator-nayabkhan123.vercel.app/",
    },
    {
      id: 8,
      title: "My Gallery",
      description:
        "My Gallery is a clean, responsive image gallery web project using HTML, CSS, and JavaScript. It displays aesthetic images in a stylish grid with grayscale hover effects. Clicking an image opens a lightbox with a zoomed view and dimmed background, offering a sleek and immersive user experience.",
      image: gallery,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Nayabkhan123/My_Gallery",
      webapp: "https://nayabkhan123.github.io/My_Gallery/",
    },
  ];  