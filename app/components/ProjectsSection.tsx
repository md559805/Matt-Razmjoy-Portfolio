import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './Picture/ImageWithFallback';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Matt's Wear",
      description: 'Modern Website for a clothing store showcasing new arrivals, products, sales, gift cards and contact options. Includes static pages for Login/Sign-up, a hero/banner slider, floating social buttons, and a blog/newsletter section.',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      image: 'Pics/Blue-Shop.jpg',
    },
    {
      id: 2,
      title: 'Health Care WebApplication',
      description: 'Cross-platform Health Care WebApplication with personalized workout plans and social features.',
      category: 'web',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Comprehensive component library and design system for enterprise applications.',
      category: 'design',
      tags: ['Figma', 'Storybook', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
      id: 4,
      title: 'PhoneBook Terminal App',
      description: 'This a complete terminal based application for managing contacts that can add, remove, save, load & etc.',
      category: 'Application',
      tags: ['C++', 'Terminal', 'OOP'],
      image: 'Pics/PhoneBook.jpg',
    },
    {
      id: 5,
      title: 'Ething',
      description: 'Ething provides the knowledge about everything for the user.',
      category: 'web',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      image: 'Pics/Everything.png',
    },
    {
      id: 6,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, color palette, and marketing materials.',
      category: 'design',
      tags: ['Illustrator', 'Photoshop', 'Branding'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'Application', label: 'Application' },
    { id: 'design', label: 'Design' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white pixelated mb-4">PROJECTS</h2>
          <div className="w-24 h-1 bg-[#3fff00] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work across web development, mobile apps, and design
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === f.id
                  ? 'bg-[#3fff00] text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#3fff00] transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-[#3fff00] text-gray-900 rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-2 bg-[#3fff00] text-gray-900 rounded-full hover:scale-110 transition-transform">
                    <Github size={16} />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-base sm:text-lg md:text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-[#3fff00] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-transparent border-2 border-[#3fff00] text-[#3fff00] hover:bg-[#3fff00] hover:text-gray-900 transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </motion.div>
      </div>
    </section>
  );
}
