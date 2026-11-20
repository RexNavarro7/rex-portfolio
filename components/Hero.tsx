import { ArrowDown, ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { credentials } from "@/data/portfolioItems";
import { FILES } from "@/lib/assets";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 border-b border-white/10 bg-[#171b21] px-5 pt-14 pb-0 text-white sm:pt-20"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative z-10 py-8 sm:py-12">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#7ca9ff]">
            <span className="h-px w-9 bg-[#1767f2]" />
            Business Analyst · Data Analyst
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Rex Navarro Jr.
            <span className="mt-4 block text-xl font-medium tracking-tight text-[#b7c0cc] sm:text-2xl">
              Business Analyst & Data Analyst
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#e0e5eb]">
            IT-to-Business Translator bridging raw data, technical constraints,
            and executive strategy.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#a5afbc] sm:text-[15px]">
            I am a BSIT student transitioning into Business Analysis and Data
            Analytics. My software engineering foundation helps me connect
            business needs with the systems and data behind them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-[#1767f2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0757df]"
            >
              Explore portfolio <ArrowDownRight size={16} />
            </Link>
            <a
              href={FILES.onePageResume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              <FileText size={16} /> View Resume <ArrowUpRight size={15} />
            </a>
            <a
              href={FILES.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              <FileText size={16} /> View CV <ArrowUpRight size={15} />
            </a>
          </div>
          <a
            href="#credentials"
            aria-label="Scroll to credentials"
            className="mt-8 grid h-12 w-12 place-items-center rounded-full bg-[#1767f2] text-white transition hover:bg-[#0757df]"
          >
            <ArrowDown size={20} />
          </a>
        </div>

        <div className="relative mx-auto grid aspect-[4/5] w-full max-w-[470px] place-items-center">
          <div className="absolute right-0 top-2 aspect-[4/5] w-[88%] rounded-[50%] bg-[#1767f2]" />
          <div className="absolute right-0 top-2 aspect-[4/5] w-[88%] rounded-[50%] border border-white/20" />
          <Image
            src="/screenshots/passport_portrait_35x45mm_high_resolution.png"
            alt="Portrait of Rex Navarro Jr."
            width={1106}
            height={1413}
            preload
            sizes="(max-width: 1024px) 80vw, 38vw"
            className="relative z-10 aspect-[4/5] w-[88%] rounded-[50%] border-[7px] border-[#171b21] object-cover object-center"
          />
          <p className="absolute bottom-0 right-0 z-20 bg-[#171b21] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
            Pasig City · Philippines
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl border-t border-white/10 py-5 sm:grid-cols-3">
        <div className="border-b border-white/10 py-3 sm:border-b-0 sm:border-r sm:border-white/10 sm:pr-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">Focus</p>
          <p className="mt-1 text-sm font-medium text-white">BA · SQL · Power BI</p>
        </div>
        <div className="border-b border-white/10 py-3 sm:border-b-0 sm:px-6 sm:border-r sm:border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">Education</p>
          <p className="mt-1 text-sm font-medium text-white">BSIT · PLP Pasig</p>
        </div>
        <div className="py-3 sm:pl-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">Strength</p>
          <p className="mt-1 text-sm font-medium text-white">IT-to-business translation</p>
        </div>
      </div>

      <div
        id="credentials"
        className="mx-auto max-w-6xl border-t border-white/10 py-10 sm:py-12"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7ca9ff]">
              Credentials
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
              Certificates at a glance
            </h2>
          </div>
          <p className="text-xs text-[#a5afbc]">Select a certificate to open the PDF</p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {credentials.map((credential) => (
            <a
              key={credential.title}
              href={credential.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden border border-white/10 bg-[#20262e] transition hover:border-[#1767f2]"
            >
              <Image
                src={credential.preview}
                alt={credential.alt}
                width={1600}
                height={1200}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <span className="block border-t border-white/10 px-4 py-3">
                <span className="block text-sm font-semibold text-white">
                  {credential.title}
                </span>
                <span className="mt-1 block text-xs font-medium text-[#7ca9ff]">
                  View certificate PDF
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
