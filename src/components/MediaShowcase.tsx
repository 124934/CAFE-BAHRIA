import React, { useState } from 'react';
import { ExternalLink, Sparkles, Utensils, Coffee, Image, Eye, X, Phone, Maximize2 } from 'lucide-react';
import { PageRoute } from '../types';
import { SHOWCASE_ITEMS, getWhatsAppOrderLink, CAFE_INFO } from '../data/cafeData';

interface MediaShowcaseProps {
  onNavigate: (page: PageRoute) => void;
}

export const MediaShowcase: React.FC<MediaShowcaseProps> = ({ onNavigate }) => {
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string; caption: string } | null>(null);

  const images = SHOWCASE_ITEMS;

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] relative">
      {/* Background Subtle Latte Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#45281C_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8DF] border border-[#D8C7B5] text-[#8C5D35] text-xs uppercase tracking-widest font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C48F56]" />
            <span>Signature Highlights</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1810] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Experience Cafe Bahria
          </h2>
          <p className="text-base sm:text-lg text-[#6E5448] font-normal leading-relaxed">
            Crafted for the discerning food lovers of Bahria Town Karachi. Browse our core offerings below:
          </p>
        </div>

        {/* 3 Core Highlights Grid: Main Menu, Coffee Cuisine Steak, Cafe Bahria Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Main Menu Cafe Bahria */}
          {images[0] && (
            <div
              id="showcase-card-main-menu"
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E8DCCF] shadow-sm hover:shadow-xl hover:border-[#C48F56] transition-all duration-300 flex flex-col"
            >
              <div
                className="relative h-64 sm:h-72 overflow-hidden bg-[#2C1810] cursor-pointer"
                onClick={() => setPreviewImage({ url: images[0].url, title: images[0].title, caption: images[0].caption })}
              >
                <img
                  src={images[0].url}
                  alt={images[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#2C1810]/80 backdrop-blur-md text-[#F4ECE4] px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                  <Utensils className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Cuisine</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Exact Text Underneath: "main menu cafe bahria" */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#2C1810] capitalize mb-2 group-hover:text-[#8C5D35] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {images[0].title}
                  </h3>
                  <p className="text-sm text-[#735A4C] leading-relaxed mb-4">
                    Gourmet smash burgers, wood-fired pizzas, creamy pastas, and hearty breakfasts prepared with 100% fresh Halal ingredients.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F4ECE4] flex items-center justify-between">
                  <button
                    id="btn-view-main-menu"
                    onClick={() => onNavigate('menu')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8C5D35] hover:text-[#522E1B] transition-colors"
                  >
                    <span>View Menu Items</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#F8F1EA] text-[#8C5D35] font-semibold">
                    8 Categories
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Coffee Cuisine Steak */}
          {images[1] && (
            <div
              id="showcase-card-coffee-steak"
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E8DCCF] shadow-sm hover:shadow-xl hover:border-[#C48F56] transition-all duration-300 flex flex-col"
            >
              <div
                className="relative h-64 sm:h-72 overflow-hidden bg-[#2C1810] cursor-pointer"
                onClick={() => setPreviewImage({ url: images[1].url, title: images[1].title, caption: images[1].caption })}
              >
                <img
                  src={images[1].url}
                  alt={images[1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#2C1810]/80 backdrop-blur-md text-[#F4ECE4] px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                  <Coffee className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Specialty</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-black/60 text-white backdrop-blur-sm">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Exact Text Underneath: "coffee cusine steak" */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#2C1810] capitalize mb-2 group-hover:text-[#8C5D35] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {images[1].title}
                  </h3>
                  <p className="text-sm text-[#735A4C] leading-relaxed mb-4">
                    Signature prime ribeye steaks basted in herb butter alongside handcrafted Spanish lattes, frappes, and pour-overs.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F4ECE4] flex items-center justify-between">
                  <button
                    id="btn-view-steaks"
                    onClick={() => onNavigate('menu')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8C5D35] hover:text-[#522E1B] transition-colors"
                  >
                    <span>Order Steaks & Coffee</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#F8F1EA] text-[#8C5D35] font-semibold">
                    Prime Cuts
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Cafe Bahria Overview (With New User Image) */}
          {images[2] && (
            <div
              id="showcase-card-overview"
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border-2 border-[#D4A373] shadow-md hover:shadow-2xl hover:border-[#8C5D35] transition-all duration-300 flex flex-col relative"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-[#C48F56] to-[#8C5D35] text-white px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Hospital Commercial</span>
              </div>

              {/* Image Container with the exact image provided by user */}
              <div
                className="relative h-64 sm:h-72 overflow-hidden bg-[#150B07] flex items-center justify-center p-2 cursor-pointer group/img"
                onClick={() => setPreviewImage({ url: images[2].url, title: images[2].title, caption: images[2].caption })}
              >
                <img
                  src={images[2].url}
                  alt={images[2].title}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl transition-transform duration-700 group-hover/img:scale-105"
                />

                <div className="absolute top-3 left-3 bg-[#2C1810]/90 backdrop-blur-md text-[#F4ECE4] px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                  <Image className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Overview</span>
                </div>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-[#2C1810] shadow-xl hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </div>

              {/* Exact Text Underneath: "cafe bahria overview" */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#2C1810] capitalize mb-2 group-hover:text-[#8C5D35] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {images[2].title}
                  </h3>
                  <div className="p-3 bg-[#FAF4ED] rounded-xl border border-[#E8DCCF] mb-3 text-xs text-[#522E1B] leading-relaxed">
                    <p className="font-semibold text-[#2C1810] mb-1">
                      Good Coffee • Good Food • Great Mood
                    </p>
                    <p className="text-[#735A4C]">
                      Hospital Commercial, Bahria Town Karachi • <strong>Rehan Qaiser</strong> • <strong>03099911227</strong>
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F4ECE4] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setPreviewImage({ url: images[2].url, title: images[2].title, caption: images[2].caption })}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8C5D35] hover:text-[#522E1B] transition-colors"
                  >
                    <Eye className="w-4 h-4 text-[#8C5D35]" />
                    <span>View Full Poster</span>
                  </button>

                  <button
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#735A4C] hover:text-[#2C1810] bg-[#FAF0E6] hover:bg-[#F2E3D5] px-2.5 py-1 rounded-lg transition-colors border border-[#E6D0BE]"
                  >
                    <span>About Us</span>
                    <ExternalLink className="w-3 h-3 text-[#8C5D35]" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Order Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#3D2317] via-[#2A160E] to-[#1F100A] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left z-10 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold">Fast & Direct Delivery in Bahria Town</span>
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Craving something delicious right now?
            </h3>
            <p className="text-sm sm:text-base text-[#E6D5C3]">
              Send your order directly to our chef counter on WhatsApp: <strong className="text-white font-mono">{CAFE_INFO.phone}</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 z-10">
            <a
              id="cta-wa-banner"
              href={getWhatsAppOrderLink('Hello Cafe Bahria, I am ready to place an order for delivery/pickup in Bahria Town.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-green-900/40 hover:brightness-105 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Order on WhatsApp ({CAFE_INFO.phone})</span>
            </a>

            <button
              id="cta-menu-banner"
              onClick={() => onNavigate('menu')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all"
            >
              Browse Full Menu
            </button>
          </div>
        </div>
      </div>

      {/* Image Preview Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#1A0F0A] rounded-2xl overflow-hidden border border-[#C48F56]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#25150E]">
              <h4 className="text-white font-bold text-lg font-serif">{previewImage.title}</h4>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-black flex items-center justify-center max-h-[75vh]">
              <img
                src={previewImage.url}
                alt={previewImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
            <div className="p-4 bg-[#21130D] text-sm text-[#D8C7B5] flex items-center justify-between">
              <span>{previewImage.caption}</span>
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold text-xs sm:text-sm"
              >
                WhatsApp: {CAFE_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
