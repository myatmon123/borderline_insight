import logoImage from "@/assets/logo-white.png";
import { Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#071e2b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src={logoImage}
              alt="Borderline Insight"
              className="h-12 w-auto mb-5"
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Southeast Asia&apos;s premier consulting partner. We help organisations
              understand, enter, and grow across the ASEAN region with confidence.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                // End of Selection
                { Icon: Mail, href: "mailto:support@borderlineinsight.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1094c4] transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-wider"
              style={{ fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "hero" },
                { label: "Services", id: "services" },
                { label: "About Us", id: "about" },
                { label: "Partners", id: "partners" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-blue-300 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white mb-5 text-sm uppercase tracking-wider"
              style={{ fontWeight: 600 }}
            >
              Services We Offer
            </h4>
            <ul className="space-y-3">
              {[
                "Market Research",
                "Market Entry Strategy",
                "Business Growth",
                "Stakeholder Engagement",
                "Media & Communications",
                "Strategic Advisory",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Borderline Insight. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-blue-400 hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-400 hover:text-white text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}