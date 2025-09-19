
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
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-primary tracking-tighter">Know Your Customer (KYC) Policy</h1>
                   <p className="mt-4 text-sm text-muted-foreground">Last Updated: 10th February, 2025</p>
                </div>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 space-y-6 text-muted-foreground">
                    <h2 className="text-2xl font-bold font-headline text-foreground">KYC/CDD PROCEDURES</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold font-headline text-foreground">1. Introduction</h3>
                      <p>Know Your Customer (KYC) and Customer Due Diligence (CDD) procedures are essential in preventing fraudulent activities, ensuring regulatory compliance, and protecting SFARET TECHNOLOGIES LTD LTD from financial crimes. These procedures align with Nigerian financial regulations, including the Central Bank of Nigeria (CBN) AML/CFT Regulations, Money Laundering (Prohibition) Act, 2022, and Nigerian Financial Intelligence Unit (NFIU) Guidelines.</p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-headline text-foreground">2. Customer Identification Process (CIP)</h3>
                        <p>Before onboarding any customer, SFARET TECHNOLOGIES LTD conducts a thorough KYC verification process, which includes:</p>
                        <ol className="list-decimal list-inside space-y-2">
                          <li><strong>Individual Customers:</strong> Verification through a government-issued ID (e.g., National Identification Number (NIN), passport, driver’s license, or voter’s card), Bank Verification Number (BVN), and proof of address (utility bill, bank statement, or tax document).</li>
                          <li><strong>Corporate Customers:</strong> Verification of Corporate Affairs Commission (CAC) registration, Tax Identification Number (TIN), ownership structure, and identification of beneficial owners.</li>
                          <li><strong>Enhanced Due Diligence (EDD):</strong> Additional checks for high-risk individuals or entities, such as Politically Exposed Persons (PEPs), businesses in cash-intensive industries, or transactions involving high-risk jurisdictions.</li>
                        </ol>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-headline text-foreground">3. Risk-Based Approach</h3>
                        <p>Customers are categorized based on their risk level:</p>
                         <ul className="list-disc list-inside space-y-2">
                          <li><strong>Low Risk:</strong> Regular users with verified identities making small transactions.</li>
                          <li><strong>Medium Risk:</strong> Frequent users with larger transactions or corporate accounts with moderate risk exposure.</li>
                          <li><strong>High Risk:</strong> Users flagged for unusual activity, high-value transactions, foreign transactions, or connections to high-risk countries or industries.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-headline text-foreground">4. Ongoing Monitoring</h3>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Continuous tracking of transactions using automated systems to detect anomalies.</li>
                          <li>Cross-referencing with NFIU watchlists and sanction lists.</li>
                          <li>Periodic review and re-verification of customer information to ensure ongoing compliance.</li>
                          <li>Flagging and escalating suspicious transactions for further investigation.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-headline text-foreground">5. Reporting Obligations</h3>
                         <ul className="list-disc list-inside space-y-2">
                          <li><strong>Suspicious Activity Reports (SARs):</strong> Any suspicious transactions must be reported to the Nigerian Financial Intelligence Unit (NFIU) and, where necessary, the Economic and Financial Crimes Commission (EFCC).</li>
                          <li><strong>Currency Transaction Reports (CTRs):</strong> Any transaction exceeding CBN-set limits must be reported.</li>
                          <li><strong>Record Keeping:</strong> All customer data and transaction records are maintained for a minimum of 5 years, as required by Nigerian financial regulations.</li>
                          <li><strong>Compliance Officer:</strong> A designated AML Compliance Officer (AMLCO) oversees KYC/CDD compliance, regulatory reporting, and employee training on AML/CFT obligations.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-headline text-foreground">6. Conclusion</h3>
                        <p>SFARET TECHNOLOGIES LTD remains committed to implementing robust KYC/CDD procedures in line with Nigerian financial regulations, ensuring transparency, security, and full compliance with local and international anti-money laundering standards.</p>
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
