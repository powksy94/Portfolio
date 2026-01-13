import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation(); // pour détecter la page actuelle

  // Shadow navbar au scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") return; // scroll uniquement sur la page d'accueil
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = () => {
    if (!open && location.pathname === "/") scrollToSection("home");
    setOpen(!open);
  };

  return (
    <header className="relative z-50">
      <nav
        className={`fixed w-full top-0 transition-all duration-300 ${
          scrolled
            ? "shadow-md bg-white dark:bg-gray-900"
            : "bg-white/90 dark:bg-gray-900/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / Accueil */}
          {location.pathname === "/" ? (
            <button onClick={() => scrollToSection("home")} className="font-bold text-xl">
              Accueil
            </button>
          ) : (
            <Link to="/" className="font-bold text-xl">
              Accueil
            </Link>
          )}

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-6">
            {location.pathname === "/" ? (
              <>
                <button onClick={() => scrollToSection("about")} className="hover:text-blue-500 transition">
                  À propos
                </button>
                <button onClick={() => scrollToSection("projects")} className="hover:text-blue-500 transition">
                  Projets
                </button>
                <button onClick={() => scrollToSection("contact")} className="hover:text-blue-500 transition">
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link to="/#about" className="hover:text-blue-500 transition">
                  À propos
                </Link>
                <Link to="/#projects" className="hover:text-blue-500 transition">
                  Projets
                </Link>
                <Link to="/#contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </>
            )}
            <ThemeToggle />
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden p-2 rounded-md text-xl z-50 relative"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            {open ? "✖️" : "☰"}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="flex flex-col items-center gap-4 px-6 py-4">
              {location.pathname === "/" ? (
                <>
                  <button onClick={() => { scrollToSection("home"); setOpen(false); }} className="hover:text-blue-500 transition">
                    Accueil
                  </button>
                  <button onClick={() => { scrollToSection("about"); setOpen(false); }} className="hover:text-blue-500 transition">
                    À propos
                  </button>
                  <button onClick={() => { scrollToSection("projects"); setOpen(false); }} className="hover:text-blue-500 transition">
                    Projets
                  </button>
                  <button onClick={() => { scrollToSection("contact"); setOpen(false); }} className="hover:text-blue-500 transition">
                    Contact
                  </button>
                </>
              ) : (
                <>
                  <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
                    Accueil
                  </Link>
                  <Link to="/#about" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
                    À propos
                  </Link>
                  <Link to="/#projects" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
                    Projets
                  </Link>
                  <Link to="/#contact" onClick={() => setOpen(false)} className="hover:text-blue-500 transition">
                    Contact
                  </Link>
                </>
              )}
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
