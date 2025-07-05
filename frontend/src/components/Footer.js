import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const footerLinks = {
    explore: [
      { name: 'Product Collections', href: '#' },
      { name: 'Virtual Tours', href: '#' },
      { name: 'Cultural Quests', href: '#' },
      { name: 'Artisan Stories', href: '#' }
    ],
    support: [
      { name: 'Customer Care', href: '#' },
      { name: 'Shipping & Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'Care Instructions', href: '#' }
    ],
    company: [
      { name: 'About Kayana', href: '#' },
      { name: 'Impact Report', href: '#' },
      { name: 'Artisan Partners', href: '#' },
      { name: 'Careers', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'Facebook', href: '#', icon: '👥' },
    { name: 'YouTube', href: '#', icon: '🎥' },
    { name: 'Twitter', href: '#', icon: '🐦' }
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
      className="bg-heritage-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-center" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.3'%3E%3Cpath d='M50 50L30 30H70L50 50z'/%3E%3C/g%3E%3C/svg%3E")`,
             }}
        ></div>
      </div>

      {/* Pre-Footer CTA */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to Start Your
              <span className="bg-gold-gradient bg-clip-text text-transparent block">
                Heritage Journey?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-heritage-cream opacity-90 font-body max-w-2xl mx-auto mb-8"
              variants={itemVariants}
            >
              Join thousands of culture enthusiasts who have discovered the beauty of authentic Indonesian craftsmanship.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <button className="group px-8 py-4 bg-gold-gradient text-heritage-dark font-semibold rounded-xl hover:shadow-xl hover:shadow-heritage-gold/30 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Explore Collections
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-heritage-gold text-heritage-gold font-semibold rounded-xl hover:bg-heritage-gold hover:text-heritage-dark transition-all duration-300">
                <span className="flex items-center gap-2">
                  Take Virtual Tour
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Brand Column */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-heritage-dark">K</span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">Kayana</h3>
                  <p className="text-heritage-gold text-sm">Heritage Meets Innovation</p>
                </div>
              </div>
              <p className="text-heritage-cream opacity-90 font-body leading-relaxed mb-6">
                Discover the soul of Indonesian craftsmanship through immersive virtual experiences 
                and authentic heritage pieces that carry centuries of tradition.
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Stay Connected</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-heritage-slate border border-white/20 rounded-lg text-white placeholder-heritage-warm-gray focus:outline-none focus:border-heritage-gold transition-colors"
                  />
                  <button className="px-6 py-2 bg-gold-gradient text-heritage-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                    Join
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Links Columns */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-2">
                {footerLinks.explore.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-heritage-cream hover:text-heritage-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-heritage-cream hover:text-heritage-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 mb-6">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-heritage-cream hover:text-heritage-gold transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-heritage-cream">
                  <EnvelopeIcon className="w-4 h-4" />
                  <span className="text-sm">hello@kayana.id</span>
                </div>
                <div className="flex items-center gap-2 text-heritage-cream">
                  <PhoneIcon className="w-4 h-4" />
                  <span className="text-sm">+62 21 5555 0123</span>
                </div>
                <div className="flex items-center gap-2 text-heritage-cream">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="text-sm">Jakarta, Indonesia</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex items-center gap-2 text-heritage-cream"
              variants={itemVariants}
            >
              <span className="text-sm">© 2024 Kayana. Made with</span>
              <HeartIcon className="w-4 h-4 text-heritage-gold" />
              <span className="text-sm">for Indonesian Heritage</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="text-heritage-cream hover:text-heritage-gold transition-colors duration-300"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-heritage-cream">
                <a href="#" className="hover:text-heritage-gold transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-heritage-gold transition-colors">Terms of Service</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;