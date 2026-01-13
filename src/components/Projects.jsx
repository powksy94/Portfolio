import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-14 text-center">
          Mes projets
        </h2>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
