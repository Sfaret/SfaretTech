
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/app/sections/hero';
import SdgGoalsSection from '@/app/sections/sdg-goals';
import InvestmentSection from '@/app/sections/investment';
import PartnersSection from '@/app/sections/partners';
import AnnouncementsSection from '@/app/sections/announcements';
import CommunitySection from '@/app/sections/community';
import SolutionsSection from '@/app/sections/solutions';
import AiModelSection from './sections/ai-model';
import EcosystemSection from './sections/ecosystem';

export default function Home() {
  return (
    <div 
      className="relative overflow-x-hidden"
      style={{
        backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNxbjB0dGNjZ2I0bGdicWd4YnBwdXNiYWRwMXdwZ2JvcDk4enZxciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/doXBzUFJRxpaUbuaqz/giphy.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative z-10 bg-background/80 backdrop-blur-sm">
        <Header />
        <main>
          <HeroSection />
          <SolutionsSection />
          <AiModelSection />
          <EcosystemSection />
          <SdgGoalsSection />
          <InvestmentSection />
          <PartnersSection />
          <AnnouncementsSection />
          <CommunitySection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
