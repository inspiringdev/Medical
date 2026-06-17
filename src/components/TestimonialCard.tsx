import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating?: number;
  index?: number;
}

export function TestimonialCard({ name, quote, rating = 5, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border p-8 rounded-xl shadow-sm relative"
      data-testid={`testimonial-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex text-secondary mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-current" : "text-muted"}`}
          />
        ))}
      </div>
      <blockquote className="text-lg text-foreground italic mb-6">
        "{quote}"
      </blockquote>
      <div className="font-semibold text-primary">— {name}</div>
    </motion.div>
  );
}
