const partners = [
  { name: "ASEAN Business Council", abbr: "ABC", color: "#1094c4" },
  { name: "Enterprise Singapore", abbr: "EntSG", color: "#0a2e42" },
  { name: "KPMG Southeast Asia", abbr: "KPMG", color: "#1a5f7a" },
  { name: "DBS Bank", abbr: "DBS", color: "#e74c3c" },
  { name: "Nielsen Asia Pacific", abbr: "Nielsen", color: "#2c3e50" },
  { name: "World Economic Forum", abbr: "WEF", color: "#1094c4" },
  { name: "Temasek Holdings", abbr: "Temasek", color: "#0a2e42" },
  { name: "Google APAC", abbr: "Google", color: "#4285f4" },
];

const testimonials = [
  {
    quote:
      "Boomerang Media gave us the regional intelligence and strategic clarity we needed to launch across three Southeast Asian markets simultaneously. Their on-the-ground insights were invaluable.",
    name: "Sarah Chen",
    title: "VP Strategy, Global FMCG Brand",
    initials: "SC",
  },
  {
    quote:
      "The team's depth of knowledge about Southeast Asian regulatory environments saved us months of research and potential missteps. A truly indispensable consulting partner.",
    name: "James Whitfield",
    title: "Director, European Investment Group",
    initials: "JW",
  },
  {
    quote:
      "Their media and communications strategy helped us connect authentically with audiences across Indonesia, Vietnam, and Thailand. Exceptional cultural sensitivity and expertise.",
    name: "Priya Nair",
    title: "CMO, Technology Startup",
    initials: "PN",
  },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-[#f4f8fb]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#1094c4] text-sm font-medium tracking-widest uppercase">
            Our Partners
          </span>
          <h2
            className="text-[#0a2e42] mt-3 mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
          >
            Trusted by Leading Organisations
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            We collaborate with a diverse network of global institutions, corporations,
            and regional bodies to deliver comprehensive Southeast Asia insights.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white border border-gray-100 rounded-2xl px-6 py-8 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: partner.color }}
              >
                {partner.abbr.slice(0, 2)}
              </div>
              <span className="text-gray-600 text-xs text-center font-medium leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-[#1094c4] text-sm font-medium tracking-widest uppercase">
            Testimonials
          </span>
          <h3
            className="text-[#0a2e42] mt-3"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 700 }}
          >
            What Our Clients Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="text-[#1094c4] text-3xl mb-4 leading-none">&ldquo;</div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#0a2e42] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#0a2e42] text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
