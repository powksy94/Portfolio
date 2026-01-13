import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import LanguagePieChart from "../components/LanguagePieChart";
import { ProjectBadge } from "../components/ProjectBadge";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="p-6 text-center">Projet non trouvé.</p>;

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400"
          >
            {project.description}
          </motion.p>

          <Link
            to="/projects"
            className="inline-block mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Retour aux projets
          </Link>
        </div>
      </header>

      {/* Contenu détaillé */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {project.content.map((block, idx) =>
            typeof block === "string" ? (
              <p key={idx} className="text-gray-700 dark:text-gray-300">
                {block}
              </p>
            ) : block.type === "list" ? (
              <motion.ul
                key={idx}
                className="list-disc list-inside text-gray-700 dark:text-gray-300"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15, // délai entre chaque item
                    },
                  },
                }}
              >
                {block.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="mb-2"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            ) : null
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-4 mt-4">
            {project.tech.split(",  ").map((tech) => (
              <span
                key={tech}
                className="inline-block px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Lien GitHub */}
          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Voir sur GitHub ↗
            </a>
          )}
          {/* Répartition des technologies */}
          {project.languages && (
            <div className="mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow p-6 w-full">
              <h3 className="text-xl font-bold mb-4 text-center">
                Répartition des technologies
              </h3>
              <LanguagePieChart data={project.languages} />
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
