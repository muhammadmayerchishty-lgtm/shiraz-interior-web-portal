import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, CheckCheck, Sparkles } from 'lucide-react';
import { GOOGLE_STATS } from '../data/reviews';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('Hi Shiraz Interior, I want to discuss interior styling for my home/office');

  const defaultTemplates = [
    'Hi Shiraz Interior, I want to discuss interior styling for my home/office',
    'I want to schedule a Free Site Visit for measurement in Karachi',
    'Please send me the latest 3D Wallpaper & WPC Louver catalog PDF',
    'What is the estimated cost for a 12x10 ft TV Lounge media wall?'
  ];

  const handleSend = (textToSend: string) => {
    const url = `https://wa.me/923452769981?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Chat Bubble Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0D1217] border border-[#C5A059]/40 shadow-2xl shadow-black overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold font-display text-white">
                  SI
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-900 rounded-full" />
              </div>
              <div>
                <div className="font-semibold text-sm">Shiraz Interior Support</div>
                <div className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span>Online</span>
                  <span>·</span>
                  <span>Replies within 5 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-black/20 text-white/80 hover:text-white transition-colors"
              aria-label="Close chat window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#090C0E] space-y-3">
            {/* Automated Agent Message */}
            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-200 space-y-1">
              <div className="text-[10px] text-[#C5A059] font-medium uppercase tracking-wide">
                Shiraz Interior · Mosamiyat Studio
              </div>
              <p className="leading-relaxed">
                Assalam-o-Alaikum! Welcome to Shiraz Interior Karachi. How can we help you transform your space today?
              </p>
              <div className="flex justify-end items-center gap-1 text-[10px] text-stone-400 pt-1">
                <span>Just now</span>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Quick Templates */}
            <div>
              <div className="text-[11px] text-stone-400 mb-1.5 font-medium">Quick inquiries:</div>
              <div className="space-y-1.5">
                {defaultTemplates.map((template, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(template)}
                    className="w-full text-left p-2 rounded-lg bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 hover:border-[#C5A059]/40 text-xs text-stone-300 hover:text-white transition-colors line-clamp-2"
                  >
                    "{template}"
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-2 border-t border-stone-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Type your question..."
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customText.trim()) {
                      handleSend(customText);
                    }
                  }}
                />
                <button
                  onClick={() => handleSend(customText)}
                  className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors shrink-0"
                  aria-label="Send message to WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-[10px] text-stone-500 text-center mt-2 font-mono">
                Direct Line: {GOOGLE_STATS.phone}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Sticky Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat with Shiraz Interior on WhatsApp"
      >
        {/* Subtle glowing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm pointer-events-none group-hover:bg-emerald-500/35 transition-all" />

        <div className="relative flex items-center gap-2">
          {/* WhatsApp Icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.764.814 2.801.814 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.586-5.769-5.773-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline">
            WhatsApp Shiraz Interior
          </span>
        </div>
      </button>
    </div>
  );
};
