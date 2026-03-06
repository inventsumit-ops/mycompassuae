"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Code,
  Cloud,
  Shield,
  Smartphone,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to align your IT infrastructure with business goals, ensuring efficiency and growth.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions built with modern technologies, from web applications to enterprise systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless cloud migration, infrastructure management, and optimization on AWS, Azure, and Google Cloud.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Comprehensive security assessments, threat monitoring, and compliance solutions to protect your digital assets.",
  },
  {
    icon: Smartphone,
    title: "Web App Development",
    description:
      "Modern web applications built with cutting-edge technologies for performance, scalability, and user experience.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary/30" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end technology solutions tailored for businesses in the UAE
            and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-gradient border border-border rounded-lg p-8 hover:shadow-glow transition-shadow group"
            >
              <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
