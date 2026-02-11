import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/projects", label: "Projets" },
    { path: "/contact", label: "Contact" },
  ];

  // ✅ Si on passe en desktop (>= md), on ferme le menu mobile
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-[9999] w-full">
      {/* Background glass */}
      <div className="w-full py-3 backdrop-blur-xl bg-white/20 dark:bg-black/20">
        <nav className="max-w-5xl mx-auto px-4">
          {/* Capsule */}
          <div className="rounded-[30px] bg-white/50 dark:bg-white/10 shadow-2xl border border-blue-100/30 dark:border-transparent px-4 sm:px-6 py-3 flex items-center gap-4">
            {/* ✅ DESKTOP (>= md) : liens horizontaux centrés */}
            <ul className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-8 list-none m-0 p-0">
              {links.map((link) => (
                <li key={link.path} className="m-0 p-0">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `inline-flex items-center px-4 lg:px-6 py-2 rounded-xl font-semibold text-sm transition whitespace-nowrap ${
                        isActive
                          ? "bg-blue-50/90 dark:bg-white/20 text-blue-900 dark:text-white shadow-md"
                          : "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* ✅ Droite : toggle TOUJOURS visible + burger uniquement mobile */}
            <div className="flex items-center gap-3 ml-auto">
              <ThemeToggle />

              {/* ✅ Burger UNIQUEMENT mobile (< md) */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center text-xl w-11 h-11 rounded-xl bg-blue-50/50 dark:bg-white/10"
                aria-label="Ouvrir le menu"
                aria-expanded={open}
              >
                {open ? "✖️" : "☰"}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ✅ Menu mobile (< md) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-[72px] left-4 right-4 rounded-2xl bg-white/80 dark:bg-gray-900/75 backdrop-blur-xl shadow-2xl border border-blue-100/30 dark:border-transparent p-4"
            >
              <ul className="flex flex-col gap-2 list-none m-0 p-0">
                {links.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-semibold transition ${
                          isActive
                            ? "bg-black/5 dark:bg-white/10 text-black dark:text-white"
                            : "text-black/70 dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/10"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
