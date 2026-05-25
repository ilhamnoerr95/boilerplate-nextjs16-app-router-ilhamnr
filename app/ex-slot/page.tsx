export default function SlotPage() {
  return (
    <div className="max-w-xl">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
        Parallel Routes / Slot
      </p>
      <h1 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Main Content
      </h1>
      <p className="text-zinc-500">
        Slot ini dirender sebagai <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">children</code> di layout.
        Sidebar di sebelah kiri dirender dari <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">@sidebar/page.tsx</code>{" "}
        sebagai slot terpisah.
      </p>
    </div>
  );
}
