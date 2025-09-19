
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Search, School, Brain, ChevronDown } from "lucide-react";
import Link from 'next/link';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const ecosystemProducts = [
  {
    icon: <BookOpen className="w-10 h-10 text-accent" />,
    title: "S-TIPS",
    description: "Student-Tailored Interactive Platform for Support.",
    link: "/product",
    popupDescription: "Student-Tailored Interactive Platform: AI-powered academic assistant that helps with task submission, voice automation, and personalized study tools."
  },
  {
    icon: <Search className="w-10 h-10 text-accent" />,
    title: "G-SEE",
    description: "Global Search Engine for Educational-Institutions.",
    link: "#",
    popupDescription: "Gamified Student Engagement & Excellence: CBT exams, e-library, performance tracking, AI search, and gamified competitions to improve student success."
  },
  {
    icon: <School className="w-10 h-10 text-accent" />,
    title: "EDU-HUB",
    description: "Hub for Educational Resources and Professional Development.",
    link: "#",
    popupDescription: "EDU-TECH RESEARCH LIBRARY CENTER: A hybrid tech space empowering students, educators, and startups through academic incubation and advanced learning facilities."
  },
  {
    icon: <Brain className="w-10 h-10 text-accent" />,
    title: "SkoolBrain",
    description: "AI-Powered School Management System.",
    link: "#",
    popupDescription: "Global Institutional Leaderboard: A platform for ranking schools and universities globally, promoting academic excellence and collaboration through verified metrics."
  }
];

const EcosystemSection = () => {
    const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

    const handleOpenChange = (title: string, isOpen: boolean) => {
        if (isOpen) {
            setOpenCollapsible(title);
        } else {
            if (openCollapsible === title) {
                setOpenCollapsible(null);
            }
        }
    };

  return (
    <section id="ecosystem" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">SFARET Product Ecosystem</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Explore our revolutionary Edu-Tech platforms, each solving critical challenges in education, learning, and institutional development through AI, automation, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemProducts.map((product) => (
             <Collapsible 
                key={product.title}
                open={openCollapsible === product.title}
                onOpenChange={(isOpen) => handleOpenChange(product.title, isOpen)}
                className="w-full"
            >
                <Card className="flex flex-col text-center bg-background hover:border-primary transition-colors h-full">
                    <CollapsibleTrigger asChild>
                        <CardHeader className="items-center cursor-pointer flex-grow">
                            {product.icon}
                            <CardTitle className="font-headline pt-4 text-xl">{product.title}</CardTitle>
                             <p className="text-sm text-muted-foreground pt-2">{product.description}</p>
                             <div className="flex items-center text-xs text-muted-foreground pt-4">
                                Click to {openCollapsible === product.title ? 'close' : 'view'}
                                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${openCollapsible === product.title ? 'rotate-180' : ''}`} />
                            </div>
                        </CardHeader>
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                        <CardContent className="text-sm text-muted-foreground text-left px-6 pb-4">
                            {product.popupDescription}
                        </CardContent>
                    </CollapsibleContent>
                    
                    <CardFooter className="justify-center mt-auto pt-4">
                        <Button asChild variant="ghost" className="text-primary hover:text-primary">
                            <Link href={product.link}>
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
