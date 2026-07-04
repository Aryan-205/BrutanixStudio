"use client";

import { projectCaseStudies } from "@/lib/data/projectsPageContent";
import ProjectCaseStudy from "./ProjectCaseStudy";

export default function ProjectsCaseStudies() {
  return (
    <div className="bg-white">
      {projectCaseStudies.map((project, index) => (
        <ProjectCaseStudy
          key={project.id}
          project={project}
          index={index}
          isFirst={index === 0}
        />
      ))}
    </div>
  );
}
