import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/studioData';
import { ContactFormData } from '../types';

interface ContactProps {
  preselectedServiceId?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceId: preselectedServiceId || 'residential-architecture',
    budgetRange: '$250k – $500k',
    timeline: 'Within 6 months',
    message: '',
  });

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionId(`MRD-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceId: 'residential-architecture',
      budgetRange: '$250k – $500k',
      timeline: 'Within 6 months',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-stone-100/60 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
            Direct Studio Inquiry
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            Let’s discuss your site, vision, and timeline.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            We welcome inquiries for custom residences, architectural renovations, and spatial interiors.
            Reach out by phone, email, or send us project notes below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
                Studio Headquarters
              </h3>

              {/* Phone */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-stone-500">Telephone</div>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-sm font-semibold text-stone-900 hover:text-stone-700 transition-colors"
                    >
                      {STUDIO_INFO.formattedPhone}
                    </a>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      Direct studio line during business hours
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(STUDIO_INFO.phone, 'phone')}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-50 transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-800" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-stone-500">Email Address</div>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-sm font-semibold text-stone-900 hover:text-stone-700 transition-colors break-all"
                    >
                      {STUDIO_INFO.email}
                    </a>
                    <div className="text-[11px] text-stone-500 mt-0.5">
                      Average reply time under 24 business hours
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(STUDIO_INFO.email, 'email')}
                  className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md hover:bg-stone-50 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-800" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-stone-500">Studio Location</div>
                  <div className="text-sm font-semibold text-stone-900">
                    {STUDIO_INFO.address}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    Consultations by advance appointment
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-stone-500">Office Hours</div>
                  <div className="text-sm font-semibold text-stone-900">
                    {STUDIO_INFO.hours}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    Closed weekends & federal holidays
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility note */}
            <div className="p-5 rounded-xl bg-stone-200/50 border border-stone-200 text-xs text-stone-600 space-y-1">
              <span className="font-semibold text-stone-800 block">Initial Discovery Calls</span>
              <p>
                Every new project inquiry receives a 30-minute discovery consultation with one of our
                licensed architects to review zoning constraints and preliminary budgeting.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-stone-900">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-stone-600 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>.
                      Elena Vance and our design team will review your project details and follow up within one business day.
                    </p>
                  </div>

                  {/* Submission details recap */}
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 max-w-md mx-auto text-left text-xs text-stone-600 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Reference Number:</span>
                      <span className="font-mono font-semibold text-stone-900 tabular-nums">
                        {submissionId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Email:</span>
                      <span className="font-semibold text-stone-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Selected Service:</span>
                      <span className="font-semibold text-stone-900">
                        {SERVICES.find((s) => s.id === formData.serviceId)?.title || 'Architecture'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center gap-2 pb-1 border-b border-stone-100">
                    <MessageSquare className="w-4 h-4 text-stone-700" />
                    <span className="text-sm font-semibold text-stone-900">
                      Send a Project Inquiry
                    </span>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-semibold text-stone-800">
                        Your Name <span className="text-rose-700">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Elena Vance"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50/50 border transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 ${
                          errors.fullName
                            ? 'border-rose-400 bg-rose-50/20'
                            : 'border-stone-300 hover:border-stone-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-700 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-stone-800">
                        Email Address <span className="text-rose-700">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="elena@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50/50 border transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 ${
                          errors.email
                            ? 'border-rose-400 bg-rose-50/20'
                            : 'border-stone-300 hover:border-stone-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-700 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-stone-800">
                        Phone Number <span className="text-stone-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(503) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50/50 border border-stone-300 hover:border-stone-400 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="serviceId" className="block text-xs font-semibold text-stone-800">
                        Primary Service
                      </label>
                      <select
                        id="serviceId"
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50/50 border border-stone-300 hover:border-stone-400 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="budgetRange" className="block text-xs font-semibold text-stone-800">
                        Estimated Budget Bracket
                      </label>
                      <select
                        id="budgetRange"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50/50 border border-stone-300 hover:border-stone-400 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                      >
                        <option value="$100k – $250k">$100,000 – $250,000</option>
                        <option value="$250k – $500k">$250,000 – $500,000</option>
                        <option value="$500k – $1M">$500,000 – $1,000,000</option>
                        <option value="$1M+">$1,000,000+</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="timeline" className="block text-xs font-semibold text-stone-800">
                        Anticipated Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50/50 border border-stone-300 hover:border-stone-400 transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800"
                      >
                        <option value="Immediately (1-3 months)">Immediately (1–3 months)</option>
                        <option value="Within 6 months">Within 6 months</option>
                        <option value="Planning for next year">Planning for next year</option>
                        <option value="Land acquisition in progress">Land acquisition in progress</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-stone-800">
                      Project Notes / Site Description <span className="text-rose-700">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about the site location, number of bedrooms, architectural inspirations, or existing structure..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-stone-50/50 border transition-colors focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-stone-800 ${
                        errors.message
                          ? 'border-rose-400 bg-rose-50/20'
                          : 'border-stone-300 hover:border-stone-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-700 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 active:bg-stone-950 transition-colors disabled:opacity-50 shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <span className="block sm:inline-block sm:ml-4 text-[11px] text-stone-500 mt-2 sm:mt-0">
                      We treat your project information with strict confidentiality.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
