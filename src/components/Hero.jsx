import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-obsidian flex items-center justify-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          src="/video/hero-video.mp4"
          className="w-full h-full object-cover"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-transparent to-obsidian/90"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Center Text Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-gold text-xs md:text-sm uppercase tracking-[0.3em] font-body mb-6 drop-shadow-lg"
        >
          Bespoke Fine Jewelry
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-cream leading-[0.9] mb-8 drop-shadow-2xl"
        >
          <span className="block mb-2">Crafted</span>
          <span className="block font-light italic">for You.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-cream/80 text-xs md:text-sm uppercase tracking-widest font-body max-w-lg mb-12 leading-loose drop-shadow-lg"
        >
          Masterpieces designed from imagination. Brought to reality with 
          uncompromising precision and timeless elegance.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-gold flex flex-col items-center drop-shadow-lg"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-body text-cream">Discover</span>
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
