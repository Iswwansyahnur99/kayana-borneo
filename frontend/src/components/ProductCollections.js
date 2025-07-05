import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EyeIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

const ProductCollections = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const collections = [
    {
      id: 1,
      name: "Batik Java",
      description: "Timeless patterns that tell stories of royal courts and spiritual journeys",
      image: "https://images.unsplash.com/photo-1619328147198-aa1477637a21",
      price: "From $180",
      region: "Central Java",
      pattern: "Mega Mendung",
      artisans: "15 Master Craftsmen",
      color: "indigo"
    },
    {
      id: 2,
      name: "Tenun Ikat",
      description: "Woven dreams from the islands, each thread holds ancestral wisdom",
      image: "https://images.pexels.com/photos/17716796/pexels-photo-17716796.jpeg",
      price: "From $220",
      region: "Sumba & Lombok",
      pattern: "Hinggi Motif",
      artisans: "8 Weaving Masters",
      color: "terracotta"
    },
    {
      id: 3,
      name: "Jepara Carving",
      description: "Sculptures that breathe life into wood, carrying centuries of tradition",
      image: "https://images.unsplash.com/photo-1552836514-bbf70221e437",
      price: "From $350",
      region: "Jepara & Bali",
      pattern: "Flora & Fauna",
      artisans: "12 Wood Masters",
      color: "gold"
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20zM10 10.5V8H8v2.5H5.5V12H8v2.5h2V12h2.5v-1.5H10zM30 30.5V28h-2v2.5h-2.5V32H28v2.5h2V32h2.5v-1.5H30z'/%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
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
            Heritage
            <span className="bg-gold-gradient bg-clip-text text-transparent block">
              Collections
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-heritage-cream opacity-90 font-body max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Each piece in our collection is a masterwork of traditional Indonesian craftsmanship, 
            created by skilled artisans who have inherited their techniques through generations.
          </motion.p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {collections.map((collection) => (
            <motion.div 
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl bg-heritage-slate border border-white/10 hover:border-heritage-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-heritage-gold/20"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage-dark/80 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                  collection.color === 'indigo' ? 'bg-indigo-gradient border-heritage-indigo' :
                  collection.color === 'terracotta' ? 'bg-terracotta-gradient border-heritage-terracotta' :
                  'bg-gold-gradient border-heritage-gold'
                } text-white`}>
                  {collection.region}
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-heritage-gold hover:text-heritage-dark transition-colors">
                    <EyeIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-heritage-gold hover:text-heritage-dark transition-colors">
                    <HeartIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {collection.name}
                </h3>
                <p className="text-heritage-cream opacity-90 font-body mb-4 leading-relaxed">
                  {collection.description}
                </p>
                
                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-heritage-warm-gray">Traditional Pattern</span>
                    <span className="text-heritage-gold font-semibold">{collection.pattern}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-heritage-warm-gray">Master Artisans</span>
                    <span className="text-heritage-gold font-semibold">{collection.artisans}</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-heritage-gold">
                    {collection.price}
                  </div>
                  <button className="px-6 py-2 bg-heritage-gold text-heritage-dark font-semibold rounded-lg hover:bg-heritage-gold-light transition-colors">
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery CTA */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <button className="group relative px-8 py-4 bg-glass-gradient backdrop-blur-lg border border-heritage-gold/30 text-heritage-gold font-semibold rounded-xl hover:bg-heritage-gold hover:text-heritage-dark transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              View Complete Gallery
              <StarIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCollections;