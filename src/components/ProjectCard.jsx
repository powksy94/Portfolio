import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectBadge } from "./ProjectBadge";

export default function ProjectCard({ slug, title, description, tech }) {
  const techList = (tech || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        group relative overflow-hidden
        flex flex-col
        rounded-3xl p-7
        bg-white/50 dark:bg-white/10
        shadow-2xl
        backdrop-blur-xl
        border border-blue-100/30 dark:border-transparent
        transition
      "
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>

      {/* Badges tech */}
      <div className="flex flex-wrap items-start gap-2 mt-5 min-h-16">
        {techList.slice(0, 6).map((t, i) => (
          <ProjectBadge key={`${slug}-tech-${t}-${i}`} name={t} />
        ))}
        {techList.length > 6 && (
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-white/10 text-slate-600 dark:text-slate-200">
            +{techList.length - 6}
          </span>
        )}
      </div>

      <div className="mt-auto pt-7 flex justify-end">
        <Link
          to={`/projects/${slug}`}
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-xl
            bg-blue-600 text-white
            hover:bg-blue-700
            transition
          "
        >
          Voir le projet <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
