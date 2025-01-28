"use client"

import type { Project } from "../data/projects"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { ProjectTypeBadge } from "./ProjectTypeBadge"

interface ProjectDetailsProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetails({ project, isOpen, onClose }: ProjectDetailsProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {project.title}
            <ProjectTypeBadge type={project.type} />
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Carousel>
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={600}
                    height={400}
                    className="rounded-lg max-h-[300px]"

                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="space-y-2">
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Technology:</strong> {project.technology}
            </p>
            <p>
              <strong>Year:</strong> {project.year}
            </p>
            <p>
              <strong>Link:</strong>{" "}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {project.link}
              </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

