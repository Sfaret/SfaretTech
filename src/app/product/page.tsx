
"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <div 
      className="relative overflow-x-hidden"
      style={{
        backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eXhjOHY3NjRkcGcyazhnNGg0czdoOW9jMXh5NHFkaTkwdzJzZWVjayZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/RgWIsbDWOAr1HGqC8t/giphy.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="relative z-10 bg-background/80 backdrop-blur-sm min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section id="product-showcase" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="bg-card/80 backdrop-blur-sm mb-12">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">S-TIPS</h1>
                      <p className="text-lg text-muted-foreground">Student-Tailored Interactive Platform for Support</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <span>(Under Development)</span>
                      </div>
                      <p className="text-muted-foreground">
                        S-TIPS is your all-in-one platform for academic success. From task submission to AI-driven research and finding print centers, S-TIPS is designed to provide effortless academic assistance, powered by AI.
                      </p>
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground animate-glow">
                        <Download className="mr-2 h-5 w-5" />
                        Coming Soon
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Image 
                        src="/img/stips login.png"
                        alt="S-TIPS"
                        width={300}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="mobile app screenshot"
                      />
                      <Image 
                        src="/img/Stips admin login.png"
                        alt="S-TIPS 2"
                        width={300}
                        height={600}
                        className="rounded-lg shadow-lg mt-8"
                        data-ai-hint="mobile app screenshot"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                      <Image 
                        src="/img/stipslite.png"
                        alt="STIPs Lite1"
                        width={300}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint="mobile app dashboard"
                      />
                      <Image 
                        src="/img/stipslite.png"
                        alt="STIPs Lite 2"
                        width={300}
                        height={600}
                        className="rounded-lg shadow-lg mt-8"
                        data-ai-hint="mobile app settings"
                      />
                    </div>
                     <div className="order-1 md:order-2 space-y-4">
                      <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">STIPs Lite</h1>
                      <p className="text-lg text-muted-foreground">stips version one web application</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 text-green-500">
                          <CheckCircle className="w-4 h-4" />
                          <span>Launched and Testing</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        STIPs Lite is a lightweight, open-source platform designed to make smart task management and AI academic assistance accessible to all especially underserved communities, self-learners, freelancers, and small educational hubs like cybercafés and business centers.
                      </p>
                      <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Test App
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
