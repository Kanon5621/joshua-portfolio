import "./globals.css";
import Navbar from "@/components/Navbar";

const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/joshua-portfolio" : "");

export const metadata = {
  title: "Joshua Balangue | Premium Virtual Assistant",
  description: "Elite data-driven support and administrative services.",
  icons: {
    icon: `${basePath}/JB.jpg`,
    apple: `${basePath}/JB.jpg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-bg text-slate-100 antialiased selection:bg-accent/30">
        <Navbar />
        {children}
      </body>
    </html>
  );
}