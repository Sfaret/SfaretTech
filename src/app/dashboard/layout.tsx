
'use client';

import { SidebarProvider, Sidebar, SidebarHeader, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarContent, SidebarFooter, SidebarInset } from "@/components/ui/sidebar";
import { Home, Calculator, ShieldCheck, ShoppingCart, Heart, UserCircle, Settings } from "lucide-react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/dashboard/calculator", label: "Calculator", icon: Calculator },
    { href: "/dashboard/kyc", label: "KYC", icon: ShieldCheck },
    { href: "/dashboard/buy-shares", label: "Buy Shares", icon: ShoppingCart },
    { href: "/dashboard/donate", label: "Donate", icon: Heart },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
        <div className="flex min-h-screen">
             <Sidebar>
                <SidebarHeader>
                    <div className="flex items-center gap-2">
                        <SidebarTrigger />
                        <Link href="/" className="group-data-[collapsible=icon]:hidden">
                            <span className="text-xl font-bold font-headline text-primary">SFARET</span>
                        </Link>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {menuItems.map((item) => (
                             <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton href={item.href} isActive={pathname === item.href} tooltip={item.label}>
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                         <SidebarMenuItem>
                            <SidebarMenuButton href="#">
                                <UserCircle className="h-5 w-5" />
                                <span>Profile</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton href="#">
                                <Settings className="h-5 w-5" />
                                <span>Settings</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
            <SidebarInset className="flex flex-col flex-1">
                 <div className="flex-1 bg-background">
                    {children}
                 </div>
            </SidebarInset>
        </div>
    </SidebarProvider>
  );
}
