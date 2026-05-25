import Link from "next/link";

const navItems = [
  { href: "/ex-slot", label: "Dashboard" },
  { href: "/ex-interceptor", label: "Interceptor Example" },
  { href: "/ex-modal", label: "Modal Example" },
];

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-1">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Navigation
      </p>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-md px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
