export const DEFAULT_LANG = "en";
export const SUPPORTED_LANGS = ["en", "es"];

const en = {
    nav: {
        work: "Work",
        experience: "Experience",
        skills: "Skills",
        contactMe: "Contact me",
    },
    hero: {
        line1: "Developing",
        line2: "into Modern Projects",
        line3: "that Suit Your Needs",
        introLine1: "Hi, My name is Martin, a developer located in Ecuador",
        introLine2: "who loves coding and creating different kinds of applications.",
        cta: "See my Projects",
    },
    words: {
        ideas: "Ideas",
        concepts: "Concepts",
        designs: "Designs",
        code: "Code",
    },
    counters: {
        experience: "Years of Experience",
        skills: "Programming Skills Acquired",
        projects: "Completed Projects",
        satisfaction: "Client Satisfaction Rate",
    },
    abilities: {
        quality: {
            title: "Quality Comes First",
            desc: "Delivering the best results focusing in the quality of the project.",
        },
        communication: {
            title: "Clear Communication",
            desc: "Staying in touch throughout the whole process so you always know where things stand.",
        },
        delivery: {
            title: "Punctual Delivery",
            desc: "Meeting every deadline without compromising on quality or the small details.",
        },
    },
    projects: {
        more: "More projects",
        back: "Back to home",
        title: "All My Projects",
        sub: "Project Gallery",
        liveLink: "Live link",
        codeLink: "Code link",
        items: {
            figma: {
                name: "Figma Clone",
                title: "Figma Clone",
                desc: "A figma clone in which you can create and use different shapes, text and with a sharing functionality for other users.",
                alt: "Figma Clone",
            },
            storeit: {
                name: "Store It",
                title: "Store It",
                alt: "Store It",
            },
            ycDirectory: {
                name: "YC Directory",
                title: "YC Directory - A Startup Showcase App",
                alt: "YC Directory",
            },
            roomify: {
                name: "Roomify",
                title: "An AI application to help you create 3d models based on 2d images of rooms.",
                alt: "Roomify"
            },
            awwwards: {
                name: "Awwwards",
                title: "Awwwards",
                alt: "Awwwards"
            },
            xora: {
                name: "Xora",
                title: "Xora",
                alt: "Xora"
            },
            macbook: {
                name: "Macbook Website",
                title: "Macbook Website",
                alt: "Macbook Website"
            },
            cocktails: {
                name: "Velvet Pour",
                title: "Velvet Pour",
                alt: "Velvet Pour"
            },
            travel: {
                name: "Hilink",
                title: "Hilink",
                alt: "Hilink"
            },
            brainwave: {
                name: "Brainwave",
                title: "Brainwave",
                alt: "Brainwave"
            },
            phone: {
                name: "iPhone Website",
                title: "iPhone Website",
                alt: "iPhone Website"
            },
            omnifood: {
                name: "Omnifood",
                title: "Omnifood",
                alt: "Omnifood"
            },
        },
    },
    experience: {
        title: "Professional Work Experience",
        sub: "My Career Overview",
        responsibilities: "Responsibilities",
        cards: {
            frontend: {
                review:
                    "Demonstrated a high level of initiative and creativity while tackling difficult tasks. Learned and adapted quickly to new technology and software applications.",
                title: "Frontend Developer",
                date: "September 2020 - September 2021",
                responsibilities: [
                    "Developed web applications using modern programming languages such as React and Angular.",
                    "Assisted with investigations according to the requirements that the clients needed.",
                    "Optimized web applications to increase their speed and performance.",
                ],
            },
            fullstack: {
                review:
                    "Worked developing applications for my university using different tools for programming.",
                title: "Full Stack Developer",
                date: "November 2021 - October 2022",
                responsibilities: [
                    "Worked with a team of professionals to assist them with my skills as a programmer.",
                    "Developed applications using frontend and backend tools.",
                    "Contributed in the deployment of the applications.",
                ],
            },
        },
    },
    techStack: {
        title: "The Tech Stack I Use In My Projects",
        sub: "Programming Languages, Libraries/Frameworks and DataBases",
        roles: {
            react: "React Developer",
            python: "Python Developer",
            backend: "NodeJS Developer",
            interactive: "Interactive Developer",
            manager: "Project Manager",
            javascript: "JavaScript Developer",
            typescript: "TypeScript Developer",
            tailwind: "Tailwind CSS Developer",
            mongodb: "MongoDB Developer",
        },
    },
    contact: {
        title: "Get In Contact With Me",
        sub: "Contact Information",
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "Your email address",
        message: "Message",
        messagePlaceholder: "Your message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully. Thank you!",
        error: "Something went wrong. Please try again later.",
    },
    footer: {
        blog: "Visit my blog",
        modelsBy: "3D models:",
        by: "by",
        rights: "All rights reserved.",
    },
    language: {
        label: "Change language",
        en: "English",
        es: "Spanish",
    },
};

