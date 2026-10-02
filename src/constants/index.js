const navLinks = [
    { id: "work", link: "#work" },
    { id: "experience", link: "#experience" },
    { id: "skills", link: "#skills" },
];

const words = [
    { id: "ideas", imgPath: "/images/ideas.svg" },
    { id: "concepts", imgPath: "/images/concepts.svg" },
    { id: "designs", imgPath: "/images/designs.svg" },
    { id: "code", imgPath: "/images/code.svg" },
    { id: "ideas", imgPath: "/images/ideas.svg" },
    { id: "concepts", imgPath: "/images/concepts.svg" },
    { id: "designs", imgPath: "/images/designs.svg" },
    { id: "code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { id: "experience", value: 3, suffix: "+" },
    { id: "skills", value: 30, suffix: "+" },
    { id: "projects", value: 25, suffix: "+" },
    { id: "satisfaction", value: 100, suffix: "%" },
];

const logoIconsList = [
    {
        name: "Company 1",
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        name: "Company 2",
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        name: "Company 3",
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        name: "Company 4",
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        name: "Company 5",
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        name: "Company 6",
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        name: "Company 7",
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        name: "Company 8",
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        name: "Company 9",
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        name: "Company 10",
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        name: "Company 11",
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    { id: "quality", imgPath: "/images/seo.png" },
    { id: "communication", imgPath: "/images/chat.png" },
    { id: "delivery", imgPath: "/images/time.png" },
];

const techStackImgs = [
    { id: "react", imgPath: "/images/logos/react.png" },
    { id: "python", imgPath: "/images/logos/python.svg" },
    { id: "backend", imgPath: "/images/logos/node.png" },
    { id: "interactive", imgPath: "/images/logos/three.png" },
    { id: "manager", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
    {
        id: "react",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        id: "python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        id: "backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        id: "interactive",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        id: "manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        id: "frontend",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
    },
    {
        id: "fullstack",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/martin_guerra2001/?hl=es",
        imgPath: "/images/insta.png",
    },
    {
        name: "github",
        url: "https://github.com/Magv2001",
        imgPath: "/images/github.png",
    },
    {
        name: "hackerrank",
        url: "https://www.hackerrank.com/profile/martinguerra0108",
        imgPath: "/images/hacker.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/martin-guerra-v%C3%A1sconez-8a714b200/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};