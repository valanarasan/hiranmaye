import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { companyDetails } from '../data/siteData';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Hi, I\'d like to discuss digital marketing for my business.');

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${companyDetails.whatsapp.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {open && (
        <div className="w-72 glass-dark rounded-2xl p-4 border-purple-500/20 shadow-2xl animate-fade-in space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-bold">
                WA
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Quick Chat</h4>
                <p className="text-[10px] text-emerald-400 font-medium">● Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white p-1 cursor-pointer">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            {[
              "Interested in SEO & AI optimization.",
              "Need Meta & Google Ads.",
              "Looking for website redesign.",
              "Want a growth audit."
            ].map((txt) => (
              <button
                key={txt}
                onClick={() => setMessage(txt)}
                className="w-full text-left px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs text-zinc-300 border border-white/[0.06] transition-colors cursor-pointer"
              >
                {txt}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 input-dark text-xs py-2"
            />
            <button
              onClick={handleSend}
              className="bg-emerald-500 hover:bg-emerald-400 text-white p-2 rounded-lg transition-all cursor-pointer"
              title="Chat on WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:scale-110 transition-transform cursor-pointer"
        aria-label="WhatsApp Support"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full" />
          </div>
        )}
      </button>
    </div>
  );
}
