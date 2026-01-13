import { motion } from "framer-motion";

export default function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {children}
    </motion.section>
  );
}
