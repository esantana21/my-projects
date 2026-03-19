import Image from "next/image";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="font-label text-sm uppercase tracking-[0.3em] text-primary-custom mb-2">Portfolio</span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface-custom">Highlighted Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-surface-container-low-custom rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-primary-custom/10 border border-outline-variant-custom/30"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low-custom to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface-custom">{project.title}</h3>
                <p className="text-on-surface-variant-custom mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technology.split(',').slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-md bg-surface-container-highest-custom text-[10px] font-label font-bold text-secondary-custom uppercase"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                
                <a className="flex items-center gap-2 text-primary-custom font-bold font-headline group/link" href={project.link || "#"}>
                  View Case Study 
                  <svg className="transition-transform group-hover/link:translate-x-1 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.slice(3, 6).map((project) => (
            <div
              key={project.id}
              className="group p-8 rounded-3xl bg-surface-container-high-custom border border-outline-variant-custom/20 hover:border-secondary-custom/30 transition-all flex flex-col"
            >
              <h3 className="font-headline text-xl font-bold text-secondary-custom mb-4">{project.title}</h3>
              <p className="text-on-surface-variant-custom text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="mt-auto flex gap-2">
                {project.technology.split(',').slice(0, 2).map((tech, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-2 py-0.5 border border-outline-variant-custom rounded text-on-surface-variant-custom uppercase"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
