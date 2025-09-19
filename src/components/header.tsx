
"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Product", href: "/product" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Contact us", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleHashChange = () => {
        setActiveHash(window.location.hash);
      };
      
      window.addEventListener('hashchange', handleHashChange);
      handleHashChange(); // Set initial hash
      
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, [isMounted]);

  const isLinkActive = (href: string) => {
    if (!isMounted) return false;

    if (href === '/') {
      return pathname === '/' && (activeHash === '' || activeHash === '#');
    }
    if (href.startsWith('/#')) {
        const hash = href.substring(1);
        return pathname === '/' && activeHash === hash;
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-xl font-bold font-headline text-primary">SFARET</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isLinkActive(link.href) ? "text-primary" : "text-muted-foreground"
              )}
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
                prefetch={false}
                onClick={() => handleLinkClick('/')}
              >
                <span className="sr-only">SFARET</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-foreground",
                     isLinkActive(link.href) ? "text-foreground font-semibold" : "text-muted-foreground"
                  )}
                  prefetch={false}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
