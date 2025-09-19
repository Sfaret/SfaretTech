
"use client";

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/splash-screen';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

const CustomFooter = () => (
    <footer className="border-t bg-background/95 backdrop-blur-sm p-4 mt-auto">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Downloads:</p>
            <div className="flex items-center gap-6">
                 <Link href="/img/docfile/New Sfaret Company Profile1 .pdf" download className="flex items-center gap-2 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    <span>Portfolio</span>
                </Link>
                <Link href="/img/docfile/SFARET Whitepaper (orginal)2.pdf" download className="flex items-center gap-2 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    <span>White Paper</span>
                </Link>
            </div>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} All Rights Reserved By Sfaret Technologies
        </div>
    </footer>
);

const Header = () => {
    const { toast } = useToast();

    const handleLoginClick = () => {
        const { id, dismiss } = toast({
            title: "Coming Soon",
            description: "This feature is currently in development.",
            duration: 10000,
        });

        setTimeout(() => {
            dismiss(id);
        }, 10000);
    };
    
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <span className="text-xl font-bold font-headline text-primary">SFARET</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Button variant="outline" asChild><Link href="/">Home</Link></Button>
                     <Button onClick={handleLoginClick}>Login / Signup</Button>
                </div>
            </div>
        </header>
    )
}

export default function InvestmentLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time for splash screen
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <CustomFooter />
    </div>
  );
}
