import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Heart } from 'lucide-react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { CAFE_INFO, getWhatsAppOrderLink } from '../data/cafeData';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C0F0A] text-[#E8DCCF] border-t border-[#3D2317] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle gold accent light at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C48F56] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="cream" />
            <p className="text-sm text-[#D1BFAE] leading-relaxed pt-2">
              Cafe Bahria is Bahria Town Karachi&apos;s premier destination for artisanal espresso, gourmet smash burgers, sizzling ribeye steaks, and wood-fired oven delicacies.
            </p>
            <div className="pt-2">
              <a
                id="footer-wa-link"
                href={getWhatsAppOrderLink('Hello Cafe Bahria, I would like to place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-bold shadow hover:brightness-110 transition-all"
              >
                <span>WhatsApp: {CAFE_INFO.phone}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-[#C48F56] pl-2.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D1BFAE]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs text-[#C48F56]">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs text-[#C48F56]">›</span>
                  <span>Main Menu (8 Categories)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs text-[#C48F56]">›</span>
                  <span>About Our Story & Craft</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('gallery');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs text-[#C48F56]">›</span>
                  <span>Photo & Video Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs text-[#C48F56]">›</span>
                  <span>Contact Us & Directions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Specialties */}
          <div>
            <h4
              className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-[#C48F56] pl-2.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Popular Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D1BFAE]">
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Spanish Latte & Artisan Coffee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Gourmet Angus Smash Burger
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Prime Sizzling Ribeye Steak
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Bahria Tikka Royale Pizza
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Warm Belgian Molten Lava Cake
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4
              className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-[#C48F56] pl-2.5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Visit & Contact
            </h4>
            <div className="space-y-3 text-sm text-[#D1BFAE]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-white font-mono">
                  {CAFE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A373] shrink-0" />
                <span>{CAFE_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89482]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Cafe Bahria. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Bahria Town, Karachi, Pakistan</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
