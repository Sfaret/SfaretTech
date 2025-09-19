
"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, ArrowRight, Loader2, CheckCircle, User, Mail, Phone, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import Link from 'next/link';
import { sendApplicationEmail } from '@/app/actions/send-application';

const jobOpenings = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    description: "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building the ‘client-side’ of our web applications. You should be proficient in React, Next.js, and Tailwind CSS.",
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize application for maximum speed and scalability"
    ],
  },
  {
    title: "AI/ML Engineer",
    location: "Port Harcourt, Nigeria",
    description: "Join our AI team to work on cutting-edge machine learning models that power our educational platforms. Experience with Python and TensorFlow/PyTorch is required.",
     responsibilities: [
      "Design and develop machine learning and deep learning systems",
      "Run machine learning tests and experiments",
      "Implement appropriate ML algorithms and tools",
    ],
  },
  {
    title: "Product Manager",
    location: "Remote",
    description: "We are seeking a Product Manager to guide the success of our products and lead the cross-functional team that is responsible for improving it.",
     responsibilities: [
      "Define the product vision, strategy, and roadmap",
      "Gather and prioritize product and customer requirements",
      "Work closely with engineering, sales, marketing, and support to ensure revenue and customer satisfaction goals are met",
    ],
  }
];

type Job = typeof jobOpenings[0];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  resume: z.any().refine((files) => files?.length === 1, "Resume is required."),
});

type FormValues = z.infer<typeof formSchema>;

type ApplicationStep = "form" | "summary" | "success";


export default function CareerPage() {
    const { toast } = useToast();
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [dialogType, setDialogType] = useState<'details' | 'apply' | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [applicationStep, setApplicationStep] = useState<ApplicationStep>('form');
    const [formData, setFormData] = useState<FormValues | null>(null);


    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });
    
    const fileRef = form.register("resume");

    function onReview(values: FormValues) {
        setFormData(values);
        setApplicationStep('summary');
    }

    async function onFinalSubmit() {
        if (!selectedJob || !formData) return;
        
        setIsSubmitting(true);

        const fullFormData = new FormData();
        fullFormData.append('name', formData.name);
        fullFormData.append('email', formData.email);
        fullFormData.append('phone', formData.phone);
        fullFormData.append('resume', formData.resume[0]);
        fullFormData.append('jobTitle', selectedJob.title);

        try {
            const result = await sendApplicationEmail(fullFormData);

            if (result.success) {
                setApplicationStep('success');
            } else {
                 toast({
                    title: "Error",
                    description: result.error || "There was an error sending your application.",
                    variant: "destructive",
                });
            }
        } catch (error) {
             toast({
                title: "Error",
                description: "An unexpected error occurred.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    
    const resetForm = () => {
        form.reset();
        setApplicationStep('form');
        setFormData(null);
        setSelectedJob(null);
        setDialogType(null);
    }

  return (
    <div className="relative overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="career-intro" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">Careers at SFARET</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                Join our team of innovators and help us shape the future of education technology.
              </p>
            </div>
          </div>
        </section>

        <section id="open-positions" className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">Open Positions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.title} className="bg-card/80 backdrop-blur-sm flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      {job.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 pt-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                  <CardFooter className="gap-4">
                    <Button variant="ghost" className="text-primary hover:text-primary" onClick={() => { setSelectedJob(job); setDialogType('details'); }}>
                      Learn More
                    </Button>
                    <Button variant="outline" onClick={() => { setSelectedJob(job); setDialogType('apply'); setApplicationStep('form'); }}>
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-muted-foreground">Don't see a role that fits? Send us your resume!</p>
                <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="mailto:hr@sfarettech.com.ng">Contact HR</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={!!selectedJob && dialogType !== null} onOpenChange={(open) => { if (!open) { resetForm(); } }}>
        {dialogType === 'details' && selectedJob && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="font-headline">{selectedJob.title}</DialogTitle>
                <DialogDescription>{selectedJob.location}</DialogDescription>
            </DialogHeader>
            <div>
              <p className="mb-4 text-sm text-muted-foreground">{selectedJob.description}</p>
              <h4 className="font-semibold mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                {selectedJob.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
              </ul>
            </div>
            <DialogClose asChild>
                <Button type="button" variant="secondary" className="mt-4">
                Close
                </Button>
            </DialogClose>
          </DialogContent>
        )}

        {dialogType === 'apply' && selectedJob && (
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
                <DialogTitle className="font-headline">Apply for {selectedJob.title}</DialogTitle>
                <DialogDescription>
                    {applicationStep === 'form' && 'Please fill out the form below to submit your application.'}
                    {applicationStep === 'summary' && 'Please review your application details below.'}
                    {applicationStep === 'success' && 'Your application has been sent!'}
                </DialogDescription>
            </DialogHeader>
            
            {applicationStep === 'form' && (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onReview)} className="space-y-4">
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="Your Email" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="Your Phone Number" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="resume" render={({ field }) => (
                        <FormItem><FormLabel>Resume/CV</FormLabel><FormControl>
                            <Input type="file" accept=".pdf,.doc,.docx" {...fileRef} />
                        </FormControl><FormMessage />
                    </FormItem>
                    )} />
                    <Button type="submit" className="w-full">
                      Review Application
                    </Button>
                </form>
              </Form>
            )}

            {applicationStep === 'summary' && formData && (
              <div className="space-y-6">
                  <div className="space-y-4 rounded-md border p-4">
                       <h4 className="text-sm font-medium">Application Summary</h4>
                       <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /><span>{formData.name}</span></div>
                          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /><span>{formData.email}</span></div>
                          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" /><span>{formData.phone}</span></div>
                          <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-muted-foreground" /><span>{formData.resume[0].name}</span></div>
                       </div>
                  </div>
                  <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setApplicationStep('form')} className="w-full">Back to Edit</Button>
                      <Button onClick={onFinalSubmit} className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Submit Final Application'}
                      </Button>
                  </div>
              </div>
            )}

            {applicationStep === 'success' && (
                <div className="text-center space-y-4 py-8">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p className="text-muted-foreground">
                        Your application for the {selectedJob.title} position has been successfully submitted. We will be in touch shortly.
                    </p>
                    <DialogClose asChild>
                       <Button onClick={resetForm} variant="outline">Close</Button>
                    </DialogClose>
                </div>
            )}

          </DialogContent>
        )}
      </Dialog>
      <Footer />
    </div>
  );
}
