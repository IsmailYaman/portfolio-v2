import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const dmSerifDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-dmserifdisplay",
});

export const metadata = {
    title: "Ismail Kayadelen | Portfolio",
    description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="mytheme" className={`scroll-smooth ${quicksand.className}`}>
            <body className="bg-base-100">
                <Header />
                {children}
                <SpeedInsights />
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}
