import React from 'react';
import { Coffee, Utensils, Heart, Award, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';
import { CAFE_INFO, getWhatsAppOrderLink } from '../data/cafeData';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Hero Banner with Story Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8DF] border border-[#D8C7B5] text-[#8C5D35] text-xs uppercase tracking-widest font-bold">
              <Award className="w-3.5 h-3.5 text-[#C48F56]" />
              <span>Bahria Town Karachi&apos;s Culinary Gem</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1810] tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Good Food. Great Coffee. Better Moments.
            </h1>

            <p className="text-base sm:text-lg text-[#6E5448] leading-relaxed">
              Cafe Bahria was founded with a single uncompromising mission: to create a warm, world-class culinary sanctuary right in the heart of Bahria Town, Karachi.
            </p>

            <p className="text-sm sm:text-base text-[#735A4C] leading-relaxed">
              We believe great dining is more than just feeding an appetite—it is about the soothing hum of an espresso machine pulling rich crema, the aroma of a prime ribeye steak searing over open flame, and the laughter of families and lifelong friends gathered around a comforting table.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 rounded-xl bg-[#45281C] hover:bg-[#5C3626] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Browse Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppOrderLink('Hello Cafe Bahria, I would like to reserve a table for a family gathering.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all"
              >
                <span>Reserve on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Café Interior Visual */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F2E8DF]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
              alt="Cafe Bahria Interior"
              className="w-full h-[400px] sm:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E08]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A373] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bahria Town, Karachi</span>
              </div>
              <h4 className="text-lg font-bold font-serif text-[#FAF7F2]">
                Our Info & Ambient Seating
              </h4>
              <p className="text-xs text-[#E8DCCF] mt-1">
                Spacious seating designed for quiet work sessions, intimate coffee dates, and grand family celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Cafe Bahria */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8C5D35] font-bold">
              Our Core Commitments
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2C1810] mt-1"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The 4 Standards We Live By
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#E8DCCF] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] text-[#8C5D35] flex items-center justify-center">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] font-serif">
                Specialty Roasted Beans
              </h3>
              <p className="text-xs sm:text-sm text-[#735A4C] leading-relaxed">
                We select premium single-origin Arabica beans roasted with precision, unlocking deep notes of caramel, dark cocoa, and nutty nuances in every cup.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8DCCF] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] text-[#8C5D35] flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] font-serif">
                Fresh & Halal Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#735A4C] leading-relaxed">
                From our prime Angus beef cuts and fresh chicken breast to artisanal pizza mozzarella and garden vegetables, no corners are ever cut.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8DCCF] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] text-[#8C5D35] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] font-serif">
                Welcoming Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-[#735A4C] leading-relaxed">
                Our floor team and barista crew treat every guest like family, ensuring courteous attention, personalized recommendations, and genuine warmth.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8DCCF] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4ECE4] text-[#8C5D35] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] font-serif">
                Late Night Hangouts
              </h3>
              <p className="text-xs sm:text-sm text-[#735A4C] leading-relaxed">
                Bahria Town comes alive at night. We keep our doors open till 1:00 AM on weekdays and 2:00 AM on weekends for your late cravings.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Hospitality Card */}
        <div className="bg-[#24140D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold block mb-2">
                Our Location
              </span>
              <h4 className="text-xl font-bold font-serif mb-2">{CAFE_INFO.name}</h4>
              <p className="text-sm text-[#D1BFAE] leading-relaxed">
                {CAFE_INFO.address}
              </p>
              <p className="text-xs text-[#C48F56] mt-2">
                {CAFE_INFO.landmark}
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold block mb-2">
                Direct Contact & Orders
              </span>
              <div className="space-y-3">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="block font-mono text-xl font-bold text-white hover:text-[#D4A373]"
                >
                  {CAFE_INFO.phone}
                </a>
                <a
                  href={getWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow hover:brightness-105"
                >
                  <span>Chat on WhatsApp (0309-9911227)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
