import { Link } from "wouter";
import { HeartPulse, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-primary-foreground group">
              <HeartPulse className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight">MediCare</span>
            </Link>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Your trusted neighborhood clinic providing compassionate, comprehensive healthcare for the whole family.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5 text-sidebar-accent-foreground hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5 text-sidebar-accent-foreground hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-sidebar-accent-foreground hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/general-physician" className="hover:text-primary transition-colors">General Physician</Link>
              </li>
              <li>
                <Link href="/dental" className="hover:text-primary transition-colors">Dental Care</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>123 Medical Center Blvd<br />Suite 200<br />Cityville, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>hello@medicareclinic.com</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between items-center border-b border-sidebar-accent pb-2">
                <span>Mon - Fri</span>
                <span className="font-medium">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-sidebar-accent pb-2">
                <span>Saturday</span>
                <span className="font-medium">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Sunday</span>
                <span className="font-medium text-destructive">Closed</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="text-secondary-foreground">24/7 Emergency Care Available</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-sidebar-accent text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} MediCare Family Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
