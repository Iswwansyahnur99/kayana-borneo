import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const SacredFooter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sacred_links = {
    explore: [
      { name: 'Sacred Artisan Creations', href: '#' },
      { name: 'Lamin Virtual Journeys', href: '#' },
      { name: 'Rites of Knowledge', href: '#' },
      { name: 'Guardian Voices', href: '#' }
    ],
    guardianship: [
      { name: 'Become a Guardian', href: '#' },
      { name: 'Sacred Impact Report', href: '#' },
      { name: 'Forest Protection', href: '#' },
      { name: 'Community Support', href: '#' }
    ],
    wisdom: [
      { name: 'About Sacred Mission', href: '#' },
      { name: 'Dayak Cultural Guide', href: '#' },
      { name: 'Artisan Partners', href: '#' },
      { name: 'Sacred Ceremonies', href: '#' }
    ]
  };

  const sacred_socials = [
    { name: 'Sacred Stories', href: '#', icon: '📖' },
    { name: 'Guardian Circle', href: '#', icon: '🛡️' },
    { name: 'Forest Voices', href: '#', icon: '🌿' },
    { name: 'Sacred Wisdom', href: '#', icon: '🦅' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer 
      ref={ref}
      className="bg-dayak-forest relative overflow-hidden"
    >
      {/* Sacred Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.3'%3E%3Cpath d='M75 75L45 45H105L75 75zM0 75L30 45v60L0 75zM75 0L105 30H45L75 0zM75 150L45 120h60L75 150z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      {/* Sacred Pre-Footer Call */}
      <div className="relative z-10 border-b border-dayak-spirit/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-sacred font-bold text-dayak-spirit mb-6"
              variants={itemVariants}
            >
              Ready to Become a
              <span className="bg-hornbill-gradient bg-clip-text text-transparent block animate-enggang-soar">
                Sacred Guardian?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-dayak-spirit-soft opacity-90 font-earth max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              Join the sacred circle of guardians protecting the living wisdom of North Kalimantan's 
              ancient forest peoples for the seven generations to come.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <button className="group px-8 py-4 bg-hornbill-gradient text-dayak-forest font-bold rounded-xl hover:shadow-enggang transition-all duration-500 transform hover:scale-105">
                <span className="flex items-center gap-3">
                  <span className="text-xl">🛡️</span>
                  Begin Sacred Journey
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-dayak-hornbill text-dayak-hornbill font-bold rounded-xl hover:bg-dayak-hornbill hover:text-dayak-forest transition-all duration-500">
                <span className="flex items-center gap-3">
                  <span className="text-xl">🏛️</span>
                  Enter Sacred Lamin
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sacred Main Footer */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Sacred Brand Column */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-hornbill-gradient rounded-full flex items-center justify-center shadow-enggang">
                  <span className="text-xl font-bold text-dayak-forest">🦅</span>
                </div>
                <div>
                  <h3 className="text-2xl font-sacred font-bold text-dayak-spirit">Kayana</h3>
                  <p className="text-dayak-hornbill text-sm font-earth">Soul of North Kalimantan</p>
                </div>
              </div>
              <p className="text-dayak-spirit-soft opacity-90 font-earth leading-relaxed mb-6">
                A sacred digital sanctuary where the living wisdom of the Kenyah, Kayan, and Lundayeh 
                peoples flows through immersive longhouse journeys and authentic guardian crafts.
              </p>
              
              {/* Sacred Newsletter */}
              <div className="mb-6">
                <h4 className="text-lg font-sacred text-dayak-spirit mb-3">Sacred Circle Updates</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your sacred email"
                    className="flex-1 px-4 py-2 bg-dayak-forest-light border-2 border-dayak-spirit/20 rounded-lg text-dayak-spirit placeholder-dayak-earth focus:outline-none focus:border-dayak-hornbill transition-colors font-earth"
                  />
                  <button className="px-6 py-2 bg-hornbill-gradient text-dayak-forest font-bold rounded-lg hover:shadow-enggang transition-all duration-300">
                    Join
                  </button>
                </div>
              </div>
              
              {/* Sacred Guardian Badge */}
              <div className="flex items-center gap-2 text-dayak-hornbill">
                <ShieldCheckIcon className="w-5 h-5" />
                <span className="text-sm font-bold font-earth">Certified Sacred Guardian Platform</span>
              </div>
            </motion.div>

            {/* Sacred Links Columns */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-sacred text-dayak-spirit mb-4">Sacred Exploration</h4>
              <ul className="space-y-2">
                {sacred_links.explore.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-dayak-spirit-soft hover:text-dayak-hornbill transition-colors duration-300 font-earth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-sacred text-dayak-spirit mb-4">Sacred Guardianship</h4>
              <ul className="space-y-2">
                {sacred_links.guardianship.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-dayak-spirit-soft hover:text-dayak-hornbill transition-colors duration-300 font-earth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-sacred text-dayak-spirit mb-4">Sacred Wisdom</h4>
              <ul className="space-y-2 mb-6">
                {sacred_links.wisdom.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-dayak-spirit-soft hover:text-dayak-hornbill transition-colors duration-300 font-earth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Sacred Contact */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-dayak-spirit-soft">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span className="text-sm font-earth">sacred@kayana.id</span>
                </div>
                <div className="flex items-center gap-2 text-dayak-spirit-soft">
                  <PhoneIcon className="w-4 h-4" />
                  <span className="text-sm font-earth">+62 541 7777 888</span>
                </div>
                <div className="flex items-center gap-2 text-dayak-spirit-soft">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="text-sm font-earth">North Kalimantan, Indonesia</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sacred Bottom Blessing */}
      <div className="relative z-10 border-t border-dayak-spirit/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex items-center gap-2 text-dayak-spirit-soft"
              variants={itemVariants}
            >
              <span className="text-sm font-earth">© 2024 Kayana. Created with sacred</span>
              <HeartIcon className="w-4 h-4 text-dayak-hornbill animate-pulse-glow" />
              <span className="text-sm font-earth">for the Dayak peoples</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                {sacred_socials.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="text-dayak-spirit-soft hover:text-dayak-hornbill transition-colors duration-300 hover:scale-110 transform"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-dayak-spirit-soft font-earth">
                <a href="#" className="hover:text-dayak-hornbill transition-colors">Sacred Privacy</a>
                <span>•</span>
                <a href="#" className="hover:text-dayak-hornbill transition-colors">Guardian Terms</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sacred Floating Elements */}
      <div className="absolute top-20 right-20 opacity-15 animate-spirit-dance">
        <div className="w-16 h-16 bg-hornbill-gradient rounded-full flex items-center justify-center">
          <span className="text-2xl">🌿</span>
        </div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-15 animate-sacred-float">
        <div className="w-12 h-12 bg-lifeblood-gradient rounded-full flex items-center justify-center">
          <span className="text-xl">⚡</span>
        </div>
      </div>
    </footer>
  );
};

export default SacredFooter;