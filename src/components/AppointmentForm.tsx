import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { CalendarIcon, Loader2, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  date: z.date({
    required_error: "A date of birth is required.",
  }),
  time: z.string({
    required_error: "Please select a preferred time.",
  }),
  serviceType: z.string({
    required_error: "Please select a service type.",
  }),
  reason: z.string().min(10, {
    message: "Please provide a brief reason for your visit.",
  }),
});

export function AppointmentForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      reason: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Appointment Requested!",
        description: "We'll contact you shortly to confirm your schedule.",
      });
      form.reset();
    }, 1500);
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border p-8 rounded-xl shadow-lg text-center h-full flex flex-col items-center justify-center min-h-[500px]"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Request Sent Successfully</h3>
        <p className="text-muted-foreground mb-8 max-w-md">
          Thank you for choosing MediCare. Our reception team will call you at the provided phone number within 24 hours to confirm your exact appointment time.
        </p>
        <Button onClick={() => setIsSuccess(false)}>Book Another Appointment</Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-lg" id="appointment">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Request an Appointment</h3>
        <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general">General Physician</SelectItem>
                      <SelectItem value="dental">Dental Care</SelectItem>
                      <SelectItem value="pediatric">Pediatric Care</SelectItem>
                      <SelectItem value="checkup">Annual Check-up</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col justify-end">
                  <FormLabel>Preferred Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`w-full pl-3 text-left font-normal ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                      <SelectItem value="evening">Evening (4pm - 6pm)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for Visit</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please briefly describe your symptoms or reason for visiting..." 
                    className="min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Request...
              </>
            ) : (
              "Request Appointment"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
