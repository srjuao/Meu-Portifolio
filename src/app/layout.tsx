import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-display",
});

export const metadata: Metadata = {
    title: "João Victor - Desenvolvedor Full Stack",
    description:
        "Portfólio profissional de João Victor, Desenvolvedor Full Stack especializado em React, Next.js, Node.js e TypeScript.",
    keywords: [
        "desenvolvedor full stack",
        "portfólio",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "João Victor",
    ],
    authors: [{ name: "João Victor" }],
    openGraph: {
        title: "João Victor - Desenvolvedor Full Stack",
        description:
            "Portfólio profissional de João Victor, Desenvolvedor Full Stack especializado em React, Next.js, Node.js e TypeScript.",
        type: "website",
        locale: "pt_BR",
        siteName: "João Victor - Portfólio",
    },
    twitter: {
        card: "summary_large_image",
        title: "João Victor - Desenvolvedor Full Stack",
        description:
            "Portfólio profissional de João Victor, Desenvolvedor Full Stack especializado em React, Next.js, Node.js e TypeScript.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="antialiased">
                <div className="radial-glow" />
                {children}
            </body>
        </html>
    );
}
