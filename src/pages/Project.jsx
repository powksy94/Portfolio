import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Matthieu Uzan
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-400"
        >
          Développeur Fullstack
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-8" // gap augmenté
        >
          <a
            href="#projects"
            className="px-10 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="px-10 py-4 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-0"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </header>
  );
}
