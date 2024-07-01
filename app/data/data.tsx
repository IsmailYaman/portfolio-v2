export const aboutSkills = ["Frontend Developer.", "Web designer.","3D Artist."];

export const headerLinks = [
    { label: "About", target: "about" },
    { label: "Education", target: "education" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" },
];

export const about = {
    photo: "/img/ismail.jpg",
    title: "Hello! I'm Ismail.",
    body1: "Based in Rotterdam, the Netherlands.",
    body2: "I have a real passion for creating projects that are not only functional but also visually attractive. My skill set is diverse, covering everything from frontend development to designing.",
    body3: "When I'm not working on projects, I'm likely to be found either at the gym or working on my car. Bodybuilding is more than just exercise for me; it's a way to stay fit and focused. And there's a certain enjoyment I find in tinkering with my car — it's my own way of relaxing and enjoying some quiet time.",
};

export const education = [
    {
        id: 1,
        year: "2010 - 2014",
        title: "VMBO-Kader",
        school: "Lentiz Floracollege",
        description: "VMBO",
    },
    {
        id: 2,
        year: "2014 - 2015",
        title: "Automotive Engineering",
        school: "ROC Mondriaan",
        description: "MBO 2",
    },
    {
        id: 3,
        year: "2015 - 2018",
        title: "Software Engineering",
        school: "ROC Mondriaan",
        description: "MBO 4",
    },
    {
        id: 4,
        year: "2018 - 2024",
        title: "Creative Media & Game Technologies",
        school: "Rotterdam University of Applied Sciences",
        description: "HBO",
    },
];

export const projects = [
    {
        id: 1,
        title: "CP-AR",
        description: [
            {
                body1: "CP-AR is a web-AR experience to make sure you know the basics of first aid actions for a heart attack emergency.",
                body2: "CP-AR was my thesis project that I had the opportunity to develop for my studies in Creative Media & Game Technologies. Extensive research was done on the areas where improvements could be made within heart attack emergencies in the Netherlands.",
            },
        ],
        image: "/img/purple.png",
        links: [
            {
                label: "Visit website (recommended for mobile)",
                url: "https://cp-ar.vercel.app/",
                code: `<a data-8code="39qav"></a><script src="//cdn.8thwall.com/web/share/embed8.js"></script>`,
            },
        ],
        tools: [
            {
                label: "A-Frame",
                image: "https://img.icons8.com/color/48/000000/a-frame.png",
            },
            {
                label: "8th Wall",
                image: "https://img.icons8.com/color/48/000000/8th-wall.png",
            },
            {
                label: "Blender",
                image: "https://img.icons8.com/color/48/000000/blender-3d.png",
            },
        ],
    },
    {
        id: 2,
        title: "Achromira",
        description: [
            {
                body1: "Achromira is a story rich platformer where Mira, the character you play as, has to search for all the crystal shards in order to restore colour to her own world and that of others. Follow her on her journey to rescue three unique worlds, Achrome City, Rutate and Gryd.",
                body2: "This was the second project with the game development minor. As an artist within the team, I've worked mainly on the first level of the game. Almost all the assets in this level are done by me. Next to that I've also worked on various assets in other levels.",
            },
        ],
        image: "/img/purple.png",
        links: [
            {
                label: "Visit website",
                url: "https://project.cmi.hr.nl/2021_2022/game_greenhouse/",
            },
        ],
        tools: [
            {
                label: "Unity",
                image: "https://img.icons8.com/ios-filled/50/000000/unity.png",
            },
            {
                label: "Blender",
                image: "https://img.icons8.com/color/48/000000/blender-3d.png",
            },
            {
                label: "Photoshop",
                image: "https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png",
            },
            {
                label: "Illustrator",
                image: "https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png",
            },
        ],
    },
    {
        id: 3,
        title: "Waar Bekken Ik?",
        description: [
            {
                body1: "This was another schoolproject where I and my team had to solve a problem that medical students at the Erasmus University were facing. The pelvis is one of the few parts of the human body that is very difficult for students to understand only from books. We made a 3D visualization that makes the pelvis clear to students by showing it from different perspectives.",
                body2: "This was a long project that lasted six months. During that time, we worked with the scrum and agile principles. In addition, the special thing about this project is that it is a long-term project. Hopefully next year's CMGT students will continue with it.",
            },
        ],
        image: "/img/purple.png",
        links: [
            {
                label: "Read more",
                url: "https://cmgt.hr.nl/projecten/waar-bekken-ik",
            },
        ],
        tools: [
            {
                label: "React",
                image: "https://img.icons8.com/color/48/000000/react-native.png",
            },
            {
                label: "Scrum",
                image: "https://img.icons8.com/color/48/000000/scrum.png",
            },
            {
                label: "Blender",
                image: "https://img.icons8.com/color/48/000000/blender-3d.png",
            },
        ],
    },
    {
        id: 4,
        title: "Shooter Game",
        description: [
            {
                body1: "This was a schoolproject where I had to specialize in a certain program, language, IOT, etc. I chose to make a game with the Unreal Engine 4.",
            },
        ],
        image: "/img/purple.png",
        links: [
            {
                label: "View demo ",
                url: "https://www.youtube.com/playlist?list=PLlibq_pnekYPDebVB2VMDJfsEDNbRWXOF",
            },
        ],
        tools: [
            {
                label: "Unreal Engine 4",
                image: "https://img.icons8.com/color/48/000000/unreal-engine.png",
            },
        ],
    },
    {
        id: 5,
        title: "School blog",
        description: [
            {
                body1: "The first asignment when I started at CMGT was to make a personal blog in which I could document all the tasks I've done.",
            },
        ],
        image: "/img/purple.png",
        links: [
            {
                label: "Visit blog",
                url: "https://stud.hosted.hr.nl/0964864/",
            },
        ],
        tools: [
            {
                label: "WordPress",
                image: "https://img.icons8.com/color/48/000000/wordpress.png",
            },
        ],
    },
    {
        id: 6,
        title: "SSI Rotterdam",
        description: [
            {
                body1: "SSI (Seksuele straatintimidatie) Rotterdam was a project for the municipality of Rotterdam aimed at raising awareness about sexual street harassment in busy areas of the city. It involved a VR experience that put users in the shoes of victims of street harassment. The goal was to foster empathy and initiate a dialogue about this issue, ultimately leading to increased awareness and positive change in society.",
            },
        ],
        image: "/img/purple.png",
        links: [
            {
                label: "Read more",
                url: "http://project.hosted.hr.nl/2021_2022/mlab2_strin_t6/",
            },
        ],
        tools: [
            {
                label: "Unity",
                image: "https://img.icons8.com/ios-filled/50/000000/unity.png",
            },
        ],
    },
    {
        id: 7,
        title: "SkeeballVK",
        description: [
            {
                body1: "This was a schoolproject where I had to make a landingpage for a product that we had designed. The website was targeted towards parents that wanted an educational toy for their young kids. Hence the playful looks of the website.",
            },
        ],
        image: "/img/purple.png",
        links: [
            {
                label: "Visit website",
                url: "https://stud.hosted.hr.nl/0964864/skeeballvk/",
            },
        ],
        tools: [
            {
                label: "HTML",
                image: "https://img.icons8.com/color/48/000000/html-5.png",
            },
            {
                label: "CSS",
                image: "https://img.icons8.com/color/48/000000/css3.png",
            },
            {
                label: "JavaScript",
                image: "https://img.icons8.com/color/48/000000/javascript.png",
            },
        ],
    },
];

export const experiences = {
    programming: [
        {
            id: 1,
            label: "HTML5",
            image: "/icons/html.svg",
            svg: "",
        },
        {
            id: 2,
            label: "CSS3",
            image: "/icons/css.svg",
        },
        {
            id: 3,
            label: "JavaScript",
            image: "/icons/javascript.svg",
        },
        {
            id: 4,
            label: "TypeScript",
            image: "/icons/typescript.svg",
        },
        {
            id: 5,
            label: "React",
            image: "/icons/react.svg",
        },
        {
            id: 6,
            label: "Node.js",
            image: "/icons/nodejs.svg",
        },
        {
            id: 7,
            label: "PHP",
            image: "/icons/php.svg",
        },
        {
            id: 8,
            label: "MySQL",
            image: "/icons/mysql.svg",
        },
        {
            id: 9,
            label: "Tailwind",
            image: "/icons/tailwind.svg",
        },
        {
            id: 10,
            label: "Bootstrap",
            image: "/icons/bootstrap.svg",
        },
        {
            id: 11,
            label: "jQuery",
            image: "/icons/jquery.svg",
        },
        {
            id: 12,
            label: "Laravel",
            image: "/icons/laravel.svg",
        },
        {
            id: 13,
            label: "NextJS",
            image: "/icons/next.svg",
        },
    ],
    ecommerce: [
        {
            id: 1,
            label: "Shopify",
            image: "/icons/shopify.svg",
        },
        {
            id: 2,
            label: "Magento",
            image: "/icons/magento.svg",
        },
    ],
    design: [
        {
            id: 1,
            label: "Photoshop",
            image: "/icons/photoshop.svg",
        },
        {
            id: 2,
            label: "Illustrator",
            image: "/icons/illustrator.svg",
        },
        {
            id: 3,
            label: "XD",
            image: "/icons/xd.svg",
        },
        {
            id: 4,
            label: "After Effects",
            image: "/icons/aftereffects.svg",
        },
        {
            id: 5,
            label: "Premiere Pro",
            image: "/icons/premiere-pro.svg",
        },
        {
            id: 6,
            label: "Figma",
            image: "/icons/figma.svg",
        },
    ],
    gameDevelopment: [
        {
            id: 1,
            label: "Unity",
            image: "/icons/unity.svg",
        },
        {
            id: 2,
            label: "Unreal Engine",
            image: "/icons/ue4.svg",
        },
    ],
    other: [
        {
            id: 1,
            label: "GitHub",
            image: "/icons/github.svg",
        },
        {
            id: 2,
            label: "Azure DevOps",
            image: "/icons/azure.svg",
        },
        {
            id: 3,
            label: "Jira",
            image: "/icons/jira.svg",
        },
        {
            id: 4,
            label: "Wordpress",
            image: "/icons/wordpress.svg",
        },
        {
            id: 5,
            label: "Blender",
            image: "/icons/blender.svg",
        },
    ],
};

export const socials = [
    {
        id: 1,
        label: "Github",
        link: "https://github.com/IsmailYaman",
        image: "/icons/github.svg",
    },
    {
        id: 2,
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/ismail-kayadelen-56a0b6133/",
        image: "/icons/linkedin.svg",
    },
];
