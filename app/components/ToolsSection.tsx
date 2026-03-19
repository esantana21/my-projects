import {
  FaCogs,
  FaBrain,
  FaDatabase,
  FaCloud,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Core Engineering",
    icon: FaCogs,
    skills: [
      "React, Next.js, TypeScript",
      "Node.js (NestJS), Go",
      "REST & GraphQL APIs",
      "Clean Architecture & Scalable System Design",
    ],
  },
  {
    title: "AI & Intelligent Systems",
    icon: FaBrain,
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "LLM Integration & Prompt Engineering",
      "LLM Orchestration (LangChain, LlamaIndex)",
      "Embeddings & Semantic Search",
      "AI-powered Chat Systems",
    ],
  },
  {
    title: "Data & Storage",
    icon: FaDatabase,
    skills: [
      "PostgreSQL, MongoDB",
      "Redis (caching & real-time systems)",
      "Vector Databases (Pinecone, Postgres with pgvector)",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Docker & Containerization",
      "CI/CD Pipelines",
      "High-performance & scalable deployments",
    ],
  },
  {
    title: "Frontend & UX",
    icon: FaPalette,
    skills: [
      "React Native",
      "Tailwind CSS",
      "Responsive & performance-focused UI",
    ],
  },
  {
    title: "Performance & Architecture",
    icon: FaRocket,
    skills: [
      "High concurrency systems",
      "Caching strategies",
      "API optimization",
      "Secure and scalable backend design",
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 bg-surface-container-low-custom" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight text-on-surface-custom">Technical Expertise</h2>
            <p className="text-on-surface-variant-custom text-lg">A comprehensive skill set spanning from core engineering to cutting-edge AI systems.</p>
          </div>
          <div className="text-primary-custom font-label text-sm uppercase tracking-widest border-b border-primary-custom pb-2">Technical Proficiency</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-8 rounded-3xl bg-surface-container-custom border border-outline-variant-custom hover:border-primary-custom/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(143,245,255,0.05)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-custom/20 to-secondary-custom/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="text-2xl text-primary-custom" />
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface-custom">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start gap-3 text-on-surface-variant-custom text-sm leading-relaxed"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-custom mt-2 flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
