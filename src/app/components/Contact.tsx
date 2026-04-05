import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(
      form.subject
        ? `[${form.subject}] Enquiry from ${form.name}`
        : `Enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\nArea of Interest: ${form.subject || "N/A"}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:contact@borderline-insight.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#1094c4] text-sm font-medium tracking-widest uppercase">
            Contact Us
          </span>
          <h2
            className="text-[#0a2e42] mt-3 mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700 }}
          >
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Ready to explore Southeast Asia with us? Reach out and one of our consultants
            will be in touch within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#0a2e42] rounded-2xl p-8 text-white">
              <h3
                className="text-white mb-6"
                style={{ fontSize: "1.2rem", fontWeight: 600 }}
              >
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1094c4]/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#7dd3f0]" />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1094c4]/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#7dd3f0]" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:contact@borderline-insight.com"
                      className="text-white text-sm hover:text-[#7dd3f0] transition-colors"
                    >
                      contact@borderline-insight.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden shadow-md h-48 relative"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlhbmcgbWFpJTIwdGhhaWxhbmR8ZW58MHx8fHwxNzczNDc5NTgyfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=80)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#0a2e42]/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={28} className="mx-auto mb-2 text-[#7dd3f0]" />
                  <p className="text-sm font-medium">Thailand</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#f4f8fb] rounded-2xl px-8">
                <div className="w-16 h-16 rounded-full bg-[#e8f4fb] flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-[#1094c4]" />
                </div>
                <h3
                  className="text-[#0a2e42] mb-3"
                  style={{ fontSize: "1.3rem", fontWeight: 600 }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. One of our Southeast Asia consultants
                  will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", subject: "", message: "" }); }}
                  className="mt-8 text-[#1094c4] text-sm underline hover:text-[#0d7fa8]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#f4f8fb] rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0a2e42] text-sm mb-2">
                      Full Name <span className="text-[#1094c4]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1094c4]/30 focus:border-[#1094c4] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0a2e42] text-sm mb-2">
                      Email Address <span className="text-[#1094c4]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1094c4]/30 focus:border-[#1094c4] transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#0a2e42] text-sm mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1094c4]/30 focus:border-[#1094c4] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0a2e42] text-sm mb-2">
                      Area of Interest
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1094c4]/30 focus:border-[#1094c4] transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="market-research">Market Research</option>
                      <option value="market-entry">Market Entry Strategy</option>
                      <option value="growth">Business Growth</option>
                      <option value="stakeholder">Stakeholder Engagement</option>
                      <option value="media">Media & Communications</option>
                      <option value="advisory">Strategic Advisory</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[#0a2e42] text-sm mb-2">
                    Message <span className="text-[#1094c4]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project or how we can help..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1094c4]/30 focus:border-[#1094c4] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1094c4] hover:bg-[#0d7fa8] disabled:opacity-70 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#1094c4]/30"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
