import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      company: 'InnovateTech',
      rating: 5,
      text: 'Working with Matt was an absolute pleasure. His attention to detail and creative problem-solving skills helped us launch our product ahead of schedule. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Digital Solutions Inc',
      rating: 5,
      text: 'Matt\'s technical expertise and design sensibility are unmatched. He transformed our vision into a beautiful, functional product that exceeded all expectations.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Director',
      company: 'Creative Agency',
      rating: 5,
      text: 'An exceptional developer who truly understands design. Matt brought our creative concepts to life with pixel-perfect precision and smooth animations.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Founder',
      company: 'StartupHub',
      rating: 5,
      text: 'Matt is a rare find - someone who excels at both development and design. His work on our platform was instrumental to our success. Would work with him again in a heartbeat!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#3fff00] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#3fff00] rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white pixelated mb-4">TESTIMONIALS</h2>
          <div className="w-24 h-1 bg-[#3fff00] mx-auto mb-4 md:mb-6" />
          <p className="text-gray-400 text-sm xs:text-base md:text-lg max-w-2xl mx-auto">
            What clients and collaborators say about working with me
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Main Testimonial Card */}
          <div className="bg-gray-900 rounded-lg p-6 md:p-12 border border-gray-700 relative">
            {/* Quote Icon */}
            <Quote className="text-[#3fff00] opacity-20 absolute top-6 left-6" size={56} />

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-[#3fff00] fill-[#3fff00]" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#3fff00]"
                />
                <div>
                  <h4 className="text-white text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-700 hover:bg-[#3fff00] text-white hover:text-gray-900 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-700 hover:bg-[#3fff00] text-white hover:text-gray-900 rounded-full transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-[#3fff00]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-[#3fff00] pixelated mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-[#3fff00] pixelated mb-2">100%</div>
            <div className="text-gray-400">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl text-[#3fff00] pixelated mb-2">5.0</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
