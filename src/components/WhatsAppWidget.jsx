import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { companyDetails } from '../data/siteData';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Hi HIRANMAYE DIGITAL, I would like to inquire about digital marketing services for my business.');

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {open && (
        <div className="w-80 bg-white rounded-3xl p-5 border border-purple-200 shadow-2xl animate-fadeIn space-y-4 text-slate-900">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                WA
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">HIRANMAYE Support</h4>
                <p className="text-[10px] text-emerald-600 font-bold">● Live | Bangalore HQ</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-purple-50 p-3 rounded-2xl text-xs text-purple-950 leading-relaxed border border-purple-100">
            👋 Hello! Welcome to <strong>HIRANMAYE DIGITAL</strong>. How can our growth team assist your business today?
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] text-slate-500 font-bold uppercase tracking-wider">Quick Inquiries:</label>
            <div className="space-y-1.5 text-[11px]">
              {[
                "Interested in SEO & AI Search Optimization.",
                "Need Meta & Google Performance Ads.",
                "Looking to redesign our company website.",
                "Want a complete business growth audit."
              ].map((txt) => (
                <button
                  key={txt}
                  onClick={() => setMessage(txt)}
                  className="w-full text-left p-2 rounded-xl bg-slate-50 hover:bg-purple-100 text-slate-700 hover:text-purple-900 border border-slate-200 transition-colors font-medium"
                >
                  {txt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-purple-600"
            />
            <button
              onClick={handleSend}
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-xl transition-all font-bold shadow-md shadow-emerald-500/20"
              title="Chat on WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-110 transition-transform cursor-pointer group"
        aria-label="WhatsApp Support"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-600 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-fuchsia-600 rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
}
