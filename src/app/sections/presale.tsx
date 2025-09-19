
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Rocket, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const supportTiers = [
    {
        title: "Supporter",
        price: "₦ 2,000",
        icon: <Star className="w-8 h-8 text-green-500" />,
        features: [
            "Join our journey as an early believer",
            "Get a thank-you badge",
            "Receive early access to our product before public release"
        ],
        buttonText: "Join as Supporter"
    },
    {
        title: "Premium Contributor",
        price: "₦ 10,000+",
        icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
        features: [
            "Everything in the Supporter tier",
            "Eligible for a SAFE Note (future equity rights upon funding round)",
            "Receive exclusive merchandise or digital perks",
            "Pre-sale Certification issuance an official digital acknowledgment"
        ],
        buttonText: "Join as Premium Contributor"
    },
    {
        title: "Core Supporter",
        price: "₦ 100,000+",
        icon: <Rocket className="w-8 h-8 text-purple-500" />,
        features: [
            "All previous tier benefits",
            "Guaranteed SAFE Note issuance",
            "Receive VIP updates, personal invites to our insider sessions",
            "Access to strategic updates from the founders"
        ],
        buttonText: "Join as Core Supporter"
    }
];

const PresaleSection = () => {
  return (
    <section id="presale" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Join Our Innovation Journey</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
             At Sfaret Technologies, we're building transformative products that will reshape how people live, learn, and connect. We're currently in development and inviting our most passionate supporters to be part of our exclusive Private Presale Support Program.
          </p>
           <p className="mt-2 text-sm text-muted-foreground italic">
             This is not a public investment offering. Rather, it's an opportunity for early believers to support the mission and become part of our foundational story.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">Join the Presale <ArrowRight className="ml-2 h-5 w-5" /></Button>
            <Button size="lg" variant="outline">Get in touch</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h3 className="text-2xl font-bold font-headline text-primary mb-4">Private Presale Support Program</h3>
                <p className="text-muted-foreground mb-4">This private presale is open only to invited supporters, partners, and community believers. Your contributions will help us build our product faster, with the goal of launching by 2025 to 2026.</p>
                <h4 className="font-semibold text-lg mb-2">Why Join the Presale?</h4>
                <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 shrink-0" /><span>Early access to our technology</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 shrink-0" /><span>Exclusive perks and digital rewards</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 shrink-0" /><span>Option to receive a SAFE Note (Simple Agreement for Future Equity), granting future equity rights if we raise formal investment</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 shrink-0" /><span>Be recognized as a Founding Supporter</span></li>
                </ul>
            </div>
             <Card className="bg-background">
                <CardHeader>
                    <CardTitle className="font-headline">Our Ideas in Progress</CardTitle>
                    <CardDescription>Our ideas represents innovations in motion ideas actively being developed to transform education and productivity through smart technology.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-4">
                        <Image src="/img/stips login.png" alt="S-TIPS" width={100} height={100} className="rounded-lg" data-ai-hint="app icon" />
                        <div>
                            <h4 className="font-bold">🚀 S-TIPS</h4>
                            <p className="text-sm text-muted-foreground">Full-featured academic assistant ecosystem, personalized learning support, smart scheduling & collaborative tools. Currently under development.</p>
                            <Button variant="link" className="p-0 h-auto text-primary">Coming Soon</Button>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <Image src="/img/stipslite.png" alt="STIPs Lite" width={100} height={100} className="rounded-lg" data-ai-hint="app icon" />
                        <div>
                            <h4 className="font-bold">🚀 STIPs Lite (E-Task Edition)</h4>
                            <p className="text-sm text-muted-foreground">Streamlined, open-source platform for task management & AI support. Simple and accessible to organize, track, and complete tasks efficiently.</p>
                            <Button variant="link" className="p-0 h-auto text-primary">Live & Testing</Button>
                        </div>
                    </div>
                </CardContent>
             </Card>
        </div>
        
        <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-headline">Presale Support Tiers</h3>
             <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Our Private Presale Support Program is designed for passionate individuals who believe in our vision and want to play a vital role in bringing our innovation to life. Your support helps us move faster and we’re committed to recognizing and rewarding that belief.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {supportTiers.map((tier) => (
            <Card key={tier.title} className="flex flex-col text-center bg-background hover:border-primary transition-colors h-full">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                    {tier.icon}
                </div>
                <CardTitle className="font-headline text-xl">{tier.title}</CardTitle>
                <p className="text-2xl font-bold text-primary">{tier.price}</p>
                <CardDescription className="text-xs">/supporter</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow text-left">
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {tier.features.map(feature => (
                        <li key={feature} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center mt-auto pt-4">
                <Button className="w-full">{tier.buttonText}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

         <div className="text-center">
            <p className="max-w-3xl mx-auto text-muted-foreground mb-4">Ready to support innovation the smart way? Get Started now by checking our presale portfolio, and be among the first to support and contribute, and help us build something the world truly needs.</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/invest">Get Started</Link>
            </Button>
        </div>

      </div>
    </section>
  );
};

export default PresaleSection;
