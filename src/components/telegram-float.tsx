
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="m22 2-11 11" />
    </svg>
);

export const TelegramFloat = () => {
  return (
    <Button asChild size="icon" className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#2AABEE] hover:bg-[#1E96D4] shadow-lg animate-pulse">
        <Link href="https://t.me/SfaretEdu_Tech_Official" target="_blank" rel="noopener noreferrer">
            <TelegramIcon />
            <span className="sr-only">Join on Telegram</span>
        </Link>
    </Button>
  );
};
