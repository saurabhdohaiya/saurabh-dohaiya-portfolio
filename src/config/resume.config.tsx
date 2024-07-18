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
    description: "Lorem ipsum dolor sit amet consectetur",
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
    description: "Lorem ipsum dolor sit amet consectetur",
    items: [
        {
            position: "Software Developer Engineer Intern",
            company: "Digiotech Solutiosn",
            duration: "Jan 2024 - Jun 2024",
            location: "Bangalore(On-site)",
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
    description: "Lorem ipsum dolorf sit amet consectetur",
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
