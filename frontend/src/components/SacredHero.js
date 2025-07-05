import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const SacredHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dayak-forest"
    >
      {/* Sacred Forest Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1446729444801-31245ddba81a"
          alt="Sacred Forest"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-forest-gradient opacity-90"></div>
      </div>

      {/* Dayak Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.3'%3E%3Cpath d='M40 40l20-20v40L40 40zM0 40l20-20v40L0 40zM40 0l20 20H20L40 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Sacred Enggang Symbol */}
        <motion.div 
          className="mb-8"
          variants={floatVariants}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-hornbill-gradient rounded-full flex items-center justify-center shadow-sacred animate-pulse-glow">
                <div className="text-3xl font-bold text-dayak-forest">🦅</div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-lifeblood-gradient rounded-full animate-sacred-float"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-sacred font-bold text-dayak-spirit mb-3">
            Kayana
          </h1>
          <p className="text-dayak-hornbill text-xl md:text-2xl font-earth tracking-wide">
            Soul of North Kalimantan
          </p>
        </motion.div>

        {/* Main Sacred Proclamation */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-sacred font-bold text-dayak-spirit leading-tight mb-8">
            Guardian of the
            <span className="bg-hornbill-gradient bg-clip-text text-transparent block animate-enggang-soar">
              Ancient Ways
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-dayak-spirit-soft opacity-90 font-earth leading-relaxed max-w-4xl mx-auto">
            Enter the sacred realm of the Dayak peoples. Experience the living wisdom of the 
            Kenyah, Kayan, and Lundayeh through immersive longhouse journeys, then become a 
            guardian of their eternal craft traditions.
          </p>
        </motion.div>

        {/* Sacred Action Calls */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <button className="group relative px-8 py-4 bg-hornbill-gradient text-dayak-forest font-bold rounded-lg hover:shadow-sacred transition-all duration-500 transform hover:scale-105 animate-pulse-glow">
            <span className="flex items-center gap-3">
              <span className="text-xl">🏛️</span>
              Enter the Lamin
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-dayak-hornbill text-dayak-hornbill font-bold rounded-lg hover:bg-dayak-hornbill hover:text-dayak-forest transition-all duration-500 backdrop-blur-sm">
            <span className="flex items-center gap-3">
              <span className="text-xl">🌿</span>
              Explore Sacred Crafts
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </motion.div>

        {/* Living Heritage Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
          variants={itemVariants}
        >
          <div className="backdrop-blur-lg bg-spirit-gradient rounded-lg p-6 border border-dayak-spirit/10 hover:shadow-spirit transition-all duration-300">
            <div className="text-3xl font-bold text-dayak-hornbill mb-2">3</div>
            <div className="text-dayak-spirit-soft text-sm">Sacred Tribes</div>
            <div className="text-xs text-dayak-earth mt-1">Kenyah • Kayan • Lundayeh</div>
          </div>
          <div className="backdrop-blur-lg bg-spirit-gradient rounded-lg p-6 border border-dayak-spirit/10 hover:shadow-spirit transition-all duration-300">
            <div className="text-3xl font-bold text-dayak-hornbill mb-2">12</div>
            <div className="text-dayak-spirit-soft text-sm">Living Lamin</div>
            <div className="text-xs text-dayak-earth mt-1">Virtual Longhouse Tours</div>
          </div>
          <div className="backdrop-blur-lg bg-spirit-gradient rounded-lg p-6 border border-dayak-spirit/10 hover:shadow-spirit transition-all duration-300">
            <div className="text-3xl font-bold text-dayak-hornbill mb-2">∞</div>
            <div className="text-dayak-spirit-soft text-sm">Ancestral Wisdom</div>
            <div className="text-xs text-dayak-earth mt-1">Generations of Knowledge</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Sacred Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dayak-hornbill"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-earth mb-2">Descend into the Sacred</span>
          <div className="w-6 h-10 border-2 border-dayak-hornbill rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-dayak-hornbill rounded-full animate-bounce mt-2"></div>
            <div className="absolute -top-1 -left-1 w-8 h-12 border-2 border-dayak-hornbill/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>

      {/* Floating Sacred Elements */}
      <div className="absolute top-20 right-20 opacity-20 animate-spirit-dance">
        <div className="w-16 h-16 bg-hornbill-gradient rounded-full flex items-center justify-center">
          <span className="text-2xl">🌿</span>
        </div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-20 animate-sacred-float">
        <div className="w-12 h-12 bg-lifeblood-gradient rounded-full flex items-center justify-center">
          <span className="text-xl">⚡</span>
        </div>
      </div>
    </section>
  );
};

export default SacredHero;