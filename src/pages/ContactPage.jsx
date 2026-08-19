import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, MessageSquare, Calendar, Clock, ArrowRight, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon, WhatsAppIcon, GoogleMapsIcon } from '../components/SocialIcons';

export default function ContactPage({ onOpenConsultation }) {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialChannels = [
    {
      name: "Instagram",
      handle: "@hiranmaye_digital",
      desc: "Daily growth insights, behind-the-scenes & campaign breakdowns",
      url: companyDetails.socials.instagram,
      icon: <InstagramIcon className="w-6 h-6" originalColor={true} />,
      bgHover: "hover:border-pink-500/40 hover:shadow-pink-500/10",
      cta: "Follow on Instagram",
      badge: "Visual Stories"
    },
    {
      name: "WhatsApp",
      handle: "+91 99006 68383",
      desc: "Fast project inquiries, quick audits & real-time team support",
      url: `https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Hiranmaye%20Digital%2C%20I%27d%20like%20to%20discuss%20our%20growth%20strategy`,
      icon: <WhatsAppIcon className="w-6 h-6" originalColor={true} />,
      bgHover: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
      cta: "Chat on WhatsApp",
      badge: "Instant Reply"
    },
    {
      name: "LinkedIn",
      handle: "Hiranmaye Digital",
      desc: "B2B growth playbooks, performance benchmarks & industry analysis",
      url: companyDetails.socials.linkedin,
      icon: <LinkedinIcon className="w-6 h-6" originalColor={true} />,
      bgHover: "hover:border-blue-500/40 hover:shadow-blue-500/10",
      cta: "Connect on LinkedIn",
      badge: "B2B Network"
    },
    {
      name: "Facebook",
      handle: "hiranmayedigital",
      desc: "Community updates, client wins & digital marketing news",
      url: companyDetails.socials.facebook,
      icon: <FacebookIcon className="w-6 h-6" originalColor={true} />,
      bgHover: "hover:border-indigo-500/40 hover:shadow-indigo-500/10",
      cta: "Follow on Facebook",
      badge: "Community"
    },
    {
      name: "YouTube",
      handle: "@Hiranmaye_Digital",
      desc: "In-depth case studies, marketing tutorials & video breakdowns",
      url: companyDetails.socials.youtube,
      icon: <YoutubeIcon className="w-6 h-6" originalColor={true} />,
      bgHover: "hover:border-red-500/40 hover:shadow-red-500/10",
      cta: "Subscribe on YouTube",
      badge: "Video Guides"
    }
  ];

  return (
    <div className="relative w-full">

      {/* HERO */}
      <section className="section-cinematic min-h-[45vh] px-4 sm:px-8 relative pt-28 sm:pt-32 pb-12 sm:pb-14">
        <div className="glow-top" />
        <div className="reveal text-center space-y-4 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-[1.08]">
            Let's Discuss Your Business Growth
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We're ready to analyze your current growth bottleneck and architect a high-converting digital engine tailored for your business.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT & INQUIRY SECTION */}
      <section className="py-8 sm:py-16 px-3.5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">

          {/* LEFT SIDE: Contact Info, Hours, Quick Socials */}
          <div className="lg:col-span-5 space-y-6 reveal">

            {/* Direct Contact Details Card */}
            <Tilt3DCard maxTilt={5}>
              <div className="glass-dark rounded-3xl p-6 sm:p-7 border border-zinc-200/90 shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight pb-2 border-b border-zinc-100 flex items-center justify-between">
                  <span>Contact Information</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h3>

                <div className="space-y-4 text-sm">
                  {/* Office Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Office Address</p>
                      <p className="text-zinc-800 font-medium text-xs sm:text-sm leading-relaxed mt-0.5">
                        {companyDetails.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Direct Line</p>
                      <a href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`} className="text-zinc-900 font-bold hover:text-orange-600 transition-colors text-sm">
                        {companyDetails.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Email Inquiry</p>
                      <a href={`mailto:${companyDetails.email}`} className="text-zinc-900 font-bold hover:text-orange-600 transition-colors text-sm break-all">
                        {companyDetails.email}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Official Domain</p>
                      <a href={`https://${companyDetails.website}`} target="_blank" rel="noreferrer" className="text-zinc-900 font-bold hover:text-orange-600 transition-colors text-sm">
                        {companyDetails.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="pt-4 border-t border-zinc-100 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span>Operating Hours</span>
                  </div>
                  <div className="text-xs text-zinc-600 space-y-1 pl-5">
                    <p className="flex justify-between">
                      <span className="font-medium text-zinc-800">Mon – Fri:</span>
                      <span>9:30 AM – 6:30 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium text-zinc-800">Saturday:</span>
                      <span>10:00 AM – 5:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium text-zinc-800">Sunday:</span>
                      <span className="text-zinc-400">Closed</span>
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-3 border-t border-zinc-100 grid grid-cols-2 gap-2.5">
                  <a
                    href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Hiranmaye%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold hover:bg-emerald-500/20 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" originalColor={true} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={companyDetails.socials.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold hover:bg-zinc-200 transition-all cursor-pointer"
                  >
                    <GoogleMapsIcon className="w-4 h-4" originalColor={true} />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </Tilt3DCard>

            {/* Book a Free Strategy Consultation Card */}
            <Tilt3DCard maxTilt={5}>
              <div className="glass-dark rounded-3xl p-6 border border-zinc-200/90 shadow-sm space-y-3.5 bg-gradient-to-br from-orange-50/50 to-white">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-900 leading-tight">Schedule a One-on-One Session</h4>
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">Free 30-Min Strategy Call</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Book directly with our lead growth architects to evaluate your positioning, audit your funnel, and discover high-impact levers.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 rounded-xl bg-zinc-950 hover:bg-orange-600 text-white transition-colors cursor-pointer shadow-sm"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Tilt3DCard>

          </div>

          {/* RIGHT SIDE: Tell Us About Your Project Form */}
          <div className="lg:col-span-7 reveal">
            <Tilt3DCard maxTilt={3}>
              <div className="glass-dark rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-sm">
                <div className="mb-6 space-y-2">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-700 text-xs font-bold">
                    <span>Direct Project Intake</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Complete the form below and one of our digital growth specialists will review your requirements and respond within one business day.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">Request Received!</h3>
                    <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                      Thank you for reaching out. We will contact <span className="text-orange-600 font-semibold">{form.email}</span> within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ fullName: '', companyName: '', email: '', phone: '', location: '', goals: '' });
                      }}
                      className="btn-glow px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.fullName}
                          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                          placeholder="Your full name"
                          className="w-full input-dark"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={form.companyName}
                          onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                          placeholder="Company or brand name"
                          className="w-full input-dark"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full input-dark"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 99006 68383"
                          className="w-full input-dark"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Business Location
                      </label>
                      <input
                        type="text"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="City, State, Country"
                        className="w-full input-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Tell Us About Your Business Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.goals}
                        onChange={(e) => setForm({ ...form, goals: e.target.value })}
                        placeholder="Describe your objectives, current challenges, target audience, and what you're looking to achieve..."
                        className="w-full input-dark resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-glow py-4 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/20 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request a Free Consultation</span>
                    </button>
                  </form>
                )}
              </div>
            </Tilt3DCard>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PROMINENT SOCIAL MEDIA HUB SECTION (With Original Logos)
          ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-zinc-50 border-y border-zinc-200/80 relative">
        <div className="max-w-6xl mx-auto space-y-10 reveal">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-semibold uppercase tracking-wider">
              <span>Connect Across Channels</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              Follow Hiranmaye on Social Media
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Stay ahead with real-time case studies, growth breakdowns, B2B playbooks, and video tutorials across our verified official channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {socialChannels.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noreferrer"
                className={`bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 hover:shadow-xl ${soc.bgHover}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {soc.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[10px] font-bold text-zinc-700 uppercase tracking-wider">
                      {soc.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                      {soc.name}
                    </h3>
                    <p className="text-xs font-semibold text-zinc-500 mt-0.5">{soc.handle}</p>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">{soc.desc}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-800 group-hover:text-orange-600">
                  <span>{soc.cta}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GOOGLE MAP & LOCATION SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 relative">
        <div className="max-w-6xl mx-auto space-y-10 reveal">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-semibold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 text-orange-600" />
                <span>Visit Our Office</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                Our Bangalore Headquarters
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Located in the heart of South Bangalore at Banashankari 2nd Stage, near Sri Hari Kalyana Mantapa.
              </p>
            </div>

            <a
              href={companyDetails.socials.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-zinc-950 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-zinc-950/10 shrink-0 cursor-pointer"
            >
              <GoogleMapsIcon className="w-4 h-4" originalColor={true} />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Map & Office Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Google Maps Embed Iframe Container */}
            <div className="lg:col-span-8 bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200/90 shadow-xl min-h-[420px] sm:min-h-[460px] relative">
              <iframe
                src={companyDetails.socials.mapEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[420px] sm:min-h-[460px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Hiranmaye Digital Location Map"
              />
            </div>

            {/* Location Details Side Card */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-white rounded-3xl p-6 sm:p-7 border border-zinc-200/90 shadow-sm">
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-widest">Office Address</span>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1">Hiranmaye Digital</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-2">
                    {companyDetails.address}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-1">
                  <p className="text-xs font-bold text-zinc-900">Key Landmark</p>
                  <p className="text-xs text-zinc-600">Near Sri Hari Kalyana Mantapa, Siddanna Layout</p>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-zinc-700 py-1 border-b border-zinc-100">
                    <span className="text-zinc-500 font-medium">City & Pin:</span>
                    <span className="font-semibold text-zinc-900">Bengaluru, 560070</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700 py-1 border-b border-zinc-100">
                    <span className="text-zinc-500 font-medium">State:</span>
                    <span className="font-semibold text-zinc-900">Karnataka, India</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700 py-1 border-b border-zinc-100">
                    <span className="text-zinc-500 font-medium">Consultation:</span>
                    <span className="font-semibold text-emerald-600">By Appointment</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-2.5">
                <a
                  href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-zinc-900 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyDetails.phone}</span>
                </a>
                
                <a
                  href={companyDetails.socials.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 text-orange-700 font-bold text-xs border border-orange-500/20 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
