import React, { useState, useEffect } from 'react';

const CHAPTERS = [
  { id: 'chapter-1', num: '01', title: 'The Spark', subtitle: 'Ambition & Vision' },
  { id: 'chapter-2', num: '02', title: 'The Shift', subtitle: 'Our Philosophy' },
  { id: 'chapter-3', num: '03', title: 'The Blueprint', subtitle: '5-Step Growth Engine' },
  { id: 'chapter-4', num: '04', title: 'The Proof', subtitle: 'Simulate Your ROI' },
  { id: 'chapter-5', num: '05', title: 'The Horizon', subtitle: 'Industries We Lead' },
  { id: 'chapter-6', num: '06', title: 'The Next Chapter', subtitle: 'Start Growing' },
];


export default function StoryChapterNav() {
  const [activeChapter, setActiveChapter] = useState('chapter-1');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(progress);
      }

      setIsNavVisible(currentScroll > 150);

      // Determine active chapter based on section positions
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveChapter(CHAPTERS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentActiveObj = CHAPTERS.find((c) => c.id === activeChapter) || CHAPTERS[0];

  return (
    <>
      {/* Top Global Story Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/5">
        <div
          className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Mobile Chapter Pill (visible on scroll) */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 lg:hidden transition-all duration-300 pointer-events-none ${
          isNavVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
        }`}
      >
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-orange-500/20 shadow-lg shadow-orange-500/10 px-3.5 py-1.5 rounded-full flex items-center space-x-2 text-xs font-semibold text-zinc-800">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          <span className="text-orange-600 font-mono font-bold">CH {currentActiveObj.num}</span>
          <span className="text-zinc-300">/</span>
          <span className="truncate max-w-[150px]">{currentActiveObj.title}</span>
        </div>
      </div>

      {/* Desktop Floating Story Navigator (Right Side) */}
      <div
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end space-y-3.5 transition-all duration-500 ${
          isNavVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6 pointer-events-none'
        }`}
      >
        {/* Story Navigator Container */}
        <div className="bg-white/80 backdrop-blur-xl border border-zinc-200/90 shadow-xl shadow-black/5 p-3 rounded-2xl flex flex-col space-y-2 relative">
          <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 px-2 py-0.5 border-b border-zinc-100 mb-1">
            Story Arc
          </div>

          {CHAPTERS.map((ch) => {
            const isActive = activeChapter === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                className={`group relative flex items-center justify-end space-x-3 px-2 py-1.5 rounded-xl transition-all duration-300 text-right cursor-pointer ${
                  isActive ? 'bg-orange-500/10 text-orange-600' : 'text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100/70'
                }`}
              >
                {/* Tooltip on hover */}
                <div className="flex flex-col text-right">
                  <span className={`text-xs font-bold transition-colors ${isActive ? 'text-orange-600' : 'text-zinc-700'}`}>
                    {ch.title}
                  </span>
                  <span className="text-[9px] text-zinc-400 font-medium">
                    {ch.subtitle}
                  </span>
                </div>

                {/* Chapter Number Badge */}
                <div
                  className={`w-6 h-6 rounded-lg font-mono text-[10px] font-black flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-110'
                      : 'bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-zinc-900'
                  }`}
                >
                  {ch.num}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
