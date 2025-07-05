import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PlayIcon, CameraIcon, MapPinIcon } from '@heroicons/react/24/outline';

const VirtualTours = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tours = [
    {
      id: 1,
      title: "Batik Sanggar Yogyakarta",
      description: "Step into the royal workshop where master craftsmen create intricate batik patterns using traditional canting tools",
      image: "https://images.pexels.com/photos/32858030/pexels-photo-32858030.jpeg",
      duration: "12 min",
      highlights: ["Royal Court History", "Traditional Tools", "Pattern Philosophy"],
      location: "Yogyakarta, Central Java"
    },
    {
      id: 2,
      title: "Tenun Ikat Village",
      description: "Experience the rhythmic sound of traditional looms in a remote village where ancient weaving techniques are preserved",
      image: "https://images.unsplash.com/photo-1576863555071-a724c941a054",
      duration: "15 min",
      highlights: ["Ancient Techniques", "Natural Dyes", "Village Life"],
      location: "Sumba, East Nusa Tenggara"
    },
    {
      id: 3,
      title: "Wood Carving Atelier",
      description: "Discover the meditative art of wood carving in workshops surrounded by the natural beauty of Bali",
      image: "https://images.unsplash.com/photo-1592790063273-df5b77265710",
      duration: "18 min",
      highlights: ["Sacred Woods", "Carving Rituals", "Spiritual Meaning"],
      location: "Mas Village, Bali"
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
      className="py-24 bg-heritage-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/32585171/pexels-photo-32585171.jpeg"
          alt="Cultural Pattern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-heritage-dark/90"></div>
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
            Visit the
            <span className="bg-indigo-gradient bg-clip-text text-transparent block">
              Sanggar
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-heritage-cream opacity-90 font-body max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Immerse yourself in the authentic workshops where master artisans create their masterpieces. 
            Experience the sights, sounds, and stories that bring each craft to life.
          </motion.p>
          
          {/* Featured Tour Preview */}
          <motion.div 
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-heritage-slate"
            variants={itemVariants}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1700740759974-90abc1dce98c" 
                alt="Virtual Tour Preview"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/80 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group relative">
                  <div className="w-20 h-20 bg-heritage-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-heritage-gold transition-colors duration-300 animate-pulse-slow">
                    <PlayIcon className="w-8 h-8 text-heritage-dark ml-1" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-heritage-gold/30 rounded-full animate-ping"></div>
                </button>
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-gradient rounded-full text-white text-sm font-semibold">
                360° Experience
              </div>
            </div>
            
            <div className="p-6 text-center">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Experience Traditional Craftsmanship
              </h3>
              <p className="text-heritage-cream opacity-90">
                Take a virtual journey through authentic Indonesian workshops
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Tours Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {tours.map((tour) => (
            <motion.div 
              key={tour.id}
              className="group relative overflow-hidden rounded-2xl bg-heritage-slate border border-white/10 hover:border-heritage-indigo/50 transition-all duration-500 hover:shadow-2xl hover:shadow-heritage-indigo/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/80 to-transparent"></div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {tour.duration}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-12 h-12 bg-heritage-indigo/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-heritage-indigo transition-colors">
                    <PlayIcon className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPinIcon className="w-4 h-4 text-heritage-indigo" />
                  <span className="text-heritage-indigo text-sm font-semibold">{tour.location}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {tour.title}
                </h3>
                
                <p className="text-heritage-cream opacity-90 font-body mb-4 leading-relaxed text-sm">
                  {tour.description}
                </p>
                
                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-heritage-indigo/20 text-heritage-indigo-light text-xs rounded-full border border-heritage-indigo/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full px-6 py-3 bg-indigo-gradient text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-heritage-indigo/30 transition-all duration-300 flex items-center justify-center gap-2">
                  <CameraIcon className="w-5 h-5" />
                  Enter Sanggar
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-glass-gradient backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Explore?
            </h3>
            <p className="text-heritage-cream opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of culture enthusiasts who have discovered the beauty of Indonesian craftsmanship through our immersive virtual experiences.
            </p>
            <button className="px-8 py-4 bg-indigo-gradient text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-heritage-indigo/30 transition-all duration-300 transform hover:scale-105">
              Start Virtual Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualTours;