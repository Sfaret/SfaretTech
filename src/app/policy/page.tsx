
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function PolicyPage() {
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
          <section id="policy" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">Legal Policy</h1>
                  <p className="mt-4 text-sm text-muted-foreground">Last Updated: 10th February, 2025</p>
                </div>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 space-y-8 text-muted-foreground">
                    
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold font-headline text-foreground">Terms of Service</h2>
                      <p>Welcome to SFARET TECHNOLOGIES LTD! By accessing or using our website, you agree to comply with and be bound by these terms and conditions ("Terms"). Please read them carefully.</p>
                      
                      <h3 className="text-xl font-bold font-headline text-foreground">User Responsibilities</h3>
                      <p>You agree to use our website in a lawful manner and not engage in any activity that may harm the website, its users, or its content.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">Intellectual Property</h3>
                      <p>All content on this site, including but not to text, graphics, logos, and software, is the property of SFARET TECHNOLOGIES LTD and is protected by copyright and other intellectual property laws.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">Limitation of Liability</h3>
                      <p>SFARET TECHNOLOGIES LTD will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">Modifications to Terms</h3>
                      <p>We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the new Terms.</p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold font-headline text-foreground">Privacy Policy</h2>
                      <h3 className="text-xl font-bold font-headline text-foreground">Information Collection</h3>
                      <p>We collect both personal and non-personal information to improve our services. Personal information may include your name, email address, and payment information. Non-personal information may include your browser type and IP address.</p>
                      
                      <h3 className="text-xl font-bold font-headline text-foreground">Use of Information</h3>
                      <p>We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">Data Sharing</h3>
                      <p>We do not sell or trade your personal information to third parties. We may share information with third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">Security</h3>
                      <p>We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold font-headline text-foreground">Cookie Policy</h2>
                      <h3 className="text-xl font-bold font-headline text-foreground">What Are Cookies?</h3>
                      <p>Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">How We Use Cookies</h3>
                      <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">User Choices</h3>
                      <p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. If you turn cookies off, some features will be disabled.</p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold font-headline text-foreground">Disclaimer</h2>
                      <h3 className="text-xl font-bold font-headline text-foreground">General Disclaimer</h3>
                      <p>The information provided on our website is for general informational purposes only. All information on the site is provided "as is," with no guarantee of completeness, accuracy, or timeliness.</p>

                      <h3 className="text-xl font-bold font-headline text-foreground">External Links</h3>
                      <p>Our website may contain links to other websites. These links are provided for your convenience, and SFARET TECHNOLOGIES LTD has no control over the content of these sites.</p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold font-headline text-foreground">Contact Information</h2>
                      <p>If you have any questions or concerns about our legal policies, please contact us at:</p>
                      <address className="not-italic">
                        SFARET TECHNOLOGIES LTD<br />
                        Port Harcourt, Rivers State.<br />
                        info@sfarettech.com.ng<br />
                        +234-7049515934
                      </address>
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
