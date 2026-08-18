import React, { useState } from 'react';
import { Search, Clock, ArrowRight, X, ChevronDown, ChevronUp, Send, CheckCircle2, BookOpen, Sparkles, HelpCircle, Mail } from 'lucide-react';
import { blogContent } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

export default function BlogPage({ onOpenConsultation, setActivePage }) {
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

      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <section className="section-cinematic min-h-[50vh] px-4 sm:px-8 relative pt-32 pb-16">
        <div className="glow-top" />
        <div className="reveal text-center space-y-6 max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <span>Insights & Research</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.08] font-heading">
            {blogContent.hero.heading}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            {blogContent.hero.subHeading}
          </p>

          {/* Search bar */}
          <div className="relative max-w-lg mx-auto pt-2">
            <Search className="w-4 h-4 absolute left-4 top-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search marketing strategies, SEO, AI guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full input-dark !pl-11 py-3 text-sm rounded-xl"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                      : 'bg-white/80 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          2. POPULAR ARTICLES (Most Read by Business Leaders)
          ============================================ */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex items-center justify-between mb-8 pb-3 border-b border-zinc-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                Most Read by Business Leaders
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                Top-performing strategic playbooks and frameworks
              </p>
            </div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider hidden sm:block">
              {filteredArticles.length} Articles
            </span>
          </div>

          <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <Tilt3DCard key={art.id} maxTilt={6}>
                <div
                  onClick={() => setActiveArticle(art)}
                  className="glass-dark glass-dark-hover rounded-2xl p-6 border-zinc-200/80 cursor-pointer group h-full flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-700 text-[10px] font-bold border border-orange-500/20">
                        {art.category}
                      </span>
                      <span className="flex items-center space-x-1 text-[10px] text-zinc-500">
                        <Clock className="w-3 h-3" />
                        <span>{art.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs font-bold text-orange-600 mt-5 pt-3 border-t border-zinc-100 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          3. SUGGESTED PILLAR ARTICLES
          ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center space-y-3 mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
              <span>Authority Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              Essential Growth Guides (SEO · AEO · GEO)
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto">
              In-depth pillar guides designed to help modern enterprises dominate both traditional search and AI discovery engines.
            </p>
          </div>

          <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-4xl mx-auto">
            {blogContent.pillarArticles.map((title, idx) => (
              <div
                key={title}
                className="flex items-center space-x-3 p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-orange-50/50 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-mono text-xs font-bold shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-orange-700 transition-colors">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          4. WHY READ OUR BLOG?
          ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-zinc-50/60 border-y border-zinc-200/70">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4 reveal">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-700 text-xs font-bold uppercase tracking-wider">
                <span>Why Read Our Blog?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
                Knowledge That Helps Your Business Grow
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Our content is created by digital marketing professionals with one goal—to help businesses make informed decisions and achieve measurable growth.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 reveal">
              {blogContent.whyReadBlog.map((point) => (
                <div key={point} className="flex items-start space-x-2.5 p-3.5 rounded-xl glass-dark border-zinc-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-zinc-800">{point}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          5. NEWSLETTER SECTION
          ============================================ */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="reveal glass-dark rounded-2xl p-8 sm:p-12 border-zinc-200/80 max-w-4xl mx-auto shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center space-x-2 text-orange-600 font-bold text-xs uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Newsletter</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                Stay Ahead of Digital Trends
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Subscribe to receive expert insights, practical marketing strategies, industry updates, and exclusive resources delivered directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {newsletterSubscribed ? (
                <div className="flex items-center space-x-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! You have been subscribed to our insights.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 input-dark py-3.5 text-sm rounded-xl"
                  />
                  <button
                    type="submit"
                    className="btn-glow px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 rounded-xl whitespace-nowrap shadow-md shadow-orange-500/20"
                  >
                    <span>Subscribe Now</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          6. FREQUENTLY ASKED QUESTIONS
          ============================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-zinc-50/60 border-t border-zinc-200/70">
        <div className="reveal max-w-3xl mx-auto space-y-4">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500">
              Everything you need to know about our insights and research
            </p>
          </div>

          <div className="space-y-3">
            {blogContent.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="glass-dark rounded-xl border-zinc-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-zinc-800 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-orange-600 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0 ml-2" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          7. ARTICLE READER MODAL
          ============================================ */}
      {activeArticle && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] glass-dark rounded-2xl p-6 sm:p-8 border-zinc-200 shadow-2xl overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/[0.03] text-zinc-500 hover:text-zinc-900 border border-zinc-200 cursor-pointer z-10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-700 text-[10px] font-bold border border-orange-500/20">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 pr-8 leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center space-x-3 text-xs text-zinc-500 border-b border-zinc-100 pb-4">
                <span className="font-semibold text-zinc-700">{activeArticle.author}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
              </div>
            </div>

            <div
              className="prose prose-sm max-w-none text-zinc-700 mt-6 pt-2"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            <div className="mt-8 pt-4 border-t border-zinc-200 flex justify-between items-center">
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => { setActiveArticle(null); onOpenConsultation(); }}
                className="btn-glow px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                Discuss Strategy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================
          8. FINAL CALL TO ACTION
          ============================================ */}
      <section className="section-cinematic px-4 sm:px-8 relative pb-20">
        <div className="glow-accent left-1/2 -translate-x-1/2 top-0" />

        <div className="reveal text-center space-y-6 max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 tracking-tight">
            Ready to Turn Insights into Results?
          </h2>
          <p className="text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Reading about digital marketing is the first step. Implementing the right strategy is what drives business growth. Partner with HIRANMAYE DIGITAL to transform ideas into measurable results.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="btn-glow px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-3 shadow-xl shadow-orange-500/20"
            >
              <span>Book a Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            {setActivePage && (
              <button
                onClick={() => setActivePage('contact')}
                className="btn-ghost px-7 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2"
              >
                <span>Contact Our Team</span>
              </button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
