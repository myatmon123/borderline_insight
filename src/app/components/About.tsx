import { CheckCircle } from "lucide-react";

const highlights = [
  "Deep cultural and linguistic understanding of Southeast Asia",
  "Established networks across government and private sectors",
  "Data-driven insights combined with on-the-ground expertise",
  "Customised strategies tailored to your unique objectives",
  "Proven track record with multinationals and SMEs alike",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1557199868-02a704b27808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjB0ZWFtJTIwbWVldGluZyUyMGFzaWF8ZW58MXx8fHwxNzczNDc5NTgyfDA&ixlib=rb-4.1.0&q=80&w=900"
                alt="Our Team"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e42]/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-lg p-6 max-w-[220px] border border-gray-100">
              <div
                className="text-[#1094c4]"
                style={{ fontSize: "2rem", fontWeight: 700 }}
              >
                20+
              </div>
              <p className="text-gray-500 text-sm mt-1 leading-snug">
                Years of Southeast Asia expertise
              </p>
            </div>

            {/* Accent shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#e8f4fb] -z-10" />
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <span className="text-[#1094c4] text-sm font-medium tracking-widest uppercase">
              About Us
            </span>
            <h2
              className="text-[#0a2e42] mt-3 mb-6"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
            >
              Your Trusted Partner in Southeast Asia
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Borderline Insight Co., Ltd. is a Singapore-based consulting firm dedicated to
              helping organisations navigate the vibrant and fast-evolving landscape of
              Southeast Asia. Founded on the belief that genuine regional expertise is
              irreplaceable, we combine rigorous research with deep local knowledge.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you are a global corporation seeking market entry, a government
              agency developing regional partnerships, or a brand looking to connect with
              Southeast Asian consumers — we bring the insight, the networks, and the
              strategic clarity you need to succeed.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[#1094c4] mt-0.5 shrink-0"
                  />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEA Countries Banner */}
        <div className="mt-20 bg-[#0a2e42] rounded-2xl px-8 py-10 text-white">
          <div className="text-center mb-8">
            <h3
              className="text-white mb-2"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 600 }}
            >
              Coverage Across All ASEAN Nations
            </h3>
            <p className="text-blue-200 text-sm">
              In-depth knowledge and on-the-ground presence throughout the region
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Singapore", "Indonesia", "Malaysia", "Thailand", "Vietnam",
              "Philippines", "Myanmar", "Cambodia", "Laos", "Brunei",
            ].map((country) => (
              <span
                key={country}
                className="bg-white/10 border border-white/20 text-blue-100 px-4 py-1.5 rounded-full text-sm hover:bg-[#1094c4]/40 transition-colors cursor-default"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
