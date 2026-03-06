import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo3.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="My Compass UAE" className="h-8 w-8" />
              <span className="font-heading font-bold text-foreground">
                My Compass UAE
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading IT consultancy in the UAE delivering innovative technology
              solutions for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">
              Services
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>IT Consulting</p>
              <p>Software Development</p>
              <p>Cloud Solutions</p>
              <p>Cyber Security</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>info@mycompassuae.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} My Compass UAE. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
