import { cn } from "@/lib/utils"

interface ProjectTypeBadgeProps {
  type: "mobile" | "frontend" | "full stack"
  className?: string
}

export function ProjectTypeBadge({ type, className }: ProjectTypeBadgeProps) {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full"
  const typeClasses = {
    mobile: "bg-blue-100 text-blue-800",
    frontend: "bg-green-100 text-green-800",
    "full stack": "bg-purple-100 text-purple-800",
  }

  return <span className={cn(baseClasses, typeClasses[type], className)}>{type}</span>
}

