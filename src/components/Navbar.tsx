import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, PhoneCall, Clock, MapPin } from 'lucide-react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { CAFE_INFO, getWhatsAppOrderLink } from '../data/cafeData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageRoute; label: string; labelUrdu: string }[] = [
    { id: 'home', label: 'Home', labelUrdu: 'ہوم' },
    { id: 'menu', label: 'Menu', labelUrdu: 'مینیو' },
    { id: 'about', label: 'About Us', labelUrdu: 'ہمارے بارے میں' },
    { id: 'gallery', label: 'Gallery', labelUrdu: 'گیلری' },
    { id: 'contact', label: 'Contact Us', labelUrdu: 'رابطہ' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar for Bahria Town Karachi */}
      <div className="bg-[#24140D] text-[#EAD8C7] text-xs py-2 px-4 border-b border-[#3D2317] relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
            <span>Bahria Town Karachi</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <button
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('official-video-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="inline-flex items-center gap-1 text-[#D4A373] hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-full font-medium"
            >
              <span>🎬 Watch Video (ویڈیو دیکھیں)</span>
            </button>
            <a
              href={`tel:${CAFE_INFO.phone}`}
              className="flex items-center gap-1 text-[#EAD8C7] hover:text-[#D4A373] transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#25D366]" />
              <span className="font-semibold font-mono">{CAFE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md border-b border-[#E8DCCF] py-2.5'
            : 'bg-[#FAF7F2] border-b border-[#E8DCCF]/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div onClick={() => handleNavClick('home')} className="focus:outline-none">
              <Logo />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#8C5D35] bg-[#F2E8DF]'
                        : 'text-[#503629] hover:text-[#2C1810] hover:bg-[#F7EFE7]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8C5D35] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons & WhatsApp Button */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Order Bag Button */}
              <button
                id="btn-cart-toggle"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl bg-[#F2E8DF] hover:bg-[#E8DCCF] text-[#45281C] transition-colors focus:outline-none"
                aria-label="View Order Bag"
                title="Your Order Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#8C5D35] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Direct WhatsApp CTA Button */}
              <a
                id="nav-btn-whatsapp"
                href={getWhatsAppOrderLink('Hello Cafe Bahria, I would like to check your menu and place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs md:text-sm shadow-md hover:shadow-green-900/20 hover:brightness-105 transition-all"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.815 3.179 0 5.767-2.587 5.768-5.766.002-3.181-2.585-5.768-5.768-5.769zm3.392 8.235c-.145.407-.745.748-1.026.793-.274.043-.629.076-1.024-.051-.25-.081-.577-.197-1.002-.38-1.785-.774-2.946-2.584-3.036-2.704-.089-.121-.734-.975-.734-1.859s.463-1.321.627-1.487c.164-.165.358-.206.478-.206.12 0 .239.002.343.007.108.005.253-.041.396.302.146.353.498 1.218.541 1.307.044.089.074.193.015.313-.059.12-.089.193-.178.297-.089.105-.187.234-.268.314-.09.089-.184.186-.079.366.105.18.468.772.999 1.246.687.612 1.266.802 1.446.892.179.089.284.075.389-.045.105-.119.448-.521.567-.7.12-.179.239-.149.398-.089.159.059 1.009.475 1.183.562.173.088.289.133.332.207.043.074.043.431-.102.838z"/>
                </svg>
                <span>WhatsApp Order</span>
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                id="btn-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#F2E8DF] text-[#45281C] md:hidden hover:bg-[#E8DCCF] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DCCF] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-[#8C5D35] text-white shadow-sm'
                        : 'text-[#45281C] hover:bg-[#F2E8DF]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`text-xs ${isActive ? 'text-[#FAF7F2]' : 'text-[#8C5D35]'}`}>
                      {link.labelUrdu}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#E8DCCF] flex flex-col gap-2">
              <a
                href={getWhatsAppOrderLink('Hello Cafe Bahria, I want to place an order from my mobile phone.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.815 3.179 0 5.767-2.587 5.768-5.766.002-3.181-2.585-5.768-5.768-5.769zm3.392 8.235c-.145.407-.745.748-1.026.793-.274.043-.629.076-1.024-.051-.25-.081-.577-.197-1.002-.38-1.785-.774-2.946-2.584-3.036-2.704-.089-.121-.734-.975-.734-1.859s.463-1.321.627-1.487c.164-.165.358-.206.478-.206.12 0 .239.002.343.007.108.005.253-.041.396.302.146.353.498 1.218.541 1.307.044.089.074.193.015.313-.059.12-.089.193-.178.297-.089.105-.187.234-.268.314-.09.089-.184.186-.079.366.105.18.468.772.999 1.246.687.612 1.266.802 1.446.892.179.089.284.075.389-.045.105-.119.448-.521.567-.7.12-.179.239-.149.398-.089.159.059 1.009.475 1.183.562.173.088.289.133.332.207.043.074.043.431-.102.838z"/>
                </svg>
                <span>Send WhatsApp to 03099911227</span>
              </a>

              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F2E8DF] text-[#45281C] font-semibold text-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#8C5D35]" />
                <span>Call Directly: {CAFE_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
