import { Search, TrendingUp, Globe, Users, BarChart2, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Market Research & Intelligence",
    description:
      "Deep-dive analysis of consumer behaviour, competitive landscapes, and market dynamics across all 10 ASEAN nations.",
  },
  {
    icon: Globe,
    title: "Market Entry Strategy",
    description:
      "Tailored roadmaps for entering Southeast Asian markets — from regulatory navigation to go-to-market execution.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Consulting",
    description:
      "Identify growth levers, optimise your positioning, and scale your presence across the region's fastest-growing economies.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description:
      "We connect you with the right government bodies, industry associations, and business leaders across SEA.",
  },
  {
    icon: BarChart2,
    title: "Media & Communications",
    description:
      "Crafting culturally resonant media strategies and communications that speak directly to Southeast Asian audiences.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Advisory",
    description:
      "Ongoing advisory services to keep your leadership informed and your strategy ahead of regional developments.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#f4f8fb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#1094c4] text-sm font-medium tracking-widest uppercase">
            What We Do
          </span>
          <h2
            className="text-[#0a2e42] mt-3 mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
          >
            Consulting Services for Southeast Asia
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive suite of consulting services designed to help organisations
            understand and succeed in the complex, diverse markets of Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f4fb] flex items-center justify-center mb-5 group-hover:bg-[#1094c4] transition-colors duration-300">
                  <Icon size={22} className="text-[#1094c4] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-[#0a2e42] mb-3"
                  style={{ fontSize: "1.05rem", fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
