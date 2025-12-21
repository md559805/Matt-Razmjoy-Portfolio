import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mohammadrazmjoy853@gmail.com',
      link: 'mailto:mohammadrazmjoy@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+98 991 548 3163',
      link: 'tel:+989915483163',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tabriz, Iran',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/md559805',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mohammad-razmjoy-210925368/',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3fff00] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3fff00] rounded-full blur-3xl animate-pulse" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white pixelated mb-4">CONTACT ME</h2>
          <div className="w-24 h-1 bg-[#3fff00] mx-auto mb-6" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Let's work together on your next project. Get in touch and let's make something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-4 md:mb-6 pixelated">GET IN TOUCH</h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-3 md:gap-4 bg-gray-900 p-3 md:p-4 rounded-lg border border-gray-700 hover:border-[#3fff00] transition-all duration-300"
                  >
                    <div className="p-2 md:p-3 bg-[#3fff00]/10 rounded-lg">
                      <info.icon className="text-[#3fff00]" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-xs md:text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-[#3fff00] transition-colors break-all text-xs md:text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white break-all text-xs md:text-sm">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="text-white text-sm md:text-base mb-4">Follow Me</h4>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 bg-gray-900 border border-gray-700 hover:border-[#3fff00] rounded-lg transition-all duration-300 group"
                  >
                    <social.icon className="text-gray-400 group-hover:text-[#3fff00] transition-colors" size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-xs md:text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-[#3fff00] focus:outline-none transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-xs md:text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-[#3fff00] focus:outline-none transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-xs md:text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-[#3fff00] focus:outline-none transition-colors text-sm"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2 text-xs md:text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-[#3fff00] focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 md:px-8 md:py-4 bg-[#3fff00] text-gray-900 hover:bg-[#33cc00] transition-all duration-300 flex items-center justify-center gap-2 group text-sm md:text-base"
              >
                <span>SEND MESSAGE</span>
                <Send className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
