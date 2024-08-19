import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkLoading } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinanSmart",
  description: "AI-powered Finance tracker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
