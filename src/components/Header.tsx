import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "General Physician", path: "/general-physician" },
    { name: "Dental Care", path: "/dental" },
    { name: "Contact", path: "/contact" },
  ];

  const handleBookAppointment = () => {
    setIsMobileMenuOpen(false);
    // If not on home page, navigate to home first, then scroll
    if (location !== "/") {
      window.location.href = "/#appointment";
    } else {
      const el = document.getElementById("appointment");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary group" data-testid="link-logo">
          <HeartPulse className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            MediCare
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary border-b-2 border-primary py-2" : "text-muted-foreground"
              }`}
              data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.name}
            </Link>
          ))}
          <Button onClick={handleBookAppointment} data-testid="button-book-appointment-nav">
            Book Appointment
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium p-2 rounded-md ${
                    location === link.path ? "bg-accent text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={handleBookAppointment} className="w-full mt-2">
                Book Appointment
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
