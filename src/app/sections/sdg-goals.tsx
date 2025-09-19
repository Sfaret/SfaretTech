import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Landmark, GraduationCap, Briefcase, Factory, Building2 } from "lucide-react";
import React from 'react';

const sdgGoals = [
  {
    icon: <Landmark className="h-6 w-6 text-primary" />,
    title: "No Poverty (SDG 1)",
    content: "At SFARET, we are committed to eradicating poverty by providing access to education and technology that enables individuals to lift themselves out of poverty. Our AI-powered platform helps create job opportunities and empower marginalized communities.",
    value: "item-1"
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Quality Education (SDG 4)",
    content: "We aim to improve access to quality education worldwide. Through our innovative platform, we provide affordable learning solutions that enhance the learning experience, focusing on technology-driven education for all.",
    value: "item-2"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Decent Work and Economic Growth (SDG 8)",
    content: "SFARET is focused on generating decent work opportunities and promoting economic growth through our EdTech solutions. Our platform not only empowers students but also helps educational institutions grow and contribute to the economy.",
    value: "item-3"
  },
  {
    icon: <Factory className="h-6 w-6 text-primary" />,
    title: "Industry, Innovation, and Infrastructure (SDG 9)",
    content: "Our solutions promote innovation in the education sector. By advancing the use of technology and AI, we help build sustainable infrastructure in schools and universities, fostering a modern, forward-thinking educational environment.",
    value: "item-4"
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Sustainable Cities and Communities (SDG 11)",
    content: "SFARET supports sustainable development by creating smart, resilient, and inclusive educational systems that contribute to the creation of sustainable cities and communities. We integrate technology to improve the quality of life and reduce environmental impact.",
    value: "item-5"
  },
];

const SdgGoalsSection = () => {
  return (
    <section id="sdg-goals" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">SFARET SDG Goals: Driving Positive Change</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-2" className="w-full">
            {sdgGoals.map((goal) => (
              <AccordionItem key={goal.value} value={goal.value}>
                <AccordionTrigger className="text-lg font-semibold font-headline hover:no-underline">
                  <div className="flex items-center gap-4">
                    {goal.icon}
                    <span>{goal.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pl-14">
                  {goal.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SdgGoalsSection;
