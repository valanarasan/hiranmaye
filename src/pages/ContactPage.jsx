import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { companyDetails } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

export default function ContactPage({ onOpenConsultation }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
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
      <section className="section-cinematic min-h-[50vh] px-4 sm:px-8 relative pt-32 pb-16">
        <div className="glow-top" />
        <div className="reveal text-center space-y-4 relative z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900">
            Let's Talk
          </h1>
          <p className="text-base text-zinc-500">
            Tell us about your project.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">

          {/* LEFT — Contact Info */}
          <div className="lg:col-span-4 space-y-4 reveal">
            <Tilt3DCard maxTilt={5}>
              <div className="glass-dark rounded-2xl p-6 border-zinc-200 space-y-5">
                {[
                  { icon: MapPin, label: companyDetails.address, color: 'text-orange-600' },
                  { icon: Phone, label: companyDetails.phone, color: 'text-zinc-950' },
                  { icon: Mail, label: companyDetails.email, color: 'text-orange-600' },
                  { icon: Globe, label: companyDetails.website, color: 'text-orange-600' }
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center space-x-3">
                    <div className={`w-9 h-9 rounded-lg bg-black/[0.02] border border-zinc-100 flex items-center justify-center ${color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-zinc-650">{label}</span>
                  </div>
                ))}
              </div>
            </Tilt3DCard>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onOpenConsultation}
                className="btn-glow py-3 text-xs font-bold text-center rounded-xl"
              >
                Book Session
              </button>
              <a
                href={`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-emerald-555/10 text-emerald-600 text-xs font-bold border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-8 reveal">
            <Tilt3DCard maxTilt={3}>
              <div className="glass-dark rounded-2xl p-6 sm:p-8 border-zinc-200">

                {submitted ? (
                  <div className="text-center py-10 space-y-4 animate-fade-in">
                    <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900">Message Received</h3>
                    <p className="text-sm text-zinc-500">
                      We'll reach out to <span className="text-orange-650 font-semibold">{form.email}</span> shortly.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-glow px-5 py-2.5 text-xs font-bold">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 mb-1.5">Name *</label>
                        <input
                          type="text"
                          required
                          value={form.fullName}
                          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                          placeholder="Your name"
                          className="w-full input-dark"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-zinc-500 mb-1.5">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full input-dark"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full input-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-500 mb-1.5">Tell us about your goals *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.goals}
                        onChange={(e) => setForm({ ...form, goals: e.target.value })}
                        placeholder="What are you looking to achieve?"
                        className="w-full input-dark resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-glow py-3.5 text-sm uppercase tracking-wider font-bold flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
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
