
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';

const faqs = [
  {
    value: "item-1",
    question: "What is SFARET Technologies?",
    answer: "SFARET Technologies is an innovative startup specializing in AI-driven educational technology. We build platforms to support students, educators, and institutions with cutting-edge tools for learning, management, and research."
  },
  {
    value: "item-2",
    question: "What products are in the SFARET ecosystem?",
    answer: "Our ecosystem includes S-TIPS (a student support platform), G-SEE (a global search engine for educational institutions), EDU-HUB (a resource and development center), and SkoolBrain (an AI-powered school management system)."
  },
  {
    value: "item-3",
    question: "How can I invest in SFARET Technologies?",
    answer: "We offer public investment opportunities through a SAFE (Simple Agreement for Future Equity) model. You can learn more about our Private Presale and Seed Investment phases on our homepage."
  },
  {
    value: "item-4",
    question: "What are SFARET's SDG goals?",
    answer: "We align with several Sustainable Development Goals, including No Poverty (SDG 1), Quality Education (SDG 4), Decent Work and Economic Growth (SDG 8), Industry, Innovation, and Infrastructure (SDG 9), and Sustainable Cities and Communities (SDG 11)."
  },
  {
    value: "item-5",
    question: "I'm having a technical issue, who do I contact?",
    answer: "For any technical issues, please visit our Contact Us page and select 'Technical issues' from the service dropdown. Our support team will be happy to assist you."
  }
];


export default function FaqsPage() {
  return (
    <div 
      className="relative overflow-x-hidden"
      style={{
        backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNxbjB0dGNjZ2I0bGdicWd4YnBwdXNiYWRwMXdwZ2JvcDk4enZxciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lbcLMX9B6sTsGjUmS3/giphy.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative z-10 bg-background/80 backdrop-blur-sm min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section id="faqs" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">Frequently Asked Questions</h1>
                  <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                    Find answers to common questions about our services, products, and mission.
                  </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-6 md:p-8">
                             <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq) => (
                                <AccordionItem key={faq.value} value={faq.value}>
                                    <AccordionTrigger className="text-lg font-semibold font-headline hover:no-underline text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
