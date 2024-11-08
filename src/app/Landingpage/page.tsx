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
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-b from-black via-purple-950 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-float"
            style={getRandomPosition()}
          >
            <Star className="w-1 h-1 md:w-2 md:h-2 text-yellow-200/20" />
          </div>
        ))}
        
        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute animate-float-heart"
            style={getRandomPosition()}
          >
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-purple-400/20" />
          </div>
        ))}

        {/* Glowing Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse-slow bg-gradient-radial from-yellow-400/10 to-transparent"
            style={{
              ...getRandomPosition(),
              width: '80px',
              height: '80px'
            }}
          />
        ))}
      </div>

      {/* Graduate Portrait Background with Parallax */}
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none transform"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      >
        <img
          src="/PHOTO-2024-07-19-21-38-47.jpg"
          alt="Graduate Portrait"
          className="w-full h-full object-cover opacity-30 blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-purple-950/80 to-black/90" />
      </div>

      {/* Main Content - Scrollable Container */}
      <div className="absolute inset-0 overflow-auto py-8 px-4">
        <div className="min-h-full w-full flex items-center justify-center">
          <div 
            className={`w-full max-w-7xl transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative backdrop-blur-md bg-black/70 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl w-full border border-yellow-500/30">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-transparent transform -rotate-45" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500/20 to-transparent transform rotate-45" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-500/20 to-transparent transform rotate-45" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-yellow-500/20 to-transparent transform -rotate-45" />

              <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 relative">
                {/* Top Row: Portrait and Title */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-purple-500/30 to-yellow-500/30 rounded-full blur group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500/30">
                      <img
                        src="/PHOTO-2024-07-19-21-38-47.jpg"
                        alt="Graduate Portrait"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>

                  <div className="flex-1 px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-purple-300 to-yellow-200 tracking-widest animate-shimmer">
                      GRADUATION
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-yellow-50/90 tracking-wider flex items-center justify-center gap-3 mt-3">
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-spin-slow" />
                      CELEBRATION
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-spin-slow" />
                    </h2>
                  </div>

                  <div className="hidden sm:flex w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 items-center justify-center">
                    <GraduationCap className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-400 animate-float-cap" />
                  </div>
                </div>

                <div className="relative inline-block group">
                  <p className="text-lg sm:text-xl md:text-2xl text-yellow-50/80 tracking-wide mb-3">
                    JOIN US AS WE CELEBRATE
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-yellow-200 to-purple-300 tracking-wide group-hover:bg-gradient-to-l transition-all duration-500">
                    Lorraine Sine Kabibi
                  </h3>
                </div>

                {/* Details Grid with Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-6">
                  <div className="space-y-4 sm:space-y-6 text-yellow-50/80 tracking-wider">
                    <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                      <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                      <span className="text-lg sm:text-xl md:text-2xl">SUNDAY, NOVEMBER 10TH, 2024</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                      <span className="text-lg sm:text-xl md:text-2xl">3:00 PM</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                      <span className="text-lg sm:text-xl md:text-2xl">0788842520 / 0788574300 / 0781199716</span>
                    </div>
                  </div>

                  {/* Map Container */}
                  <div className="relative group bg-black/30 rounded-lg p-4 sm:p-6 md:p-8 border border-yellow-500/30 shadow-lg overflow-hidden hover:scale-105 transition-transform">
                    <img
                      src="/location.png" // Replace this with the correct path or URL to the map image
                      alt="Map Location"
                      className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-md border border-yellow-200/20"
                    />
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400 animate-bounce mx-auto mt-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full text-center py-4 text-yellow-50/60 text-xs sm:text-sm">
        © 2024 Lorraine Sine Kabibi. All Rights Reserved.
      </div>
    </div>
  );
};

export default GraduationInvitation;
