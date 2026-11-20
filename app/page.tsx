import Competencies from "@/components/Competencies";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SiteShell from "@/components/SiteShell";
import Systems from "@/components/Systems";

export default function Home() {
  return (
    <SiteShell>
      <main id="main-content">
        <Hero />
        <Competencies />
        <Portfolio />
        <Systems />
      </main>
    </SiteShell>
  );
}
