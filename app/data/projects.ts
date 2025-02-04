export interface Project {
  id: number;
  title: string;
  description: string;
  technology: string;
  year: number;
  link: string;
  images: string[];
  type: "mobile" | "frontend" | "full stack";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Soy Yo RD",
    description:
      "An innovative mobile application developed to provide Dominican citizens with access to essential services, including identity verification, document management, and digital interaction with government services. The app ensures a user-friendly experience and high performance.",
    technology: "React Native",
    year: 2024,
    link: "https://soyyord.gob.do",
    images: [
      "./images/sy_1.png",
      "../images/sy_2.png",
      "./images/sy_3.png",
      "../images/sy_4.png",
    ],
    type: "mobile",
  },
  {
    id: 2,
    title: "Portal GOB",
    description:
      "A comprehensive government platform consisting of a public-facing portal and an advanced back-office system. The portal serves as a centralized hub for citizens to access government information, services, and resources, while the back-office system streamlines administrative operations and content management.",
    technology: "Next.js, React.js",
    year: 2024,
    link: "https://www.gob.do",
    images: [
      "/images/pb_1.png",
      "/images/pb_2.png",
      "/images/pb_3.png",
      "/images/pb_4.png",
      "/images/pb_5.png",
      "/images/pb_6.png",
    ],
    type: "frontend",
  },
  {
    id: 3,
    title: "Microslab",
    description:
      "A cutting-edge clinical laboratory system designed to streamline laboratory operations and enhance efficiency. Microslab features an intuitive interface for managing patient data, test results, and laboratory workflows. Additionally, it includes custom-built integrations with laboratory equipment, enabling seamless communication and automated data handling.",
    technology: "React.js, NestJS, MySQL",
    year: 2024,
    link: "",
    images: ["/images/ml_3.png","/images/ml_1.png", "/images/ml_2.png"],
    type: "full stack",
  },
  {
    id: 4,
    title: "SCG Portal",
    description: "A dynamic portal designed to optimize workflows and provide users with access to critical services and information. Built for scalability and performance, the portal features a clean and responsive design tailored to meet the needs of its users.",
    technology: "Next.js, Payload, MongoDB",
    year: 2024,
    link: "https://scg-portal.vercel.app",
    images: [
      "/images/sc_1.png",
      "/images/sc_2.png",
      "/images/sc_3.png"
    ],
    type: "frontend"
  }
,  
{
  id: 5,
  title: "RespiroApp",
  description: "A mobile application designed for tracking credit transactions and managing orders in local convenience stores (colmados). RespiroApp simplifies the process of credit monitoring, order placement, and customer management, offering an intuitive interface and seamless functionality for store owners and customers alike.",
  technology: "React Native,Nestjs,MySQL",
  year: 2023,
  link: "",
  images: [
    "/images/rp_1.png",
    "/images/rp_2.png",
    "/images/rp_3.png",
    "/images/rp_4.png"
  ],
  type: "mobile"
},
{
  id: 6,
  title: "Beca tu futuro",
  description: "A web platform aimed at connecting students with scholarship opportunities to support their educational aspirations. The platform features a user-friendly interface for browsing, applying, and tracking scholarship applications, making the process seamless for both applicants and administrators.",
  technology: "Reactjs",
  year: 2023,
  link: "https://becas.gob.do",
  images: [
    "/images/bc_7.png",
    "/images/bc_1.png",
    "/images/bc_2.png",
    "/images/bc_3.png",
    "/images/bc_4.png",
    "/images/bc_5.png",
    "/images/bc_6.png"
  ],
  type: "frontend"
},
{
  id: 7,
  title: "TurnXpress",
  description: "A robust queuing and flow management system designed for banks, hospitals, and other service-oriented environments. Built within a monorepo architecture, TurnXpress uses NestJS for its backend and ReactJS for its frontend. The system efficiently manages customer call flows, tracks wait times, and provides real-time updates to optimize user experiences and operational efficiency.",
  technology: "ReactJSa, NestJS, MySQL",
  year: 2020,
  link: "",
  images: [
    "/images/tx_1.png",
    "/images/tx_2.png",
    "/images/tx_3.png",
    "/images/tx_4.png",
  ],
  type: "full stack"
},
{
  id: 8,
  title: "Chat for Monki App",
  description: "A custom chat module developed for the Monki App to facilitate seamless communication between users. The backend is powered by Go with MongoDB, ensuring high performance, scalability, and real-time message delivery. Features include user authentication, message persistence, and real-time updates for a smooth user experience.",
  technology: " React Native, Go, MongoDB",
  year: 2024,
  link: "",
  images: [
    "/images/mk_1.png",
  ],
  type: "full stack"
}
];
