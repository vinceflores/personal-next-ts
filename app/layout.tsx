import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vinceflores.ca",
  description: "Portfolio of Vince Flores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex justify-center items-center w-full m-0 p-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4 w-[90vw] md:w-[80vw] ">
              {children}  
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
