import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, User, Mail, Phone, Building } from 'lucide-react';

export default function StrategyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: 'Lead Generation & Sales',
    industry: 'Real Estate',
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '2026-08-20',
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
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto glass-dark rounded-2xl p-5 sm:p-8 border-zinc-200 shadow-2xl">

        {/* Ambient glows */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/[0.03] text-zinc-500 hover:text-zinc-900 border border-zinc-200 transition-all z-10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">Confirmed!</h3>
            <p className="text-sm text-zinc-600 max-w-sm mx-auto">
              We'll reach out to <span className="text-orange-600 font-semibold">{formData.email}</span> to confirm your strategy session.
            </p>
            <button onClick={resetAndClose} className="btn-glow px-6 py-3 text-xs uppercase font-bold rounded-xl shadow-md shadow-orange-500/20">
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="pr-8">
              <h2 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">Book Strategy Session</h2>
              <p className="text-xs text-zinc-500 mt-1">Free consultation with our growth specialists.</p>
            </div>

            {/* Steps Indicator */}
            <div className="flex items-center space-x-2 text-xs font-medium">
              <span className={`px-3 py-1 rounded-full ${step === 1 ? 'bg-orange-500/15 text-orange-700 border border-orange-500/30 font-bold' : 'text-zinc-600 bg-zinc-100'}`}>
                1. Goal
              </span>
              <span className="text-zinc-400">→</span>
              <span className={`px-3 py-1 rounded-full ${step === 2 ? 'bg-orange-500/15 text-orange-700 border border-orange-500/30 font-bold' : 'text-zinc-600 bg-zinc-100'}`}>
                2. Details
              </span>
            </div>

            {step === 1 ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Lead Generation & Sales',
                    'SEO / AEO / GEO',
                    'Performance Ads',
                    'Website Overhaul',
                    'AI & Automation',
                    'Branding & Design'
                  ].map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setFormData({ ...formData, goal: g })}
                      className={`p-3 text-left rounded-xl text-xs font-medium border transition-all cursor-pointer ${formData.goal === g
                          ? 'bg-orange-500/15 border-orange-500/40 text-orange-700 font-bold shadow-xs'
                          : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300'
                        }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">Select Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full input-dark text-sm"
                  >
                    {['Real Estate', 'Manufacturing', 'Healthcare', 'Education', 'Retail & E-commerce', 'Professional Services', 'Technology & SaaS', 'Financial Services', 'Hospitality', 'Startups & SMEs'].map(ind => (
                      <option key={ind} value={ind} className="bg-white text-zinc-900">{ind}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full btn-glow py-3.5 text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 rounded-xl shadow-md shadow-orange-500/20"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-3.5 text-zinc-400" />
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name *" className="w-full input-dark !pl-9 text-sm" />
                  </div>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-3.5 text-zinc-400" />
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Work Email *" className="w-full input-dark !pl-9 text-sm" />
                  </div>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3 top-3.5 text-zinc-400" />
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone Number *" className="w-full input-dark !pl-9 text-sm" />
                  </div>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 absolute left-3 top-3.5 text-zinc-400" />
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company / Brand" className="w-full input-dark !pl-9 text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">Preferred Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full input-dark text-xs !py-2.5" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">Preferred Time</label>
                    <select name="time" value={formData.time} onChange={handleChange} className="w-full input-dark text-xs !py-2.5">
                      {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'].map(t => (
                        <option key={t} value={t} className="bg-white text-zinc-900">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <button type="button" onClick={() => setStep(1)} className="px-4 py-3 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-xl border border-zinc-200 cursor-pointer hover:bg-zinc-200 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="flex-1 btn-glow py-3 text-xs uppercase font-bold rounded-xl shadow-md shadow-orange-500/20">
                    Confirm Free Session
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
