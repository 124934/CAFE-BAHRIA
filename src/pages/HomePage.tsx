import React, { useState, useRef } from 'react';
import { Utensils, Coffee, Award, Heart, MessageCircle, ArrowRight, Star, ShieldCheck, MapPin, Play, Pause, Volume2, VolumeX, Maximize2, Upload, Film } from 'lucide-react';
import { PageRoute } from '../types';
import { TopSlider } from '../components/TopSlider';
import { MediaShowcase } from '../components/MediaShowcase';
import { CAFE_INFO, TESTIMONIALS, getWhatsAppOrderLink } from '../data/cafeData';
import atmosphereImg from '../assets/images/regenerated_image_1789284851316.jpg';
import cafeBahriaVideo from '../assets/cafe_bahria_video.mp4';
import hostIntroPoster from '../assets/images/host_bahria_intro_1789283060711.jpg';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [videoSrc, setVideoSrc] = useState(cafeBahriaVideo);
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
                  <span className="block text-2xl font-bold text-[#2C1810] font-serif">Artisan</span>
                  <span className="text-xs text-[#735A4C]">Coffee & Sizzling Cuisine</span>
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
                  <span>Location & Contact</span>
                </button>
              </div>
            </div>

            {/* Café Interior Visual & Hospitality Showcase (Image Only) */}
            <div className="relative min-h-[380px] lg:min-h-full bg-[#1C0F0A] group overflow-hidden flex flex-col justify-end">
              <img
                src={atmosphereImg}
                alt="Cafe Bahria Interior Ambience"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10 p-6 sm:p-8 space-y-2 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C48F56] text-[#2C1810] text-xs font-bold shadow">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Bahria Town Karachi</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  A Welcoming Haven for Food & Coffee
                </h3>
                <p className="text-xs sm:text-sm text-[#EAD8C7]/90 leading-relaxed">
                  Featuring cozy booth seating, warm ambient lighting, and the scent of freshly brewed espresso and sizzling steaks.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#D4A373] font-mono">0309-9911227</span>
                  <a
                    href={getWhatsAppOrderLink('Hello Cafe Bahria, I would like to reserve a table / place an order.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:brightness-105 transition-all shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEDICATED OFFICIAL LAUNCH VIDEO SECTION (باضابطہ تعارفی ویڈیو) */}
      <section id="official-video-section" className="py-16 md:py-24 bg-[#180E09] text-white relative overflow-hidden border-t border-[#3D2317]">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C48F56]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C48F56]/20 border border-[#C48F56]/40 text-[#D4A373] text-xs uppercase tracking-widest font-bold mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Official Video Showcase</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4ECE4] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Watch Cafe Bahria in Action
            </h2>
            <p className="text-base sm:text-lg text-[#D8C7B5] font-normal leading-relaxed mb-1">
              کیا آپ بحریہ ٹاؤن کراچی میں ایک نئے اور شاندار کیفے کا انتظار کر رہے ہیں؟ پیش ہے کیفے بحریہ!
            </p>
            <p className="text-xs sm:text-sm text-[#A89082]">
              Watch our official video tour featuring our hospitality, barista pours, and sizzling menu delights in Bahria Town Karachi.
            </p>
          </div>

          {/* Video Player Box */}
          <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl border-2 border-[#C48F56]/40 group">
            <div className="aspect-video w-full bg-black relative flex items-center justify-center">
              <video
                ref={videoRef}
                src={videoSrc}
                poster={hostIntroPoster}
                playsInline
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain"
              >
                <source src={videoSrc} type="video/mp4" />
                <source src="/cafe_bahria_video.mp4" type="video/mp4" />
                <source src="/video.mp4" type="video/mp4" />
              </video>

              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer p-6 text-center"
                  onClick={togglePlay}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#C48F56] to-[#E5B582] text-[#2C1810] shadow-[0_0_40px_rgba(196,143,86,0.5)] flex items-center justify-center mx-auto transition-transform hover:scale-110 active:scale-95 group/btn"
                    aria-label="Play Cafe Bahria Video"
                  >
                    <Play className="w-9 h-9 sm:w-11 sm:h-11 fill-current translate-x-0.5" />
                  </button>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-white tracking-wide">
                    ویڈیو دیکھیں (مکمل آواز اور اردو آڈیو کے ساتھ)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAD8C7] mt-1.5 max-w-md">
                    Click to experience Cafe Bahria - Good Coffee, Good Food, Great Mood in Bahria Town Karachi.
                  </p>
                </div>
              )}
            </div>

            {/* Video Controls & Info Bar */}
            <div className="bg-[#24140D] border-t border-white/10 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2 rounded-xl bg-[#C48F56] hover:bg-[#D4A373] text-[#2C1810] font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'Pause' : 'Play Video'}</span>
                </button>

                <button
                  onClick={toggleSound}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm flex items-center gap-2 transition-colors border border-white/10"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#C48F56]" />}
                  <span>{isMuted ? 'Unmute (آواز کھولیں)' : 'Mute (خاموش)'}</span>
                </button>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/80 text-xs transition-colors border border-white/10"
                  title="Upload another video"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Video</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={getWhatsAppOrderLink('Hello Cafe Bahria, I watched your video and would like to place an order!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hidden Video File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleVideoUpload}
            />
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
