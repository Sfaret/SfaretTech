import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Shield, Glasses, Cloud } from "lucide-react";

const solutions = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "Artificial Intelligence (AI)",
    description: "AI revolutionizes education with personalized learning, automated tasks, and data-driven insights to tailor instruction to individual student needs."
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Blockchain in Education",
    description: "Blockchain provides secure, tamper-proof recording of academic credentials and achievements, ensuring transparency and verification."
  },
  {
    icon: <Glasses className="w-10 h-10 text-primary" />,
    title: "Virtual and Augmented Reality",
    description: "VR and AR create immersive learning experiences, transporting students to new environments and making education more engaging."
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "Cloud-Based Education",
    description: "Cloud computing enables remote access to educational resources, facilitates online collaboration, and provides scalable infrastructure for seamless learning."
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Problems and Solution</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            We are building the best AI Edu-Tech in Africa and Abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="flex flex-col text-center bg-card/80 backdrop-blur-sm hover:border-accent transition-colors">
              <CardHeader className="items-center">
                {solution.icon}
                <CardTitle className="font-headline pt-4 text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
