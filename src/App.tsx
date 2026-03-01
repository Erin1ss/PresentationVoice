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

      if (/^[0-9]$/.test(event.key)) {
        event.preventDefault();
        const requestedSlide = event.key === '0' ? 10 : Number(event.key);
        const targetIndex = requestedSlide - 1;

        if (targetIndex >= 0 && targetIndex < slides.length) {
          scrollToSlide(targetIndex);
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSlide, slides.length]);

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

      {slides.map((SlideComponent, idx) => (
        <section key={idx} id={`slide-${idx}`} className="h-screen w-full snap-start relative overflow-hidden">
          <SlideComponent />
        </section>
      ))}
    </div>
  );
}

export default App;
