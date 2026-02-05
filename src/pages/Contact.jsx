import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (open && formRef.current) {
      const timer = setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <section id="contact" className="py-28 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl bg-white/80 dark:bg-black/40 backdrop-blur-xl shadow-xl p-10">
          {/* Titre */}
          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">Me contacter</h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-14">
            Retrouvez-moi ou envoyez-moi un message directement
          </p>

          <div className="flex flex-col items-center gap-12">
            {/* Icônes sociales */}
            <div className="flex justify-center gap-12">
              <a
                href="https://github.com/powksy94"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition hover:scale-110"
              >
                <Github className="w-7 h-7 text-gray-700 dark:text-gray-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/matthieu-uzan-7b4078279/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition hover:scale-110"
              >
                <Linkedin className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </a>
            </div>

            {/* Bouton CTA */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-lg font-semibold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition hover:scale-105 shadow-lg shadow-blue-500/30 active:scale-95"
            >
              <Mail size={22} />
              Envoyer un message
            </button>

            {/* Formulaire juste en dessous du bouton */}
            {open && (
              <div
                ref={formRef}
                className="mt-6 w-full max-w-lg mx-auto text-left bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 rounded-2xl p-6"
              >
                <ContactForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
