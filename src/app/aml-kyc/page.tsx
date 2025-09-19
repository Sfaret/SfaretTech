
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function AmlKycPage() {
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
          <section id="aml-kyc" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">Anti-Money Laundering (AML) Policy</h1>
                  <p className="mt-4 text-sm text-muted-foreground">Last Updated: 25th February, 2025</p>
                </div>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 space-y-6 text-muted-foreground">
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold font-headline text-foreground">1. Introduction</h2>
                      <p>SFARET TECHNOLOGIES LTD is committed to preventing money laundering, terrorist financing, and fraudulent financial activities. This Anti-Money Laundering (AML) Policy establishes the framework for compliance with Nigerian AML laws, ensuring that our platform is not used for illicit financial activities.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">2. AML Policy Overview</h2>
                        <p>This policy outlines the responsibilities and measures that SFARET TECHNOLOGIES LTD undertakes to detect, prevent, and report suspicious financial transactions in compliance with relevant Nigerian and international AML regulations.</p>
                        <h3 className="text-lg font-semibold font-headline text-foreground">2.1 Objectives</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>To prevent the use of SFARET TECHNOLOGIES LTD' platform for money laundering and terrorist financing.</li>
                            <li>To establish a robust monitoring system for detecting suspicious activities.</li>
                            <li>To ensure compliance with Nigerian AML laws and international financial regulations.</li>
                            <li>To cooperate with law enforcement agencies such as the Economic and Financial Crimes Commission (EFCC) and the Nigerian Financial Intelligence Unit (NFIU).</li>
                        </ul>
                         <h3 className="text-lg font-semibold font-headline text-foreground">2.2 Regulatory Compliance</h3>
                         <p>SFARET TECHNOLOGIES LTD complies with the following Nigerian AML laws and guidelines:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Money Laundering (Prohibition) Act, 2022</li>
                            <li>CBN AML/CFT Regulations, 2022</li>
                            <li>Nigerian Financial Intelligence Unit (NFIU) Guidelines</li>
                            <li>Economic and Financial Crimes Commission (EFCC) Regulations</li>
                            <li>Financial Action Task Force (FATF) Recommendations</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">3. Transaction Monitoring & Reporting</h2>
                        <h3 className="text-lg font-semibold font-headline text-foreground">3.1 Suspicious Transaction Monitoring</h3>
                        <p>SFARET TECHNOLOGIES LTD employs both automated and manual transaction monitoring systems to detect suspicious activities. Red flags include:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Transactions inconsistent with a customer’s profile.</li>
                            <li>Multiple high-value transactions within a short period.</li>
                            <li>Payments linked to high-risk jurisdictions.</li>
                            <li>Transactions involving unverified third parties or cryptocurrency wallets.</li>
                            <li>Large cash deposits or withdrawals that do not match the customer’s financial profile.</li>
                            <li>Use of false or stolen identities to open accounts.</li>
                        </ul>
                        <h3 className="text-lg font-semibold font-headline text-foreground">3.2 Reporting Obligations</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Suspicious Activity Reports (SARs):</strong> Any suspicious transactions must be reported to the Nigerian Financial Intelligence Unit (NFIU).</li>
                            <li><strong>Currency Transaction Reports (CTRs):</strong> Transactions exceeding CBN-set reporting thresholds must be documented and reported.</li>
                            <li><strong>Record Keeping:</strong> All customer data and transaction records must be maintained for a minimum of 5 years, as required by CBN AML/CFT Regulations.</li>
                            <li><strong>Compliance Officer:</strong> A designated AML Compliance Officer (AMLCO) oversees compliance, audits, and regulatory reporting.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">4. Employee Training & Policy Enforcement</h2>
                         <ul className="list-disc list-inside space-y-2">
                            <li>Employees must undergo regular AML training to understand compliance responsibilities.</li>
                            <li>Internal controls, including whistleblower policies, are enforced to prevent unauthorized financial activities.</li>
                            <li>SFARET TECHNOLOGIES LTD adopts a zero-tolerance policy for violations, which may result in disciplinary action or legal consequences.</li>
                            <li>The company ensures compliance with Enhanced Due Diligence (EDD) measures for high-risk customers, including Politically Exposed Persons (PEPs) and businesses in sensitive industries.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold font-headline text-foreground">5. Conclusion</h2>
                        <p>SFARET TECHNOLOGIES LTD is committed to ensuring the integrity of its financial ecosystem. This AML Policy is designed to maintain compliance with Nigerian financial laws, prevent illicit activities, and uphold global AML standards. All stakeholders, including employees, customers, and partners, are expected to adhere strictly to this policy to safeguard the financial system and protect the reputation of SFARET TECHNOLOGIES LTD.</p>
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
