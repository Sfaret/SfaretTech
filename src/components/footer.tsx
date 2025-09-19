
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1KcADWEYPg/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/SFARET_?t=HHe54M8A8xGgq0j5f1SgNA&s=09" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/sfaret-technologies-ltd/" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@SFARET?si=O8I3P-3i_eYw_I9-" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/policy" },
    { name: "AML", href: "/aml-kyc" },
    { name: "KYC", href: "/aml" },
    { name: "FAQs", href: "/faqs" },
    { name: "Careers", href: "/career" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold font-headline text-primary">SFARET</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Revitalizing the Educational Ecosystem through Advanced Technology.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold font-headline">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-headline">Legal</h4>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-headline">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Port Harcourt, Rivers state Nigeria</li>
              <li>info@sfarettech.com.ng</li>
              <li>+234 7049515934</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sfaret Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
