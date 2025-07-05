import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeartIcon, UsersIcon, HomeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const SocialImpact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const impactStats = [
    {
      icon: <UsersIcon className="w-8 h-8" />,
      value: "127",
      label: "Artisan Families Supported",
      description: "Direct partnerships with skilled craftspeople across Indonesia"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      value: "23",
      label: "Traditional Workshops",
      description: "Sanggar preserved and modernized for future generations"
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      value: "340",
      label: "Young Apprentices",
      description: "Next generation learning traditional crafts"
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      value: "$180K",
      label: "Direct Impact",
      description: "Revenue shared directly with artisan communities"
    }
  ];

  const stories = [
    {
      name: "Pak Suharto",
      craft: "Batik Master",
      location: "Solo, Central Java",
      story: "After 30 years of creating batik, I can now share my knowledge with the world through Kayana's virtual tours while ensuring my family's financial security.",
      image: "https://images.pexels.com/photos/32858030/pexels-photo-32858030.jpeg"
    },
    {
      name: "Ibu Wayan",
      craft: "Tenun Weaver",
      location: "Sumba, NTT",
      story: "My traditional ikat patterns now reach international collectors, preserving our ancestral techniques while supporting my village's economy.",
      image: "https://images.unsplash.com/photo-1576863555071-a724c941a054"
    }
  ];

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
      className="py-24 bg-heritage-charcoal relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg"
          alt="Cultural Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-heritage-charcoal/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-display font-bold text-white mb-6"
            variants={itemVariants}
          >
            Direct
            <span className="bg-gold-gradient bg-clip-text text-transparent block">
              Impact
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-heritage-cream opacity-90 font-body max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Every purchase creates a ripple of positive change. We believe in transparency, 
            direct relationships, and empowering the artisans who keep Indonesian heritage alive.
          </motion.p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {impactStats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-heritage-slate rounded-2xl border border-white/10 hover:border-heritage-gold/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-gradient rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-heritage-gold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-heritage-cream text-sm opacity-80">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Artisan Stories */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-3xl font-display font-bold text-white text-center mb-8"
            variants={itemVariants}
          >
            Stories from Our Artisans
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div 
                key={index}
                className="bg-heritage-slate rounded-2xl overflow-hidden border border-white/10 hover:border-heritage-gold/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-xl font-display font-bold text-white mb-2">{story.name}</h4>
                    <div className="text-heritage-gold text-sm font-semibold mb-1">{story.craft}</div>
                    <div className="text-heritage-warm-gray text-sm mb-4">{story.location}</div>
                    <p className="text-heritage-cream text-sm leading-relaxed italic">
                      "{story.story}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Promise */}
        <motion.div 
          className="bg-glass-gradient backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Our Impact Promise
          </h3>
          <p className="text-heritage-cream opacity-90 mb-6 max-w-3xl mx-auto">
            70% of every purchase goes directly to the artisan community. We provide transparent 
            impact reports and ensure that traditional crafts remain economically viable for future generations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-heritage-gold mb-2">70%</div>
              <div className="text-heritage-cream text-sm">To Artisan Communities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-heritage-gold mb-2">20%</div>
              <div className="text-heritage-cream text-sm">Platform & Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-heritage-gold mb-2">10%</div>
              <div className="text-heritage-cream text-sm">Heritage Preservation</div>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-gold-gradient text-heritage-dark font-semibold rounded-xl hover:shadow-xl hover:shadow-heritage-gold/30 transition-all duration-300 transform hover:scale-105">
            View Impact Report
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialImpact;