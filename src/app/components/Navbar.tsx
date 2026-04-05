import { useState, useEffect } from "react";
import logoImage from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImage} alt="Borderline Insight" className="h-14 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", id: "hero" },
            { label: "Services", id: "services" },
            { label: "About Us", id: "about" },
            { label: "Contact Us", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#1a5f7a] hover:text-[#1094c4] transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#1094c4] text-white px-5 py-2 rounded-full text-sm hover:bg-[#0d7fa8] transition-colors duration-200"
          >
            Get In Touch
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1a5f7a]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Home", id: "hero" },
            { label: "Services", id: "services" },
            { label: "About Us", id: "about" },
            { label: "Contact Us", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[#1a5f7a] hover:text-[#1094c4] text-left font-medium text-sm py-1"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-[#1094c4] text-white px-5 py-2 rounded-full text-sm hover:bg-[#0d7fa8] w-fit"
          >
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}