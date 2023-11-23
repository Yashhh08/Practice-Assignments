import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "../styles/prism.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
  openGraph: {
    title: "Dev Overflow",
    description:
      "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    images: [{ url: "/assets/images/logo.png" }],
  },
  creator: "Yash Yerunkar",
  publisher: "Yash Yerunkar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: "primary-gradient",
            footerActionLink: "primary-text-gradient hover:text-primary-500",
          },
        }}
      >
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
