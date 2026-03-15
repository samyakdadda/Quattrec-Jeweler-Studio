import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/slide-01.jpg', alt: 'Bespoke Diamond Ring', height: 'h-96' },
  { src: '/images/slide-02.jpg', alt: 'Gold Cuff Links', height: 'h-64' },
  { src: '/images/slide-03.jpg', alt: 'Platinum Necklace', height: 'h-80' },
  // Re-using the images to pad out the gallery for visual effect
  { src: '/images/slide-03.jpg', alt: 'Diamond Earrings', height: 'h-64' },
  { src: '/images/slide-01.jpg', alt: 'Custom Bracelet', height: 'h-80' },
  { src: '/images/slide-02.jpg', alt: 'Engagement Ring', height: 'h-96' },
];

const Gallery = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.3em] text-xs font-body mb-4 block">
          Portfolio
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-gradient-gold font-display mb-6">Masterpieces</h1>
        <p className="text-cream/70 font-body max-w-2xl mx-auto leading-relaxed">
          Explore a curated selection of our finest bespoke creations. Each piece tells a unique story of craftsmanship, passion, and unparalleled elegance.
        </p>
      </div>

      {/* Masonry Grid Simulation using CSS columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative w-full overflow-hidden  group break-inside-avoid shadow-xl shadow-black/40 ${img.height}`}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span className="text-gold text-xs uppercase tracking-widest font-body mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 delay-100">
                Bespoke Selection
              </span>
              <p className="text-cream text-xl font-display transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 delay-200">
                {img.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <button className="px-8 py-4 border border-gold/50 text-gold font-body uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-colors duration-300">
          Load More Collection
        </button>
      </div>

    </div>
  );
};

export default Gallery;
