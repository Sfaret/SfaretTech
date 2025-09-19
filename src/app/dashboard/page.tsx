
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from 'next/link';
import { DollarSign, LineChart, ShieldCheck, PieChart, ArrowRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "January", investment: 186 },
  { month: "February", investment: 305 },
  { month: "March", investment: 237 },
  { month: "April", investment: 73 },
  { month: "May", investment: 209 },
  { month: "June", investment: 214 },
];

const chartConfig = {
  investment: {
    label: "Investment",
    color: "hsl(var(--primary))",
  },
};

const transactions = [
    { id: "T001", date: "2024-07-15", type: "Share Purchase", amount: "₦50,000", status: "Completed" },
    { id: "T002", date: "2024-07-10", type: "Donation", amount: "₦10,000", status: "Completed" },
    { id: "T003", date: "2024-07-05", type: "Share Purchase", amount: "₦25,000", status: "Pending" },
    { id: "T004", date: "2024-06-28", type: "Share Purchase", amount: "₦100,000", status: "Completed" },
];

export default function DashboardPage() {
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    // In a real application, you would check this based on user data
    // For demonstration, we'll simulate it.
    const newUserFlag = sessionStorage.getItem('isNewUser');
    if (newUserFlag === null) {
      setIsNewUser(true);
      sessionStorage.setItem('isNewUser', 'false');
    }
  }, []);

  const WelcomeMessage = () => (
      <div className="mb-8 bg-card/80 backdrop-blur-sm p-6 rounded-lg">
        <h2 className="text-2xl font-bold font-headline mb-2">
            {isNewUser ? "Welcome to your SFARET Dashboard!" : "Welcome back to your SFARET Dashboard!"}
        </h2>
        <p className="text-muted-foreground">
            {isNewUser 
                ? "We're thrilled to have you on board. Your journey to support educational innovation starts now. You can begin by completing your KYC verification or exploring the presale opportunities."
                : "Glad to see you again. Review your investment progress, update your KYC if needed, and continue participating in the presale."
            } For support, reach out to our team anytime at <a href="mailto:invest@sfarettech.com.ng" className="text-primary hover:underline">invest@sfarettech.com.ng</a>.
        </p>
      </div>
  );

  return (
    <div 
      className="flex-1 space-y-8 p-4 md:p-8 pt-6 bg-cover bg-center"
      style={{backgroundImage: "url('/background.gif')"}}
    >
        <div className="flex items-center justify-between space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>

        <WelcomeMessage />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
             <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₦45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">₦52,890.10</div>
                    <p className="text-xs text-muted-foreground">Current estimated value</p>
                </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Shares Owned</CardTitle>
                    <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12,234</div>
                    <p className="text-xs text-muted-foreground">SAFE Presale Shares</p>
                </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">KYC Status</CardTitle>
                    <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-green-500">Verified</div>
                     <p className="text-xs text-muted-foreground">Your account is fully compliant</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle>Investment Overview</CardTitle>
                    <CardDescription>Your investment performance over the last 6 months.</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                     <ChartContainer config={chartConfig} className="h-[250px] w-full">
                        <BarChart accessibilityLayer data={chartData}>
                           <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                            />
                             <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `₦${value / 1000}k`}
                            />
                             <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" />}
                            />
                            <Bar dataKey="investment" fill="var(--color-investment)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
             <Card className="lg:col-span-3 bg-card/80 backdrop-blur-sm flex flex-col">
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your latest share purchases and donations.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((transaction) => (
                            <TableRow key={transaction.id}>
                                <TableCell>
                                    <div className="font-medium">{transaction.type}</div>
                                    <div className="text-xs text-muted-foreground">{transaction.date}</div>
                                </TableCell>
                                <TableCell>{transaction.amount}</TableCell>
                                <TableCell>
                                     <Badge 
                                        variant={transaction.status === 'Completed' ? 'default' : 'secondary'}
                                        className={transaction.status === 'Completed' ? 'bg-green-500/20 text-green-700' : 'bg-amber-500/20 text-amber-700'}
                                    >
                                        {transaction.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                 <CardFooter className="justify-end">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="#">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                 </CardFooter>
            </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle>Buy More Shares</CardTitle>
                    <CardDescription>Continue to support our mission by purchasing more presale shares.</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button asChild>
                        <Link href="/dashboard/buy-shares">Buy Shares</Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle>Make a Donation</CardTitle>
                    <CardDescription>Support our vision with a one-time or recurring donation.</CardDescription>
                </CardHeader>
                 <CardFooter>
                    <Button variant="outline" asChild>
                            <Link href="/dashboard/donate">Donate</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}

    