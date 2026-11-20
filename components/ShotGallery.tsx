"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { X } from "lucide-react";
import type { PortfolioShot } from "@/data/portfolioItems";

export default function ShotGallery({ shots }: { shots: PortfolioShot[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const isOpen = open !== null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setOpen((current) =>
          current === null ? current : (current + 1) % shots.length,
        );
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setOpen((current) =>
          current === null
            ? current
            : (current - 1 + shots.length) % shots.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [isOpen, shots.length]);

  const containDialogFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (shots.length === 0) {
    return (
      <p className="mt-6 text-sm text-[#9aa5b3]">
        No screenshot was captured for this item. The case-study notes preserve
        the available project details.
      </p>
    );
  }

  const active = open === null ? null : shots[open];

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setOpen(index);
            }}
            className="overflow-hidden border border-white/10 bg-[#20262e] text-left transition hover:border-[#1767f2]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover object-top"
            />
            <span className="block border-t border-white/10 px-3 py-3 text-xs leading-5 text-[#b0bac6]">
              {shot.caption}
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#10203a]/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setOpen(null)}
          onKeyDown={containDialogFocus}
        >
          <div
            ref={dialogRef}
            className="max-h-[90vh] w-full max-w-5xl overflow-auto border border-white/10 bg-[#20262e]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <p className="text-sm text-[#e2e7ed]">{active.caption}</p>
              <div className="flex items-center gap-2">
                {shots.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpen((current) =>
                          current === null
                            ? current
                            : (current - 1 + shots.length) % shots.length,
                        )
                      }
                      className="border border-white/15 px-2.5 py-1 text-xs text-[#b0bac6] hover:border-[#1767f2] hover:text-white"
                      aria-label="Previous screenshot"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setOpen((current) =>
                          current === null ? current : (current + 1) % shots.length,
                        )
                      }
                      className="border border-white/15 px-2.5 py-1 text-xs text-[#b0bac6] hover:border-[#1767f2] hover:text-white"
                      aria-label="Next screenshot"
                    >
                      Next
                    </button>
                  </>
                ) : null}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOpen(null)}
                  className="p-1 text-[#b0bac6] hover:text-white"
                  aria-label="Close screenshot"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.alt}
              decoding="async"
              className="w-full"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
