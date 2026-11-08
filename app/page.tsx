import Competencies from "@/components/Competencies";
import ContactFooter from "@/components/ContactFooter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Systems from "@/components/Systems";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_42%),linear-gradient(to_bottom,_#070b10,_#05080c_40%,_#070b10)]" />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Competencies />
          <Portfolio />
          <Systems />
        </main>
        <ContactFooter />
      </div>
    </div>
  );
}
