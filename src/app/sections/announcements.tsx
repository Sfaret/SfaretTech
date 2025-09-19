import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Twitter, Youtube } from "lucide-react";

const announcements = [
  {
    title: "Platform Launch!",
    content: "Our new platform S-TIPS is now live. Explore the future of education management.",
  },
  {
    title: "Watch Our Latest Update",
    youtubeId: "dQw4w9WgXcQ", // Placeholder video ID
  },
  {
    title: "Follow Us",
    content: "Follow us on social media for updates and events:",
    socials: true,
  },
  {
    title: "New Partnership",
    content: "We are excited to announce our partnership with leading universities to expand our reach.",
  }
]

const AnnouncementsSection = () => {
  return (
    <section id="announcements" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold font-headline mb-12">
          Announcements
        </h2>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {announcements.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 aspect-video text-center">
                      <h3 className="text-xl font-semibold font-headline mb-2">{item.title}</h3>
                      {item.content && <p className="text-muted-foreground">{item.content}</p>}
                      {item.socials && (
                        <div className="flex gap-4 mt-4">
                          <Facebook className="h-6 w-6 text-primary hover:text-accent cursor-pointer transition-colors" />
                          <Twitter className="h-6 w-6 text-primary hover:text-accent cursor-pointer transition-colors" />
                          <Youtube className="h-6 w-6 text-primary hover:text-accent cursor-pointer transition-colors" />
                        </div>
                      )}
                      {item.youtubeId && (
                        <div className="w-full aspect-video mt-4 rounded-lg overflow-hidden">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${item.youtubeId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
