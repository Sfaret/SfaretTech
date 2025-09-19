
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KycPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
       <h2 className="text-3xl font-bold tracking-tight">KYC Verification</h2>
       <Card>
        <CardHeader>
            <CardTitle>Submit Your Documents</CardTitle>
        </CardHeader>
        <CardContent>
            <p>KYC functionality coming soon.</p>
        </CardContent>
       </Card>
    </div>
  );
}
