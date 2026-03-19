"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "../data/projects";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-24" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="font-label text-sm uppercase tracking-[0.3em] text-primary-custom mb-2">Portfolio</span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface-custom">Highlighted Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative flex flex-col bg-surface-container-low-custom rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-primary-custom/10 border border-outline-variant-custom/30 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
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
                    
                    <div className="flex items-center gap-2 text-primary-custom font-bold font-headline group/link">
                      View Case Study 
                      <svg className="transition-transform group-hover/link:translate-x-1 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-container-low-custom border border-outline-variant-custom/30">
                {selectedProject && (
                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface-custom">{selectedProject.title}</h3>
                      <p className="text-on-surface-variant-custom text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {selectedProject.technology.split(',').map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 rounded-full bg-surface-container-highest-custom text-xs font-label font-bold text-secondary-custom uppercase"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-on-surface-variant-custom">
                        <span className="font-label">Year:</span>
                        <span>{selectedProject.year}</span>
                        <span className="mx-2">•</span>
                        <span className="font-label">Type:</span>
                        <span className="text-primary-custom font-bold">{selectedProject.type}</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {selectedProject.images.map((image, index) => (
                        <div key={index} className="relative h-64 rounded-2xl overflow-hidden">
                          <Image
                            src={image}
                            alt={`${selectedProject.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {selectedProject.link && (
                      <div className="flex justify-center">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-custom to-secondary-custom text-on-primary-custom px-8 py-4 rounded-full font-headline font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                        >
                          Visit Live Project
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.slice(3, 9).map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className="group p-8 rounded-3xl bg-surface-container-high-custom border border-outline-variant-custom/20 hover:border-secondary-custom/30 transition-all flex flex-col cursor-pointer"
                  onClick={() => setSelectedProject(project)}
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
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-container-low-custom border border-outline-variant-custom/30">
                {selectedProject && (
                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className="font-headline text-3xl font-bold mb-4 text-on-surface-custom">{selectedProject.title}</h3>
                      <p className="text-on-surface-variant-custom text-lg leading-relaxed mb-6">{selectedProject.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {selectedProject.technology.split(',').map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 rounded-full bg-surface-container-highest-custom text-xs font-label font-bold text-secondary-custom uppercase"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-on-surface-variant-custom">
                        <span className="font-label">Year:</span>
                        <span>{selectedProject.year}</span>
                        <span className="mx-2">•</span>
                        <span className="font-label">Type:</span>
                        <span className="text-primary-custom font-bold">{selectedProject.type}</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {selectedProject.images.map((image, index) => (
                        <div key={index} className="relative h-64 rounded-2xl overflow-hidden">
                          <Image
                            src={image}
                            alt={`${selectedProject.title} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {selectedProject.link && (
                      <div className="flex justify-center">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-custom to-secondary-custom text-on-primary-custom px-8 py-4 rounded-full font-headline font-bold text-lg shadow-lg hover:scale-105 transition-transform"
                        >
                          Visit Live Project
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
