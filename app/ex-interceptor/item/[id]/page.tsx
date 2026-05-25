import Link from "next/link";

export default async function ItemFullPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
          Full Page — akses URL langsung
        </p>
        <h1 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Item #{id}
        </h1>
        <p className="mb-6 text-sm text-zinc-500">
          Halaman ini tampil saat URL diakses langsung (hard navigation / refresh).
          Saat navigasi via <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">Link</code>,
          Next.js akan menampilkan intercepted view.
        </p>
        <Link
          href="/ex-interceptor"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Kembali ke list
        </Link>
      </div>
    </div>
  );
}
