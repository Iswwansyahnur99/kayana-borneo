import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PlayIcon, CameraIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const LaminJourney = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const laminTours = [
    {
      id: 1,
      title: "Kenyah Lamin Uma Juman",
      location: "Long Nawang, Krayan Highlands",
      description: "Enter the sacred communal house where intricate Sape' melodies echo through ironwood halls adorned with ancient murals",
      image: "https://images.unsplash.com/photo-1641522198176-9c8f9656c0d4",
      duration: "18 min",
      highlights: ["Sacred Sape' Performances", "Ancient Wall Murals", "Communal Fire Ceremony"],
      tribe: "Kenyah",
      sacred_element: "Pohon Kehidupan"
    },
    {
      id: 2,
      title: "Kayan Uluk Traditional",
      location: "Apau Kayan Plateau",
      description: "Experience the mystical longhouse where generations of Kayan wisdom keepers have preserved the ancient ways",
      image: "https://images.unsplash.com/photo-1581571209407-50cd315d5e57",
      duration: "22 min",
      highlights: ["Ancestor Shrine Rituals", "Traditional Weaving", "Hornbill Sacred Dance"],
      tribe: "Kayan",
      sacred_element: "Enggang Spirit"
    },
    {
      id: 3,
      title: "Lundayeh Forest Sanctuary",
      location: "Krayan Valley Borderlands",
      description: "Discover the highland longhouse where earth and sky meet in perfect harmony with ancestral agricultural wisdom",
      image: "https://images.unsplash.com/photo-1706025181283-9946c98ed03f",
      duration: "15 min",
      highlights: ["Rice Blessing Ceremonies", "Forest Medicine Garden", "Star Navigation Tales"],
      tribe: "Lundayeh",
      sacred_element: "Earth-Sky Unity"
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
      {/* Sacred Longhouse Background */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1446729444801-31245ddba81a"
          alt="Sacred Forest Canopy"
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
            Journey into the
            <span className="bg-hornbill-gradient bg-clip-text text-transparent block animate-enggang-soar">
              Sacred Lamin
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-dayak-spirit-soft opacity-90 font-earth max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Step through time into living longhouses where ancient wisdom flows like sacred rivers. 
            Experience the heartbeat of Dayak culture in 360° immersive reality.
          </motion.p>
          
          {/* Featured Lamin Preview */}
          <motion.div 
            className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border-2 border-dayak-spirit/10 bg-dayak-forest-light shadow-sacred"
            variants={itemVariants}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1641522198176-9c8f9656c0d4" 
                alt="Sacred Longhouse"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dayak-forest via-dayak-forest/40 to-transparent"></div>
              
              {/* Sacred Play Portal */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group relative">
                  <div className="w-24 h-24 bg-hornbill-gradient rounded-full flex items-center justify-center group-hover:bg-dayak-hornbill-light transition-colors duration-500 shadow-enggang animate-pulse-glow">
                    <PlayIcon className="w-10 h-10 text-dayak-forest ml-1" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-dayak-hornbill/30 rounded-full animate-ping"></div>
                  <div className="absolute -inset-4 w-32 h-32 border-2 border-dayak-hornbill/50 rounded-full animate-pulse"></div>
                </button>
              </div>
              
              {/* Sacred Experience Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-lifeblood-gradient rounded-full text-dayak-spirit text-sm font-bold shadow-lg">
                <span className="flex items-center gap-2">
                  <GlobeAltIcon className="w-4 h-4" />
                  360° Sacred Reality
                </span>
              </div>
            </div>
            
            <div className="p-8 text-center">
              <h3 className="text-3xl font-sacred font-bold text-dayak-spirit mb-3">
                Enter the Living Longhouse
              </h3>
              <p className="text-dayak-spirit-soft opacity-90 font-earth">
                Experience authentic Dayak longhouses as sacred digital sanctuaries
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Sacred Lamin Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {laminTours.map((lamin) => (
            <motion.div 
              key={lamin.id}
              className="group relative overflow-hidden rounded-2xl bg-dayak-forest-light border-2 border-dayak-spirit/10 hover:border-dayak-hornbill/50 transition-all duration-700 hover:shadow-sacred"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Sacred Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={lamin.image} 
                  alt={lamin.title}
                  className="w-full h-48 object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dayak-forest via-dayak-forest/40 to-transparent"></div>
                
                {/* Sacred Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-dayak-forest/80 backdrop-blur-sm rounded-full text-dayak-hornbill text-sm font-bold border border-dayak-hornbill/30">
                  {lamin.duration}
                </div>

                {/* Sacred Tribe Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-hornbill-gradient rounded-full text-dayak-forest text-sm font-bold">
                  {lamin.tribe}
                </div>

                {/* Sacred Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-16 h-16 bg-hornbill-gradient rounded-full flex items-center justify-center hover:bg-dayak-hornbill-light transition-colors shadow-enggang">
                    <PlayIcon className="w-8 h-8 text-dayak-forest ml-1" />
                  </button>
                </div>
              </div>

              {/* Sacred Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPinIcon className="w-5 h-5 text-dayak-hornbill" />
                  <span className="text-dayak-hornbill text-sm font-bold">{lamin.location}</span>
                </div>
                
                <h3 className="text-xl font-sacred font-bold text-dayak-spirit mb-3">
                  {lamin.title}
                </h3>
                
                <p className="text-dayak-spirit-soft opacity-90 font-earth mb-4 leading-relaxed text-sm">
                  {lamin.description}
                </p>
                
                {/* Sacred Highlights */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-dayak-hornbill mb-2">Sacred Experiences:</div>
                  <div className="flex flex-wrap gap-2">
                    {lamin.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-dayak-hornbill/20 text-dayak-hornbill text-xs rounded-full border border-dayak-hornbill/30 font-earth"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sacred Element */}
                <div className="mb-6 p-3 bg-spirit-gradient rounded-lg border border-dayak-spirit/10">
                  <div className="text-xs text-dayak-earth mb-1">Sacred Element</div>
                  <div className="text-sm font-bold text-dayak-hornbill">{lamin.sacred_element}</div>
                </div>

                {/* Sacred Action Button */}
                <button className="w-full px-6 py-3 bg-hornbill-gradient text-dayak-forest font-bold rounded-lg hover:shadow-enggang transition-all duration-500 flex items-center justify-center gap-2 group">
                  <CameraIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Enter Sacred Lamin
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sacred Journey Call */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-spirit-gradient backdrop-blur-lg border-2 border-dayak-spirit/10 rounded-3xl p-8 max-w-4xl mx-auto shadow-spirit">
            <h3 className="text-3xl font-sacred font-bold text-dayak-spirit mb-4">
              Ready for the Sacred Journey?
            </h3>
            <p className="text-dayak-spirit-soft opacity-90 mb-6 max-w-2xl mx-auto font-earth">
              Join the guardians who have walked these sacred paths and discovered the living wisdom of the forest peoples.
            </p>
            <button className="px-8 py-4 bg-lifeblood-gradient text-dayak-spirit font-bold rounded-xl hover:shadow-sacred transition-all duration-500 transform hover:scale-105">
              <span className="flex items-center gap-3">
                <span className="text-xl">🌿</span>
                Begin Sacred Pilgrimage
                <span className="text-xl">🦅</span>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaminJourney;