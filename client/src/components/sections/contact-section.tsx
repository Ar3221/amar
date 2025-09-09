import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { apiRequest } from "@/lib/queryClient";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactInquirySchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { ref } = useScrollAnimation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      productInterest: "",
      message: ""
    }
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactForm.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up" data-testid="contact-title">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up" data-testid="contact-subtitle">
              Ready to discuss your requirements? Get in touch with our team for personalized solutions and competitive pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-up">
              <Card className="bg-muted">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6" data-testid="contact-form-title">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Your full name"
                          className="mt-2"
                          data-testid="input-name"
                        />
                        {errors.name && (
                          <p className="text-destructive text-sm mt-1" data-testid="error-name">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          {...register("company")}
                          placeholder="Company name"
                          className="mt-2"
                          data-testid="input-company"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="your@email.com"
                          className="mt-2"
                          data-testid="input-email"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1" data-testid="error-email">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="+91 9012889090"
                          className="mt-2"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="productInterest">Product Interest</Label>
                      <Select onValueChange={(value) => setValue("productInterest", value)}>
                        <SelectTrigger className="mt-2" data-testid="select-product">
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="safety-matches">Safety Matches</SelectItem>
                          <SelectItem value="wooden-splints">Wooden Match Splints</SelectItem>
                          <SelectItem value="both">Both Products</SelectItem>
                          <SelectItem value="other">Other Requirements</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us about your requirements..."
                        className="mt-2"
                        data-testid="textarea-message"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1" data-testid="error-message">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full text-lg py-4"
                      disabled={submitContactForm.isPending}
                      data-testid="button-send-message"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {submitContactForm.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8 fade-in-up">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6" data-testid="contact-info-title">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start" data-testid="contact-address">
                    <MapPin className="w-6 h-6 text-accent mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Factory Address</h4>
                      <a 
                        href="https://www.google.com/maps?rlz=1C1VDKB_enIN1141IN1141&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPNIBBzc5NmowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KemB3_pHLAw5MU6VzXkaZxhP&daddr=Village.Kandela,+Plot+.No.1033+Industrial+estate+kairana+panipat,+road,+Shamli,+Uttar+Pradesh+247776"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        Village Kandela, Plot No.1033<br />
                        Industrial Estate Kairana Panipat Road<br />
                        Shamli, Uttar Pradesh 247776
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-phone">
                    <Phone className="w-6 h-6 text-accent mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <a 
                        href="tel:+919012889090" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 9012889090
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-email">
                    <Mail className="w-6 h-6 text-accent mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <a 
                        href="mailto:admin@amarsplints.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        admin@amarsplints.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-hours">
                    <Clock className="w-6 h-6 text-accent mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Location Section */}
              <div className="mt-8">
                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-primary mb-2">Visit Our Factory</h4>
                      <p className="text-muted-foreground mb-4">
                        Located in the heart of Uttar Pradesh's industrial zone
                      </p>
                      <Button 
                        onClick={() => window.open('https://www.google.com/maps?rlz=1C1VDKB_enIN1141IN1141&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPNIBBzc5NmowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KemB3_pHLAw5MU6VzXkaZxhP&daddr=Village.Kandela,+Plot+.No.1033+Industrial+estate+kairana+panipat,+road,+Shamli,+Uttar+Pradesh+247776', '_blank')}
                        className="w-full sm:w-auto"
                        data-testid="get-directions-button"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions on Google Maps
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
