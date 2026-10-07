import React, { useEffect } from 'react';
import { X, Check, Clock, Users, FileText, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image Banner */}
        <div className="relative h-52 sm:h-60 w-full bg-stone-200 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold tracking-wider uppercase text-stone-300">
              Service {service.number}
            </span>
            <h3 id="modal-service-title" className="text-2xl font-bold text-white mt-0.5">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="space-y-2">
            <h4 className="text-base font-semibold text-stone-900">{service.tagline}</h4>
            <p className="text-sm text-stone-600 leading-relaxed">{service.description}</p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-stone-900">Typical Timeline</span>
                <span>{service.timeline}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-stone-900">Ideal For</span>
                <span>{service.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500">
              <FileText className="w-4 h-4 text-stone-700" />
              <span>Scope & Core Deliverables</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              Close Window
            </button>
            <button
              onClick={() => {
                onSelectService(service.id);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 active:bg-stone-950 transition-colors shadow-xs"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
