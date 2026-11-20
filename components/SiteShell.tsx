import ContactFooter from "@/components/ContactFooter";
import Navbar from "@/components/Navbar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only z-[100] bg-[#1767f2] px-4 py-3 font-semibold text-white focus:fixed focus:left-4 focus:top-4 focus:not-sr-only"
      >
        Skip to main content
      </a>
      <Navbar />
      {children}
      <ContactFooter />
    </div>
  );
}
