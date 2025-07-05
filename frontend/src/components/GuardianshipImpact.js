import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HeartIcon, UsersIcon, HomeIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const GuardianshipImpact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const guardianship_stats = [
    {
      icon: <UsersIcon className="w-8 h-8" />,
      value: "89",
      label: "Sacred Artisan Families",
      description: "Direct partnerships with master craftspeople across the three tribes"
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      value: "12",
      label: "Living Longhouses",
      description: "Lamin preserved and supported for future generations"
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      value: "50,000",
      label: "Hectares Protected",
      description: "Sacred forest lands under guardian stewardship"
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      value: "$340K",
      label: "Sacred Guardianship",
      description: "Direct support flowing to Dayak communities"
    }
  ];

  const guardian_voices = [
    {
      name: "Taman Anyi",
      role: "Kenyah Sape' Master",
      location: "Long Nawang, Krayan",
      story: "Through Kayana's sacred partnership, our Sape' melodies now reach souls across the world while ensuring our children learn the ancient songs of the forest.",
      image: "https://images.unsplash.com/photo-1585225659940-2204e4d8cfcb",
      sacred_craft: "Sacred Sape' Lutes"
    },
    {
      name: "Inung Payau",
      role: "Kayan Beadwork Keeper",
      location: "Apau Kayan Plateau",
      story: "Each bead I string carries prayers for our ancestors and hope for our land. The guardians who acquire our work become protectors of our sacred ways.",
      image: "https://images.unsplash.com/photo-1616418266826-cb0992abfd82",
      sacred_craft: "Ancestral Beadwork"
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-24 bg-dayak-forest relative overflow-hidden"
    >
      {/* Sacred Forest Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1706025181283-9946c98ed03f"
          alt="Sacred Forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-gradient opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Sacred Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-sacred font-bold text-dayak-spirit mb-6"
            variants={itemVariants}
          >
            Sacred
            <span className="bg-hornbill-gradient bg-clip-text text-transparent block animate-enggang-soar">
              Guardianship
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-dayak-spirit-soft opacity-90 font-earth max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Every acquisition becomes an act of sacred guardianship. Together, we protect both 
            the living culture of the Dayak peoples and the ancient forests that sustain them.
          </motion.p>
        </motion.div>

        {/* Sacred Impact Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {guardianship_stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-spirit-gradient rounded-2xl border-2 border-dayak-spirit/10 hover:border-dayak-hornbill/30 transition-all duration-500 backdrop-blur-lg group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hornbill-gradient rounded-full mb-4 shadow-enggang group-hover:animate-pulse-glow">
                <div className="text-dayak-forest">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-dayak-hornbill mb-2 animate-pulse-glow">{stat.value}</div>
              <div className="text-lg font-bold text-dayak-spirit mb-2 font-sacred">{stat.label}</div>
              <p className="text-dayak-spirit-soft text-sm opacity-80 font-earth">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Guardian Voices */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-3xl font-sacred font-bold text-dayak-spirit text-center mb-8"
            variants={itemVariants}
          >
            Voices of the Sacred Guardians
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guardian_voices.map((voice, index) => (
              <motion.div 
                key={index}
                className="bg-spirit-gradient rounded-2xl overflow-hidden border-2 border-dayak-spirit/10 hover:border-dayak-hornbill/30 transition-all duration-500 backdrop-blur-lg shadow-spirit"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={voice.image} 
                      alt={voice.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-xl font-sacred font-bold text-dayak-spirit mb-2">{voice.name}</h4>
                    <div className="text-dayak-hornbill text-sm font-bold mb-1">{voice.role}</div>
                    <div className="text-dayak-earth text-sm mb-3 font-earth">{voice.location}</div>
                    <div className="text-xs text-dayak-hornbill mb-3 font-bold bg-dayak-hornbill/10 px-2 py-1 rounded inline-block">{voice.sacred_craft}</div>
                    <p className="text-dayak-spirit-soft text-sm leading-relaxed italic font-earth">
                      "{voice.story}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sacred Promise */}
        <motion.div 
          className="bg-spirit-gradient backdrop-blur-lg border-2 border-dayak-spirit/10 rounded-3xl p-8 text-center shadow-spirit"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-dayak-hornbill" />
            <h3 className="text-3xl font-sacred font-bold text-dayak-spirit">
              Our Sacred Covenant
            </h3>
            <ShieldCheckIcon className="w-8 h-8 text-dayak-hornbill" />
          </div>
          <p className="text-dayak-spirit-soft opacity-90 mb-6 max-w-3xl mx-auto font-earth">
            80% of every sacred acquisition flows directly to the artisan communities and forest protection. 
            We provide transparent guardianship reports and ensure the sacred traditions remain economically strong for the seven generations to come.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center p-4 bg-dayak-forest/30 rounded-lg border border-dayak-hornbill/20">
              <div className="text-2xl font-bold text-dayak-hornbill mb-2">80%</div>
              <div className="text-dayak-spirit-soft text-sm font-earth">To Sacred Communities & Forest</div>
            </div>
            <div className="text-center p-4 bg-dayak-forest/30 rounded-lg border border-dayak-hornbill/20">
              <div className="text-2xl font-bold text-dayak-hornbill mb-2">15%</div>
              <div className="text-dayak-spirit-soft text-sm font-earth">Sacred Platform & Innovation</div>
            </div>
            <div className="text-center p-4 bg-dayak-forest/30 rounded-lg border border-dayak-hornbill/20">
              <div className="text-2xl font-bold text-dayak-hornbill mb-2">5%</div>
              <div className="text-dayak-spirit-soft text-sm font-earth">Cultural Documentation</div>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-hornbill-gradient text-dayak-forest font-bold rounded-xl hover:shadow-enggang transition-all duration-500 transform hover:scale-105">
            <span className="flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              View Sacred Impact Report
              <span className="text-xl">🌿</span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Sacred Elements */}
      <div className="absolute top-32 right-12 opacity-15 animate-spirit-dance">
        <div className="w-32 h-32 bg-hornbill-gradient rounded-full flex items-center justify-center">
          <span className="text-5xl">🦅</span>
        </div>
      </div>
      <div className="absolute bottom-32 left-12 opacity-15 animate-sacred-float">
        <div className="w-28 h-28 bg-lifeblood-gradient rounded-full flex items-center justify-center">
          <span className="text-4xl">🌿</span>
        </div>
      </div>
    </section>
  );
};

export default GuardianshipImpact;