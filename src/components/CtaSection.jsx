import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[50vh] md:h-[60vh]">
      {/* Left CTA - Gold */}
      <Link 
        to="/custom-design"
        className="relative flex-1 group overflow-hidden flex flex-col items-center justify-center text-obsidian bg-gradient-to-br from-[#d4a843] via-[#9d770f] to-[#b8860b]"
      >
        {/* Shimmer sweep effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
          <span className="text-[10px] md:text-xs font-body uppercase tracking-[0.3em] font-medium mb-3 opacity-80">
            Create Your Own
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
            Design Your Piece
          </h2>
          <div className="flex items-center gap-2 text-sm font-body uppercase tracking-wider font-semibold">
            <span>Begin Journey</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>

      {/* Right CTA - Rose Gold */}
      <Link 
        to="/gallery"
        className="relative flex-1 group overflow-hidden flex flex-col items-center justify-center text-obsidian bg-gradient-to-br from-[#b76e79] via-[#e8a0a8] to-[#c4777f]"
      >
        {/* Shimmer sweep effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-2">
          <span className="text-[10px] md:text-xs font-body uppercase tracking-[0.3em] font-medium mb-3 opacity-80">
            Explore Mastery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-4">
            View Collection
          </h2>
          <div className="flex items-center gap-2 text-sm font-body uppercase tracking-wider font-semibold">
            <span>Discover More</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default CtaSection;
