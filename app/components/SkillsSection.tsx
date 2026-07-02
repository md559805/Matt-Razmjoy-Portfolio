import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 75 },
        { name: 'Tailwind CSS', level: 70 }, 
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 62 },
        { name: 'Express.js', level: 62 },
        { name: 'MySQL', level: 65 },
        { name: 'REST APIs', level: 69 },
      ],
    },
    {
      category: 'Design',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 79 },
        { name: 'UI/UX Design', level: 82 },
        { name: 'Prototyping', level: 80 },
      ],
    },
    {
      category: 'Networking Fundamentals',
      skills: [
        { name: 'TCP/IP Stack', level: 93 },
        { name: 'OSI Model', level: 93 },
        { name: 'Subnetting & CIDR', level: 73 },
        { name: 'VLANs, NAT, DHCP, DNS', level: 75 },
        { name: 'Routing & Switching (Static/Dynamic, OSPF, BGP)', level: 79 },
        { name: 'Network Topologies', level: 81 },
      ],
    },
    {
      category: 'CyberSecurity Fundamentals',
      skills: [
        { name: 'CIA Triad', level: 70 },
        { name: 'Common Attacks(Phishing, MITM, DoS/DDoS, SQL Injection, XSS)', level: 73 },
        { name: 'Security Policies & Best Practices', level: 71 },
        { name: 'Authentication vs Authorization', level: 76 },
      ],
    },
    {
      category: 'CyberSecurity Tools',
      skills: [
        { name: 'Kali Linux', level: 70 },
        { name: 'Wireshark', level: 75 },
        { name: 'Nmap', level: 68 },
        { name: 'Nessus', level: 70 },
      ],
    },
    {
      category: 'Scripting & Automation',
      skills: [
        { name: 'Python For Cybersecurity', level: 72 },
        { name: 'Bash / Shell', level: 70 },
        { name: 'PowerShell', level: 68 },
        { name: 'Automation Basics', level: 62 },
      ],
    },
    {
      category: 'Dev Languages',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'C++', level: 85 },
      ],
    },
    {
      category: 'Languages',
      skills: [
        { name: 'Turkish', level: 100 },
        { name: 'Persian', level: 100 },
        { name: 'English', level: 98 },
        { name: 'Istanbul Turkish', level: 75 },
        { name: 'Germany', level: 53 },
        { name: 'Spanish', level: 25 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#3fff00 1px, transparent 1px), linear-gradient(90deg, #3fff00 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white pixelated mb-4">SKILLS</h2>
          <div className="w-24 h-1 bg-[#3fff00] mx-auto mb-6" />
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional digital products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900 p-6 sm:p-8 rounded-lg border border-gray-700 hover:border-[#3fff00] transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl text-[#3fff00] mb-4 pixelated">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-sm sm:text-base">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-[#3fff00] to-[#2ecc00] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git',
              'Github',
              'Putty',
              'Postman',
              'DB Browser',
              'VMs',
              'Zenmap',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-[#3fff00] hover:text-gray-900 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
