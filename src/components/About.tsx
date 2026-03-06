"use client";

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Your Trusted <span className="text-gradient">Technology</span>{" "}
              Partner in the UAE
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My Compass UAE is a leading IT and software consultancy based
              in the UAE. We specialize in delivering innovative technology
              solutions that drive digital transformation and business growth
              for organizations across the region.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a team of experienced professionals and a commitment to
              excellence, we guide businesses through every step of their
              digital journey — from strategy to execution.
            </p>

            <div className="space-y-4">
              {[
                "Certified & experienced IT professionals",
                "Proven track record across industries",
                "End-to-end project management",
                "24/7 dedicated support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-card-gradient border border-border rounded-lg p-8 text-center">
              <Target size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground text-sm">
                To empower businesses with innovative technology solutions that
                drive measurable growth and lasting success.
              </p>
            </div>
            <div className="bg-card-gradient border border-border rounded-lg p-8 text-center">
              <Eye size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                Our Vision
              </h3>
              <p className="text-muted-foreground text-sm">
                To be the most trusted technology partner in the UAE, known for
                excellence, innovation, and client-first approach.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
