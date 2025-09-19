
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsPage() {
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
          <section id="terms" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">Terms and Conditions</h1>
                  <p className="mt-4 text-sm text-muted-foreground">Last Updated: 25th February, 2025</p>
                </div>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 space-y-6 text-muted-foreground">
                    <p>Welcome to Sfaret Technologies (“we,” “our,” or “us”). These Terms and Conditions govern your use of our website and services (the “Platform”). By accessing or using our Platform, you agree to comply with these Terms. If you do not agree, please do not use our services.</p>
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold font-headline text-foreground">1. Eligibility</h2>
                      <p>You must be at least 18 years old to use our Platform. By using our services, you represent and warrant that you have the legal capacity to enter into this agreement.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">2. Use of the Platform</h2>
                        <p>You agree to use the Platform solely for lawful activities related to our company’s presale fund and educational technology services. You must not engage in fraudulent, misleading, or illegal transactions. We reserve the right to suspend or terminate accounts that violate these terms.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">3. Company Presale Fund</h2>
                        <p>Funds raised through the presale are intended for company growth and development. Contributions made to the presale are final and non-refundable unless explicitly stated otherwise. We do not guarantee any specific financial returns on contributions made to the presale fund.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">4. Payment Processing</h2>
                        <p>Payments for our presale fund are processed securely via Flutterwave, QuickRaiz. You must comply with Flutterwave’s terms and conditions during transactions. Additional verification may be required for regulatory compliance.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">5. Fees and Charges</h2>
                        <p>Transaction fees may apply depending on your payment method and will be disclosed prior to confirmation. You are responsible for any fees imposed by third-party financial providers.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">6. Intellectual Property</h2>
                        <p>All content, trademarks, designs, and code on this Platform belong to Sfaret Technologies. No part of this platform may be copied, reproduced, or reused without express permission.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">7. Privacy and Data</h2>
                        <p>Your personal information is collected and processed in accordance with our Privacy Policy. We take data privacy seriously and implement secure protocols to safeguard user data.</p>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">8. Termination and Suspension</h2>
                        <p>We may suspend or terminate your account if you breach these terms. You may close your account at any time by contacting support.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">9. Limitation of Liability</h2>
                        <p>We are not liable for any indirect, incidental, or consequential losses arising from the use of our platform or services. Use of our platform is at your own risk.</p>                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">10. Regulatory Compliance</h2>
                        <p>All users must comply with applicable Nigerian laws and regulations, especially regarding payments and identity verification. We reserve the right to cooperate with regulatory agencies if required.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">11. Governing Law</h2>
                        <p>These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in the appropriate courts within Nigeria.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">12. Changes to Terms</h2>
                        <p>We may update these Terms from time to time. Continued use of the Platform constitutes acceptance of any updated Terms.</p>
                    </div>

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
