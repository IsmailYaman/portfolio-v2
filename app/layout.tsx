import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Quicksand, DM_Serif_Display  } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

// export const dmSerifDisplay = DM_Serif_Display({
//     subsets: ["latin"],
//     variable: "--font-dmserifdisplay",
//     weight: "400",
// });

export const metadata = {
    title: "Ismail Kayadelen | Portfolio",
    description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="mytheme" className={quicksand.className}>
            <body >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
