import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    simu,
    mongodb,
    git,
    figma,
    docker,
    flappy,
    quiz,
    ncl,
    ned,
    si,
    pk,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    nextjs,
    tensorflow,
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
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "Java Developer",
    //     icon: creator,
    // },
    // {
    //     title: "Backend Developer",
    //     icon: backend,
    // },
    {
        title: "Machine Learning Engineer",
        icon: mobile,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    // {
    //     name: "NextJs",
    //     icon: nextjs,
    // },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Tensorflow",
        icon: tensorflow,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
];

const experiences = [
    // {
    //     title: "React.Js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#383E56",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Machine Learning Intern",
        company_name: "NCL - NED",
        icon: ncl,
        iconBg: "#ffffff",
        date: "April 2023 - Present",
        points: [
            "Trained machine learning models for speech cloning.",
            "Collaborated with a team of 5 developers to create a web application for speech cloning.",
            "Infused the speech cloning model onto animated characters.",
        ],
    },
    {
        title: "Python Intern",
        company_name: "Sync Interns",
        icon: si,
        iconBg: "#ffffff",
        date: "March 2023 - April 2023",
        points: [
            "Developed 4 Python tasks to complete the internship.",
            "Built an alarm clock in Python using Tkinter.",
            "Developed an OTP verification system.",
            "Made a URL shortener.",
            "Finally built a chatbot using OpenAi API.",
        ],
    },
    {
        title: "Front End Intern",
        company_name: "Interns PK",
        icon: pk,
        iconBg: "#239d46",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Completed daily tasks for Front End with HTML, CSS and JavaScript.",
            "Worked with jQuery and PHP.",
            "Developed a website with WordPress.",
        ],
    },

    {
        title: "Education",
        company_name: "NED University of Engineering and Technology",
        icon: ned,
        iconBg: "#ffffff",
        date: "Nov 2021 - Oct 2025",
        points: [
            "BE Computer & Information Systems Engineering.",
            "CGPA: 3.8/4.0",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "AI Plays Flappy Bird",
        description:
            "An AI developed using Python which is built using Pygame, and the machine learning model is trained using NEAT.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "pygame",
                color: "green-text-gradient",
            },
            {
                name: "neat",
                color: "pink-text-gradient",
            },
        ],
        image: flappy,
        source_code_link: "https://github.com/HuzaifaNaseer02/AI-Plays-Flappy-Bird/",
    },
    {
        name: "Quiz Game",
        description:
            "A CLI based Python project that lets users choose a topic to be quizzed on and displays their score at the end.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },

        ],
        image: quiz,
        source_code_link: "https://github.com/HuzaifaNaseer02/Quiz-Game/",
    },
    {
        name: "Solar System Simulation",
        description:
            "2D Solar System Simulation is a Python project that uses Pygame to create a scaled simulation of the solar system.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "pygame",
                color: "green-text-gradient",
            },
            // {
            //     name: "css",
            //     color: "pink-text-gradient",
            // },
        ],
        image: simu,
        source_code_link: "https://github.com/HuzaifaNaseer02/Solar-System-Simulation/",
    },
];

export { services, technologies, experiences, testimonials, projects };