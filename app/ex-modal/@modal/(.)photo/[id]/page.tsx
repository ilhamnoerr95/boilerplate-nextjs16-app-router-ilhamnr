// (.) = intercept route di level yang sama (photo/[id] ada di ex-modal/)
// File ini dirender ke slot @modal — bukan menggantikan children (gallery)
// Hasilnya: gallery tetap terlihat di background, modal muncul di atas
// Hard refresh / direct URL → photo/[id]/page.tsx (full page)

import Modal from "@/components/example/Modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <div className="rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900">
        <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
          Modal — Intercepted Route
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Photo #{id}
        </h2>
        <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
          <span className="text-4xl text-zinc-300">🖼️</span>
        </div>
        <p className="text-sm text-zinc-500">
          Modal ini tampil karena navigasi via <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">Link</code>.
          Gallery di background tetap ter-render. Tekan <kbd className="rounded border border-zinc-300 px-1.5 py-0.5 text-xs dark:border-zinc-700">Esc</kbd> atau klik luar untuk tutup.
        </p>
      </div>
    </Modal>
  );
}
