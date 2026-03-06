"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import heroBg from "@/assets/mainbg.jpg"
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={heroBg} alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/70" />

      <div className="container relative mx-auto px-4 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            UAE&apos;s Trusted IT Partner
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Navigating Your{" "}
            <span className="text-gradient">Digital Future</span> with
            Precision
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8">
            We deliver cutting-edge IT consulting, software development, and
            digital transformation solutions to help businesses thrive in the
            modern landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-accent-gradient text-accent-foreground px-8 py-3 rounded-md font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="border border-border text-foreground px-8 py-3 rounded-md font-semibold hover:bg-secondary transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "200+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
