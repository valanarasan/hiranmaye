import React, { useState } from 'react';
import { 
  Search, BookOpen, Clock, ArrowRight, X, 
  ChevronDown, ChevronUp, CheckCircle2, Send, HelpCircle 
} from 'lucide-react';
import { blogContent, seoPageMeta } from '../data/siteData';
import Tilt3DCard from '../components/Tilt3DCard';

export default function BlogPage({ onOpenConsultation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const categories = ['All', 'SEO & AI Search', 'Web & UX', 'AI Marketing', 'Paid Advertising', 'Strategy & SMEs'];

  const filteredArticles = blogContent.popularArticles.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <div className="space-y-24 pt-32 pb-20 w-full px-4 sm:px-8 lg:px-12 2xl:px-16 relative">
      
      {/* Ambient Glow */}
      <div className="ambient-glow-top-light" />

      {/* PAGE HEADER */}
      <section className="text-center space-y-6 max-w-3xl mx-auto z-10 relative">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel-light border border-purple-200 text-purple-900 text-xs font-extrabold uppercase tracking-widest shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-fuchsia-600" />
          <span>HIRANMAYE DIGITAL Growth Insights</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Knowledge That Helps Your <span className="gradient-text-plum">Business Scale</span>
        </h1>

        <p className="text-base text-slate-600 font-normal">
          {blogContent.hero.subHeading}
        </p>

        {/* Search & Category Bar */}
        <div className="space-y-4 pt-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles on SEO, AI Search, Ads, Web Design..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-purple-200 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-800 to-fuchsia-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-purple-50 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ARTICLES */}
      <section className="space-y-8 z-10 relative">
        <div className="flex items-center justify-between border-b border-purple-100 pb-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-fuchsia-700 font-extrabold">Featured Insights</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Most Read by Business Leaders</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <Tilt3DCard key={art.id} maxTilt={8}>
              <div
                onClick={() => setActiveArticle(art)}
                className="glass-panel-light glass-panel-light-hover rounded-2xl p-6 border-purple-100 flex flex-col justify-between cursor-pointer space-y-4 group h-full"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-extrabold border border-purple-200">
                      {art.category}
                    </span>
                    <span className="flex items-center space-x-1 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-800 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100 flex items-center justify-between text-xs font-bold text-purple-800">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-fuchsia-600" />
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </section>

      {/* SUGGESTED PILLAR ARTICLES (SEO + AEO + GEO) */}
      <section className="glass-panel-light rounded-3xl p-8 sm:p-10 border-purple-200 space-y-6 z-10 relative shadow-sm">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-purple-800 font-extrabold">Authority Playbooks</span>
          <h3 className="text-2xl font-black text-slate-900">Suggested Pillar Articles (SEO + AEO + GEO)</h3>
          <p className="text-xs text-slate-600">
            Comprehensive business guides published by HIRANMAYE DIGITAL for decision-makers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {blogContent.pillarArticles.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-purple-100 flex items-center justify-between text-slate-800 font-bold hover:border-purple-300 transition-colors shadow-2xs"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xs font-black text-fuchsia-600">0{idx + 1}.</span>
                <span>{pillar}</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="glass-panel-light rounded-3xl p-8 sm:p-12 border border-purple-200 bg-gradient-to-r from-purple-900 via-fuchsia-950 to-slate-900 text-white z-10 relative shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs uppercase tracking-widest text-fuchsia-400 font-extrabold">Growth Newsletter</span>
            <h2 className="text-3xl font-extrabold text-white">Stay Ahead of Digital Trends</h2>
            <p className="text-sm text-purple-200 leading-relaxed">
              Subscribe to receive expert insights, practical marketing strategies, industry updates, and exclusive resources delivered directly to your inbox.
            </p>
          </div>
          <div className="lg:col-span-5">
            {newsletterSubscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-sm flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Subscribed! Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-fuchsia-400"
                />
                <button
                  type="submit"
                  className="btn-glow-plum px-6 py-3 text-xs uppercase tracking-wider font-bold whitespace-nowrap flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Subscribe Now</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WHY READ OUR BLOG */}
      <section className="space-y-6 z-10 relative">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Read Our Blog?</h2>
          <p className="text-sm text-slate-600">Knowledge That Helps Your Business Grow</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogContent.whyReadBlog.map((reason) => (
            <div key={reason} className="p-4 rounded-xl bg-white border border-purple-100 flex items-center space-x-3 text-xs text-slate-800 font-bold shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="glass-panel-light rounded-3xl p-8 sm:p-10 border-purple-200 space-y-6 z-10 relative shadow-sm">
        <div className="flex items-center space-x-3">
          <HelpCircle className="w-6 h-6 text-fuchsia-600" />
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {blogContent.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="border border-purple-100 rounded-2xl bg-white overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-base font-bold text-slate-900 hover:text-purple-800"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-purple-800" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="z-10 relative">
        <Tilt3DCard maxTilt={5}>
          <div className="glass-panel-light rounded-3xl p-10 text-center space-y-6 border-2 border-purple-300 bg-gradient-to-tr from-purple-900 via-fuchsia-950 to-slate-900 text-white shadow-2xl">
            <h2 className="text-3xl font-black text-white">Ready to Turn Insights into Results?</h2>
            <p className="text-sm text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Reading about digital marketing is the first step. Implementing the right strategy is what drives business growth.
            </p>
            <button
              onClick={onOpenConsultation}
              className="btn-glow-plum px-8 py-4 text-xs uppercase tracking-wider font-bold inline-flex items-center space-x-2 shadow-xl"
            >
              <span>Book a Free Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Tilt3DCard>
      </section>

      {/* INTERACTIVE ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-3xl p-6 sm:p-8 border border-purple-200 shadow-2xl overflow-y-auto space-y-6 text-slate-900">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-extrabold border border-purple-200">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 pt-2">{activeArticle.title}</h2>
              <div className="flex items-center space-x-4 text-xs text-slate-500 font-semibold pt-1">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
              </div>
            </div>

            <div 
              className="prose max-w-none text-xs sm:text-sm text-slate-700 space-y-4 border-t border-purple-100 pt-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            <div className="pt-4 border-t border-purple-100 flex justify-between items-center">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-xs rounded-xl hover:bg-slate-200 font-bold"
              >
                Close Article
              </button>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenConsultation();
                }}
                className="btn-glow-plum px-5 py-2.5 text-xs uppercase tracking-wider font-bold shadow-md"
              >
                Discuss Strategy For Your Brand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SEO META */}
      <section className="text-xs text-slate-400 space-y-1 border-t border-purple-100 pt-6">
        <p><strong className="text-slate-600">SEO Title:</strong> {seoPageMeta.blog.title}</p>
        <p><strong className="text-slate-600">Meta Description:</strong> {seoPageMeta.blog.description}</p>
        <p><strong className="text-slate-600">Primary Keywords:</strong> {seoPageMeta.blog.keywords.join(' • ')}</p>
      </section>

    </div>
  );
}
