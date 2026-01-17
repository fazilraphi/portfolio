import Link from "next/link";

export default function CircleButton({ href, color, children }) {
  return (
    <Link
      href={href}
      className={`h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center font-medium transition hover:scale-105 ${color}`}
    >
      {children}
    </Link>
  );
}
