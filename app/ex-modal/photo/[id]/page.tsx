import Link from "next/link";

export default async function PhotoFullPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
          Full Page — akses URL langsung
        </p>
        <h1 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Photo #{id}
        </h1>
        <div className="mb-6 flex h-64 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <span className="text-6xl text-zinc-300">🖼️</span>
        </div>
        <p className="mb-6 text-sm text-zinc-500">
          Halaman ini tampil saat URL diakses langsung atau saat refresh.
          Saat navigasi dari gallery, Next.js akan menampilkan modal sebagai gantinya.
        </p>
        <Link href="/ex-modal" className="text-sm font-medium text-blue-600 hover:underline">
          ← Kembali ke Gallery
        </Link>
      </div>
    </div>
  );
}
