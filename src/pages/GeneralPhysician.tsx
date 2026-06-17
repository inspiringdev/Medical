import { Heart, Activity, Syringe, ShieldCheck, Thermometer, Stethoscope } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentForm } from "@/components/AppointmentForm";

export default function GeneralPhysician() {
  return (
    <div className="w-full">
      <HeroSection
        title="General Physician Services"
        subtitle="Expert primary care focused on prevention, accurate diagnosis, and personalized treatment plans for adults and children."
        height="half"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Comprehensive Healthcare" 
            subtitle="Our general physicians provide a wide range of medical services to keep you healthy at every stage of life."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard 
              index={0}
              icon={<Heart className="h-6 w-6" />}
              title="Annual Check-ups"
              description="Comprehensive physical exams, health risk assessments, and routine lab work to maintain your optimal health."
            />
            <ServiceCard 
              index={1}
              icon={<Activity className="h-6 w-6" />}
              title="Chronic Disease Management"
              description="Ongoing care and monitoring for conditions like diabetes, hypertension, asthma, and heart disease."
            />
            <ServiceCard 
              index={2}
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Preventive Care"
              description="Proactive health counseling, lifestyle advice, and screenings to detect issues before they become serious."
            />
            <ServiceCard 
              index={3}
              icon={<Syringe className="h-6 w-6" />}
              title="Vaccinations"
              description="Routine immunizations for children and adults, including seasonal flu shots and travel vaccines."
            />
            <ServiceCard 
              index={4}
              icon={<Thermometer className="h-6 w-6" />}
              title="Minor Illness Treatment"
              description="Prompt, effective treatment for common ailments like infections, fevers, colds, and minor injuries."
            />
            <ServiceCard 
              index={5}
              icon={<Stethoscope className="h-6 w-6" />}
              title="Health Screenings"
              description="Specialized screenings for cholesterol, cancer, bone density, and other important health markers."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Meet Our Physicians" 
            subtitle="Dedicated, compassionate professionals committed to your well-being."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <DoctorCard
              index={0}
              name="Dr. James Wilson"
              credentials="MD"
              specialty="Family Medicine"
              bio="With over 15 years of experience, Dr. Wilson specializes in comprehensive family care, treating patients of all ages with a focus on preventive medicine and wellness education."
              imageUrl="/images/dr-wilson.png"
            />
            <DoctorCard
              index={1}
              name="Dr. Sarah Chen"
              credentials="MD"
              specialty="Internal Medicine"
              bio="Dr. Chen is board-certified in internal medicine with a special interest in managing complex chronic conditions and autoimmune disorders. She believes in a holistic approach."
              imageUrl="/images/dr-chen.png"
            />
            <DoctorCard
              index={2}
              name="Dr. Michael Torres"
              credentials="MD"
              specialty="Preventive Medicine"
              bio="Passionate about lifestyle interventions, Dr. Torres works closely with patients to develop sustainable habits for long-term health, sports medicine, and nutritional counseling."
              imageUrl="/images/dr-torres.png"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
