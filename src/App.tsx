/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute, MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { CAFE_INFO, getWhatsAppOrderLink } from './data/cafeData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C1810]">
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'menu' && (
          <MenuPage
            onAddToCart={handleAddToCart}
            onOpenCart={() => setIsCartOpen(true)}
            cartCount={totalCartCount}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Order Bag Slide-over Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Persistent Floating WhatsApp Contact Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center group">
        <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-xl bg-[#24140D] text-white text-xs font-semibold shadow-lg border border-[#C48F56]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Order on WhatsApp: {CAFE_INFO.phone}
        </span>

        <a
          id="floating-wa-button"
          href={getWhatsAppOrderLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 pointer-events-none" />

          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.815 3.179 0 5.767-2.587 5.768-5.766.002-3.181-2.585-5.768-5.768-5.769zm3.392 8.235c-.145.407-.745.748-1.026.793-.274.043-.629.076-1.024-.051-.25-.081-.577-.197-1.002-.38-1.785-.774-2.946-2.584-3.036-2.704-.089-.121-.734-.975-.734-1.859s.463-1.321.627-1.487c.164-.165.358-.206.478-.206.12 0 .239.002.343.007.108.005.253-.041.396.302.146.353.498 1.218.541 1.307.044.089.074.193.015.313-.059.12-.089.193-.178.297-.089.105-.187.234-.268.314-.09.089-.184.186-.079.366.105.18.468.772.999 1.246.687.612 1.266.802 1.446.892.179.089.284.075.389-.045.105-.119.448-.521.567-.7.12-.179.239-.149.398-.089.159.059 1.009.475 1.183.562.173.088.289.133.332.207.043.074.043.431-.102.838z" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
