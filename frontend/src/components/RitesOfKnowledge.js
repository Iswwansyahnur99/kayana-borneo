import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrophyIcon, FireIcon, GiftIcon, AcademicCapIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const RitesOfKnowledge = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rites = [
    {
      id: 1,
      title: "Keeper of the Enggang",
      description: "Master the sacred symbolism of the hornbill and its divine role in Dayak cosmology",
      icon: <AcademicCapIcon className="w-7 h-7" />,
      reward: "Sacred Hornbill Badge + Guardian's Blessing",
      difficulty: "Initiate",
      participants: "1,850",
      color: "hornbill",
      sacred_knowledge: "Hornbill as Divine Messenger"
    },
    {
      id: 2,
      title: "Guardian of the Forest Paths",
      description: "Complete journeys through all three sacred longhouses and unlock ancestral wisdom",
      icon: <FireIcon className="w-7 h-7" />,
      reward: "Lamin Master Certificate + Exclusive Access",
      difficulty: "Seeker",
      participants: "920",
      color: "lifeblood",
      sacred_knowledge: "Unity of Three Sacred Tribes"
    },
    {
      id: 3,
      title: "Keeper of Ancient Patterns",
      description: "Decode the sacred meanings hidden within traditional beadwork and weaving patterns",
      icon: <TrophyIcon className="w-7 h-7" />,
      reward: "Pattern Master Scroll + Sacred Creation",
      difficulty: "Elder",
      participants: "430",
      color: "spirit",
      sacred_knowledge: "Language of Sacred Geometry"
    }
  ];

  const sacred_stats = [
    { label: "Sacred Guardians", value: "3,200+" },
    { label: "Rites Completed", value: "8,500+" },
    { label: "Wisdom Keepers", value: "2,100+" },
    { label: "Ancient Teachings", value: "47" }
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
      className="py-24 bg-dayak-forest-light relative overflow-hidden"
    >
      {/* Sacred Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M60 60L30 30H90L60 60zM0 60L30 30v60L0 60zM60 0L90 30H30L60 0zM60 120L30 90h60L60 120z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
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
            <span className="bg-lifeblood-gradient bg-clip-text text-transparent block animate-enggang-soar">
              Rites of Knowledge
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-dayak-spirit-soft opacity-90 font-earth max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Embark on sacred quests that awaken ancient wisdom within you. 
            Each rite transforms seekers into guardians of eternal knowledge.
          </motion.p>
          
          {/* Sacred Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {sacred_stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-spirit-gradient rounded-lg border border-dayak-spirit/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-dayak-hornbill mb-1 animate-pulse-glow">{stat.value}</div>
                <div className="text-dayak-spirit-soft text-sm opacity-80 font-earth">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sacred Rites Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {rites.map((rite) => (
            <motion.div 
              key={rite.id}
              className="group relative overflow-hidden rounded-2xl bg-dayak-forest border-2 border-dayak-spirit/10 hover:border-dayak-hornbill/50 transition-all duration-700 hover:shadow-sacred"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Sacred Header */}
              <div className="p-6 border-b border-dayak-spirit/10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-4 rounded-xl shadow-lg ${
                    rite.color === 'hornbill' ? 'bg-hornbill-gradient' :
                    rite.color === 'lifeblood' ? 'bg-lifeblood-gradient' :
                    'bg-dayak-spirit'
                  }`}>
                    <div className={rite.color === 'spirit' ? 'text-dayak-forest' : 'text-dayak-forest'}>
                      {rite.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-dayak-earth font-earth">Sacred Level</div>
                    <div className={`text-sm font-bold ${
                      rite.difficulty === 'Initiate' ? 'text-dayak-hornbill' :
                      rite.difficulty === 'Seeker' ? 'text-dayak-lifeblood' :
                      'text-dayak-spirit'
                    }`}>
                      {rite.difficulty}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-sacred font-bold text-dayak-spirit mb-2">
                  {rite.title}
                </h3>
                <p className="text-dayak-spirit-soft opacity-90 font-earth text-sm leading-relaxed">
                  {rite.description}
                </p>
              </div>

              {/* Sacred Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GiftIcon className="w-5 h-5 text-dayak-hornbill" />
                    <span className="text-dayak-hornbill text-sm font-bold">Sacred Reward</span>
                  </div>
                  <p className="text-dayak-spirit-soft text-sm font-earth">{rite.reward}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldExclamationIcon className="w-5 h-5 text-dayak-hornbill" />
                    <span className="text-dayak-hornbill text-sm font-bold">Sacred Knowledge</span>
                  </div>
                  <p className="text-dayak-spirit-soft text-sm font-earth">{rite.sacred_knowledge}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-dayak-earth font-earth">Fellow Guardians</span>
                    <span className="text-dayak-hornbill font-bold">{rite.participants}</span>
                  </div>
                  <div className="w-full bg-dayak-forest rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        rite.color === 'hornbill' ? 'bg-hornbill-gradient' :
                        rite.color === 'lifeblood' ? 'bg-lifeblood-gradient' :
                        'bg-dayak-spirit'
                      }`}
                      style={{ width: `${Math.min(100, (parseInt(rite.participants.replace(/\D/g, '')) / 2000) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                <button className={`w-full px-6 py-3 font-bold rounded-lg transition-all duration-500 ${
                  rite.color === 'hornbill' ? 'bg-hornbill-gradient text-dayak-forest hover:shadow-enggang' :
                  rite.color === 'lifeblood' ? 'bg-lifeblood-gradient text-dayak-spirit hover:shadow-sacred' :
                  'bg-dayak-spirit text-dayak-forest hover:shadow-spirit'
                } group`}>
                  <span className="flex items-center justify-center gap-2">
                    Begin Sacred Rite
                    <div className="group-hover:scale-110 transition-transform">⚡</div>
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sacred Challenge */}
        <motion.div 
          className="bg-spirit-gradient backdrop-blur-lg border-2 border-dayak-spirit/10 rounded-3xl p-8 max-w-4xl mx-auto text-center shadow-spirit"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-sacred font-bold text-dayak-spirit mb-4">
            Sacred Moon Challenge
          </h3>
          <p className="text-dayak-spirit-soft opacity-90 mb-6 max-w-2xl mx-auto font-earth">
            Join our monthly quest to unlock the deepest mysteries of Dayak cosmology and sacred forest wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2 text-dayak-hornbill">
              <TrophyIcon className="w-6 h-6" />
              <span className="font-bold">Exclusive Sacred Artifact</span>
            </div>
            <div className="flex items-center gap-2 text-dayak-lifeblood">
              <FireIcon className="w-6 h-6" />
              <span className="font-bold">Sacred Time: 5 Days Remaining</span>
            </div>
          </div>
          <button className="px-8 py-4 bg-lifeblood-gradient text-dayak-spirit font-bold rounded-xl hover:shadow-sacred transition-all duration-500 transform hover:scale-105">
            <span className="flex items-center gap-3">
              <span className="text-xl">🌙</span>
              Accept Sacred Challenge
              <span className="text-xl">⚡</span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Sacred Elements */}
      <div className="absolute top-40 right-16 opacity-10 animate-spirit-dance">
        <div className="w-28 h-28 bg-hornbill-gradient rounded-full flex items-center justify-center">
          <span className="text-4xl">🦅</span>
        </div>
      </div>
      <div className="absolute bottom-40 left-16 opacity-10 animate-sacred-float">
        <div className="w-24 h-24 bg-lifeblood-gradient rounded-full flex items-center justify-center">
          <span className="text-3xl">⚡</span>
        </div>
      </div>
    </section>
  );
};

export default RitesOfKnowledge;