import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Lightbulb, Target } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable applications with modern technologies',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Thinking outside the box to solve complex problems',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Delivering results that exceed expectations',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#3fff00] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3fff00] rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white pixelated mb-4">ABOUT ME</h2>
          <div className="w-24 h-1 bg-[#3fff00] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-base leading-relaxed">
              I'm a passionate developer and designer with a love for creating unique digital
              experiences. My journey in tech started with curiosity and has evolved into a
              career focused on innovation and creativity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in turning complex problems into elegant solutions, combining technical
              expertise with creative vision. Whether it's building web applications, designing
              user interfaces, or exploring new technologies, I bring enthusiasm and dedication
              to every project.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring design trends, contributing to
              open-source projects, and constantly learning new skills to stay at the forefront
              of technology.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl text-[#3fff00] pixelated">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px bg-gray-700 h-6" />
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl text-[#3fff00] pixelated">30+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px bg-gray-700 h-6" />
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl text-[#3fff00] pixelated">10+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[#3fff00] transition-all duration-300 group"
              >
                <feature.icon className="text-[#3fff00] mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg sm:text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
