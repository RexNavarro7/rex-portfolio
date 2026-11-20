import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rex Navarro Jr. | Business Analyst & Data Analyst",
  description:
    "IT-to-Business Translator bridging raw data, technical constraints, and executive strategy. Portfolio of BA, SQL, and Power BI work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
