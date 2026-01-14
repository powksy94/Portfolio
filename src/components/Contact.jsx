import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactModal from "./ContactForm";

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Me contacter
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Retrouvez-moi ou envoyez-moi un message directement
        </p>

        {/* Icônes */}
        <div className="flex justify-center gap-8 mb-10">
          <a
            href="https://github.com/powksy94"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition"
          >
            <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/matthieu-uzan-7b4078279/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition"
          >
            <Linkedin className="w-8 h-8 text-blue-600" />
          </a>
            {/* Bouton */}
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Mail size={16} />
          Envoyer un message
        </button>
      </div>
        </div>

      

      {/* Popup */}
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </section>
  );
}
