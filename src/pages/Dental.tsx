import { Sparkles, Scissors, ShieldAlert, Zap, Drill, PlusSquare } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { DoctorCard } from "@/components/DoctorCard";
import { AppointmentForm } from "@/components/AppointmentForm";

export default function Dental() {
  return (
    <div className="w-full">
      <HeroSection
        title="Advanced Dental Care"
        subtitle="State-of-the-art dentistry in a comfortable, relaxing environment. We are dedicated to giving you a healthy, beautiful smile."
        height="half"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Dental Services" 
            subtitle="From gentle cleanings to complex restorations, our clinic handles all your dental needs."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard 
              index={0}
              icon={<Sparkles className="h-6 w-6" />}
              title="Routine Cleanings"
              description="Professional plaque removal, polishing, and comprehensive oral exams to prevent decay and gum disease."
            />
            <ServiceCard 
              index={1}
              icon={<PlusSquare className="h-6 w-6" />}
              title="Cosmetic Dentistry"
              description="Teeth whitening, veneers, and bonding procedures to enhance the aesthetic appearance of your smile."
            />
            <ServiceCard 
              index={2}
              icon={<Zap className="h-6 w-6" />}
              title="Root Canals"
              description="Gentle and effective endodontic therapy to save infected teeth and relieve severe dental pain."
            />
            <ServiceCard 
              index={3}
              icon={<ShieldAlert className="h-6 w-6" />}
              title="Crowns & Bridges"
              description="Custom-made, durable restorations to protect damaged teeth or replace missing ones."
            />
            <ServiceCard 
              index={4}
              icon={<Drill className="h-6 w-6" />}
              title="Dental Implants"
              description="Permanent, natural-looking replacements for missing teeth, restoring full function and aesthetics."
            />
            <ServiceCard 
              index={5}
              icon={<Scissors className="h-6 w-6" />}
              title="Emergency Dental Care"
              description="Same-day appointments for urgent dental issues, severe pain, or dental trauma."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Meet Our Dentists" 
            subtitle="Highly skilled dental professionals dedicated to gentle, effective care."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <DoctorCard
              index={0}
              name="Dr. Emily Park"
              credentials="DDS"
              specialty="Cosmetic Dentistry"
              bio="Dr. Park is renowned for her aesthetic eye and precision. She specializes in full smile makeovers, porcelain veneers, and creating natural, beautiful results for her patients."
              imageUrl="/images/dr-park.png"
            />
            <DoctorCard
              index={1}
              name="Dr. Robert Kim"
              credentials="DDS"
              specialty="Oral Surgery & Implants"
              bio="With advanced training in oral surgery, Dr. Kim expertly handles complex extractions, dental implants, and bone grafting, ensuring minimal discomfort and quick recovery."
              imageUrl="/images/dr-kim.png"
            />
            <DoctorCard
              index={2}
              name="Dr. Lisa Nguyen"
              credentials="DDS"
              specialty="General Dentistry"
              bio="A gentle and patient-focused practitioner, Dr. Nguyen excels in restorative dentistry and anxiety management, making every dental visit a positive, relaxed experience."
              imageUrl="/images/dr-nguyen.png"
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
