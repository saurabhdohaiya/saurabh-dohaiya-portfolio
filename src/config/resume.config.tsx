import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaAngular,
    FaNodeJs,
    FaFigma,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
    SiMongodb
} from "react-icons/si";

export const AboutMe = {
    title: "About me",
    description: "I am highly skilled Front-end Software Engineer with a B.Tech in Computer Science from IIIT Kota. Proficient in modern web technologies and full-stack development, with hands-on experience in UI enhancements, user efficiency improvements, and real-time data integration. Seeking to contribute to innovative, user-centric software solutions.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Saurabh Dohaiya",
        },
        {
            fieldName: "Work Experience",
            fieldValue: "6 months",
        },
        {
            fieldName: "Email",
            fieldValue: "career.saurabhdohaiya@gmail.com",
        },
        {
            fieldName: "Ready to Join",
            fieldValue: "Immediate",
        },
        {
            fieldName: "Language",
            fieldValue: "English and Hindi",
        },
    ]
}

export const Experience = {
    icon: "../asset/resume/badge.svg",
    title: "Work Experience",
    description: "",
    items: [
        {
            position: "Software Developer Engineer Intern",
            company: "Digio Solutions",
            duration: "Jan 2024 - Jun 2024",
            location: "Bangalore(On-site)",
            summary: "",
            description: [
                "Designed and implemented UI enhancements for enterprise and regular form dashboards, resulting in a 30% reduction in user interface load times and a 20% increase in user satisfaction ratings.",
                "Introduced copy-paste functionality in DigiForm using Angular, increasing user efficiency by 25% and reducing error rates by 15%.",
                "Analyzed requirements and devised a plan to redirect users to alternative e-sign providers, successfully implementing the\n" +
                "ESP redirection functionality to enhance the user experience and simplify the e-signing process resulting in a 10% increase\n" +
                "in e-signing of documents."
            ],
        },
    ]
}

export const Education = {
    icon: "../asset/resume/cap.svg",
    title: "Education",
    description: "Lorem ipsum dolor sit amet consectetur",
    items: [
        {
            institution: "Indian Institute of Information Technology, Kota",
            course: "CSE, Bachelor of Technology",
            duration: "Oct 2020 - Mar 2024",
            result: "7.95/10",
        },
        {
            institution: "Jawahar Navodaya Vidyalaya, Katni",
            course: "PCM + Computer Science",
            duration: "April 2017 - Mar 2018",
            result: "90%",
        },
    ]
}

export const Skills = {
    title: "Skills",
    description: [
        "I have acquired a diverse set of skills through my education and hands-on experience. My proficiency in programming languages includes C, C++, JavaScript, TypeScript, and Python. On the web development front, I am skilled in HTML, CSS, JavaScript, TailwindCSS, Material UI, AngularJS, ReactJS, ExpressJS, NodeJS, JWT Authentication, ShadCN UI, and Socket.io.",
        "My database management expertise covers SQL and MongoDB. I am also adept at using tools like Git, BitBucket, WebStorm, Google Colab, and Postman API.",
        "Soft skills I possess include organizing, planning, and book reading. My coursework includes Data Structures and Algorithms, Database Management Systems, Object-Oriented Programming Systems, Operating Systems, and Computer Networks.",
        "Through my internship and project experiences, I have developed a strong foundation in UI design, full-stack development, and real-time data integration.",
    ],
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "html 5"
        },
        {
            icon: <FaCss3/>,
            name: "css 3"
        },
        {
            icon: <FaJs/>,
            name: "javascript"
        },
        {
            icon: <FaReact/>,
            name: "react.js"
        },
        {
            icon: <FaAngular/>,
            name: "angular"
        },
        {
            icon: <FaNodeJs/>,
            name: "nodejs "
        },
        {
            icon: <SiNextdotjs/>,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css"
        },
        {
            icon: <SiTypescript/>,
            name: "typescript"
        },
        {
            icon: <SiMongodb/>,
            name: "mongoDB"
        },
    ]
}
