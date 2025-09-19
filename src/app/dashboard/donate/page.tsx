
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DonatePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
       <h2 className="text-3xl font-bold tracking-tight">Donate</h2>
       <Card>
        <CardHeader>
            <CardTitle>Support Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Donation functionality coming soon.</p>
        </CardContent>
       </Card>
    </div>
  );
}
