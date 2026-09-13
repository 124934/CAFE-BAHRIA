import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ArrowRight, Utensils, Coffee, MapPin } from 'lucide-react';
import { PageRoute } from '../types';
import { SHOWCASE_ITEMS, getWhatsAppOrderLink } from '../data/cafeData';

interface TopSliderProps {
  onNavigate: (page: PageRoute) => void;
}

export const TopSlider: React.FC<TopSliderProps> = ({ onNavigate }) => {
  // Only the 3 images for the top slider (as instructed: "sirf three images... top pr automatic image slider add kro us ka time 2 sec ho oro us me wo hi images hoo jo neechy hoon")
  const sliderImages = SHOWCASE_ITEMS.filter((item) => item.type === 'image');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // 2-second automatic slider interval
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 2000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const currentItem = sliderImages[currentIndex];

  const getSlideIcon = (index: number) => {
    if (index === 0) return <Utensils className="w-5 h-5 text-[#C48F56]" />;
    if (index === 1) return <Coffee className="w-5 h-5 text-[#C48F56]" />;
    return <MapPin className="w-5 h-5 text-[#C48F56]" />;
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-[#1E110A] text-white shadow-2xl"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      id="hero-slider"
    >
      {/* 2-Second Progress Bar at top */}
      <div className="absolute top-0 left-0 right-0 z-30 h-1.5 bg-black/40">
        <div
          key={currentIndex}
          className="h-full bg-gradient-to-r from-[#D4A373] via-[#E29547] to-[#C48F56] transition-all"
          style={{
            animation: isPlaying ? 'sliderProgress 2s linear forwards' : 'none',
          }}
        />
      </div>

      <style>{`
        @keyframes sliderProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      {/* Main Slide Stage */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[620px] w-full">
        {sliderImages.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* High-definition Background Image */}
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Sophisticated Dark-to-Creamy Brown Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] via-[#2A170F]/70 to-[#120B07]/40" />
              <div className="absolute inset-0 bg-radial from-transparent via-[#1B0F0A]/30 to-[#120B07]/80" />

              {/* Slide Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 px-6 sm:px-12 md:px-20 max-w-6xl mx-auto">
                <div className="max-w-3xl space-y-3 md:space-y-4">
                  {/* Category Pill with Auto Timer Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F2]/15 backdrop-blur-md border border-[#D4A373]/40 text-[#F5EFEB] text-xs md:text-sm font-medium">
                    {getSlideIcon(idx)}
                    <span className="text-[#E7C19D] font-semibold">{slide.badge}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-xs text-white/80 font-mono">2s Auto-Slider</span>
                  </div>

                  {/* Main Title - EXACT User Label */}
                  <h1
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md leading-[1.15]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {slide.title}
                  </h1>

                  {/* Caption */}
                  <p className="text-base sm:text-lg md:text-xl text-[#E8DCCF] font-light max-w-2xl leading-relaxed">
                    {slide.caption}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      id={`slider-btn-menu-${idx}`}
                      onClick={() => onNavigate(slide.targetPage || 'menu')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C48F56] to-[#A36D3A] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#1A0E08]/50 hover:from-[#D4A373] hover:to-[#B57C45] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Explore {slide.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      id={`slider-btn-wa-${idx}`}
                      href={getWhatsAppOrderLink(`Hello Cafe Bahria, I am viewing "${slide.title}" and would like to order.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FAF7F2]/15 backdrop-blur-md border border-white/25 text-white font-medium text-sm sm:text-base hover:bg-white/25 transition-all"
                    >
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Bar: Controls, Slide Dots, and 2s Indicator */}
      <div className="absolute bottom-4 left-0 right-0 z-20 px-6 sm:px-12 md:px-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Navigation Dots */}
          <div className="flex items-center gap-2 sm:gap-3">
            {sliderImages.map((slide, i) => (
              <button
                key={slide.id}
                id={`slider-dot-${i}`}
                onClick={() => setCurrentIndex(i)}
                className={`group flex items-center gap-1.5 transition-all focus:outline-none ${
                  i === currentIndex ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
                title={slide.title}
              >
                <div
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-8 bg-[#D4A373]'
                      : 'w-2.5 bg-white/50 group-hover:bg-white'
                  }`}
                />
                <span className="hidden lg:inline text-[11px] text-[#E8DCCF] font-medium truncate max-w-[120px]">
                  {slide.title.replace('Cafe Bahria', '')}
                </span>
              </button>
            ))}
          </div>

          {/* Controls: Prev / Pause / Next & Indicator */}
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-xs text-white">
            <span className="font-mono text-[11px] text-[#D4A373] font-semibold pr-1">
              0{currentIndex + 1} / 0{sliderImages.length}
            </span>

            <button
              id="slider-btn-prev"
              onClick={prevSlide}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              id="slider-btn-playpause"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
              title={isPlaying ? 'Pause (2s Auto)' : 'Resume Auto'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <button
              id="slider-btn-next"
              onClick={nextSlide}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
