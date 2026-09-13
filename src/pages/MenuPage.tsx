import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, ShoppingBag, Sparkles, Send, Clock } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS, CAFE_INFO, getWhatsAppOrderLink } from '../data/cafeData';

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenCart: () => void;
  cartCount: number;
}

const CATEGORIES: MenuCategory[] = [
  'All',
  'Coffee & Hot Beverages',
  'Cold Beverages',
  'Breakfast',
  'Burgers & Sandwiches',
  'Pizza',
  'Pasta',
  'Steaks & Fast Food',
  'Desserts',
];

export const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart, onOpenCart, cartCount }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({});

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.urduName && item.urduName.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8DF] border border-[#D8C7B5] text-[#8C5D35] text-xs uppercase tracking-widest font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C48F56]" />
            <span>Artisanal Kitchen & Espresso Bar</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1810] tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Cafe Bahria Menu
          </h1>
          <p className="text-base text-[#6E5448] max-w-xl mx-auto">
            From single-origin roasts to prime sizzling steaks and gourmet smash burgers, every dish is made fresh to order.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C5D35]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, burgers, steaks, pizzas..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#D8C7B5] text-sm text-[#2C1810] focus:outline-none focus:border-[#8C5D35] shadow-xs placeholder-[#9E8B7E]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C5D35] hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Horizontal Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-[#45281C] text-white shadow-md'
                      : 'bg-[#F2E8DF] text-[#503629] hover:bg-[#E8DCCF] border border-[#E2D4C5]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E8DCCF] p-8 max-w-lg mx-auto">
            <p className="text-lg font-bold text-[#2C1810] mb-2 font-serif">No menu items found</p>
            <p className="text-sm text-[#735A4C] mb-4">
              We couldn&apos;t find anything matching &quot;{searchQuery}&quot;. Try selecting another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-5 py-2 rounded-xl bg-[#8C5D35] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const isAdded = addedItemIds[item.id];
              const waText = `Hello Cafe Bahria, I would like to order: ${item.name} (Rs. ${item.price}).`;

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E8DCCF] shadow-sm hover:shadow-xl hover:border-[#C48F56] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Item Image */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#2C1810]">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Badge if present */}
                      {item.badge && (
                        <div className="absolute top-3 left-3 bg-[#45281C]/90 backdrop-blur-md text-[#FAF7F2] px-2.5 py-1 rounded-md text-[11px] font-bold border border-[#C48F56]/40 uppercase tracking-wider">
                          {item.badge}
                        </div>
                      )}

                      {/* Prep time */}
                      {item.prepTime && (
                        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-[#D4A373]" />
                          <span>{item.prepTime}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="font-bold text-lg text-[#2C1810] font-serif leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-base font-bold text-[#8C5D35] shrink-0 font-mono">
                          Rs. {item.price.toLocaleString()}
                        </span>
                      </div>

                      {item.urduName && (
                        <p className="text-xs text-[#8C5D35] font-medium mb-2 font-serif">
                          {item.urduName}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-[#735A4C] leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 flex items-center gap-2">
                    <button
                      id={`btn-add-${item.id}`}
                      onClick={() => handleAddWithFeedback(item)}
                      className={`flex-1 py-2.5 px-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
                        isAdded
                          ? 'bg-green-600 text-white'
                          : 'bg-[#F2E8DF] hover:bg-[#E8DCCF] text-[#45281C]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order Bag</span>
                        </>
                      )}
                    </button>

                    <a
                      id={`btn-wa-order-${item.id}`}
                      href={getWhatsAppOrderLink(waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Order instantly on WhatsApp"
                      className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all shrink-0"
                    >
                      <Send className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating Order Tray Banner on Menu Page */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 left-4 right-4 max-w-xl mx-auto z-40 animate-slideUp">
            <div className="bg-[#24140D] text-white p-4 rounded-2xl shadow-2xl border border-[#C48F56] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8C5D35] flex items-center justify-center font-bold text-white">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#D4A373] font-semibold block">
                    {cartCount} {cartCount === 1 ? 'item' : 'items'} in your Order Bag
                  </span>
                  <span className="text-sm font-bold text-[#FAF7F2]">
                    Ready to confirm your order
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenCart}
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm shadow flex items-center gap-1.5 transition-all"
              >
                <span>View Bag & WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
