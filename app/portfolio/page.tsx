import SiteShell from "@/components/SiteShell";
import PortfolioBrowser from "@/components/PortfolioBrowser";
import Image from "next/image";
import { credentials } from "@/data/portfolioItems";

export default function PortfolioPage() {
  return (
    <SiteShell>
      <main id="main-content" className="bg-[#171b21] px-5 pt-14 pb-16 sm:pt-18">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">
            03 — Featured work
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Case studies with the screenshots and notes behind them
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#a5afbc]">
            BSIT student at Pamantasan ng Lungsod ng Pasig, moving into
            business and data analysis from systems and web work. Each item
            below uses a file or screenshot I actually have. Filter the list,
            or open one case study on its own page.
          </p>
          <div className="mt-8">
            <PortfolioBrowser />
          </div>
          <section className="mt-16 border-t border-white/10 pt-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">
              Credentials on file
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {credentials.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden border border-white/10 bg-[#20262e]"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.preview}
                      alt={item.alt}
                      width={1600}
                      height={1200}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="aspect-[4/3] w-full object-cover object-center"
                    />
                  </a>
                  <div className="p-5">
                    <h2 className="text-base font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#a5afbc]">
                      {item.detail}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-[#7ca9ff] hover:text-white"
                    >
                      View full certificate
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
