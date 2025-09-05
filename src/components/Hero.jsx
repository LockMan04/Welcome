import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const cvPath = language === 'vi' 
      ? `${import.meta.env.BASE_URL}LaThanhToan-CV-VI.pdf` 
      : `${import.meta.env.BASE_URL}LaThanhToan-CV-EN.pdf`;
    window.open(cvPath, '_blank');
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-white">
      <div className="container section-padding">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Planet - Top on mobile, Left on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]" id="beautiful-container">
              {/* Background Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0.6, 0.3, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              />
              
              {/* AI Neural Network Effect */}
              <motion.div className="absolute inset-0">
                {/* Central AI Brain */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: [0, 1, 1.1, 1],
                    rotate: [0, 360, 360, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50">
                    <div className="absolute inset-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-80 animate-pulse"></div>
                    <div className="absolute inset-4 bg-white rounded-full opacity-90 animate-ping"></div>
                  </div>
                </motion.div>

                {/* Neural Network Nodes */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0.8, 1],
                        opacity: [0, 1, 0.7, 1],
                        x: [0, x * 0.8, x, x * 0.9],
                        y: [0, y * 0.8, y, y * 0.9]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full shadow-lg shadow-emerald-400/60 animate-pulse"></div>
                    </motion.div>
                  );
                })}

                {/* AI Data Streams */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={`stream-${i}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                  >
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <motion.path
                        d={`M ${50 + Math.cos(i * 90 * Math.PI / 180) * 12} ${50 + Math.sin(i * 90 * Math.PI / 180) * 12} 
                           Q ${50 + Math.cos(i * 90 * Math.PI / 180) * 35} ${50 + Math.sin(i * 90 * Math.PI / 180) * 35}
                           ${50 + Math.cos(i * 90 * Math.PI / 180) * 25} ${50 + Math.sin(i * 90 * Math.PI / 180) * 25}`}
                        stroke="url(#aiGradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,10"
                      />
                      <defs>
                        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                ))}

                {/* AI Code Particles - Random Radiating from Below Center */}
                <div className="hidden sm:block">
                {['AI', '{}', '<>', '01', 'ML', 'λ', 'Σ', '∞', 'fn', 'var', 'if', 'for', 'API', 'JSON', 'HTTP', 'CSS', 'JS', 'TS'].map((symbol, i) => {
                  // Random angle but only bottom half (180° to 360°)
                  const randomAngle = (Math.random() * 180 + 180) * (Math.PI / 180);
                  const startRadius = 50 + Math.random() * 20; // Start below the center circle
                  const endRadius = 120 + Math.random() * 60; // Random end distance
                  
                  return (
                    <motion.div
                      key={`particle-${i}`}
                      initial={{ 
                        x: 0,
                        y: 0,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{ 
                        x: [
                          0,
                          Math.cos(randomAngle) * startRadius,
                          Math.cos(randomAngle) * endRadius,
                          Math.cos(randomAngle) * (endRadius + Math.random() * 30),
                          Math.cos(randomAngle) * (startRadius + Math.random() * 20)
                        ],
                        y: [
                          40, // Start 40px below center
                          40 + Math.sin(randomAngle) * startRadius,
                          40 + Math.sin(randomAngle) * endRadius,
                          40 + Math.sin(randomAngle) * (endRadius + Math.random() * 30),
                          40 + Math.sin(randomAngle) * (startRadius + Math.random() * 20)
                        ],
                        opacity: [0, 0.8, 1, 0.6, 0],
                        scale: [0, 0.8 + Math.random() * 0.4, 1.2 + Math.random() * 0.6, 0.9, 0],
                        rotate: [0, Math.random() * 360, Math.random() * 720]
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 4, // Random duration 4-8s
                        delay: Math.random() * 3, // Random delay 0-3s
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-mono font-bold text-blue-400 select-none"
                      style={{
                        filter: `hue-rotate(${Math.random() * 60}deg)` // Random color variation
                      }}
                    >
                      {symbol}
                    </motion.div>
                  );
                })}
                </div>

                {/* Micro Particles */}
                <div className="hidden md:block">
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.div
                    key={`micro-${i}`}
                    initial={{ 
                      x: 150 + (Math.cos(i * 24 * Math.PI / 180) * 100),
                      y: 150 + (Math.sin(i * 24 * Math.PI / 180) * 100),
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{ 
                      x: [
                        150 + (Math.cos(i * 24 * Math.PI / 180) * 100),
                        150 + (Math.cos(i * 24 * Math.PI / 180) * 120),
                        150 + (Math.cos(i * 24 * Math.PI / 180) * 80)
                      ],
                      y: [
                        150 + (Math.sin(i * 24 * Math.PI / 180) * 100),
                        150 + (Math.sin(i * 24 * Math.PI / 180) * 120),
                        150 + (Math.sin(i * 24 * Math.PI / 180) * 80)
                      ],
                      opacity: [0, 0.8, 0.3, 0],
                      scale: [0, 1, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-1 h-1 bg-cyan-300 rounded-full shadow-sm shadow-cyan-300/80"
                  />
                ))}
                </div>

                {/* Orbiting Energy Rings */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20 + i * 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div 
                      className={`border border-dashed ${i === 0 ? 'border-pink-400' : 'border-emerald-400'} rounded-full opacity-30`}
                      style={{ 
                        width: `${180 + i * 40}px`, 
                        height: `${180 + i * 40}px` 
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          rotate: [0, -360]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute w-2 h-2 ${i === 0 ? 'bg-pink-400' : 'bg-emerald-400'} rounded-full shadow-lg`}
                        style={{ top: '-4px', left: '50%', marginLeft: '-4px' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Top on mobile, Right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-center lg:text-left order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight"
              >
                {t('hero.greeting')}{' '}
                <span className="text-gray-800">{t('hero.name')}</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-2xl md:text-3xl text-gray-600 font-medium"
              >
                {t('hero.title')}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary text-lg px-8 py-4"
              >
                {t('hero.viewWork')}
              </button>
              <button
                onClick={downloadCV}
                className="btn-secondary text-lg px-8 py-4"
              >
                {t('hero.downloadCV')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
