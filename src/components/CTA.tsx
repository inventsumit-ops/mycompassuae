"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent-gradient rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-accent-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Let&apos;s discuss how our technology solutions can accelerate your
              growth and drive innovation.
            </p>
            <Link
              href="/contact"
              className="bg-background text-foreground px-8 py-3 rounded-md font-semibold inline-flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              Contact Us Today <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
