import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/ProjectsPage/ProjectDetail";
import ProjectsCTASection from "@/components/ProjectsPage/ProjectsCTASection";
import FooterSection from "@/components/Landingpage/FooterSection";
import {
  getProjectBySlug,
  projectCaseStudies,
} from "@/data/projectsPageContent";
import { MotionProvider } from "../../MotionProvider";

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | InvisiEdge Marketing" };
  }

  return {
    title: `${project.name} | InvisiEdge Marketing`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-white pb-10 shadow-[0_20px_50px_rgba(82,16,248,0.06)]">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        <ProjectDetail project={project} />
        <ProjectsCTASection />
      </div>

      <div className="pointer-events-none hidden h-[562px] w-full bg-white md:block " />

      <FooterSection />
    </MotionProvider>
  );
}
