import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { SERVICES, FEATURED_PROJECTS } from '../data/studioData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
              Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              Disciplined architectural services from raw land to finished detail.
            </h2>
            <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
              We guide clients through the entire lifecycle of custom residential construction.
              Explore our four primary practice domains below.
            </p>
          </div>
        </div>

        {/* 4 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-xs hover:border-stone-400/80 transition-all duration-300"
            >
              <div>
                {/* Image Aspect Box */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/10 to-transparent" />

                  {/* Editorial Index Number */}
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-md tracking-wider">
                    {service.number}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-stone-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-stone-600 mt-1 leading-snug">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key points preview */}
                  <div className="pt-2 space-y-2 border-t border-stone-100">
                    {service.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle className="w-3.5 h-3.5 text-stone-700 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 transition-colors py-2"
                >
                  <span>View Details & Timeline</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 rounded-md hover:bg-stone-800 active:bg-stone-950 transition-colors whitespace-nowrap"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Claim-to-Proof Adjacency: Recent Project Proof */}
        <div className="mt-16 pt-12 border-t border-stone-200 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                Adjacent Case Proof
              </div>
              <h3 className="text-2xl font-bold text-stone-900">
                Recent Client Commissions
              </h3>
            </div>
            <p className="text-xs text-stone-500">
              Verified residential builds across Oregon & Washington.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-xl bg-white border border-stone-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span>{proj.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.year}</span>
                  </div>
                  <h4 className="text-lg font-bold text-stone-900">{proj.title}</h4>
                  <div className="text-xs font-medium text-stone-600">
                    {proj.type} · {proj.area}
                  </div>
                  <blockquote className="text-xs text-stone-600 italic border-l-2 border-stone-300 pl-3 pt-1">
                    "{proj.testimonial.quote}"
                  </blockquote>
                </div>

                <div className="pt-2 text-xs font-semibold text-stone-800 border-t border-stone-100">
                  {proj.testimonial.client}
                  <span className="block font-normal text-stone-500 text-[11px]">
                    {proj.testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={onSelectService}
      />
    </section>
  );
};
