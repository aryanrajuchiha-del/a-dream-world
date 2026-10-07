import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/studioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDirectToContact: (serviceId: string) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onDirectToContact,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('Next Tuesday, 10:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [serviceChoice, setServiceChoice] = useState('residential-architecture');
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      setError('Please provide your name and email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail.trim())) {
      setError('Please provide a valid email address');
      return;
    }

    setError('');
    setBooked(true);
  };

  const availableSlots = [
    'Thursday, 10:00 AM PST',
    'Thursday, 2:30 PM PST',
    'Friday, 11:00 AM PST',
    'Next Monday, 9:30 AM PST',
    'Next Tuesday, 2:00 PM PST',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden z-10 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-700 rounded-md transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="py-6 text-center space-y-4 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-stone-900">
                Discovery Session Reserved
              </h3>
              <p className="text-sm text-stone-600 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-stone-900">{clientName}</span>.
                A calendar invitation for <strong className="text-stone-900">{selectedDate}</strong> has been sent to {clientEmail}.
              </p>
            </div>
            <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-stone-800 font-medium">
                <Clock className="w-4 h-4" />
                <span>30-Minute Video Consultation with Principal Architect</span>
              </div>
              <p className="text-[11px] text-stone-500">
                Feel free to prepare photos of your property or initial inspiration sketches.
              </p>
            </div>
            <button
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              className="px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Complimentary 30-Min Discovery
              </div>
              <h3 id="consultation-title" className="text-2xl font-bold text-stone-900 mt-1">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Speak directly with an architect to discuss your site, budget range, and permitting timeline.
              </p>
            </div>

            {error && (
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                {error}
              </div>
            )}

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-stone-50 border border-stone-300 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-stone-50 border border-stone-300 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Area of Interest
                </label>
                <select
                  value={serviceChoice}
                  onChange={(e) => setServiceChoice(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-stone-50 border border-stone-300 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-stone-600" />
                  <span>Select Consultation Window</span>
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-stone-50 border border-stone-300 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                >
                  {availableSlots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onDirectToContact(serviceChoice);
                }}
                className="text-xs text-stone-600 hover:text-stone-900 transition-colors py-1"
              >
                Or send written inquiry instead
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 active:bg-stone-950 transition-colors shadow-xs"
              >
                <span>Confirm Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
