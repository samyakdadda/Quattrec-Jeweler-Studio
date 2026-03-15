import React from 'react';
import Hero from '../components/Hero';
import CtaSection from '../components/CtaSection';
import Divider from '../components/Divider';
import ProcessSection from '../components/ProcessSection';

const Home = () => {
  return (
    <div className="w-full bg-obsidian">
      <Hero />
      <CtaSection />
      <Divider />
      <ProcessSection />
    </div>
  );
};

export default Home;
