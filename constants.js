export const METADATA = {
  author: "Moez Souidi",
  title: "Moez Souidi",
  description:
    "Moez Souidi is a passionate Software Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://moez.eu.org",
  twitterHandle: "@moez",
  keywords: [
    "Moez Souidi",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Moez",
    "Souidi",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A passionate Software Engineer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: business@moez.eu.org",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/findmoez/",
  },
  {
    name: "github",
    url: "https://github.com/Moez-0/",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/moez.souidi/",
  },
  {
    name: "twitter",
    url: "https://x.com/moez",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "BoxUp",
    image: "/projects/boxup.png",
    blurImage: "/projects/blur/boxup-blur.webp",
    description: "Platform for managing and packaging items efficiently 📦",
    gradient: ["#FFB6C1", "#FF69B4"],
    url: "https://box-up.vercel.app/",
    tech: ["react", "firebase", "chakra-ui"],
  },
  {
    name: "Forstna",
    image: "/projects/forstna.png",
    blurImage: "/projects/blur/forstna-blur.webp",
    description: "Digital coupons and discounts platform offering loyalty programs 💸",
    gradient: ["#33ffb3", "#00ac56"],
    url: "https://forstna.moez.eu.org/",
    tech: ["react", "nextjs", "tailwindcss", "mongodb", "firebase"],
  },
  {
    name: "Invenio",
    image: "/projects/invenio.png",
    blurImage: "/projects/blur/invenio-blur.webp",
    description: "E-learning platform with live-streaming and AI-powered learning 🌐",
    gradient: ["#9f55ff", "#7000ff"],
    url: "https://invenio.moez.eu.org/",
    tech: ["react", "nextjs", "tailwindcss", "firebase", "chakra-ui"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "BOXUP",
      description:
      "BoxUp is a dynamic platform designed to revolutionize the way users manage and send packages, integrating advanced tracking and real-time updates for a smooth experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Simplifying package management and delivery
          </div>
      ),
    },
    {
      title: "Platform Development",
      description:
        "Led the development of BoxUp's core platform, implementing features such as package tracking, real-time delivery updates, and integration with multiple shipping providers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
    {
      title: "User Experience Optimization",
      description:
        "Focused on enhancing the user interface and experience by simplifying the package tracking process and improving mobile responsiveness, resulting in increased user satisfaction.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Advanced Features",
      description:
        "Developed advanced features, such as AI-powered delivery optimization, predictive tracking, and smart notifications, to improve delivery efficiency and customer engagement.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Engineer
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Invenio",
      description:
        "Invenio is an e-learning platform that allows educators to livestream and offer an interactive learning experience to students worldwide.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering education with live interactions
        </div>
      ),
    },
    {
      title: "Livestream Integration",
      description:
        "I integrated a seamless livestreaming feature into the platform, providing a real-time learning experience for students while ensuring minimal latency and high video quality.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Engineer
        </div>
      ),
    },
    {
      title: "AI Integration",
      description:
        "Incorporating AI into the platform, I developed intelligent features that adapt learning materials based on student performance, enhancing the overall learning experience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          AI Engineer
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Forstna",
      description:
        "Forstna is a digital platform offering various coupons and discounts from local businesses, with a focus on user engagement and loyalty programs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering users with exclusive deals and discounts
        </div>
      ),
    },
    {
      title: "Development",
      description:
        "Leading the development of a multi-language platform, I integrated user accounts, deal filtering, and business listings while ensuring a smooth user experience. The platform also includes features like loyalty programs and notifications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Developer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Through user feedback and analytics, I streamlined the platform's backend, optimizing database queries and improving overall performance. Additionally, I worked on mobile responsiveness and enhancing the user interface.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Engineer
        </div>
      ),
    },
    {
      title: "Expansion",
      description:
        "Developed new features to scale the platform for international users, including multi-currency support, multilingual capabilities, and cross-border deal integration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Full Stack Engineer
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
