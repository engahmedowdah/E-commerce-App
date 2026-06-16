import React from 'react';
import ContactHero from '../../Components/ContactHero';
import ContactForm from '../../Components/ContactForm';
import ContactInfo from '../../Components/ContactInfo';
import MapSection from '../../Components/MapSection';

function ContactUsPage(): React.ReactNode {
  return (
    <main className="max-w-7xl mx-auto px-container-margin py-section-gap">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Contact Form */}
        <ContactForm />
        
        {/* Right Column: Details & Map */}
        <div className="space-y-8">
          <ContactInfo />
          <MapSection />
        </div>
      </div>
    </main>
  );
}

export default ContactUsPage;
