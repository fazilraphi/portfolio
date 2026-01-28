"use client";

import clsx from "clsx";

/**
 * Shared responsive page wrapper for public pages.
 * Intentionally NOT used by /login and /dashboard to avoid changing their UI.
 */
export default function PageShell({
  children,
  className,
  contentClassName,
  withFooterGap = true,
}) {
  return (
    <div
      className={clsx(
        "min-h-screen",
        // New, more vibrant scheme
        "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(56,189,248,0.14),transparent_40%),radial-gradient(900px_circle_at_80%_10%,rgba(217,70,239,0.14),transparent_45%),radial-gradient(800px_circle_at_50%_90%,rgba(99,102,241,0.12),transparent_50%),linear-gradient(180deg,#070A12_0%,#050813_100%)]",
        className,
      )}
    >
      {/* subtle grain for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:24px_24px]" />
      <main
        className={clsx(
          "relative mx-auto max-w-6xl px-4 sm:px-6",
          // Offset the fixed navbar; keep consistent across pages
          "pt-24 md:pt-28",
          // Comfortable vertical rhythm on mobile/desktop
          "py-10 md:py-16",
          withFooterGap && "pb-16 md:pb-20",
          contentClassName,
        )}
      >
        {children}
      </main>
    </div>
  );
}

