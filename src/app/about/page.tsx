
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, CreditCard, Lightbulb, Shield, Linkedin, Twitter } from "lucide-react";
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const whyChooseUs = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Virtual Expert Management",
    description: "Our offerings include managing student projects/assignments, database maintenance, organizing educational events, providing virtual support to educators, developing educational materials, and streamlining administrative processes."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    title: "Flexible Payment",
    description: "Customized Solutions: Our services are tailored to meet the unique needs of educational institutions, offering flexible packages or bespoke solutions."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovations",
    description: "By leveraging cutting-edge AI technology and automation, our services cater to the administrative needs of educational institutions, teachers, and educational businesses."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Empowerment",
    description: "Remote Workforce: We employ skilled virtual assistants proficient in administrative tasks and adept at using cutting-edge technologies."
  }
];

const teamMembers = [
  {
    name: "Dike Paul L.",
    role: "Founder/Chief Executive Officer",
    image: "/img/dikepaul.png",
    imageHint: "person portrait",
    linkedin: "https://www.linkedin.com/in/lawrence-paul-767b0b343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/DikePaul_?t=TO4unki3xJoNRwt8ZDYSQQ&s=09",
  },
  {
    name: "Effiong Philip",
    role: "Advisor & Internal Analysis",
    image: "/img/gracephilip.png",
    imageHint: "person portrait",
    linkedin: "https://www.linkedin.com/in/grace-philip-b84035293",
    twitter: "#",
  },
  {
    name: "Nnaji Daniel",
    role: "Backend Developer / Engineer",
    image: "/img/Daniel_Alucard.png",
    imageHint: "person portrait",
    linkedin: "https://www.linkedin.com/in/nnaji-daniel-642673187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "#",
  },
  {
    name: "Faith Ndenu",
    role: "Full-Stack Developer / Engineer",
    image: "/img/Faith_Ndenu.png",
    imageHint: "person portrait",
    linkedin: "https://www.linkedin.com/in/faith-ndenu-6712a6208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "#",
  },
];

export default function AboutPage() {
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
          <section id="about-intro" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">About Us</h1>
                <p className="mt-4 max-w-xl mx-auto text-lg md:text-xl text-muted-foreground">
                  We are Building the best AI Edu-Tech in Africa and Abroad.
                </p>
              </div>
              <div className="mt-12 max-w-6xl mx-auto">
                 <Card className="bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">We Are Sfaret</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4 text-muted-foreground">
                          <p>
                            SFARET Technologies is an innovative startups specializing in education assistance to help students in the education sector. SFARET Technologies is dedicated to offering advanced education assistant solutions specifically designed, our idea is by leveraging cutting-edge AI technology and automation chatbot, our services cater to the administrative needs of educational institutions, teachers, and educational works.
                          </p>
                          <p>
                            Our offerings include Applications that can manage student project/studies, organizing educational events, providing virtual support to educators, developing educational materials, and streamlining administrative processes. our goal is to revolutionize administrative support services through AI-driven solutions.
                          </p>
                        </div>
                        <div>
                          <Image
                            src="/img/about1.png"
                            alt="About Sfaret"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                            data-ai-hint="abstract technology"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </div>
            </div>
          </section>
          
          <section id="why-choose-us" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Us</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUs.map((feature, index) => (
                  <Card key={index} className="flex flex-col text-center bg-background hover:border-accent transition-colors">
                    <CardHeader className="items-center">
                      {feature.icon}
                      <CardTitle className="font-headline pt-4 text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="team" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Team</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                  Meet the talented individuals behind our innovative solutions.
                </p>
              </div>
              <Carousel 
                opts={{ 
                  align: "start",
                  loop: true,
                }} 
                className="w-full max-w-4xl mx-auto"
              >
                <CarouselContent>
                  {teamMembers.map((member) => (
                    <CarouselItem key={member.name} className="md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                        <div className="text-center">
                          <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                            <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.imageHint} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <h3 className="font-semibold font-headline">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                          <div className="flex justify-center gap-2 mt-2">
                              <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={16} /></Link>
                              <Link href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter size={16} /></Link>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}
