import React, { useState } from 'react';
import { 
  Sparkles, MapPin, Phone, Mail, Globe, Clock, Send, 
  CheckCircle2, Calendar, MessageSquare, Map 
} from 'lucide-react';
import { companyDetails, seoPageMeta } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

export default function ContactPage({ onOpenConsultation }) {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: 'Bangalore, India',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showCalendlyMock, setShowCalendlyMock] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 pt-32 pb-20 w-full px-4 sm:px-8 lg:px-12 2xl:px-16 relative">
      
      {/* Ambient Glow */}
      <div className="ambient-glow-top-light" />

      {/* HEADER */}
      <section className="text-center space-y-4 max-w-3xl mx-auto z-10 relative">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel-light border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-widest shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-600 animate-pulse" />
          <span>Get in Touch with HIRANMAYE DIGITAL</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Let's Build Your <span className="gradient-text-plum">Growth Story</span>
        </h1>

        <p className="text-base text-slate-600">
          We're always ready to discuss your business goals and explore how strategic digital marketing can help you achieve measurable growth.
        </p>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 z-10 relative">
        
        {/* LEFT COL: CONTACT INFO & MAP */}
        <div className="lg:col-span-5 space-y-6">
          <Tilt3DCard maxTilt={5}>
            <div className="glass-panel-light rounded-3xl p-8 border-purple-200 space-y-6 shadow-md">
              <h2 className="text-2xl font-black text-slate-900 border-b border-purple-100 pb-4">
                Bangalore HQ & Info
              </h2>

              <div className="space-y-4 text-sm text-slate-700 font-medium">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider font-extrabold">Office Address</strong>
                    <p>{companyDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider font-extrabold">Direct Phone</strong>
                    <p>{companyDetails.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider font-extrabold">Official Email</strong>
                    <p>{companyDetails.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs uppercase tracking-wider font-extrabold">Website URL</strong>
                    <p>{companyDetails.website}</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-purple-900 font-extrabold">
                  <Clock className="w-4 h-4 text-fuchsia-600" />
                  <span>Operating Business Hours</span>
                </div>
                <p className="text-slate-600">• {companyDetails.hours.weekdays}</p>
                <p className="text-slate-600">• {companyDetails.hours.saturday}</p>
                <p className="text-slate-600">• {companyDetails.hours.sunday}</p>
              </div>
            </div>
          </Tilt3DCard>

          {/* Interactive Map Visual Representation */}
          <div className="glass-panel-light rounded-3xl p-6 border-purple-200 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                <Map className="w-4 h-4 text-fuchsia-600" />
                <span>Bangalore Location Map</span>
              </span>
              <span className="text-[10px] text-emerald-600 font-extrabold">● HQ Active</span>
            </div>
            
            <div className="h-44 rounded-2xl bg-gradient-to-tr from-purple-900 via-fuchsia-950 to-slate-900 border border-purple-800 relative overflow-hidden flex items-center justify-center text-center p-4 text-white">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-fuchsia-400 flex items-center justify-center mx-auto text-fuchsia-300 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-black text-white block">HIRANMAYE DIGITAL HQ</span>
                <span className="text-[11px] text-purple-200 block">Tech Corridor, Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COL: PROJECT INQUIRY FORM */}
        <div className="lg:col-span-7">
          <Tilt3DCard maxTilt={4}>
            <div className="glass-panel-light rounded-3xl p-8 sm:p-10 border-purple-200 space-y-6 shadow-xl">
              
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-fuchsia-700 font-extrabold">Project Inquiry</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Tell Us About Your Project</h2>
                <p className="text-xs text-slate-600">
                  Complete the form below, and one of our digital growth specialists will get in touch with you within one business day.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Received!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{form.fullName}</strong>. Our growth team in Bangalore has received your project details and will review your objectives for {form.companyName || 'your business'}. We will reach out to {form.email} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-glow-plum px-6 py-2.5 text-xs uppercase font-bold shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-purple-600 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                        placeholder="e.g. Apex Enterprises"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-purple-600 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-purple-600 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-purple-600 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Business Location</label>
                    <input
                      type="text"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="e.g. Bangalore / Mumbai / International"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-purple-600 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tell Us About Your Business Goals *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.goals}
                      onChange={(e) => setForm({ ...form, goals: e.target.value })}
                      placeholder="Describe your target leads, budget, current challenges, and growth targets..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-purple-600 shadow-2xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-glow-plum py-4 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-lg"
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

      {/* BOOK STRATEGY SESSION & WHATSAPP SUPPORT SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
        
        {/* Calendly Booking Card */}
        <Tilt3DCard maxTilt={8}>
          <div className="glass-panel-light rounded-3xl p-8 border-purple-200 space-y-4 h-full shadow-sm hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Book a Free Strategy Session</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Looking for expert guidance? Book a free 1-on-1 strategy session with our team to discuss your business goals, identify growth opportunities, and receive actionable recommendations.
            </p>
            <button
              onClick={onOpenConsultation || (() => setShowCalendlyMock(true))}
              className="btn-glow-plum px-6 py-3 text-xs uppercase font-bold inline-flex items-center space-x-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Now (Calendly)</span>
            </button>
          </div>
        </Tilt3DCard>

        {/* WhatsApp Card */}
        <Tilt3DCard maxTilt={8}>
          <div className="glass-panel-light rounded-3xl p-8 border-emerald-200 space-y-4 h-full shadow-sm hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">WhatsApp Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Need a quick answer? Connect with us directly on WhatsApp for fast assistance, service inquiries, and project discussions with our team.
            </p>
            <a
              href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20HIRANMAYE%20DIGITAL%2C%20I%20want%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </Tilt3DCard>

      </section>

      {/* CALENDLY SIMULATION MODAL */}
      {showCalendlyMock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 border border-purple-200 space-y-4 text-center text-slate-900 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900">Select Strategy Session Slot</h3>
            <p className="text-xs text-slate-500">Calendly Booking Integration</p>
            <div className="space-y-2 text-xs">
              {['Aug 12 - 11:00 AM IST', 'Aug 12 - 03:00 PM IST', 'Aug 13 - 10:30 AM IST', 'Aug 14 - 04:00 PM IST'].map((slot) => (
                <button
                  key={slot}
                  onClick={() => {
                    alert(`Slot ${slot} reserved! Confirmation sent to your email.`);
                    setShowCalendlyMock(false);
                  }}
                  className="w-full p-3 rounded-xl bg-slate-50 hover:bg-purple-100 border border-slate-200 text-slate-800 hover:text-purple-900 font-bold transition-colors"
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowCalendlyMock(false)}
              className="text-xs text-slate-500 hover:text-slate-900 underline pt-2 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SEO META */}
      <section className="text-xs text-slate-400 space-y-1 border-t border-purple-100 pt-6">
        <p><strong className="text-slate-600">SEO Title:</strong> {seoPageMeta.contact.title}</p>
        <p><strong className="text-slate-600">Meta Description:</strong> {seoPageMeta.contact.description}</p>
        <p><strong className="text-slate-600">Focus Keywords:</strong> {seoPageMeta.contact.keywords.join(' • ')}</p>
      </section>

    </div>
  );
}
