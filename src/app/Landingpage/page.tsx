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
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-float"
            style={getRandomPosition()}
          >
            <Star className="w-2 h-2 md:w-3 md:h-3 text-amber-400/30" />
          </div>
        ))}
        
        {[...Array(8)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute animate-float-heart"
            style={getRandomPosition()}
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-amber-400/30" />
          </div>
        ))}

        {[...Array(6)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse-slow bg-gradient-radial from-amber-400/10 to-transparent"
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
          src="/IMG_6733.jpg"
          alt="Graduate Portrait"
          className="w-full h-full object-cover opacity-10 blur-[2px] scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 overflow-auto py-8 px-4">
        <div className="min-h-full w-full flex items-center justify-center">
          <div 
            className={`w-full max-w-4xl transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative backdrop-blur-lg bg-black/90 rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl w-full border border-amber-400/30">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-transparent transform -rotate-45" />
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent transform rotate-45" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-400/20 to-transparent transform rotate-45" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-amber-400/20 to-transparent transform -rotate-45" />

              <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 relative">
                {/* Portrait and Title Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-amber-400/30 rounded-full blur group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-amber-400/30">
                      <img
                        src="/aacfd607-adde-4674-9ee9-04dafc3888c1.jpg"
                        alt="Graduate Portrait"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="flex-1 px-4">
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-400 tracking-widest animate-shimmer font-cormorant">
                      GRADUATION
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-cormorant text-white tracking-wider flex items-center justify-center gap-3 mt-3">
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 animate-spin-slow" />
                      CELEBRATION
                      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 animate-spin-slow" />
                    </h2>
                  </div>

                  <div className="hidden sm:flex w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 items-center justify-center">
                    <GraduationCap className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-amber-400 animate-float-cap" />
                  </div>
                </div>

                <div className="relative inline-block group">
                  <p className="text-lg sm:text-xl md:text-2xl text-white tracking-wide mb-3 font-open-sans">
                    JOIN US AS WE CELEBRATE
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-cormorant text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-400 tracking-wide">
                    Lorraine Sine Kabibi
                  </h3>
                </div>

                {/* Event Details */}
                <div className="space-y-4 text-white tracking-wider font-open-sans">
                  <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                    <span className="text-lg sm:text-xl md:text-2xl">November 10, 2024</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                    <span className="text-lg sm:text-xl md:text-2xl">3:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                    <span className="text-lg sm:text-xl md:text-2xl">0788842520 || 0788574300 || 0781199716</span>
                  </div>
                </div>

                {/* Location Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                    <span className="text-lg sm:text-xl md:text-2xl text-white">Venue Location</span>
                  </div>
                  
                  <div className="relative w-full aspect-[1.5] max-h-[500px] group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src="/location.png"
                      alt="Location Map"
                      className="w-full h-full object-contain rounded-xl border-2 border-amber-400/30 shadow-xl bg-black/20 backdrop-blur-sm"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

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