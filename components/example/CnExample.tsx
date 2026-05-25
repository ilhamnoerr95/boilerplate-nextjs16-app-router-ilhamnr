/**
 * CnExample — demonstrasi penggunaan utility `cn` dari utils/cn.ts
 *
 * `cn` menggabungkan dua library:
 *   - clsx  : conditional className (mirip classnames)
 *   - twMerge : resolve konflik class Tailwind (misal: p-2 + p-4 → hanya p-4)
 */

import { cn } from "@/utils/cn";

/* ── Tipe props untuk komponen Button ── */
type ButtonVariant = "primary" | "danger" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

/* ─────────────────────────────────────────────
   CONTOH 1 — Variant + Conditional class
   cn memilih class berdasarkan nilai prop.
   Konflik class (misal dua bg-*) diselesaikan
   oleh twMerge: hanya class terakhir yang menang.
   ───────────────────────────────────────────── */
export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        // Base class yang selalu ada
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",

        // Variant — hanya satu yang aktif
        {
          "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500":
            variant === "primary",
          "bg-danger text-white hover:bg-danger-dark focus-visible:ring-danger":
            variant === "danger",
          "bg-transparent text-foreground hover:bg-neutral-100 focus-visible:ring-neutral-400":
            variant === "ghost",
        },

        // Size
        {
          "h-8 px-3 text-sm":  size === "sm",
          "h-10 px-4 text-base": size === "md",
          "h-12 px-6 text-lg": size === "lg",
        },

        // State
        isLoading && "cursor-not-allowed opacity-60",
        (disabled && !isLoading) && "cursor-not-allowed opacity-50",
        fullWidth && "w-full",

        // className dari luar bisa override — twMerge pastikan tidak konflik
        className
      )}
      {...props}
    >
      {isLoading ? "Loading…" : children}
    </button>
  );
}

/* ─────────────────────────────────────────────
   CONTOH 2 — Merge class yang konflik
   Tanpa twMerge: "p-4 p-2" → keduanya ada (tidak
   terduga). Dengan cn/twMerge: hanya "p-2" (terakhir).
   ───────────────────────────────────────────── */
interface CardProps {
  children: React.ReactNode;
  // Misalnya parent mau override padding
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        // Default padding & style
        "rounded-lg border border-neutral-200 bg-white p-6 shadow-card",
        // className dari luar otomatis merge — jika ada p-* lain, p-6 akan diganti
        className
      )}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONTOH 3 — cn dengan array & nested condition
   cn menerima: string, object, array, undefined, false.
   Semua falsy value diabaikan secara otomatis.
   ───────────────────────────────────────────── */
interface BadgeProps {
  label: string;
  type?: "success" | "warning" | "danger" | "info";
  dot?: boolean;
}

export function Badge({ label, type = "info", dot = false }: BadgeProps) {
  const colorMap: Record<NonNullable<BadgeProps["type"]>, string> = {
    success: "bg-success-light text-success-dark",
    warning: "bg-warning-light text-warning-dark",
    danger:  "bg-danger-light  text-danger-dark",
    info:    "bg-info-light    text-info-dark",
  };

  const dotColorMap: Record<NonNullable<BadgeProps["type"]>, string> = {
    success: "bg-success",
    warning: "bg-warning",
    danger:  "bg-danger",
    info:    "bg-info",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        colorMap[type]
      )}
    >
      {/* dot hanya dirender jika prop dot=true */}
      {dot && (
        <span className={cn("h-1.5 w-1.5 rounded-full", dotColorMap[type])} />
      )}
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────
   CONTOH 4 — cn untuk layout responsif
   Class responsif bisa digabung conditional
   sama seperti class biasa.
   ───────────────────────────────────────────── */
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

export function Grid({ children, cols = 2, gap = "md" }: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        // Kolom responsif
        {
          "grid-cols-1":                         cols === 1,
          "grid-cols-1 sm:grid-cols-2":          cols === 2,
          "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": cols === 3,
          "grid-cols-2 sm:grid-cols-3 md:grid-cols-4": cols === 4,
        },
        // Gap
        {
          "gap-2": gap === "sm",
          "gap-4": gap === "md",
          "gap-8": gap === "lg",
        }
      )}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   DEMO PAGE — render semua contoh di atas
   ───────────────────────────────────────────── */
export default function CnExamplePage() {
  return (
    <main className="mx-auto max-w-2xl space-y-10 p-8">
      <h1 className="text-2xl font-bold">Demo: utility `cn`</h1>

      {/* Contoh 1 — Button variant */}
      <section className="space-y-3">
        <h2 className="font-semibold text-neutral-600">Button (variant + size)</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="danger" size="sm">Danger SM</Button>
          <Button variant="ghost" size="lg">Ghost LG</Button>
          <Button variant="primary" isLoading>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>

        {/* Override class dari luar — twMerge ganti bg-brand-500 jadi bg-purple-500 */}
        <Button className="bg-purple-500 hover:bg-purple-600">
          Override via className
        </Button>
      </section>

      {/* Contoh 2 — Card merge padding */}
      <section className="space-y-3">
        <h2 className="font-semibold text-neutral-600">Card (merge conflict)</h2>
        <Card>Default padding (p-6)</Card>
        {/* p-6 dari base akan diganti p-2 oleh twMerge */}
        <Card className="p-2">Override ke p-2 — twMerge resolve konflik</Card>
      </section>

      {/* Contoh 3 — Badge */}
      <section className="space-y-3">
        <h2 className="font-semibold text-neutral-600">Badge (array + nested)</h2>
        <div className="flex flex-wrap gap-2">
          <Badge label="Success" type="success" dot />
          <Badge label="Warning" type="warning" dot />
          <Badge label="Danger"  type="danger" />
          <Badge label="Info"    type="info"   dot />
        </div>
      </section>

      {/* Contoh 4 — Grid responsif */}
      <section className="space-y-3">
        <h2 className="font-semibold text-neutral-600">Grid (responsif)</h2>
        <Grid cols={3} gap="sm">
          {["A", "B", "C", "D", "E", "F"].map((item) => (
            <div
              key={item}
              className="rounded bg-brand-100 py-4 text-center font-bold text-brand-700"
            >
              {item}
            </div>
          ))}
        </Grid>
      </section>
    </main>
  );
}
