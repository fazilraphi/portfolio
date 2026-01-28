"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isAdminRoute = pathname === "/login" || pathname?.startsWith("/dashboard");

  const links = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/certificates", label: "Certificates" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    // prevent background scroll when drawer is open
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50",
        // Keep legacy look on login/dashboard as requested (avoid changing their UI)
        isAdminRoute
          ? "bg-black/40 backdrop-blur-md border-b border-white/10"
          : "bg-black/25 backdrop-blur-xl border-b border-white/10",
      )}
    >
      {/* subtle top glow for public pages */}
      {!isAdminRoute && (
        <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-indigo-500/20 blur-2xl" />
      )}

      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "text-white font-semibold tracking-tight",
            isAdminRoute ? "text-lg" : "text-base sm:text-lg",
          )}
        >
          <span
            className={clsx(
              "inline-flex items-center gap-2",
              !isAdminRoute &&
                "bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent",
            )}
          >
            Fazil
            {!isAdminRoute && (
              <span className="hidden sm:inline text-white/60 font-normal">
                / portfolio
              </span>
            )}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "relative px-3 py-2 rounded-xl transition",
                  active
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5",
                )}
              >
                {l.label}
                {!isAdminRoute && active && (
                  <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300" />
                )}
              </Link>
            );
          })}

          <Link
            href="/resume"
            onClick={() => setOpen(false)}
            className={clsx(
              "ml-2 inline-flex items-center justify-center",
              "px-4 py-2 rounded-xl font-medium transition",
              isAdminRoute
                ? "bg-cyan-500 text-black hover:bg-cyan-600"
                : "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 text-black hover:opacity-95 shadow-lg shadow-fuchsia-500/10",
            )}
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={clsx(
            "md:hidden",
            "inline-flex items-center justify-center rounded-xl",
            "w-11 h-11",
            "border border-white/10 bg-white/5 hover:bg-white/10 transition",
            "text-white focus:outline-none focus:ring-2 focus:ring-white/20",
          )}
        >
          <div className="space-y-1.5">
            <span
              className={clsx(
                "block w-5 h-0.5 bg-white transition-transform duration-200",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={clsx(
                "block w-5 h-0.5 bg-white transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={clsx(
                "block w-5 h-0.5 bg-white transition-transform duration-200",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "md:hidden",
          "fixed inset-0 z-50",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {/* backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={clsx(
            "absolute inset-0",
            "bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        {/* panel */}
        <aside
          className={clsx(
            "absolute right-0 top-0 h-full w-[86%] max-w-sm",
            "border-l border-white/10 bg-black/75 backdrop-blur-xl",
            "transition-transform duration-200",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div className="text-white font-semibold">Menu</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-10 h-10 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-1">
              {links.map((l) => {
                const active =
                  l.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "px-4 py-3 rounded-xl transition",
                      active
                        ? "text-white bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}

              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className={clsx(
                  "mt-3 inline-flex items-center justify-center",
                  "px-4 py-3 rounded-xl font-semibold transition",
                  isAdminRoute
                    ? "bg-cyan-500 text-black hover:bg-cyan-600"
                    : "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 text-black hover:opacity-95",
                )}
              >
                Resume
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
