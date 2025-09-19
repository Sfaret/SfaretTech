
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Target, Award, Users, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link';


const investmentReasons = [
    {
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        title: "Innovative Technology and Market Edge",
        description: "Investing in our company means supporting cutting-edge technology in the educational sectors. Our solutions leverage AI and advanced tech to revolutionize learning and Administrative Management, giving us a significant competitive advantage."
    },
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        title: "Strong Market Demand",
        description: "There is a growing need for effective educational tools and efficient Edu-Tech. By investing now, you position yourself to benefit from this expanding market, where our unique offerings are poised to meet and exceed current demands."
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Early Investor Benefits",
        description: "Participating in our presale crowdfunding offers exclusive early-bird benefits. This includes preferential pricing on shares, which can significantly increase in value as our company grows and scales."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Experienced Team and Proven Vision",
        description: "Our team consists of industry experts with a proven track record in technology and Edu-Tech innovation. Investing in our company means backing a team that is committed to executing a clear and ambitious vision."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-primary" />,
        title: "Social Impact and Value Creation",
        description: "By investing in our company, you contribute to meaningful social impact. Our products aim to improve educational outcomes, creating positive changes in people's lives and fostering community development."
    }
];

export default function InvestmentLandingPage() {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <div className="space-y-12">
            <section id="invest-hero" className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW52ZXN0bWVudHxlbnwwfHx8fDE3NTYzMTE0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Investment hero background"
                        fill
                        className="object-cover"
                        data-ai-hint="technology investment"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">Welcome to Sfaret Private Presale Contribution & Opportunity Portal</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90">Join us in revolutionizing the educational ecosystem through advanced technology.</p>
                </div>
            </section>

            <div className="space-y-12 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <section id="why-invest">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Invest in Our Company?</h2>
                    </div>
                     <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[autoplayPlugin.current]}
                        onMouseEnter={autoplayPlugin.current.stop}
                        onMouseLeave={autoplayPlugin.current.reset}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent>
                            {investmentReasons.map((reason, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                         <Card key={index} className="bg-card/50 flex flex-col h-full">
                                            <CardHeader className="flex-row items-center gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                                                    {reason.icon}
                                                </div>
                                                <CardTitle className="font-headline text-xl">{reason.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex-grow">
                                                <p className="text-muted-foreground">{reason.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>
                </section>
                <section id="getting-started" className="py-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold font-headline">Steps to Get Started with Us</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
                        <div className="space-y-12">
                            {[
                                { title: "Explore Our Company", description: "Read through our portfolio and white paper to understand our vision, mission, and the technologies driving our solutions." },
                                { title: "Sign Up for Our Investment Program", description: "Register for our presale crowdfunding to gain access to early-bird support benefits. This is your first step toward securing future shares at a discounted rate." },
                                { title: "Evaluate Support Opportunities", description: "Review the different investment support tiers and the potential rewards each tier offers. Speak with one of our investment advisors to learn more." },
                                { title: "Make Your Investment", description: "Once you're ready, follow the easy steps to make your contribution and support and join us in transforming education through innovative technology." },
                                { title: "Stay Updated", description: "Once you're an investor/supporter, you’ll receive regular updates on our progress, milestones, and how your investment (contribution) is contributing to the growth of SFARET." }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="md:w-1/2 md:pr-8 flex justify-end">
                                        {index % 2 === 0 && (
                                        <Card className="w-full md:max-w-md">
                                            <CardHeader><CardTitle className="font-headline text-lg">{step.title}</CardTitle></CardHeader>
                                            <CardContent><p className="text-muted-foreground">{step.description}</p></CardContent>
                                        </Card>
                                        )}
                                        {index % 2 !== 0 && ( <div className="w-full md:max-w-md"></div>)}
                                    </div>
                                    <div className="relative">
                                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl z-10 relative">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 md:pl-8">
                                        {index % 2 !== 0 && (
                                        <Card className="w-full md:max-w-md">
                                            <CardHeader><CardTitle className="font-headline text-lg">{step.title}</CardTitle></CardHeader>
                                            <CardContent><p className="text-muted-foreground">{step.description}</p></CardContent>
                                        </Card>
                                        )}
                                        {index % 2 === 0 && (<div className="w-full md:max-w-md"></div>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="choose-platform">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold font-headline">Choose Your Support Platform</h1>
                    </div>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">SIP (Sfaret Initiative Platform)</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Image 
                                    src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxpbnZlc3R8ZW58MHx8fHwxNzU2MjA3NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="SIP Platform"
                                    width={600}
                                    height={400}
                                    className="rounded-lg mb-4"
                                    data-ai-hint="investment growth chart"
                                />
                                <p className="text-muted-foreground">
                                    Start small, invest consistently. Grow your stake in SFARET Technologies over time while supporting innovation in education.
                                </p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button asChild className="w-full">
                                    <Link href="https://sfaretlogin1.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        Get Started <ArrowRight className="ml-2"/>
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                        <Card className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">QuickRaiz</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Image 
                                    src="https://images.unsplash.com/photo-1651340981821-b519ad14da7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxpbnZlc3R8ZW58MHx8fHwxNzU2MjA3NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="QuickRaiz Platform"
                                    width={600}
                                    height={400}
                                    className="rounded-lg mb-4"
                                    data-ai-hint="financial technology interface"
                                />
                                <p className="text-muted-foreground">
                                    Buy Presale shares and become a co-innovator in Africa’s leading AI-powered EdTech ecosystem. Be part of the transformation.
                                </p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button asChild className="w-full">
                                    <Link href="https://sfaretlogin1.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        Get Started <ArrowRight className="ml-2"/>
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}

    
    