const es = {
    nav: {
        work: "Proyectos",
        experience: "Experiencia",
        skills: "Habilidades",
        contactMe: "Contáctame",
    },
    hero: {
        line1: "Creando",
        line2: "para Proyectos Modernos",
        line3: "a tu Medida",
        introLine1: "Hola, mi nombre es Martin, desarrollador ubicado en Ecuador",
        introLine2: "al que le encanta programar y crear todo tipo de aplicaciones.",
        cta: "Ver mis Proyectos",
    },
    words: {
        ideas: "Ideas",
        concepts: "Conceptos",
        designs: "Diseños",
        code: "Código",
    },
    counters: {
        experience: "Años de Experiencia",
        skills: "Habilidades de Programación Adquiridas",
        projects: "Proyectos Completados",
        satisfaction: "Índice de Satisfacción del Cliente",
    },
    abilities: {
        quality: {
            title: "La Calidad es lo Primero",
            desc: "Ofrecer los mejores resultados centrándose en la calidad del proyecto.",
        },
        communication: {
            title: "Comunicación Clara",
            desc: "Mantenerme en contacto durante todo el proceso para que siempre sepas en qué punto estamos.",
        },
        delivery: {
            title: "Entrega Puntual",
            desc: "Cumplir cada plazo sin sacrificar la calidad ni los pequeños detalles.",
        },
    },
    projects: {
        more: "Más proyectos",
        back: "Volver al inicio",
        title: "Todos mis Proyectos",
        sub: "Galería de Proyectos",
        liveLink: "Enlace en vivo",
        codeLink: "Enlace del código",
        items: {
            figma: {
                name: "Figma Clone",
                title: "Figma Clone",
                desc: "Un clon de Figma que permite crear y utilizar diversas formas y texto, además de contar con una función para compartir con otros usuarios.",
                alt: "Figma Clone",
            },
            storeit: {
                name: "Store It",
                title: "Store It",
                alt: "Store It",
            },
            ycDirectory: {
                name: "YC Directory",
                title: "YC Directory - Una App para Mostrar Startups",
                alt: "YC Directory",
            },
            roomify: {
                name: "Roomify",
                title: "Una aplicación de IA para ayudarte a crear modelos 3D a partir de imágenes 2D de habitaciones.",
                alt: "Roomify"
            },
            awwwards: {
                name: "Awwwards",
                title: "Awwwards",
                alt: "Awwwards"
            },
            xora: {
                name: "Xora",
                title: "Xora",
                alt: "Xora"
            },
            macbook: {
                name: "Macbook Website",
                title: "Macbook Website",
                alt: "Macbook Website"
            },
            cocktails: {
                name: "Velvet Pour",
                title: "Velvet Pour",
                alt: "Velvet Pour"
            },
            travel: {
                name: "Hilink",
                title: "Hilink",
                alt: "Hilink"
            },
            brainwave: {
                name: "Brainwave",
                title: "Brainwave",
                alt: "Brainwave"
            },
            phone: {
                name: "iPhone Website",
                title: "iPhone Website",
                alt: "iPhone Website"
            },
            omnifood: {
                name: "Omnifood",
                title: "Omnifood",
                alt: "Omnifood"
            },
        },
    },
    experience: {
        title: "Experiencia Profesional",
        sub: "Resumen de mi Trayectoria",
        responsibilities: "Responsabilidades",
        cards: {
            frontend: {
                review:
                    "Demostré un alto nivel de iniciativa y creatividad al enfrentar tareas difíciles. Aprendí y me adapté rápidamente a nuevas tecnologías y aplicaciones de software.",
                title: "Desarrollador Frontend",
                date: "Septiembre 2020 - Septiembre 2021",
                responsibilities: [
                    "Desarrollé aplicaciones web utilizando lenguajes de programación modernos como React y Angular.",
                    "Apoyé en investigaciones de acuerdo con los requerimientos que necesitaban los clientes.",
                    "Optimicé aplicaciones web para aumentar su velocidad y rendimiento.",
                ],
            },
            fullstack: {
                review:
                    "Trabajé desarrollando aplicaciones para mi universidad utilizando diferentes herramientas de programación.",
                title: "Desarrollador Full Stack",
                date: "Noviembre 2021 - Octubre 2022",
                responsibilities: [
                    "Trabajé con un equipo de profesionales aportando mis habilidades como programador.",
                    "Desarrollé aplicaciones utilizando herramientas de frontend y backend.",
                    "Contribuí en el despliegue de las aplicaciones.",
                ],
            },
        },
    },
    techStack: {
        title: "Las Tecnologías que Uso en mis Proyectos",
        sub: "Lenguajes de Programación, Librerías/Frameworks y Bases de Datos",
        roles: {
            react: "Desarrollador React",
            python: "Desarrollador Python",
            backend: "Desarrollador NodeJS",
            interactive: "Desarrollador Interactivo",
            manager: "Gestor de Proyectos",
            javascript: "Desarrollador JavaScript",
            typescript: "Desarrollador TypeScript",
            tailwind: "Desarrollador Tailwind CSS",
            mongodb: "Desarrollador de MongoDB",
        },
    },
    contact: {
        title: "Ponte en Contacto Conmigo",
        sub: "Información de Contacto",
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Correo electrónico",
        emailPlaceholder: "Tu correo electrónico",
        message: "Mensaje",
        messagePlaceholder: "Tu mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito. Gracias!",
        error: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
    },
    footer: {
        blog: "Visita mi blog",
        modelsBy: "Modelos 3D:",
        by: "de",
        rights: "Todos los derechos reservados.",
    },
    language: {
        label: "Cambiar idioma",
        en: "Inglés",
        es: "Español",
    },
};

const translations = { en, es };

export default translations;
