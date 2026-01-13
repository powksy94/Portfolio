import { motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Section from "../components/Section";

export default function Home() {
  return (
    <main id="home" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-32">
      {/* Header animé */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
      </motion.div>

      {/* À propos */}
      <Section id="about">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>
      </Section>

      {/* Projets */}
      <Section id="projects">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Projects />
        </motion.div>
      </Section>
    </main>
  );
}
