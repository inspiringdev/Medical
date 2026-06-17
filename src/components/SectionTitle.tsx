import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-foreground mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 w-20 bg-primary mt-6 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
