import React, { useEffect, useRef, useState } from 'react';
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from './slides/Part1';
import { Slide6, Slide7, Slide8, Slide9, Slide10 } from './slides/Part2';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showSlideNumber, setShowSlideNumber] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(
    () => Math.min(window.screen.width, window.screen.height) <= 768
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visualScale = isMobileDevice ? 1 : 1.5;

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10];

  const scrollToSlide = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
    container.scrollTo({
      top: clampedIndex * container.clientHeight,
      behavior: 'smooth'
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const slideHeight = e.currentTarget.clientHeight;
    const scrollTop = e.currentTarget.scrollTop;
    const index = Math.round(scrollTop / slideHeight);
    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
    setActiveSlide(clampedIndex);
  };

  useEffect(() => {
    const onResize = () => {
      setIsMobileDevice(Math.min(window.screen.width, window.screen.height) <= 768);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) return;

    if (isMobileDevice) {
      viewport.setAttribute('content', 'width=1200');
    } else {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
  }, [isMobileDevice]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' ', 'Spacebar'].includes(event.key) || event.code === 'Space') {
        event.preventDefault();
        scrollToSlide(activeSlide + 1);
      }

      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        scrollToSlide(activeSlide - 1);
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

      if (event.key.toLowerCase() === 'u') {
        event.preventDefault();
        setShowSlideNumber((prev) => !prev);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSlide, slides.length]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="ambient-orb ambient-orb-cyan absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(59,209,255,0.22)_0%,_transparent_70%)]" />
        <div className="ambient-orb ambient-orb-amber absolute bottom-[-8rem] right-[6%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,180,84,0.16)_0%,_transparent_72%)]" />
      </div>

      <div
        ref={containerRef}
        className="presentation-scroll h-full w-full overflow-y-scroll snap-y snap-mandatory relative"
        onScroll={handleScroll}
        style={{
          transform: `scale(${visualScale})`,
          transformOrigin: 'top left',
          width: `${100 / visualScale}%`,
          height: `${100 / visualScale}%`
        }}
      >
        {slides.map((SlideComponent, idx) => (
          <section
            key={idx}
            id={`slide-${idx}`}
            className="h-full w-full snap-start relative overflow-hidden"
            onClick={() => scrollToSlide(activeSlide + 1)}
          >
            <SlideComponent />
          </section>
        ))}
      </div>

      <div
        className={`fixed right-4 bottom-3 z-40 pointer-events-none select-none text-xs tracking-[0.12em] transition-opacity ${
          showSlideNumber ? 'opacity-35 text-white' : 'opacity-0'
        }`}
      >
        {activeSlide + 1}/{slides.length}
      </div>
    </div>
  );
}

export default App;
