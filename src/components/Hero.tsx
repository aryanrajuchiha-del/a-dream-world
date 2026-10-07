import React from 'react';
import { ArrowDown, Calendar, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { STUDIO_INFO, STUDIO_METRICS } from '../data/studioData';

interface HeroProps {
  onGetStarted: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top subtle orientation text */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-stone-500 mb-4">
          <span>Bespoke Architecture</span>
          <span aria-hidden="true">·</span>
          <span>Pacific Northwest</span>
          <span aria-hidden="true">·</span>
          <span>Est. {STUDIO_INFO.establishedYear}</span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, description, CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] text-balance">
              Architecture designed for light, permanence, and human rhythm.
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl">
              We are an independent architectural practice crafting custom timber homes,
              sustainable renovations, and bespoke spatial interiors that respond to their natural terrain.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 active:bg-stone-950 transition-all duration-200 shadow-sm focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:ring-offset-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100/80 active:bg-stone-200 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-800"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-stone-700" />
                <span>Licensed NCARB Practice</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-stone-700" />
                <span>AIA Regional Design Honors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-stone-700" />
                <span>Now Booking 2026–2027 Commissions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-stone-200 aspect-4/3 lg:aspect-5/4 shadow-md group">
              <img
                src="/src/assets/images/hero_architecture_1791416936635.jpg"
                alt="Cedar and glass custom home nestled in Pacific Northwest forest"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-stone-100 space-y-1">
                <div className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                  Featured Commission
                </div>
                <div className="text-sm font-semibold text-white">
                  Hood River Ridge Residence · Mass Timber & Basalt
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Grid (Claim-to-Proof Adjacency) */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STUDIO_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-stone-800">
                {metric.label}
              </div>
              <div className="text-xs text-stone-500 leading-relaxed">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
