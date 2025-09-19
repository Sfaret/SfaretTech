"use client";
import React from 'react';

const partners = [
  "Google", "GitHub", "Meta", "Zoho", "Go54", "Microsoft", "OpenAI", "Flutterwave"
];
const allPartners = [...partners, ...partners, ...partners]; // Duplicate for smooth looping

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold font-headline mb-8">
          Powered By
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {allPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-6 text-muted-foreground text-2xl font-semibold">
                {partner}
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
              width: 200%; /* Adjust based on number of items */
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
