import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImageUrl?: string;
  children?: ReactNode;
  height?: "full" | "half";
}

export function HeroSection({ 
  title, 
  subtitle, 
  backgroundImageUrl, 
  children,
  height = "half" 
}: HeroSectionProps) {
  return (
    <section 
      className={`relative flex items-center ${height === "full" ? "min-h-[80vh] md:min-h-[90vh]" : "min-h-[40vh] md:min-h-[50vh]"} overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImageUrl ? (
          <>
            <img 
              src={backgroundImageUrl} 
              alt="Medical background" 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/95 via-primary-foreground/80 to-transparent dark:from-background/95 dark:via-background/80 dark:to-background/50"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground via-accent to-background dark:from-background dark:via-sidebar dark:to-card"></div>
        )}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
