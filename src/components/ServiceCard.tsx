import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  index?: number;
}

export function ServiceCard({ title, description, icon, href, index = 0 }: ServiceCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
      {href && (
        <div className="mt-6 text-primary font-medium flex items-center hover:text-primary/80 transition-colors">
          Learn more <span className="ml-2">→</span>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
