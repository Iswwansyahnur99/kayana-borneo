import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-heritage-dark"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1700740759974-90abc1dce98c"
          alt="Heritage Architecture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-heritage-gradient opacity-80"></div>
      </div>

      {/* Heritage Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Logo */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-2xl font-bold text-heritage-dark">K</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
            Kayana
          </h1>
          <p className="text-heritage-gold text-lg md:text-xl font-accent tracking-wide">
            Where Heritage Meets Innovation
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6">
            Discover
            <span className="bg-gold-gradient bg-clip-text text-transparent block">
              Authentic Indonesia
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-heritage-cream opacity-90 font-body leading-relaxed max-w-4xl mx-auto">
            Experience the soul of Indonesian craftsmanship through immersive virtual tours, 
            then bring home authentic heritage pieces that carry centuries of tradition.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <button className="group relative px-8 py-4 bg-gold-gradient text-heritage-dark font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Begin Your Journey
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-heritage-gold text-heritage-gold font-semibold rounded-xl hover:bg-heritage-gold hover:text-heritage-dark transition-all duration-300 backdrop-blur-sm">
            <span className="flex items-center gap-2">
              Explore Collections
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
          variants={itemVariants}
        >
          <div className="backdrop-blur-lg bg-glass-gradient rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-heritage-gold mb-1">500+</div>
            <div className="text-heritage-cream text-sm">Authentic Pieces</div>
          </div>
          <div className="backdrop-blur-lg bg-glass-gradient rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-heritage-gold mb-1">12</div>
            <div className="text-heritage-cream text-sm">Virtual Sanggar</div>
          </div>
          <div className="backdrop-blur-lg bg-glass-gradient rounded-lg p-4 border border-white/10">
            <div className="text-2xl font-bold text-heritage-gold mb-1">1000+</div>
            <div className="text-heritage-cream text-sm">Culture Explorers</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-heritage-gold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-body mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-heritage-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-heritage-gold rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;