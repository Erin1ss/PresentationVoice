import React, { useEffect, useState } from 'react';
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from './slides/Part1';
import { Slide6, Slide7, Slide8, Slide9, Slide10 } from './slides/Part2';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const slideHeight = window.innerHeight;
    const scrollTop = e.currentTarget.scrollTop;
    const index = Math.round(scrollTop / slideHeight);
    setActiveSlide(index);
  };

  const scrollToSlide = (index: number) => {
    const element = document.getElementById(`slide-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        scrollToSlide(Math.min(activeSlide + 1, slides.length - 1));
      }

      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        scrollToSlide(Math.max(activeSlide - 1, 0));
      }

      if (event.key === 'Home') {
        event.preventDefault();
        scrollToSlide(0);
      }

      if (event.key === 'End') {
        event.preventDefault();
        scrollToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSlide, slides.length]);

  const progress = ((activeSlide + 1) / Math.max(slides.length, 1)) * 100;

  return (
    <div
      className="presentation-scroll h-screen w-full overflow-y-scroll snap-y snap-mandatory relative"
      onScroll={handleScroll}
    >
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="ambient-orb ambient-orb-cyan absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(59,209,255,0.22)_0%,_transparent_70%)]" />
        <div className="ambient-orb ambient-orb-amber absolute bottom-[-8rem] right-[6%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,180,84,0.16)_0%,_transparent_72%)]" />
      </div>

      <div className="fixed left-4 md:left-8 top-6 md:top-8 z-50 flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-black/35 backdrop-blur">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-[var(--color-text-soft)]">Слайд</span>
        <span className="font-semibold text-sm md:text-base text-white min-w-12">
          {String(activeSlide + 1).padStart(2, '0')} / {slides.length}
        </span>
      </div>

      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3 md:gap-4">
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/15" />
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 z-10 ${
              activeSlide === idx
                ? 'bg-[var(--color-accent-cyan)] scale-150 shadow-[0_0_14px_var(--color-accent-cyan)]'
                : 'bg-white/20 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="h-1.5 rounded-full bg-white/15 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-amber)] transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50 hidden lg:flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] tracking-[0.14em] uppercase text-[var(--color-text-soft)] backdrop-blur">
        <span>↑ ↓</span>
        <span>PgUp PgDn</span>
        <span>Home End</span>
      </div>

      {slides.map((SlideComponent, idx) => (
        <section key={idx} id={`slide-${idx}`} className="h-screen w-full snap-start relative overflow-hidden">
          <SlideComponent />
        </section>
      ))}
    </div>
  );
}

export default App;
