import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const processSteps = [
  {
    id: '01',
    tag: 'AI-Powered',
    title: 'Imagination, Visualized.',
    description: 'We harness the power of artificial intelligence to generate initial concepts from your creative vision. Provide us with your ideas, and watch as limitless possibilities unfold before your eyes, setting the foundation for your unique piece.',
    image: '/images/process-ai.png',
  },
  {
    id: '02',
    tag: 'Real-Time Render',
    title: 'Precision in 3D.',
    description: 'Once the concept is selected, our designers meticulously sculpt your jewelry using advanced 3D CAD software. Every facet, prong, and millimeter is perfected digitally, providing you with photorealistic renders for approval.',
    image: '/images/process-render.png',
  },
  {
    id: '03',
    tag: 'Handcrafted',
    title: 'The Master\'s Touch.',
    description: 'The digital becomes physical. Our master jewelers forge your piece using ethically sourced metals and select diamonds. Through hours of painstaking hand-polishing and setting, your masterpiece is born.',
    image: '/images/process-craft.png',
  }
];

const ProcessPanel = ({ step, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Slide image in from right
  const imageX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['100%', '0%', '0%', '-50%']);
  const textX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ['-50%', '0%', '0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative w-full h-[150vh] md:h-[200vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-obsidian">
        
        {/* Mobile Stack / Desktop Left Panel */}
        <motion.div 
          style={{ x: textX, opacity }}
          className="w-full h-[50vh] md:w-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 z-10 order-2 md:order-1 bg-obsidian"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-gold"></div>
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold">{step.tag}</span>
          </div>

          <div className="relative mb-8">
            <span className="absolute -top-16 -left-8 text-8xl md:text-9xl font-display font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(212, 168, 67, 0.1)'}}>
              {step.id}
            </span>
            <div className="w-12 h-[1px] bg-gold mb-6 relative z-10"></div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-cream relative z-10 leading-tight">
              {step.title}
            </h3>
          </div>

          <p className="text-cream/70 font-body text-sm leading-loose max-w-md">
            {step.description}
          </p>

          <div className="mt-12 flex gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-colors duration-500 ${index === i ? 'bg-gold' : 'bg-gold/20'}`}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Desktop Right Panel (Image) / Mobile Top Panel */}
        <motion.div 
          style={{ x: imageX, opacity }}
          className="w-full h-[50vh] md:w-1/2 md:h-full relative order-1 md:order-2"
        >
          {/* Gradient fade on left edge for desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10"></div>
          
          <div className="w-full h-full md:py-12 md:pr-12">
            <img 
              src={step.image} 
              alt={step.title} 
              className="w-full h-full object-cover rounded-none md:rounded-l-sm"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="w-full bg-obsidian pt-32 pb-16">
      <div className="text-center mb-24 max-w-3xl mx-auto px-6">
        <span className="text-gold uppercase tracking-[0.3em] text-xs font-body mb-4 block">
          The Process
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-cream">
          From Imagination <span className="italic font-light">to Reality</span>
        </h2>
      </div>

      <div className="w-full flex flex-col">
        {processSteps.map((step, index) => (
          <ProcessPanel key={step.id} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
