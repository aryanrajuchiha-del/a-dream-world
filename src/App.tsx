/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FaqSection } from './components/FaqSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('residential-architecture');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceForContact(serviceId);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-stone-800 selection:text-stone-50">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onGetStarted={() => scrollToSection('contact')}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <Contact preselectedServiceId={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onDirectToContact={(serviceId) => {
          setSelectedServiceForContact(serviceId);
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
