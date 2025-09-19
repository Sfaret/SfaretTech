
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link';

const heroSlides = [
  {
    title: "Virtual Assistance",
    description: "Our offerings include managing student project/assignment, database maintenance, organizing educational events, providing virtual support to educators, developing educational materials, and streamlining administrative processes.",
    image: "https://images.unsplash.com/photo-1600120203738-3e66b02bf318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwYXNzaXN0YW50JTIwZWR1Y2F0aW9ufGVufDB8fHx8MTc1NzE0Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "virtual assistant education"
  },
  {
    title: "Artificial Intelligence",
    description: "By leveraging cutting-edge AI technology and automation, our services cater to the administrative needs of educational institutions, teachers, and educational businesses.",
    image: "/img/slider-img2.png",
    imageHint: "artificial intelligence"
  },
  {
    title: "Edu Technology",
    description: "We utilize secure, cloud-based solutions for data storage, accessibility, and collaborative work. Additionally, we employ various virtual communication tools like video conferencing, messaging apps, and project management software.",
    image: "/img/slider-edutech.png",
    imageHint: "education technology"
  },
  {
    title: "AI-Powered Learning",
    description: "Experience personalized education with our AI-driven platform that adapts to your learning style and pace.",
    image: "https://images.unsplash.com/photo-1738641928061-e68c5e8e2f2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxBSSUyMGxlYXJuaW5nfGVufDB8fHx8MTc1NzE0Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "AI learning"
  },
  {
    title: "Seamless Collaboration",
    description: "Connect with educators and peers in a collaborative environment designed for the future of education.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTcwODk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "team collaboration"
  }
]

const HeroSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-primary tracking-tighter">
                      {slide.title}
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex gap-4 justify-center md:justify-start">
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                        <Link href="/invest">
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
                      <Image 
                        src={slide.image}
                        alt={slide.title} 
                        width={600} 
                        height={400} 
                        className="w-full h-full object-cover"
                        data-ai-hint={slide.imageHint}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
