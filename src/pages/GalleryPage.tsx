import React, { useState } from 'react';
import { Play, Eye, Maximize2, X, Sparkles, Film, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { SHOWCASE_ITEMS, getWhatsAppOrderLink } from '../data/cafeData';

interface GalleryPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<(typeof SHOWCASE_ITEMS)[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  const filteredItems = SHOWCASE_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'video') return Boolean(item.videoUrl || item.type === 'video');
    return item.type === 'image';
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8DF] border border-[#D8C7B5] text-[#8C5D35] text-xs uppercase tracking-widest font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C48F56]" />
            <span>Visual Showcase</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1810] tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Cafe Bahria Gallery
          </h1>
          <p className="text-base text-[#6E5448] max-w-xl mx-auto">
            Explore the culinary highlights, barista craft, and welcoming atmosphere of our Bahria Town Karachi café.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {(['all', 'image', 'video'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                filter === type
                  ? 'bg-[#45281C] text-white shadow-md'
                  : 'bg-[#F2E8DF] text-[#503629] hover:bg-[#E8DCCF]'
              }`}
            >
              {type === 'all' ? 'All Highlights' : type === 'image' ? 'Featured Photography' : 'Overview Video'}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCCF] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
                {item.type === 'video' || (filter === 'video' && item.videoUrl) ? (
                  <>
                    <video
                      src={item.videoUrl || item.url}
                      poster={item.posterUrl || item.url}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 rounded-full bg-[#8C5D35]/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 ml-0.5 fill-current" />
                        </div>
                        <span className="text-xs font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                          Play With Sound (آواز کے ساتھ)
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/80 text-[#2C1810] flex items-center justify-center shadow-md">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#2C1810]/80 backdrop-blur-md text-[#FAF7F2] px-3 py-1 rounded-lg text-xs font-semibold border border-white/10 flex items-center gap-1.5">
                  {item.type === 'video' || (filter === 'video' && item.videoUrl) ? <Film className="w-3.5 h-3.5 text-[#C48F56]" /> : <Eye className="w-3.5 h-3.5 text-[#C48F56]" />}
                  <span>{item.badge}</span>
                </div>
              </div>

              {/* Exact Text Underneath */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#2C1810] capitalize mb-2 group-hover:text-[#8C5D35] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#735A4C] leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2E8DF] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8C5D35] flex items-center gap-1">
                    <span>Click to view {item.type === 'video' ? 'video' : 'photo'} in full size</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A38A7A]">
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <div className="relative w-full max-w-4xl bg-[#1A0E08] rounded-2xl overflow-hidden border border-[#C48F56]/40 shadow-2xl flex flex-col">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#25150E]">
                <h4 className="text-white font-bold text-lg font-serif">
                  {selectedItem.title}
                </h4>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Media Body */}
              <div className="bg-black flex items-center justify-center max-h-[60vh] sm:max-h-[70vh] overflow-hidden">
                {selectedItem.type === 'video' || (filter === 'video' && selectedItem.videoUrl) ? (
                  <video
                    src={selectedItem.videoUrl || selectedItem.url}
                    controls
                    autoPlay
                    className="max-h-[60vh] w-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="max-h-[60vh] w-full object-contain"
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-[#21130D] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[#D8C7B5]">{selectedItem.caption}</p>
                  <span className="text-xs text-[#C48F56] font-semibold mt-0.5 block">
                    Bahria Town, Karachi • 03099911227
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {selectedItem.targetPage && (
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        onNavigate(selectedItem.targetPage!);
                      }}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
                    >
                      Go to {selectedItem.targetPage === 'menu' ? 'Menu' : 'About'}
                    </button>
                  )}

                  <a
                    href={getWhatsAppOrderLink(`Hello Cafe Bahria, I saw "${selectedItem.title}" in your gallery and would like to order.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow transition-all"
                  >
                    WhatsApp Inquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
