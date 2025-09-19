import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, FileText, Package, Layers } from "lucide-react";

const InvestmentSection = () => {
  return (
    <section id="investment" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Contribution & Support Opportunity</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            We’re opening the door for the public to contribute and support our groundbreaking innovations and become early holders and contributors in our transformative Edu-Tech ecosystem.
          </p>
        </div>

        <Card className="bg-background shadow-lg mb-12 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-primary">
              <TrendingUp className="w-6 h-6" />
              Public Investment Opportunity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              SFARET Technologies Ltd is offering <span className="font-bold text-primary">20% of its shares, valued at ₦960 Million ($600,000)</span>, to early supporters and contributors under a structured Private Presale and coming soon Public Presale I On valuation For External Investors. These shares are issued through a SAFE (Simple Agreement for Future Equity) model, with an optional buyback giving you the opportunity to either convert to equity or sell back to us at a future appreciated value.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <FileText className="w-5 h-5 text-accent" />
                Private Presale Phase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                During our Private-Presale share Phase, shares are available at a target price of <span className="font-bold text-foreground">₦1 per share</span> to Early Contributors and Supporters. This phase precedes the full-scale launch of our first-two platforms.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <Package className="w-5 h-5 text-accent" />
                Seed Investment Phase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                In Seed Investment Phase II, shares are available at a target price of <span className="font-bold text-foreground">₦ X2 per share</span>. This phase precedes full-expansion and update of our platforms and businesses.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <Layers className="w-5 h-5 text-accent" />
                Phased Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Presale shares will be distributed in multiple phases, ensuring we scale responsibly by funding technology development, platform rollout, and growing our community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
