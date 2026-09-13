import React, { useState, useRef } from 'react';
import { Utensils, Coffee, Award, Clock, Heart, MessageCircle, ArrowRight, Star, ShieldCheck, MapPin, Play, Pause, Volume2, VolumeX, Maximize2, Upload, Film } from 'lucide-react';
import { PageRoute } from '../types';
import { TopSlider } from '../components/TopSlider';
import { MediaShowcase } from '../components/MediaShowcase';
import { CAFE_INFO, TESTIMONIALS, getWhatsAppOrderLink } from '../data/cafeData';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [videoSrc, setVideoSrc] = useState('/cafe_bahria_video.mp4');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showCinema, setShowCinema] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback with muted if browser policy blocks unmuted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play();
          setIsPlaying(true);
        }
      });
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* 1. TOP AUTOMATIC 2-SECOND IMAGE SLIDER */}
      <TopSlider onNavigate={onNavigate} />

      {/* 2. CORE MEDIA SHOWCASE: 3 IMAGES & 1 VIDEO WITH EXACT LABELS */}
      <MediaShowcase onNavigate={onNavigate} />

      {/* 3. WHY CHOOSE CAFE BAHRIA */}
      <section className="py-16 md:py-20 bg-[#F4ECE4] border-y border-[#E2D4C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#8C5D35] font-bold">
              Uncompromising Quality in Bahria Town
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2C1810] mt-2 mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Why Guests Love Cafe Bahria
            </h2>
            <p className="text-base text-[#6E5448]">
              We bring the finest international culinary standards, ethically sourced beans, and warm Pakistani hospitality together under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#D8C7B5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#F0E4D7] text-[#8C5D35] flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] mb-2 font-serif">
                Artisanal Brews
              </h3>
              <p className="text-sm text-[#735A4C] leading-relaxed">
                Specialty beans roasted to golden perfection, extracted by passionate certified baristas for silky, rich espresso and Spanish lattes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#D8C7B5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#F0E4D7] text-[#8C5D35] flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] mb-2 font-serif">
                Gourmet Cuisine & Steaks
              </h3>
              <p className="text-sm text-[#735A4C] leading-relaxed">
                Sizzling char-grilled ribeye cuts, hand-smashed Angus burgers, and stone-baked pizzas made with 100% Halal prime ingredients.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#D8C7B5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#F0E4D7] text-[#8C5D35] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] mb-2 font-serif">
                Family & Friends Haven
              </h3>
              <p className="text-sm text-[#735A4C] leading-relaxed">
                A calm, air-conditioned retreat in Bahria Town Karachi. Perfect for working remotely, family dinners, or catching up with friends.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#D8C7B5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#F0E4D7] text-[#8C5D35] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#2C1810] mb-2 font-serif">
                Instant WhatsApp Service
              </h3>
              <p className="text-sm text-[#735A4C] leading-relaxed">
                Skip long apps and queues. Order directly on WhatsApp at <strong className="text-[#8C5D35]">03099911227</strong> with real-time updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ATMOSPHERE & EXPERIENCE SECTION */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E8DCCF] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8DF] text-[#8C5D35] text-xs font-bold w-max">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bahria Town, Karachi, Pakistan</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2C1810] leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                A Sanctuary for Coffee Connoisseurs & Food Lovers
              </h2>

              <p className="text-[#6E5448] text-base leading-relaxed">
                Nestled in the modern landscape of Bahria Town Karachi, Cafe Bahria was conceived to offer an elevated dining escape. From our morning roasted aromas to late-night sizzling steaks, every moment is crafted to bring warmth, comfort, and culinary joy.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-[#C48F56] pl-3">
                  <span className="block text-2xl font-bold text-[#2C1810] font-serif">100%</span>
                  <span className="text-xs text-[#735A4C]">Fresh Halal Ingredients</span>
                </div>
                <div className="border-l-2 border-[#C48F56] pl-3">
                  <span className="block text-2xl font-bold text-[#2C1810] font-serif">Late Night</span>
                  <span className="text-xs text-[#735A4C]">Open until 01:00 AM / 02:00 AM</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-[#45281C] hover:bg-[#5C3626] text-white font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <span>Learn Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-[#F2E8DF] hover:bg-[#E8DCCF] text-[#45281C] font-semibold text-sm transition-all"
                >
                  <span>Directions & Timings</span>
                </button>
              </div>
            </div>

            {/* Café Interior Visual & Video Player */}
            <div className="relative min-h-[360px] lg:min-h-full bg-[#1C0F0A] group overflow-hidden flex flex-col justify-center">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                alt="Cafe Bahria Interior Ambience"
                className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-500 ${
                  isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-40'
                }`}
              />

              {/* Video Element */}
              <video
                ref={videoRef}
                src={videoSrc}
                playsInline
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover relative z-10"
              />

              {/* Video Overlay Info & Actions when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-black/30 flex flex-col justify-between p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8C5D35]/90 text-white text-xs font-bold backdrop-blur-sm">
                      <Film className="w-3.5 h-3.5" />
                      <span>Official Launch Video</span>
                    </span>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 hover:bg-black/80 text-white/90 text-xs font-medium backdrop-blur-sm border border-white/20 transition-colors"
                      title="Upload your MP4 video file directly"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Video</span>
                    </button>
                  </div>

                  <div className="text-center my-auto">
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C48F56] hover:bg-[#D4A373] text-[#2C1810] shadow-2xl flex items-center justify-center mx-auto transition-transform hover:scale-105 active:scale-95 group/btn"
                      aria-label="Play Cafe Bahria Video"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                    </button>
                    <p className="mt-3 text-sm font-semibold text-white tracking-wide">
                      ویڈیو دیکھیں (آواز کے ساتھ)
                    </p>
                    <p className="text-xs text-[#EAD8C7]/90 mt-1">
                      Play Official Video with Urdu Voiceover
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-[#EAD8C7]">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleSound}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        title={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C48F56]" />}
                      </button>
                      <span className="text-[11px] font-mono">0309-9911227</span>
                    </div>
                    <span className="text-[11px] text-white/70">Bahria Town Karachi</span>
                  </div>
                </div>
              )}

              {/* Hidden File Input for Video Upload */}
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleVideoUpload}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUEST EXPERIENCES / TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-[#F4ECE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8C5D35] font-bold">
              Community Love
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2C1810] mt-2 mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Words from Bahria Town Foodies
            </h2>
            <p className="text-sm text-[#735A4C]">
              Real feedback from local residents, coffee enthusiasts, and families who dine with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E2D4C5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C48F56] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#503629] leading-relaxed italic mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2E8DF] flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#2C1810] font-serif">{t.name}</h4>
                    <span className="text-xs text-[#8C5D35]">{t.role}</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#8C5D35] opacity-70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM ACTION CALLOUT */}
      <section className="py-14 bg-[#FAF7F2] border-t border-[#E8DCCF]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1810]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Join us at Cafe Bahria today
          </h2>
          <p className="text-base text-[#6E5448] max-w-xl mx-auto">
            Experience why Bahria Town chooses us for good food, great coffee, and better moments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('menu')}
              className="px-7 py-3.5 rounded-xl bg-[#45281C] hover:bg-[#5C3626] text-white font-bold text-sm shadow-md transition-all"
            >
              Explore Full Menu
            </button>
            <a
              href={getWhatsAppOrderLink('Hello Cafe Bahria, I would like to reserve a table / place an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all"
            >
              <span>WhatsApp Us ({CAFE_INFO.phone})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
