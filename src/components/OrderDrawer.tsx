import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { CAFE_INFO } from '../data/cafeData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway' | 'dinein'>('delivery');
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 150 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*☕ NEW ORDER - CAFE BAHRIA*\n`;
    message += `*Bahria Town, Karachi*\n`;
    message += `--------------------------------\n`;
    message += `*Customer Name:* ${customerName.trim() || 'Valued Customer'}\n`;
    message += `*Order Type:* ${orderType.toUpperCase()}\n`;
    if (orderType === 'delivery') {
      message += `*Delivery Location:* ${customerAddress.trim() || 'Bahria Town, Karachi'}\n`;
    }
    if (specialInstructions.trim()) {
      message += `*Notes:* ${specialInstructions.trim()}\n`;
    }
    message += `--------------------------------\n`;
    message += `*ITEMS ORDERED:*\n`;

    cart.forEach((cartItem, idx) => {
      message += `${idx + 1}. ${cartItem.item.name} x${cartItem.quantity} - Rs. ${(cartItem.item.price * cartItem.quantity).toLocaleString()}\n`;
    });

    message += `--------------------------------\n`;
    message += `*Subtotal:* Rs. ${subtotal.toLocaleString()}\n`;
    if (deliveryFee > 0) {
      message += `*Delivery in Bahria Town:* Rs. ${deliveryFee}\n`;
    }
    message += `*Grand Total:* Rs. ${grandTotal.toLocaleString()}\n`;
    message += `--------------------------------\n`;
    message += `Please confirm my order and share the estimated preparation time. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CAFE_INFO.whatsappNumberOnly}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2C1810] shadow-2xl flex flex-col border-l border-[#E8DCCF]">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#E8DCCF] bg-[#FFFFFF] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#F2E8DF] text-[#8C5D35]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#2C1810]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Your Order Bag
                </h3>
                <span className="text-xs text-[#735A4C]">Direct WhatsApp Kitchen Dispatch</span>
              </div>
            </div>

            <button
              id="close-order-drawer"
              onClick={onClose}
              className="p-2 rounded-xl text-[#735A4C] hover:text-[#2C1810] hover:bg-[#F2E8DF] transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F2E8DF] text-[#8C5D35] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-bold text-lg text-[#2C1810]">Your bag is currently empty</h4>
                <p className="text-sm text-[#735A4C] max-w-xs mx-auto">
                  Explore our artisanal coffees, gourmet burgers, pizzas and steaks to place an order.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-[#E8DCCF]">
                  <span className="text-xs font-bold text-[#8C5D35] uppercase tracking-wider">
                    {cart.length} {cart.length === 1 ? 'Item' : 'Items'} Selected
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-red-700 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="bg-white p-3.5 rounded-xl border border-[#E8DCCF] shadow-sm flex items-center gap-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-sm text-[#2C1810] truncate">{item.name}</h5>
                        <p className="text-xs font-semibold text-[#8C5D35]">
                          Rs. {item.price.toLocaleString()}
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-[#D8C7B5] rounded-lg bg-[#FAF7F2]">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 text-[#503629] hover:bg-[#E8DCCF] rounded-l-lg transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold font-mono text-[#2C1810]">
                              {quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 text-[#503629] hover:bg-[#E8DCCF] rounded-r-lg transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-bold text-[#2C1810] ml-auto">
                            Rs. {(item.price * quantity).toLocaleString()}
                          </span>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#998072] hover:text-red-600 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="pt-4 border-t border-[#E8DCCF] space-y-3">
                  <h5 className="text-xs font-bold text-[#8C5D35] uppercase tracking-wider">
                    Delivery & Customer Details
                  </h5>

                  {/* Order Type Selector */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F2E8DF] rounded-xl text-xs font-semibold text-[#503629]">
                    {(['delivery', 'takeaway', 'dinein'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setOrderType(type)}
                        className={`py-1.5 rounded-lg capitalize transition-all ${
                          orderType === type
                            ? 'bg-white text-[#8C5D35] shadow-xs'
                            : 'hover:text-[#2C1810]'
                        }`}
                      >
                        {type === 'delivery' ? 'Delivery' : type === 'takeaway' ? 'Takeaway' : 'Dine-In'}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#503629] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Bilal Ahmed"
                      className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-[#D8C7B5] focus:outline-none focus:border-[#8C5D35]"
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-xs font-medium text-[#503629] mb-1">
                        Bahria Town Address / Precinct No.
                      </label>
                      <input
                        type="text"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="e.g. Villa 142, Precinct 10, Bahria Town Karachi"
                        className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-[#D8C7B5] focus:outline-none focus:border-[#8C5D35]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#503629] mb-1">
                      Special Cooking Notes
                    </label>
                    <input
                      type="text"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="e.g. Medium rare steak, extra ketchup"
                      className="w-full px-3 py-2 text-sm rounded-lg bg-white border border-[#D8C7B5] focus:outline-none focus:border-[#8C5D35]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer with WhatsApp Action */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E8DCCF] space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#735A4C]">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                {deliveryFee > 0 && (
                  <div className="flex justify-between text-[#735A4C]">
                    <span>Bahria Town Delivery</span>
                    <span>Rs. {deliveryFee}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-[#2C1810] text-base pt-1 border-t border-[#F2E8DF]">
                  <span>Grand Total</span>
                  <span className="text-[#8C5D35]">Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                id="drawer-whatsapp-checkout-btn"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-md hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Send Order to WhatsApp ({CAFE_INFO.phone})</span>
              </button>

              <p className="text-[11px] text-center text-[#735A4C]">
                Opens WhatsApp directly to Cafe Bahria with your itemized bill.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
