"use client"

import { useState } from "react"
import { projects } from "./data/projects"
import { ProjectDetails } from "./components/ProjectDetails"
import { ProjectTypeBadge } from "./components/ProjectTypeBadge"
import { DeveloperProfile } from "./components/DeveloperProfile"
import Image from "next/image"

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div>
      <DeveloperProfile />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Galería de Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <ProjectTypeBadge type={project.type} />
                </div>
                <p className="text-gray-600 text-sm">{project.technology}</p>
              </div>
            </div>
          ))}
        </div>
        <ProjectDetails project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </div>
  )
}

