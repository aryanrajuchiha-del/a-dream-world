import React from 'react';
import { Compass, Leaf, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO, PHILOSOPHY_PILLARS, STUDIO_TEAM } from '../data/studioData';

export const About: React.FC = () => {
  const pillarIcons = [Compass, Leaf, HeartHandshake];

  return (
    <section id="about" className="py-20 md:py-28 bg-stone-100/70 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
            About the Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Crafting buildings that belong to their landscape and outlast trends.
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed pt-1">
            Founded in Portland in 2014, {STUDIO_INFO.name} was established on a simple belief:
            architecture should be quiet, honest, and profoundly attuned to how people actually live.
            We work hand-in-hand with homeowners and regional artisans to shape structures of lasting dignity.
          </p>
        </div>

        {/* Narrative & Studio Image Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-stone-200 aspect-4/3 shadow-sm border border-stone-200/60 group">
              <img
                src="/src/assets/images/about_studio_craft_1791416951095.jpg"
                alt="Architectural drafting desk with blueprint drawings, oak samples, and timber scale models"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-0.5">
                <span className="font-semibold block">The Drafting Studio</span>
                <span className="text-stone-300">Material samples, physical models, and working drawings</span>
              </div>
            </div>
          </div>

          {/* Narrative text & approach */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              <p>
                Unlike volume production firms, we take on only a handful of commissions simultaneously.
                This allows our principals to personally oversee every nuance — from initial sun-path
                calibrations to the millwork clearances of your morning coffee pantry.
              </p>
              <p>
                Every project begins on the dirt. We spend hours walking the topography, watching the prevailing
                winds, and observing how daylight filters through surrounding trees before putting pencil to paper.
              </p>
            </div>

            {/* Core commitments */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-stone-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Construction Costing:</strong> We design to your authentic budget, keeping contractor estimates aligned from schematic design.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Deep Building Science:</strong> Certified passive house principles, airtight thermal envelopes, and low-VOC healthy interior air quality.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <span>
                  <strong>Full Turnkey Oversight:</strong> Direct on-site representation and permit approvals handled entirely by our registered architects.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Philosophy Pillars */}
        <div className="space-y-6 pt-4">
          <div className="border-t border-stone-200/80 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 mb-6">
              Our Core Design Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => {
                const IconComponent = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border border-stone-200/80 shadow-xs space-y-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-stone-900">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="pt-2 text-xs font-medium text-stone-500 border-t border-stone-100">
                      {pillar.keyAspect}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Studio Leadership */}
        <div className="border-t border-stone-200/80 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                Studio Leadership
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Architects & Craft Directors
              </h3>
            </div>
            <p className="text-xs text-stone-500 max-w-sm">
              Direct principal involvement on every drawing, meeting, and site inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STUDIO_TEAM.map((member, i) => (
              <div
                key={i}
                className="p-5 rounded-lg bg-stone-50/80 border border-stone-200 space-y-2"
              >
                <div className="text-sm font-semibold text-stone-900">{member.name}</div>
                <div className="text-xs font-medium text-stone-600">{member.role}</div>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
