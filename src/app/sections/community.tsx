import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Briefcase, Globe } from "lucide-react";

const communityFeatures = [
  {
    icon: <MessageSquare className="w-8 h-8 text-accent" />,
    title: "Innovative Discussions",
    description: "Engage with like-minded individuals to discuss cutting-edge tech.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-accent" />,
    title: "Collaborative Projects",
    description: "Work on projects that shape the future of Education ecosystem.",
  },
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Global Network",
    description: "Connect with professionals from around the world.",
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/10 border border-primary/20 text-primary-foreground rounded-xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-primary/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">Join Our Innovation Journey</h2>
              <p className="mt-4 text-muted-foreground">
                Join our community to exchange ideas, and drive the future of Education technology. Stay connected, share knowledge, and be part of the innovation.
              </p>
              <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-6">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold font-headline text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;