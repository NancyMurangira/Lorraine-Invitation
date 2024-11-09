'use client'
import { useState, useEffect } from 'react';
import { GraduationCap, MapPin, Calendar, Clock, Phone, Sparkles, Star, Heart } from 'lucide-react';

const GraduationInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getRandomPosition = () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`
  });

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-[#0A1F2B] via-[#1E3A58] to-[#07192C] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-float"
            style={getRandomPosition()}
          >
            <Star className="w-2 h-2 md:w-3 md:h-3 text-blue-400/40" />
          </div>
        ))}
        
        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute animate-float-heart"
            style={getRandomPosition()}
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-lime-400/40" />
          </div>
        ))}

        {/* Glowing Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse-slow bg-gradient-radial from-purple-500/20 to-transparent"
            style={{
              ...getRandomPosition(),
              width: '100px',
              height: '100px'
            }}
          />
        ))}
      </div>

      {/* Graduate Portrait Background with Parallax */}
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none transform"
        style={{
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`
        }}
      >
        <img
          src="/IMG_6730.jpg"
          alt="Graduate Portrait"
          className="w-full h-full object-cover opacity-30 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Main Content - Scrollable Container */}
      <div className="absolute inset-0 overflow-auto py-8 px-4">
        <div className="min-h-full w-full flex items-center justify-center">
          <div 
            className={`w-full max-w-7xl transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative backdrop-blur-lg bg-teal-950/70 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl w-full border border-lime-500/50">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-transparent transform -rotate-45" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/30 to-transparent transform rotate-45" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/30 to-transparent transform rotate-45" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-purple-500/30 to-transparent transform -rotate-45" />

              <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 relative">
                {/* Top Row: Portrait and Title */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-500/40 via-blue-500/40 to-pink-500/40 rounded-full blur group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-lime-500/40">
                      <img
                        src="/IMG_6732.jpg"
                        alt="Graduate Portrait"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>

                  <div className="flex-1 px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-blue-400 to-pink-300 tracking-widest animate-shimmer">
                      GRADUATION
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-lime-100/90 tracking-wider flex items-center justify-center gap-3 mt-3">
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-lime-300 animate-spin-slow" />
                      CELEBRATION
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-lime-300 animate-spin-slow" />
                    </h2>
                  </div>

                  <div className="hidden sm:flex w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 items-center justify-center">
                    <GraduationCap className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-lime-300 animate-float-cap" />
                  </div>
                </div>

                <div className="relative inline-block group">
                  <p className="text-lg sm:text-xl md:text-2xl text-lime-100/80 tracking-wide mb-3">
                    JOIN US AS WE CELEBRATE
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-lime-300 tracking-wide group-hover:bg-gradient-to-l transition-all duration-500">
                    Lorraine Sine Kabibi
                  </h3>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-6">
                  <div className="space-y-4 sm:space-y-6 text-lime-100/80 tracking-wider">
                    <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                      <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
                      <span className="text-lg sm:text-xl md:text-2xl text-coral-100/80">November 10,2024</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
                      <span className="text-lg sm:text-xl md:text-2xl text-coral-100/80">3:00 PM</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
                      <span className="text-lg sm:text-xl md:text-2xl text-coral-100/80"> 0788842520 || 0788574300 || 0781199716 </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform flex-col sm:flex-row">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
                    <span className="text-lg sm:text-xl md:text-2xl text-coral-100/80">Venue Location</span>
                  </div>
                  
                  {/* Map Image */}
                  <div className="w-full h-60 md:h-80 bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url(/location.png)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduationInvitation;
