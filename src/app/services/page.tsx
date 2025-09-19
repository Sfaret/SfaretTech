
"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AppWindow, Bot, Headset, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <AppWindow className="w-10 h-10 text-primary" />,
    title: "WEB APPLICATION",
    description: "Build the way that works best for you with support for all your go-to integrations, including Azuma Ai, S-Tips, and more.",
    fullDescription: "Our web application development service focuses on creating robust, scalable, and user-friendly applications tailored to your specific needs. We support a wide range of integrations to ensure our solutions fit seamlessly into your existing workflows. From student information systems to e-learning platforms, we build applications that are both powerful and intuitive."
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: "AUTOMATION CHATBOT",
    description: "Step up your code quality with code review tools that fit right into your workflow. such as AI chatgpt and automation.",
    fullDescription: "Leverage the power of AI with our automation chatbot solutions. We design and implement intelligent chatbots that can handle a variety of tasks, from answering student queries 24/7 to automating administrative processes. Our chatbots are integrated with advanced AI like ChatGPT to provide natural and helpful conversations, improving efficiency and user engagement."
  },
  {
    icon: <Headset className="w-10 h-10 text-primary" />,
    title: "VIRTUAL ASSISTANCE SUPPORT",
    description: "Seamlessly update permissions and add new users as you build, digital Team help on workspace.",
    fullDescription: "Our virtual assistance support provides educational institutions with the administrative and technical support they need to thrive. Our team of skilled virtual assistants can manage everything from database maintenance and event organization to providing technical support for your digital tools. This allows your staff to focus on what they do best: educating students."
  }
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="services" className="py-16 md-py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">Our Services</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                Cutting-edge, user-friendly AI Edu-Tech tool and growth analytics designed to boost user conversion, engagement, and retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col text-center bg-card/80 backdrop-blur-sm hover:border-accent transition-colors">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="font-headline pt-4 text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" className="text-primary hover:text-primary">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="font-headline flex items-center gap-3">
                            {service.icon}
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="pt-4 text-left">
                            {service.fullDescription}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View All
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
