import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiGo,
  SiNestjs,
  SiGooglecloud,
  SiMysql,
  SiJenkins,
  SiGithubactions,
} from "react-icons/si";

const tools = [
  { name: "React", icon: FaReact, color: "text-primary-custom" },
  { name: "TypeScript", icon: SiTypescript, color: "text-secondary-custom" },
  { name: "Node.js", icon: FaNodeJs, color: "text-tertiary-custom" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-primary-custom" },
  { name: "MongoDB", icon: SiMongodb, color: "text-secondary-custom" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-tertiary-custom" },
  { name: "Redis", icon: SiRedis, color: "text-primary-custom" },
  { name: "AWS", icon: FaAws, color: "text-secondary-custom" },
  { name: "Docker", icon: FaDocker, color: "text-tertiary-custom" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-primary-custom" },
  { name: "Git", icon: FaGitAlt, color: "text-secondary-custom" },
  { name: "Go", icon: SiGo, color: "text-tertiary-custom" },
];

export function SkillsSection() {
  return (
    <section className="py-24 bg-surface-container-low-custom" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 tracking-tight text-on-surface-custom">The Digital Armory</h2>
            <p className="text-on-surface-variant-custom text-lg">A curated stack of tools designed for scalability, security, and world-class performance.</p>
          </div>
          <div className="text-primary-custom font-label text-sm uppercase tracking-widest border-b border-primary-custom pb-2">Technical Proficiency</div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group p-6 rounded-2xl bg-surface-container-custom border border-outline-variant-custom hover:border-primary-custom/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(143,245,255,0.05)]"
            >
              <div className="flex flex-col items-center gap-3">
                <tool.icon className={`text-3xl ${tool.color} group-hover:scale-110 transition-transform`} />
                <span className="font-label text-xs font-semibold text-on-surface-variant-custom group-hover:text-primary-custom">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
