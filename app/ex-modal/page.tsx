import Link from "next/link";

const photos = [
  { id: "1", label: "Photo One", color: "bg-rose-100 hover:bg-rose-200" },
  { id: "2", label: "Photo Two", color: "bg-sky-100 hover:bg-sky-200" },
  { id: "3", label: "Photo Three", color: "bg-emerald-100 hover:bg-emerald-200" },
  { id: "4", label: "Photo Four", color: "bg-amber-100 hover:bg-amber-200" },
  { id: "5", label: "Photo Five", color: "bg-purple-100 hover:bg-purple-200" },
  { id: "6", label: "Photo Six", color: "bg-indigo-100 hover:bg-indigo-200" },
];

export default function GalleryPage() {
  return (
    <div className="p-8">
      <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-400">
        Slot + Interceptor — Best Practice
      </p>
      <h1 className="mb-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Gallery
      </h1>
      <p className="mb-6 text-sm text-zinc-500">
        Klik foto untuk membuka modal (URL berubah tapi halaman tidak reload).
        Buka URL foto di tab baru untuk melihat full page.
      </p>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/ex-modal/photo/${photo.id}`}
            className={`flex h-32 items-center justify-center rounded-xl font-medium text-zinc-700 transition-colors ${photo.color}`}
          >
            {photo.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
