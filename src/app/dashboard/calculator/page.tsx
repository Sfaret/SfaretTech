
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalculatorPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
       <h2 className="text-3xl font-bold tracking-tight">Calculator</h2>
       <Card>
        <CardHeader>
            <CardTitle>Investment Calculator</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Calculator feature coming soon.</p>
        </CardContent>
       </Card>
    </div>
  );
}
