import { useState } from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";
import { skillIcons } from "../utils/skillIcons";

const skillsCategories = [
  {
    title: "Langages",
    skills: [
      { name: "Python", level: 60 },
      { name: "JavaScript", level: 50 },
      { name: "C++", level: 20 },
      { name: "HTML/CSS", level: 60 },
      { name: "C#", level: 40 },
      { name: "Flutter", level: 50 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    subcategories: [
      {
        title: "Front-end",
        skills: [
          { name: "React", level: 20 },
          { name: "React Native", level: 20 },
          { name: "Tailwind CSS", level: 20 },
          { name: "Vite", level: 20 },
        ],
      },
      {
        title: "Back-end",
        skills: [
          { name: "Flask", level: 65 },
          { name: "Laravel", level: 40 },
          { name: "Node.js", level: 50 },
          { name: "Django", level: 30 },
          { name: "Express", level: 35 },
        ],
      },
    ],
  },
  {
    title: "Scripts & Automatisation",
    skills: [
      { name: "Bash", level: 40 },
      { name: "PowerShell", level: 50 },
      { name: "WSL", level: 35 },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "MySQL", level: 50 },
      { name: "SQLite", level: 40 },
      { name: "MongoDB", level: 35 },
      { name: "Prisma", level: 20 },
    ],
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-950 py-24"
    >
      <div className="max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">À propos</h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
          🎓 Étudiant en 2ème année de Bachelor Informatique et Technologies à
          l'Ecole Sup de Vinci à Paris, La Défense, je m'intéresse au
          développement informatique 💻 et à la cybersécurité🔒.💡
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          Curieux, rigoureux et motivé, je souhaite renforcer mes compétences
          dans le développement web, mobile et jeu vidéo 🎮 au cours de ma
          formation. 🚀
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
          En développant progressivement ma maîtrise de différents langages de
          programmation, mon objectif est de mettre en pratique mes
          connaissances au sein d’un environnement professionnel stimulant.
        </p>

        {/* Accordion des compétences */}
        <div className="flex flex-col gap-4 max-w-xl mx-auto">
          {skillsCategories.map((category, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              {/* Bouton de catégorie */}
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800 text-left font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {category.title}
                <span className="ml-2">{openIndex === i ? "▲" : "▼"}</span>
              </button>

              {/* Contenu */}
              {openIndex === i && (
                <div className="px-4 py-3 flex flex-col gap-3">
                  {/* Sous-catégories si elles existent */}
                  {category.subcategories
                    ? category.subcategories.map((sub, j) => (
                        <div key={j} className="flex flex-col gap-2">
                          <h4 className="font-medium text-gray-700 dark:text-gray-300">{sub.title}</h4>
                          <div className="flex flex-col gap-2">
                            {sub.skills.map((skill) => (
                              <Badge
                                key={skill.name}
                                name={skill.name}
                                level={skill.level}
                              />
                            ))}
                          </div>
                        </div>
                      ))
                    : // Sinon, directement les skills
                      category.skills.map((skill) => (
                        <Badge 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        />
                      ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
