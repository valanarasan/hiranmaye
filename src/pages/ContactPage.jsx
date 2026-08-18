import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, MessageSquare, Calendar, Clock, ArrowRight } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons';

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

  return (
    <div className="relative w-full">

      {/* HERO */}
      <section className="section-cinematic min-h-[45vh] px-4 sm:px-8 relative pt-32 pb-14">
        <div className="glow-top" />
        <div className="reveal text-center space-y-4 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 leading-[1.05]">
            Let's Discuss Your Business Growth
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            We're always ready to discuss your business goals and explore how strategic digital marketing can help you achieve measurable growth.
          </p>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* LEFT SIDE: Contact Info, Hours, Socials, Strategy Session, WhatsApp */}
          <div className="lg:col-span-5 space-y-6 reveal">

            {/* Direct Contact Details Card */}
            <Tilt3DCard maxTilt={5}>
              <div className="glass-dark rounded-2xl p-6 sm:p-7 border-zinc-200 space-y-5">
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight pb-2 border-b border-zinc-100">
                  Contact Information
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-400">Office</p>
                      <p className="text-zinc-800 font-medium">{companyDetails.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-400">Phone</p>
                      <a href={`tel:${companyDetails.phone.replace(/[^0-9+]/g, '')}`} className="text-zinc-800 font-semibold hover:text-orange-600 transition-colors">
                        {companyDetails.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-400">Email</p>
                      <a href={`mailto:${companyDetails.email}`} className="text-zinc-800 font-semibold hover:text-orange-600 transition-colors">
                        {companyDetails.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-400">Website</p>
                      <a href={`https://${companyDetails.website}`} target="_blank" rel="noreferrer" className="text-zinc-800 font-semibold hover:text-orange-600 transition-colors">
                        {companyDetails.website}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="pt-4 border-t border-zinc-100 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-zinc-900 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span>Business Hours</span>
                  </div>
                  <div className="text-xs text-zinc-600 space-y-1 pl-5">
                    <p>{companyDetails.hours.weekdays}</p>
                    <p>{companyDetails.hours.saturday}</p>
                    <p>{companyDetails.hours.sunday}</p>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-zinc-100 space-y-2">
                  <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Social Channels</p>
                  <div className="flex items-center space-x-3 pt-1">
                    <a
                      href={companyDetails.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-black/[0.03] border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={companyDetails.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-black/[0.03] border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={companyDetails.socials.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-black/[0.03] border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all"
                      aria-label="YouTube"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={companyDetails.socials.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-black/[0.03] border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-orange-600 hover:border-orange-500/40 hover:bg-orange-500/10 transition-all"
                      aria-label="Google Maps Location"
                    >
                      <MapPin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt3DCard>

            {/* Book a Free Strategy Session Card */}
            <Tilt3DCard maxTilt={5}>
              <div className="glass-dark rounded-2xl p-6 border-zinc-200 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-600 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900">Schedule a One-on-One Consultation</h4>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Looking for expert guidance? Book a free strategy session with our team to discuss your business goals, identify growth opportunities, and receive actionable recommendations.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="btn-glow w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 rounded-xl mt-2"
                >
                  <span>Schedule Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Tilt3DCard>

            {/* WhatsApp Support Card */}
            <Tilt3DCard maxTilt={5}>
              <div className="glass-dark rounded-2xl p-6 border-zinc-200 space-y-3">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900">Chat with Our Team</h4>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Need a quick answer? Connect with us on WhatsApp for fast assistance, service inquiries, and project discussions.
                </p>
                <a
                  href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Hiranmaye%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-500/10 text-emerald-700 text-xs font-bold border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer mt-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </Tilt3DCard>

          </div>

          {/* RIGHT SIDE: Tell Us About Your Project Form */}
          <div className="lg:col-span-7 reveal">
            <Tilt3DCard maxTilt={3}>
              <div className="glass-dark rounded-2xl p-6 sm:p-8 border-zinc-200">
                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Complete the form below, and one of our digital growth specialists will get in touch with you within one business day.
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
                      className="w-full btn-glow py-4 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/20"
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
    </div>
  );
}
