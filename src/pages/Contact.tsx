import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="w-full pb-20">
      {/* Simple Header */}
      <div className="bg-primary/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Contact Us" 
            subtitle="We're here to help. Reach out with any questions, or to schedule your next visit."
            centered
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need to book an appointment, inquire about our services, or ask a billing question, our friendly reception team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Our Location</h4>
                  <p className="text-muted-foreground mt-1">
                    123 Medical Center Blvd<br />
                    Suite 200<br />
                    Cityville, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Phone Number</h4>
                  <p className="text-muted-foreground mt-1 text-lg">
                    (555) 123-4567
                  </p>
                  <p className="text-sm text-secondary mt-1">24/7 Emergency line available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Email Address</h4>
                  <p className="text-muted-foreground mt-1">
                    hello@medicareclinic.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground">Hours of Operation</h4>
                  <table className="text-muted-foreground mt-1 w-full max-w-[250px]">
                    <tbody>
                      <tr>
                        <td className="py-1">Mon - Fri:</td>
                        <td className="text-right font-medium text-foreground">8:00 AM - 6:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Saturday:</td>
                        <td className="text-right font-medium text-foreground">9:00 AM - 2:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-1">Sunday:</td>
                        <td className="text-right font-medium text-destructive">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              {isSuccess ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground mb-6">We've received your message and will respond as soon as possible.</p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details..." 
                      className="min-h-[150px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full text-base py-6" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
