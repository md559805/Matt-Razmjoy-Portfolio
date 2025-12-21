import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl text-[#3fff00] hover:text-[#33cc00] transition-colors pixelated"
            >
              MATT RAZMJOY
            </button>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Matt Razmjoy. Made with</span>
            <Heart className="text-[#3fff00] fill-[#3fff00]" size={16} />
            <span>and lots of code</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-gray-400 text-sm">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#3fff00] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#3fff00] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#3fff00] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
