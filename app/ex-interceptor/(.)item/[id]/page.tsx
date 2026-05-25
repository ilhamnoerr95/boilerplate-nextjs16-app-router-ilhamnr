import Link from "next/link";

// (.) = intercept route di level yang sama dalam URL hierarchy
// File ini menangkap /ex-interceptor/item/[id] saat navigasi via Link dari /ex-interceptor
// Hard refresh / direct URL tetap menampilkan item/[id]/page.tsx

export default async function ItemInterceptedPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="p-8 max-w-xl">
      <div className="rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 dark:border-blue-900 dark:bg-blue-950">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-blue-400">
          Intercepted View
        </p>
        <h2 className="mb-2 text-xl font-semibold text-blue-900 dark:text-blue-100">
          Item #{id} — Preview
        </h2>
        <p className="mb-4 text-sm text-blue-700 dark:text-blue-300">
          Tampil karena navigasi via <code className="rounded bg-blue-100 px-1 dark:bg-blue-900">Link</code>.
          Refresh halaman untuk melihat full page.
        </p>
        <div className="flex gap-3">
          <Link
            href={`/ex-interceptor/item/${id}`}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Buka full page →
          </Link>
          <Link
            href="/ex-interceptor"
            className="text-sm text-zinc-500 hover:underline"
          >
            ← Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
