import { motion } from "framer-motion";
import { Stethoscope, Smile, Activity, Shield, HeartHandshake, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Link } from "wouter";

export default function Home() {
  const scrollToAppointment = () => {
    const el = document.getElementById("appointment-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <HeroSection
        title="Expert Medical Care For Your Family"
        subtitle="Comprehensive, compassionate healthcare tailored to your family's unique needs. Experience modern medicine with a personal touch."
        backgroundImageUrl="/images/hero-medical.jpg"
        height="full"
      >
        <Button size="lg" onClick={scrollToAppointment} className="text-lg">
          Book Appointment
        </Button>
        <Button size="lg" variant="outline" className="text-lg bg-background/50 backdrop-blur hover:bg-background" asChild>
          <Link href="/general-physician">Explore Services</Link>
        </Button>
      </HeroSection>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Our Core Services" 
            subtitle="We offer specialized care across multiple disciplines to ensure your complete health."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110">
                <Stethoscope className="h-32 w-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-foreground">General Physician</h3>
                <p className="mb-8 text-lg text-muted-foreground max-w-md">
                  Comprehensive check-ups, preventive care, and treatment for illnesses. Our experienced doctors are here for your day-to-day health needs.
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/general-physician" className="flex items-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110">
                <Smile className="h-32 w-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Smile className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-foreground">Dental Care</h3>
                <p className="mb-8 text-lg text-muted-foreground max-w-md">
                  From routine cleanings to advanced cosmetic procedures, our dental team ensures your smile stays healthy and bright.
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/dental" className="flex items-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Why Choose MediCare" 
            subtitle="We believe healthcare should be accessible, high-quality, and deeply personal."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ServiceCard 
              index={0}
              icon={<Shield className="h-6 w-6" />}
              title="Experienced Professionals"
              description="Our team consists of board-certified doctors and specialists with years of clinical experience."
            />
            <ServiceCard 
              index={1}
              icon={<Activity className="h-6 w-6" />}
              title="Modern Equipment"
              description="We utilize the latest medical technology and diagnostic tools for accurate, effective care."
            />
            <ServiceCard 
              index={2}
              icon={<HeartHandshake className="h-6 w-6" />}
              title="Compassionate Care"
              description="We treat every patient like family, taking the time to listen and understand your concerns."
            />
            <ServiceCard 
              index={3}
              icon={<Clock className="h-6 w-6" />}
              title="Convenient Hours"
              description="Flexible scheduling including weekend availability to accommodate your busy lifestyle."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Patient Stories" 
            subtitle="Don't just take our word for it. Hear what our patients have to say about their care."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              index={0}
              name="Sarah Jenkins"
              quote="I've been taking my family to MediCare for three years now. The doctors are always attentive and I never feel rushed. Truly excellent care."
              rating={5}
            />
            <TestimonialCard 
              index={1}
              name="Michael Rodriguez"
              quote="The dental team here completely changed my perspective. They were so gentle and explained every step of my procedure. I no longer dread the dentist!"
              rating={5}
            />
            <TestimonialCard 
              index={2}
              name="Emma Thompson"
              quote="Getting an appointment was easy, the front desk was welcoming, and Dr. Wilson was fantastic. A very modern, clean, and professional clinic."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="appointment-cta" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Schedule Your Appointment?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Take the first step towards better health for you and your family. Book online or call us today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto w-full sm:w-auto" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
