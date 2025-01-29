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
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "AWS", icon: FaAws, color: "text-yellow-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  // Nuevas herramientas
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Go", icon: SiGo, color: "text-blue-300" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-800" },
  { name: "Jenkins", icon: SiJenkins, color: "text-red-500" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-700" },
];

export function ToolsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
        Tools and technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              <tool.icon className={`text-4xl ${tool.color} mb-2`} />
              <span className="text-sm font-medium text-center">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
