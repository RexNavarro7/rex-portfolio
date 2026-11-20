import { ArrowUpRight, Database, Lock, Workflow } from "lucide-react";
import Link from "next/link";

const items = [
  {
    icon: Database,
    title: "CourseDock / CMS",
    body: "Coursework-monitoring system for the College of Computer Studies. The captured screen is the dean dashboard: submissions, faculty, and a pending IT 105 syllabus.",
    href: "/portfolio/coursedock-cms",
  },
  {
    icon: Workflow,
    title: "RevOn Car Rental ERP",
    body: "Rental screens for an active booking and a checkout. The captures show the reservation, the pick-up details, and the price breakdown.",
    href: "/portfolio/revon-car-rental",
  },
  {
    icon: Lock,
    title: "ACSIS",
    body: "Faculty exam workspace. The screenshot is the signed-in dashboard with classes, exams, and two draft IT 108 exams.",
    href: "/portfolio/acsis",
  },
];

export default function Systems() {
  return (
    <section id="it-foundation" className="scroll-mt-24 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ca9ff]">
          04 — IT foundation
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Systems analysis & database architecture
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#a5afbc]">
          These academic systems show the technical foundation behind my
          analytics work. Open a project for the available screens and
          project notes.
        </p>
        <ol className="mt-9 divide-y divide-white/10 border-y border-white/10">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-3 py-5 sm:grid-cols-[64px_1fr_48px] sm:items-start"
            >
              <span className="text-sm font-semibold tabular-nums text-[#788493]">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#a5afbc]">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7ca9ff] transition hover:text-white"
                >
                  Open project <ArrowUpRight size={15} />
                </Link>
              </div>
              <item.icon className="hidden text-[#7ca9ff] sm:block" size={19} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
