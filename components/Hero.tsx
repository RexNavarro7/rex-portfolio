import { ArrowDownRight, Download } from "lucide-react";
import { FILES } from "@/lib/assets";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden px-5 pt-28 pb-20 sm:pt-36">
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Business Analyst · Data Analyst
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rex Navarro Jr.
            <span className="mt-2 block text-2xl font-medium text-slate-300 sm:text-3xl">
              Business Analyst & Data Analyst
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            IT-to-Business Translator bridging the gap between raw data, technical
            constraints, and executive strategy.
          </p>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-400">
            I am a BSIT student transitioning into Business Analysis and Data
            Analytics. Because I have a foundational background in software
            engineering, I don&apos;t just gather requirements—I understand how they
            are built. I specialize in translating business needs into structured
            process flows, troubleshooting complex data models, and delivering
            actionable insights.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              View Portfolio
              <ArrowDownRight size={16} />
            </a>
            <a
              href={FILES.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
            Snapshot
          </p>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-slate-400">Focus</dt>
              <dd className="text-right text-white">BA · SQL · Power BI</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-slate-400">Capstone quality</dt>
              <dd className="text-right text-white">3.72 / 4.00 ISO 25010</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-slate-400">Strength</dt>
              <dd className="text-right text-white">IT → business translation</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Based</dt>
              <dd className="text-right text-white">Pasig · Philippines</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
