
"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToastAction } from "./ui/toast";

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="m22 2-11 11" />
    </svg>
);

export const TelegramPromo = () => {
    const { toast } = useToast();

    useEffect(() => {
        const hasSeenPromo = sessionStorage.getItem("telegramPromoSeen");

        if (!hasSeenPromo) {
            const timer = setTimeout(() => {
                toast({
                    title: "Join our Community!",
                    description: "Get the latest updates and connect with the Sfaret team on Telegram.",
                    duration: 15000, // Stays for 15 seconds
                    action: (
                        <ToastAction asChild altText="Join on Telegram">
                            <Button asChild>
                               <Link href="https://t.me/SfaretEdu_Tech_Official" target="_blank" rel="noopener noreferrer">
                                    <TelegramIcon />
                                    Join
                                </Link>
                            </Button>
                        </ToastAction>
                    ),
                });
                sessionStorage.setItem("telegramPromoSeen", "true");
            }, 5000); // Pops up after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [toast]);

    return null;
};
