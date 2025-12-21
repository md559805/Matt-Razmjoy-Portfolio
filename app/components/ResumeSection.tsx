import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'Junior Full Stack Developer',
      company: 'Self Employed',
      period: '2024 - Present',
      description:
        'Created engaging user interfaces, worked closely with designers, and ensured cross-browser compatibility.',
      achievements: [
        'Developed component library used across 10+ projects',
        'Improved accessibility scores to AA standard',
        'Reduced bug reports by 40% through better testing',
        'Reduced page load time by 60% through optimization',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Cyberra Company',
      period: '2024 - 2025',
      description:
        'Developed and maintained multiple client projects, collaborated with design team, and improved development workflows.',
      achievements: [
        'Built 15+ responsive web applications',
        'Increased code test coverage to 85%',
        'Introduced React best practices to the team',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Azad University',
      period: '2025 - Present',
      description: 'Specialized in Software Engineering and Human-Computer Interaction',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Azad University',
      period: '2024 - 2025',
      description: 'Focus on Web Development and Database Systems',
    },
  ];

  const certifications = [
    'HTML5, CSS3, JavaScript Certification',
    'C++ Intermediate Programming Certificate',
    'React Developer Certification',
    'Backend Development with Node.js Certificate',
  ];

  return (
    <section id="resume" className="py-12 md:py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #3fff00 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white pixelated mb-4">RESUME</h2>
          <div className="w-24 h-1 bg-[#3fff00] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            My professional journey and academic background
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#3fff00] text-gray-900 hover:bg-[#33cc00] transition-all duration-300">
            <Download size={20} />
            DOWNLOAD RESUME
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-[#3fff00]" size={28} />
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white pixelated">EXPERIENCE</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative pl-10 sm:pl-12 border-l-2 border-gray-700 hover:border-[#3fff00] transition-all duration-300 w-full"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#3fff00] rounded-full" />

                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-xl text-white mb-1">{exp.title}</h4>
                          <p className="text-[#3fff00]">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-[#3fff00] mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications Column */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-[#3fff00]" size={28} />
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white pixelated">EDUCATION</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-[#3fff00] transition-all duration-300"
                  >
                    <h4 className="text-lg text-white mb-2">{edu.degree}</h4>
                    <p className="text-[#3fff00] mb-2">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-[#3fff00]" size={28} />
                <h3 className="text-xl sm:text-2xl md:text-3xl text-white pixelated">CERTIFICATIONS</h3>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={cert}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-[#3fff00] mt-1">✓</span>
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
