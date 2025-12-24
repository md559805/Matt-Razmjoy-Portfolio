import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#3fff00] rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Image - Positioned Behind Text (responsive sizing for small screens) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-40 sm:w-56 md:w-2/5 lg:w-2/5 h-auto opacity-25 md:opacity-40"
      >
        <img
          src="/Matt-Razmjoy-Portfolio/Pics/Profile.png"
          alt="Matt Razmjouty Portfolio"
          className="w-full h-auto object-cover rounded-lg"
        />
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[#3fff00]/20 blur-3xl -z-10 rounded-lg" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl px-6 py-12 md:py-20 md:ml-[-10%] lg:ml-[-30%]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#3fff00] text-lg sm:text-xl md:text-2xl tracking-wider"
          >
            WELCOME TO MY PORTFOLIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              text-[2.8rem]
              leading-[1.05]
              sm:text-5xl sm:leading-tight
              md:text-7xl md:leading-tight
              lg:text-8xl lg:leading-tight
              text-white
              pixelated
              tracking-wide
            "
            style={{
              textShadow: `
                1px 1px 0 #3fff00,
                2px 2px 0 #3fff00,
                3px 3px 0 #3fff00,
                4px 4px 0 #2dd000,
                5px 5px 0 #2dd000,
                6px 6px 0 #1aa000,
                7px 7px 10px rgba(0, 0, 0, 0.45)
              `,
              transform:
                typeof window !== 'undefined' && window.innerWidth < 640
                  ? 'none'
                  : 'perspective(600px) rotateX(5deg)',
            }}
          >
            MATT
            <br />
            RAZMJOY
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-lg md:max-w-2xl"
          >
            Creative Developer & Designer | Building Digital Experiences That Inspire
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 pt-4"
          >
            <button
              onClick={scrollToAbout}
              className="px-6 py-3 bg-[#3fff00] text-gray-900 hover:bg-[#33cc00] transition-all duration-300 shadow-lg hover:shadow-[#3fff00]/50 text-sm"
            >
              EXPLORE
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 border-2 border-[#3fff00] text-[#3fff00] hover:bg-[#3fff00] hover:text-gray-900 transition-all duration-300 text-sm"
            >
              GET IN TOUCH
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-[#3fff00]" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}