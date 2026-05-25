import Link from "next/link";

const items = [
  { id: "1", title: "Item One", desc: "First item description" },
  { id: "2", title: "Item Two", desc: "Second item description" },
  { id: "3", title: "Item Three", desc: "Third item description" },
];

export default function InterceptorListPage() {
  return (
    <div className="p-8 max-w-xl">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
        Interceptor Route
      </p>
      <h1 className="mb-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Item List
      </h1>
      <p className="mb-6 text-sm text-zinc-500">
        Klik item untuk lihat <em>intercepted view</em>. Buka URL-nya langsung di tab baru untuk lihat <em>full page</em>.
      </p>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/ex-interceptor/item/${item.id}`}
              className="flex flex-col rounded-lg border border-zinc-200 px-4 py-3 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <span className="font-medium text-zinc-800 dark:text-zinc-100">{item.title}</span>
              <span className="text-sm text-zinc-400">{item.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
