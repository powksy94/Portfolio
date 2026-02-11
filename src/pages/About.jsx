import { useState } from "react";
import { motion } from "framer-motion";
import Badge from "../components/Badge";

const skillsCategories = [
  {
    title: "Langages",
    skills: [
      { name: "Python", percent: 60 },
      { name: "JavaScript", percent: 50 },
      { name: "C++", percent: 20 },
      { name: "HTML/CSS", percent: 60 },
      { name: "C#", percent: 40 },
      { name: "Flutter", percent: 50 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    subcategories: [
      {
        title: "Front-end",
        skills: [
          { name: "React", percent: 20 },
          { name: "React Native", percent: 20 },
          { name: "Tailwind CSS", percent: 20 },
          { name: "Vite", percent: 20 },
        ],
      },
      {
        title: "Back-end",
        skills: [
          { name: "Flask", percent: 65 },
          { name: "Laravel", percent: 40 },
          { name: "Node.js", percent: 50 },
          { name: "Django", percent: 30 },
          { name: "Express", percent: 35 },
        ],
      },
    ],
  },
  {
    title: "Scripts & Automatisation",
    skills: [
      { name: "Bash", percent: 40 },
      { name: "PowerShell", percent: 50 },
      { name: "WSL", percent: 35 },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "MySQL", percent: 50 },
      { name: "SQLite", percent: 40 },
      { name: "MongoDB", percent: 35 },
      { name: "Prisma", percent: 20 },
    ],
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null);
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center py-24"
    >
      <div className="max-w-5xl px-6 text-center">
        <div className="rounded-3xl bg-white/50 dark:bg-black/40 backdrop-blur-xl shadow-xl border border-blue-100/40 dark:border-transparent p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">À propos</h2>

        <p className="text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
          🎓 Étudiant en 2ème année de Bachelor Informatique et Technologies à
          l'Ecole Sup de Vinci à Paris, La Défense, je m'intéresse au
          développement informatique 💻 et à la cybersécurité🔒.💡
        </p>

        <p className="text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          Curieux, rigoureux et motivé, je souhaite renforcer mes compétences
          dans le développement web, mobile et jeu vidéo 🎮 au cours de ma
          formation. 🚀
        </p>

        <p className="text-slate-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          En développant progressivement ma maîtrise de différents langages de
          programmation, mon objectif est de mettre en pratique mes
          connaissances au sein d’un environnement professionnel stimulant.
        </p>

        {/* Tabs des compétences */}
        <div className="max-w-xl mx-auto">
          {/* Ligne des tabs */}
          <div className="flex flex-wrap gap-2">
            {skillsCategories.map((category, i) => (
              <button
                key={i}
                onClick={() => toggleAccordion(i)}
                className={`flex-1 min-w-30 px-4 py-3 rounded-lg font-semibold text-sm transition ${
                  openIndex === i
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 dark:bg-gray-800 text-slate-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Contenu de la catégorie ouverte */}
          {openIndex !== null && (
            <div className="mt-4 border border-blue-100 dark:border-gray-700 rounded-lg p-4 flex flex-col gap-3">
              {skillsCategories[openIndex].subcategories
                ? skillsCategories[openIndex].subcategories.map((sub, j) => (
                    <div key={j} className="border border-blue-100 dark:border-gray-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenSubIndex(openSubIndex === j ? null : j)}
                        className="w-full flex justify-between items-center px-3 py-2 bg-blue-50/60 dark:bg-gray-700 text-left font-medium text-slate-600 dark:text-gray-300 hover:bg-blue-100/60 dark:hover:bg-gray-600 transition"
                      >
                        {sub.title}
                        <span className="ml-2">{openSubIndex === j ? "▲" : "▼"}</span>
                      </button>
                      {openSubIndex === j && (
                        <div className="px-3 py-2 flex flex-col gap-2">
                          {sub.skills.map((skill) => (
                            <Badge key={skill.name} name={skill.name} percent={skill.percent} />
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                : skillsCategories[openIndex].skills.map((skill) => (
                    <Badge key={skill.name} name={skill.name} percent={skill.percent} />
                  ))}
            </div>
          )}
        </div>
        </div>
      </div>
    </motion.section>
  );
}
