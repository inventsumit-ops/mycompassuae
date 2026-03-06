"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import logo from "@/assets/logo3.png";

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4 items-center">
              <Image src={logo} alt="My Compass UAE" width={200} height={200} />
            </div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help your
              business grow with the right technology solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: ["Dubai, United Arab Emirates"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+971 XX XXX XXXX"],
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["info@mycompassuae.ae"],
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card-gradient border border-border rounded-lg p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.lines.map((l) => (
                      <p key={l} className="text-muted-foreground text-sm">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-card-gradient border border-border rounded-lg p-8"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Full Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Phone
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+971..."
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Subject *
                  </label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-accent-gradient text-accent-foreground px-8 py-3 rounded-md font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={16} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
