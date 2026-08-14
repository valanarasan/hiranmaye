import React, { useState } from 'react';
import { Search, Clock, ArrowRight, X, ChevronDown, ChevronUp, Send, CheckCircle2 } from 'lucide-react';
import { blogContent } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

export default function BlogPage({ onOpenConsultation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const categories = ['All', 'SEO & AI Search', 'Web & UX', 'AI Marketing', 'Paid Advertising', 'Strategy & SMEs'];

  const filteredArticles = blogContent.popularArticles.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setNewsletterSubscribed(true);
      setTimeout(() => { setNewsletterSubscribed(false); setEmail(''); }, 4000);
    }
  };

  return (
    <div className="relative w-full">

      {/* HERO */}
      <section className="section-cinematic min-h-[50vh] px-4 sm:px-8 relative">
        <div className="glow-top" />
        <div className="reveal text-center space-y-6 max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white">
            Insights
          </h1>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-4 top-3.5 text-zinc-600" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full input-dark pl-11 py-3 text-sm rounded-xl"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    : 'text-zinc-500 hover:text-white border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 lg:px-16">
        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {filteredArticles.map((art) => (
            <Tilt3DCard key={art.id} maxTilt={8}>
              <div
                onClick={() => setActiveArticle(art)}
                className="glass-dark glass-dark-hover rounded-2xl p-5 sm:p-6 border-white/[0.04] cursor-pointer group h-full flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-400 text-[10px] font-bold border border-purple-500/20">
                      {art.category}
                    </span>
                    <span className="flex items-center space-x-1 text-[10px] text-zinc-600">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {art.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-zinc-600 mt-4 group-hover:text-purple-400/60 transition-colors">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="reveal glass-dark rounded-2xl p-8 sm:p-12 border-purple-500/15 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Stay Ahead</h3>
              <p className="text-sm text-zinc-500 mt-2">Expert insights delivered to your inbox.</p>
            </div>
            <div>
              {newsletterSubscribed ? (
                <div className="flex items-center space-x-2 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 input-dark py-3 text-sm"
                  />
                  <button type="submit" className="btn-glow px-5 py-3 text-xs font-bold flex items-center space-x-1.5">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="reveal max-w-3xl mx-auto space-y-3">
          <h3 className="text-xl font-bold text-white mb-6">FAQ</h3>
          {blogContent.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={faq.q} className="glass-dark rounded-xl border-white/[0.04] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-sm font-medium text-zinc-300 hover:text-white cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-purple-400" /> : <ChevronDown className="w-4 h-4 text-zinc-600" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-zinc-500 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] glass-dark rounded-2xl p-6 sm:p-8 border-purple-500/20 shadow-2xl overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.06] text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-400 text-[10px] font-bold border border-purple-500/20">
                {activeArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white pr-8">{activeArticle.title}</h2>
              <div className="flex items-center space-x-3 text-[10px] text-zinc-600">
                <span>{activeArticle.author}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
              </div>
            </div>

            <div
              className="prose prose-invert prose-sm max-w-none text-zinc-400 mt-6 border-t border-white/[0.06] pt-6"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex justify-between items-center">
              <button onClick={() => setActiveArticle(null)} className="text-xs text-zinc-500 hover:text-white cursor-pointer">
                Close
              </button>
              <button
                onClick={() => { setActiveArticle(null); onOpenConsultation(); }}
                className="btn-glow px-5 py-2 text-xs font-bold"
              >
                Discuss Strategy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
