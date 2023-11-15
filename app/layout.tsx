import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Analytics } from '@vercel/analytics/react';
import { Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";
import DevelopmentMessage from "./components/developmentMessage";

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
            <body>
                <DevelopmentMessage />
                <Header />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    );
}
