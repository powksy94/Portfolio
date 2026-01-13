import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectBadge } from "./ProjectBadge";

export default function ProjectCard({ slug, title, description, tech, languages }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
    >
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      {/* Technologies / Langages */}
      <div className="flex flex-wrap gap-4 mt-4">
        {Array.isArray(languages) && languages.length > 0
          ? languages.map((lang, i) => (
              <span
                key={`${slug}-${lang.name ?? "Other"}-${i}`}
                className=""
              >
                {/* Badge name */}
                <ProjectBadge name={lang.name ?? ""} />
                
                {/* Badge value */}
                {lang.value !== undefined && <ProjectBadge value={lang.value} />}
              </span>
            ))
          : tech
              ?.split(",")
              .map((t) => t.trim())
              .filter(Boolean)
              .map((t, i) => (
                <ProjectBadge key={`${slug}-tech-${t}-${i}`} name={t} />
              ))}
      </div>

      {/* CTA */}
      <div className="mt-6 flex justify-end">
        <Link
          to={`/projects/${slug}`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:underline"
        >
          Voir le projet
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
