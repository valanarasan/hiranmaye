import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ShieldCheck, ArrowRight, User, Mail, Phone, Building } from 'lucide-react';

export default function StrategyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: 'Lead Generation & Sales',
    industry: 'Real Estate',
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '2026-08-12',
    time: '11:00 AM'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-purple-200 shadow-2xl overflow-hidden">
        
        {/* Top Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-purple-900 hover:bg-purple-100 border border-slate-200 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">Consultation Confirmed!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-purple-800 font-bold">{formData.name || 'Valued Partner'}</span>. One of our senior growth strategists from Bangalore HQ will contact you at <span className="text-fuchsia-700 font-semibold">{formData.email}</span> to confirm your session for {formData.date} at {formData.time}.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 max-w-sm mx-auto text-xs text-left space-y-1.5 text-slate-700">
              <p><strong className="text-slate-900">Primary Goal:</strong> {formData.goal}</p>
              <p><strong className="text-slate-900">Industry:</strong> {formData.industry}</p>
              <p><strong className="text-slate-900">Slot:</strong> {formData.date} @ {formData.time}</p>
            </div>
            <button
              onClick={resetAndClose}
              className="btn-glow-plum px-8 py-3 text-xs uppercase tracking-wider font-bold shadow-lg"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="space-y-1 pr-8">
              <div className="flex items-center space-x-2 text-fuchsia-700 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>HIRANMAYE DIGITAL Growth Audit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Book Your Free Strategy Session
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Discuss your business objectives, receive a custom audit, and map out scalable growth systems.
              </p>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center space-x-2 text-xs font-bold border-b border-slate-100 pb-4">
              <span className={`px-3 py-1 rounded-full ${step === 1 ? 'bg-purple-800 text-white' : 'bg-slate-100 text-slate-500'}`}>
                1. Growth Goal
              </span>
              <span className="text-slate-300">→</span>
              <span className={`px-3 py-1 rounded-full ${step === 2 ? 'bg-purple-800 text-white' : 'bg-slate-100 text-slate-500'}`}>
                2. Contact & Slot
              </span>
            </div>

            {step === 1 ? (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                    Select Your Primary Growth Goal:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      'Lead Generation & Sales',
                      'SEO / AEO / GEO Search Ranking',
                      'Meta & Google Performance Ads',
                      'Website UX & Conversion Overhaul',
                      'AI Marketing & Automation',
                      'Branding & Visual Identity'
                    ].map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setFormData({ ...formData, goal: g })}
                        className={`p-3 text-left rounded-xl text-xs font-bold border transition-all ${
                          formData.goal === g
                            ? 'bg-purple-50 border-purple-600 text-purple-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    Industry Sector
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-semibold focus:outline-none focus:border-purple-600"
                  >
                    {[
                      'Real Estate',
                      'Manufacturing',
                      'Healthcare',
                      'Education',
                      'Retail & E-commerce',
                      'Professional Services',
                      'Technology & SaaS',
                      'Financial Services',
                      'Hospitality',
                      'Startups & SMEs'
                    ].map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full btn-glow-plum py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Next Step: Your Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Growth Inc."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                    >
                      {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-3 bg-slate-100 text-slate-700 text-xs rounded-xl hover:bg-slate-200 border border-slate-200 font-bold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-glow-plum py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm Strategy Consultation</span>
                  </button>
                </div>
              </form>
            )}

            <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Confidential. Free audit & strategy recommendations.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
