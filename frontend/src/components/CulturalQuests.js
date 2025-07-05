import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrophyIcon, FireIcon, GiftIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

const CulturalQuests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quests = [
    {
      id: 1,
      title: "Batik Pattern Master",
      description: "Learn to identify traditional batik patterns and their cultural significance",
      icon: <PuzzlePieceIcon className="w-6 h-6" />,
      reward: "Digital Badge + 10% Discount",
      difficulty: "Beginner",
      participants: "2,450",
      color: "indigo"
    },
    {
      id: 2,
      title: "Sanggar Explorer",
      description: "Complete virtual tours of 5 different traditional workshops",
      icon: <FireIcon className="w-6 h-6" />,
      reward: "Exclusive Access + Free Shipping",
      difficulty: "Intermediate",
      participants: "1,830",
      color: "terracotta"
    },
    {
      id: 3,
      title: "Heritage Collector",
      description: "Collect cultural artifacts and unlock the story behind each piece",
      icon: <TrophyIcon className="w-6 h-6" />,
      reward: "Collector's Certificate + Special Edition",
      difficulty: "Advanced",
      participants: "892",
      color: "gold"
    }
  ];

  const stats = [
    { label: "Active Explorers", value: "5,200+" },
    { label: "Completed Quests", value: "18,500+" },
    { label: "Badges Earned", value: "12,300+" },
    { label: "Cultural Stories", value: "150+" }
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
      className="py-24 bg-heritage-slate relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.3'%3E%3Cpath d='M40 40L20 20H60L40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
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
            Cultural
            <span className="bg-terracotta-gradient bg-clip-text text-transparent block">
              Quests
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-heritage-cream opacity-90 font-body max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Embark on interactive journeys that deepen your understanding of Indonesian heritage. 
            Earn badges, unlock stories, and become a true Culture Explorer.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-heritage-terracotta mb-1">{stat.value}</div>
                <div className="text-heritage-cream text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Quests Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {quests.map((quest) => (
            <motion.div 
              key={quest.id}
              className="group relative overflow-hidden rounded-2xl bg-heritage-dark border border-white/10 hover:border-heritage-terracotta/50 transition-all duration-500 hover:shadow-2xl hover:shadow-heritage-terracotta/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    quest.color === 'indigo' ? 'bg-indigo-gradient' :
                    quest.color === 'terracotta' ? 'bg-terracotta-gradient' :
                    'bg-gold-gradient'
                  }`}>
                    {quest.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-heritage-warm-gray">Difficulty</div>
                    <div className={`text-sm font-semibold ${
                      quest.difficulty === 'Beginner' ? 'text-green-400' :
                      quest.difficulty === 'Intermediate' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {quest.difficulty}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {quest.title}
                </h3>
                <p className="text-heritage-cream opacity-90 font-body text-sm leading-relaxed">
                  {quest.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GiftIcon className="w-4 h-4 text-heritage-gold" />
                    <span className="text-heritage-gold text-sm font-semibold">Reward</span>
                  </div>
                  <p className="text-heritage-cream text-sm">{quest.reward}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-heritage-warm-gray">Participants</span>
                    <span className="text-heritage-gold font-semibold">{quest.participants}</span>
                  </div>
                  <div className="w-full bg-heritage-charcoal rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        quest.color === 'indigo' ? 'bg-indigo-gradient' :
                        quest.color === 'terracotta' ? 'bg-terracotta-gradient' :
                        'bg-gold-gradient'
                      }`}
                      style={{ width: `${Math.min(100, (parseInt(quest.participants.replace(/\D/g, '')) / 3000) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <button className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                  quest.color === 'indigo' ? 'bg-indigo-gradient hover:shadow-lg hover:shadow-heritage-indigo/30' :
                  quest.color === 'terracotta' ? 'bg-terracotta-gradient hover:shadow-lg hover:shadow-heritage-terracotta/30' :
                  'bg-gold-gradient hover:shadow-lg hover:shadow-heritage-gold/30'
                } text-white`}>
                  Start Quest
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Quest */}
        <motion.div 
          className="bg-glass-gradient backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-display font-bold text-white mb-4">
            Weekly Challenge
          </h3>
          <p className="text-heritage-cream opacity-90 mb-6 max-w-2xl mx-auto">
            Join our special weekly quest to discover the hidden meanings behind traditional Indonesian symbols and motifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-heritage-gold">
              <TrophyIcon className="w-5 h-5" />
              <span className="font-semibold">Exclusive Heritage Piece</span>
            </div>
            <div className="flex items-center gap-2 text-heritage-terracotta">
              <FireIcon className="w-5 h-5" />
              <span className="font-semibold">Limited Time: 3 Days Left</span>
            </div>
          </div>
          <button className="mt-6 px-8 py-4 bg-terracotta-gradient text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-heritage-terracotta/30 transition-all duration-300 transform hover:scale-105">
            Join Challenge
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CulturalQuests;