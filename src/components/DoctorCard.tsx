import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  imageUrl: string;
  index?: number;
}

export function DoctorCard({ name, credentials, specialty, bio, imageUrl, index = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full"
      data-testid={`doctor-card-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-foreground inline-block">{name}</h3>
          <span className="text-sm font-medium text-muted-foreground ml-2">{credentials}</span>
        </div>
        <div className="text-primary font-medium mb-4">{specialty}</div>
        <p className="text-muted-foreground mb-6 flex-grow">{bio}</p>
        <Button 
          className="w-full"
          onClick={() => {
            const formSection = document.getElementById("appointment");
            if (formSection) {
              formSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book Appointment
        </Button>
      </div>
    </motion.div>
  );
}
