import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import LanguagePieChart from "../components/LanguagePieChart";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p className="p-6 text-center text-slate-900 dark:text-white">Projet non trouvé.</p>;

  const techList = (project.tech || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <PageWrapper>
      <header className="bg-white/70 dark:bg-white/10 backdrop-blur-xl py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-6 text-lg text-gray-700 dark:text-gray-300"
          >
            {project.description}
          </motion.p>

          <Link
            to="/projects"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Retour aux projets
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-8 leading-relaxed"
        >
          {project.content.map((block, idx) =>
            typeof block === "string" ? (
              <p key={idx} className="text-gray-800 dark:text-gray-200">
                {block}
              </p>
            ) : block?.type === "list" ? (
              <motion.ul
                key={idx}
                className="list-disc list-inside text-gray-800 dark:text-gray-200"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } },
                }}
                initial="hidden"
                animate="visible"
              >
                {block.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -14 },
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

          {/* Tech stack (cohérente avec la card) */}
          {techList.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {techList.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition w-fit"
            >
              Voir sur GitHub ↗
            </a>
          )}

          {/* Camembert (inchangé) */}
          {project.languages && (
            <div className="mt-10 bg-white/60 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center text-slate-900 dark:text-white">
                Répartition des technologies
              </h3>
              <LanguagePieChart data={project.languages} />
            </div>
          )}
        </motion.div>
      </main>
    </PageWrapper>
  );
}
