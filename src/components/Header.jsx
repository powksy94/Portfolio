import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="relative">
      {/* Bande “glass” pour lisibilité sur le background animé */}
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="rounded-3xl bg-white/50 dark:bg-black/40 backdrop-blur-xl shadow-xl border border-blue-100/40 dark:border-transparent px-6 sm:px-10 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Matthieu Uzan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 dark:text-slate-300"
          >
            Développeur Fullstack
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              to="/projects"
              className="px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
            >
              {onHome ? "Voir mes projets" : "Retour aux projets"}
            </Link>

            {/* ✅ Contact = vraie page */}
            <Link
              to="/contact"
              className="px-10 py-4 rounded-xl border border-blue-200/50 dark:border-white/15 bg-blue-50/50 dark:bg-white/5 hover:bg-blue-100/60 dark:hover:bg-white/10 transition text-slate-800 dark:text-white"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
