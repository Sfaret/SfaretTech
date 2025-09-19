
import Header from '@/components/header';
import EcosystemSection from '@/app/sections/ecosystem';
import PresaleSection from '@/app/sections/presale';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function EcosystemPage() {
  return (
    <div 
      className="relative overflow-x-hidden min-h-screen"
      style={{
        backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M3JvdWwzejdtYmtob2o0bzByY2xocm93MHBlaWsyNXBlaXdvYXU1cyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/pOEbLRT4SwD35IELiQ/giphy.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative z-10 bg-background/80 backdrop-blur-sm min-h-screen flex flex-col">
        <Header />
        <Button asChild className="fixed top-20 right-4 z-50 bg-accent hover:bg-accent/90 text-accent-foreground animate-glow shadow-lg">
          <Link href="https://sfaretlogin1.netlify.app/" target="_blank" rel="noopener noreferrer">
            <User className="mr-2 h-4 w-4" />
            Login
          </Link>
        </Button>
        <main className="flex-grow">
          <EcosystemSection />
          <PresaleSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
