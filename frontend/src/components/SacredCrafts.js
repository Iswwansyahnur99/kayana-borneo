import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EyeIcon, HeartIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const SacredCrafts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const crafts = [
    {
      id: 1,
      name: "Anjat Rattan Weaving",
      tribe: "Kenyah Mastery",
      description: "Sacred backpacks woven with patterns that tell stories of forest journeys and ancestral wisdom",
      image: "https://images.pexels.com/photos/279747/pexels-photo-279747.jpeg",
      price: "From $280",
      meaning: "Protection on Life's Journey",
      artisans: "8 Master Weavers",
      color: "hornbill",
      sacred_element: "Tree of Life Pattern"
    },
    {
      id: 2,
      name: "Beadwork Regalia",
      tribe: "Kayan Heritage",
      description: "Hand-stitched ceremonial pieces carrying the power of ancestral spirits and divine protection",
      image: "https://images.unsplash.com/photo-1616418266826-cb0992abfd82",
      price: "From $320",
      meaning: "Spiritual Connection",
      artisans: "12 Sacred Artisans",
      color: "lifeblood",
      sacred_element: "Enggang Motif"
    },
    {
      id: 3,
      name: "Ulin Ironwood Carvings",
      tribe: "Lundayeh Tradition",
      description: "Miniature Sape' lutes and sacred panels carved from the eternal ironwood of Borneo",
      image: "https://images.unsplash.com/photo-1632640171797-e40be27a4501",
      price: "From $450",
      meaning: "Eternal Strength",
      artisans: "6 Master Carvers",
      color: "forest",
      sacred_element: "Aso Dragon-Dog"
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
      className="py-24 bg-dayak-forest-light relative overflow-hidden"
    >
      {/* Sacred Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1593852852535-4e895055d150"
          alt="Sacred Patterns"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dayak-forest/80"></div>
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
              Artisan Creations
            </span>
          </h2>
          <motion.p 
            className="text-xl text-dayak-spirit-soft opacity-90 font-earth max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Each creation carries the soul of the forest and the wisdom of generations. 
            By acquiring these sacred pieces, you become a guardian of living traditions.
          </motion.p>
          
          <motion.div 
            className="flex justify-center items-center gap-4 text-dayak-hornbill"
            variants={itemVariants}
          >
            <ShieldCheckIcon className="w-6 h-6" />
            <span className="font-earth text-lg">Guardian Certification • Direct Community Impact</span>
            <ShieldCheckIcon className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Sacred Crafts Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {crafts.map((craft) => (
            <motion.div 
              key={craft.id}
              className="group relative overflow-hidden rounded-2xl bg-dayak-forest border-2 border-dayak-spirit/10 hover:border-dayak-hornbill/50 transition-all duration-700 hover:shadow-sacred"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Sacred Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={craft.image} 
                  alt={craft.name}
                  className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dayak-forest via-dayak-forest/40 to-transparent"></div>
                
                {/* Tribal Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm border-2 ${
                  craft.color === 'hornbill' ? 'bg-hornbill-gradient border-dayak-hornbill text-dayak-forest' :
                  craft.color === 'lifeblood' ? 'bg-lifeblood-gradient border-dayak-lifeblood text-dayak-spirit' :
                  'bg-dayak-spirit border-dayak-spirit text-dayak-forest'
                }`}>
                  {craft.tribe}
                </div>

                {/* Sacred Actions */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="p-2 bg-dayak-forest/60 backdrop-blur-sm rounded-full text-dayak-hornbill hover:bg-dayak-hornbill hover:text-dayak-forest transition-colors">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-dayak-forest/60 backdrop-blur-sm rounded-full text-dayak-hornbill hover:bg-dayak-hornbill hover:text-dayak-forest transition-colors">
                    <HeartIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Sacred Content */}
              <div className="p-6">
                <h3 className="text-2xl font-sacred font-bold text-dayak-spirit mb-2">
                  {craft.name}
                </h3>
                <p className="text-dayak-spirit-soft opacity-90 font-earth mb-4 leading-relaxed">
                  {craft.description}
                </p>
                
                {/* Sacred Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-dayak-earth">Sacred Meaning</span>
                    <span className="text-dayak-hornbill font-semibold">{craft.meaning}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dayak-earth">Master Artisans</span>
                    <span className="text-dayak-hornbill font-semibold">{craft.artisans}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dayak-earth">Sacred Element</span>
                    <span className="text-dayak-hornbill font-semibold">{craft.sacred_element}</span>
                  </div>
                </div>

                {/* Sacred Price & Guardian Action */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-dayak-hornbill">
                    {craft.price}
                  </div>
                  <button className={`px-6 py-2 font-bold rounded-lg transition-all duration-300 ${
                    craft.color === 'hornbill' ? 'bg-hornbill-gradient text-dayak-forest hover:shadow-enggang' :
                    craft.color === 'lifeblood' ? 'bg-lifeblood-gradient text-dayak-spirit hover:shadow-sacred' :
                    'bg-dayak-spirit text-dayak-forest hover:shadow-spirit'
                  }`}>
                    Become Guardian
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sacred Gallery Call */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <button className="group relative px-8 py-4 bg-spirit-gradient backdrop-blur-lg border-2 border-dayak-hornbill/30 text-dayak-hornbill font-bold rounded-xl hover:bg-dayak-hornbill hover:text-dayak-forest transition-all duration-500 transform hover:scale-105">
            <span className="flex items-center gap-3">
              <span className="text-xl">🏛️</span>
              Enter Sacred Gallery
              <StarIcon className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Sacred Elements */}
      <div className="absolute top-40 right-10 opacity-10 animate-spirit-dance">
        <div className="w-24 h-24 bg-hornbill-gradient rounded-full flex items-center justify-center">
          <span className="text-3xl">🦅</span>
        </div>
      </div>
      <div className="absolute bottom-40 left-10 opacity-10 animate-sacred-float">
        <div className="w-20 h-20 bg-lifeblood-gradient rounded-full flex items-center justify-center">
          <span className="text-2xl">🌿</span>
        </div>
      </div>
    </section>
  );
};

export default SacredCrafts;