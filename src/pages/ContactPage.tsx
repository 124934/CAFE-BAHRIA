import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Food Order / Delivery');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `*☕ NEW INQUIRY - CAFE BAHRIA*\n`;
    text += `*Location:* Bahria Town, Karachi\n`;
    text += `--------------------------------\n`;
    text += `*Name:* ${name.trim() || 'Valued Guest'}\n`;
    text += `*Phone / Contact:* ${phone.trim() || 'Not specified'}\n`;
    text += `*Inquiry Type:* ${inquiryType}\n`;
    text += `--------------------------------\n`;
    text += `*Message:*\n${message.trim() || 'I would like to inquire about Cafe Bahria.'}\n`;
    text += `--------------------------------\n`;
    text += `Sent from Cafe Bahria Website.`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${CAFE_INFO.whatsappNumberOnly}?text=${encoded}`;

    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#8C5D35] font-bold block mb-2">
            Get In Touch
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C1810] tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Contact Cafe Bahria
          </h1>
          <p className="text-base text-[#6E5448] max-w-xl mx-auto">
            Located in Bahria Town, Karachi. We welcome your queries, table reservations, catering requests, and WhatsApp food orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DCCF] shadow-lg space-y-6">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#2C1810] mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Send Us a Direct Message
              </h2>
              <p className="text-sm text-[#735A4C]">
                Fill out the form below. When you click <strong className="text-[#8C5D35]">&quot;Send on WhatsApp&quot;</strong>, your message will be formatted and sent directly to our customer care team at <strong className="font-mono text-[#2C1810]">03099911227</strong>.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">WhatsApp opened successfully!</strong>
                  Your message has been transferred to WhatsApp. If the chat did not open automatically, check your browser pop-up blocker or click the WhatsApp button directly.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-[#503629] uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D8C7B5] text-sm text-[#2C1810] focus:outline-none focus:border-[#8C5D35] focus:bg-white transition-all placeholder-[#A38A7A]"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-xs font-bold text-[#503629] uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0300 1234567"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D8C7B5] text-sm text-[#2C1810] focus:outline-none focus:border-[#8C5D35] focus:bg-white transition-all placeholder-[#A38A7A]"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs font-bold text-[#503629] uppercase tracking-wider mb-1.5">
                  Inquiry Type
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D8C7B5] text-sm text-[#2C1810] focus:outline-none focus:border-[#8C5D35] focus:bg-white transition-all"
                >
                  <option value="Food Order / Delivery">Food Order / Delivery</option>
                  <option value="Table Reservation">Table Reservation</option>
                  <option value="Private Event / Birthday Party">Private Event / Birthday Party</option>
                  <option value="Menu & Price Inquiry">Menu & Price Inquiry</option>
                  <option value="Customer Feedback / Suggestion">Customer Feedback / Suggestion</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-bold text-[#503629] uppercase tracking-wider mb-1.5">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your order details, table time, or any question here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D8C7B5] text-sm text-[#2C1810] focus:outline-none focus:border-[#8C5D35] focus:bg-white transition-all placeholder-[#A38A7A]"
                />
              </div>

              {/* WhatsApp Submission Button */}
              <button
                id="contact-form-whatsapp-btn"
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-green-900/30 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.815 3.179 0 5.767-2.587 5.768-5.766.002-3.181-2.585-5.768-5.768-5.769zm3.392 8.235c-.145.407-.745.748-1.026.793-.274.043-.629.076-1.024-.051-.25-.081-.577-.197-1.002-.38-1.785-.774-2.946-2.584-3.036-2.704-.089-.121-.734-.975-.734-1.859s.463-1.321.627-1.487c.164-.165.358-.206.478-.206.12 0 .239.002.343.007.108.005.253-.041.396.302.146.353.498 1.218.541 1.307.044.089.074.193.015.313-.059.12-.089.193-.178.297-.089.105-.187.234-.268.314-.09.089-.184.186-.079.366.105.18.468.772.999 1.246.687.612 1.266.802 1.446.892.179.089.284.075.389-.045.105-.119.448-.521.567-.7.12-.179.239-.149.398-.089.159.059 1.009.475 1.183.562.173.088.289.133.332.207.043.074.043.431-.102.838z"/>
                </svg>
                <span>Send on WhatsApp (+923099911227)</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[#735A4C]">
                <Clock className="w-3.5 h-3.5 text-[#8C5D35]" />
                <span>Our team typically replies in under 2 minutes on WhatsApp</span>
              </div>
            </form>
          </div>

          {/* Right Column: Business Contact & Location Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-[#24140D] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4A373] font-bold block mb-1">
                  Official Business Details
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#FAF7F2]">{CAFE_INFO.name}</h3>
                <p className="text-xs text-[#D1BFAE] mt-1">
                  Bahria Town, Karachi, Pakistan
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#D4A373] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#D4A373] font-semibold block">Address</span>
                    <p className="text-[#FAF7F2] leading-relaxed">
                      {CAFE_INFO.address}
                    </p>
                    <span className="text-xs text-[#A89482] block mt-0.5">
                      {CAFE_INFO.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#25D366] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#D4A373] font-semibold block">Phone & WhatsApp</span>
                    <a
                      href={`tel:${CAFE_INFO.phone}`}
                      className="text-lg font-bold font-mono text-white hover:text-[#D4A373] block"
                    >
                      {CAFE_INFO.phone}
                    </a>
                    <span className="text-xs text-[#A89482]">
                      International: {CAFE_INFO.whatsappIntl}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white/10 text-[#D4A373] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#D4A373] font-semibold block">Operating Hours</span>
                    <p className="text-white font-mono text-xs">
                      Mon – Thu: {CAFE_INFO.timings.weekdays}
                    </p>
                    <p className="text-white font-mono text-xs mt-0.5">
                      Fri – Sun: {CAFE_INFO.timings.weekends}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CAFE_INFO.whatsappNumberOnly}?text=${encodeURIComponent('Hello Cafe Bahria, I would like to visit or order.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow"
                >
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Interactive Location / Map Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8DCCF] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#8C5D35]" />
                  <h4 className="font-bold text-base text-[#2C1810] font-serif">
                    Getting to Cafe Bahria
                  </h4>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#F2E8DF] text-[#8C5D35] font-semibold">
                  Precinct 1
                </span>
              </div>

              {/* Map Illustration / Container */}
              <div className="relative rounded-2xl overflow-hidden h-48 bg-[#EAE0D5] border border-[#D8C7B5] flex items-center justify-center text-center p-4">
                {/* Visual map graphic backdrop */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8C5D35_2px,transparent_2px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#8C5D35] text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-sm text-[#2C1810]">
                    Bahria Town Karachi Hub
                  </h5>
                  <p className="text-xs text-[#735A4C] max-w-xs">
                    Located on Main Commercial Boulevard, easily accessible from Super Highway Entrance & Precinct 1 roundabout.
                  </p>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between">
                <span className="text-xs text-[#735A4C]">Valet & Free Parking available</span>
                <a
                  href={`https://maps.google.com/?q=Bahria+Town+Karachi+Pakistan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#8C5D35] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
