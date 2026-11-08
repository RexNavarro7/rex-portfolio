import { Code2, Link2, Mail } from "lucide-react";

const contacts = [
  {
    href: "https://linkedin.com/in/rex-navarro-997a17388",
    label: "LinkedIn",
    icon: Link2,
    hint: "linkedin.com/in/rex-navarro-997a17388",
  },
  {
    href: "https://github.com/RexNavarro7",
    label: "GitHub",
    icon: Code2,
    hint: "github.com/RexNavarro7",
  },
  {
    href: "mailto:navarrorex438@gmail.com",
    label: "Email",
    icon: Mail,
    hint: "navarrorex438@gmail.com",
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
          05 — Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Let&apos;s talk requirements, data, and delivery
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
          Open to Business Analyst, Data Analyst, and BI intern or junior roles.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0e151c] p-4 transition hover:border-cyan-300/40"
            >
              <item.icon className="text-cyan-300" size={18} />
              <span>
                <span className="block text-sm font-semibold text-white">
                  {item.label}
                </span>
                <span className="text-xs text-slate-400">{item.hint}</span>
              </span>
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-500">
          © 2026 Rex Navarro Jr. · Built with Next.js · Ready for Vercel
        </p>
      </div>
    </footer>
  );
}
