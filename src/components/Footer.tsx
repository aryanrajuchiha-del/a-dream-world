import React from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Col 1: Studio Wordmark & Brief */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white block">
              {STUDIO_INFO.name}
            </span>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {STUDIO_INFO.tagline} Registered architectural practice licensed in Oregon, Washington,
              and Idaho.
            </p>
            <div className="text-xs text-stone-500 pt-2">
              {STUDIO_INFO.license}
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Architectural Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Studio Office
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-stone-400">
              <p>{STUDIO_INFO.address}</p>
              <p>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  {STUDIO_INFO.formattedPhone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="hover:text-white transition-colors text-stone-300"
                >
                  {STUDIO_INFO.email}
                </a>
              </p>
              <p className="text-[11px] text-stone-500 pt-1">
                {STUDIO_INFO.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Clean Architecture · High Craftsmanship</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
