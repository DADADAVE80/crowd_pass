import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { StarknetProvider } from "@/components/StarknetProvider";

export const metadata: Metadata = {
  title: "CrowdPass",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StarknetProvider>
          {children}
          <Toaster />
        </StarknetProvider>
      </body>
    </html>
  );
}
