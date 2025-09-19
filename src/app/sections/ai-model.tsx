"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Youtube } from "lucide-react";


const features = [
    {
        title: "AI Powered Solution.",
        youtubeId: "kJXSPeDuBYI",
    },
    {
        title: "Sfaret Edu-Technology",
        youtubeId: "SSuAvSniOAw",
    },
    {
        title: "Future of Learning",
        youtubeId: "uIxK_RHv4FA",
    }
]

const AiModelSection = () => {
  return (
    <section id="ai-model" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="flex items-center gap-4 mb-2 justify-center text-center">
              <Cpu className="w-10 h-10 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Introducing AI Model/Technology
              </h2>
            </div>
             <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Watch how we are integrating advanced AI models to provide cutting-edge features and enhance the learning experience.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
                <Card key={feature.title} className="bg-background overflow-hidden">
                    <CardContent className="p-0">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${feature.youtubeId}`}
                                title={feature.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </CardContent>
                    <CardHeader className="p-4">
                        <CardTitle className="text-lg font-headline text-center flex items-center justify-center gap-2">
                            <Youtube className="h-5 w-5 text-primary" />
                           {feature.title}
                        </CardTitle>
                    </CardHeader>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AiModelSection;
