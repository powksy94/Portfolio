import PageWrapper from "../components/PageWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto py-24 px-6">
        <div className="rounded-3xl bg-white/50 dark:bg-black/40 backdrop-blur-xl shadow-xl border border-blue-100/40 dark:border-transparent p-10">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-slate-900 dark:text-white">
          Mes Projets
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
      </div>
    </PageWrapper>
  );
}
