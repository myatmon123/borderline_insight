export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1599919445953-c604dbd413a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBtYXJpbmElMjBiYXklMjBidXNpbmVzcyUyMGRpc3RyaWN0fGVufDF8fHx8MTc3MzQ3OTU4M3ww&ixlib=rb-4.1.0&q=80&w=1920)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e42]/90 via-[#0d4a63]/80 to-[#1094c4]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
        <div className="max-w-3xl mx-auto lg:mt-24">
          <span className="inline-block bg-[#1094c4]/30 border border-[#1094c4]/50 text-[#7dd3f0] px-4 py-1.5 rounded-full text-sm mb-6 tracking-widest uppercase">
            Southeast Asia Specialists
          </span>
          <h1
            className="text-white mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700 }}
          >
            Navigate Southeast Asia
            <span className="block text-[#7dd3f0]">with Confidence</span>
          </h1>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Borderline Insight provides expert consulting services to help businesses
            understand, enter, and thrive in the dynamic markets of Southeast Asia.
            We bridge cultures, decode markets, and unlock opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#1094c4] hover:bg-[#0d7fa8] text-white px-8 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#1094c4]/40"
            >
              Start a Conversation
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="border border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-200"
            >
              Our Services
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
