"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#it-foundation", label: "IT Foundation" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171b21]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/#home" className="flex items-center gap-3 text-sm font-bold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center bg-[#1767f2] text-white">RN</span>
          <span>Rex Navarro <span className="font-normal text-[#9aa5b3]">/ Portfolio</span></span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#bbc4cf] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        id="mobile-navigation"
        hidden={!open}
        className="border-t border-white/10 bg-[#171b21] px-5 py-3 md:hidden"
      >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-sm font-medium text-[#bbc4cf] last:border-0"
            >
              {link.label}
            </Link>
          ))}
      </div>
    </header>
  );
}
