/**
 * ScssExample — demonstrasi penggunaan SCSS Module + cn utility.
 *
 * Strategi styling di project ini:
 *   - Tailwind  → utility class cepat, layout, spacing umum
 *   - SCSS Module → logika styling kompleks (BEM, mixin, loop, animasi)
 *   - cn        → gabungkan keduanya tanpa konflik
 */

import { cn } from "@/utils/cn";
import styles from "./ScssExample.module.scss";

/* ─────────────────────────────────────────────
   CARD — SCSS Module + Tailwind via cn
   Class dari SCSS module dan Tailwind digabung
   dengan cn; twMerge pastikan tidak konflik.
   ───────────────────────────────────────────── */
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    // styles.card → dari ScssExample.module.scss
    // cn menggabungkan SCSS module class + Tailwind class
    <div className={cn(styles.card, "overflow-hidden", className)}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   BADGE — BEM modifier via SCSS
   ───────────────────────────────────────────── */
type BadgeType = "success" | "warning" | "danger" | "info";

interface BadgeProps {
  label: string;
  type?: BadgeType;
  dot?: boolean;
}

// Map type ke class BEM modifier yang ada di .module.scss
const badgeModifier: Record<BadgeType, string> = {
  success: styles["badge--success"],
  warning: styles["badge--warning"],
  danger:  styles["badge--danger"],
  info:    styles["badge--info"],
};

export function Badge({ label, type = "info", dot = false }: BadgeProps) {
  return (
    <span className={cn(styles.badge, badgeModifier[type])}>
      {dot && <span className={styles.badge__dot} />}
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────
   ICON BUTTON — focus-ring & sr-only mixin
   ───────────────────────────────────────────── */
interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;   // label untuk screen reader
  icon: React.ReactNode;
}

export function IconButton({ label, icon, className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(styles.iconButton, className)}
      aria-label={label}
      {...props}
    >
      {icon}
      {/* srLabel disembunyikan secara visual via @include sr-only */}
      <span className={styles.srLabel}>{label}</span>
    </button>
  );
}

/* ─────────────────────────────────────────────
   DEMO PAGE
   ───────────────────────────────────────────── */
export default function ScssExamplePage() {
  return (
    <main className="mx-auto max-w-2xl space-y-10 p-8">
      <h1 className="text-2xl font-bold">Demo: SCSS Module + cn</h1>

      {/* Card: SCSS mixin spacing + Tailwind utility */}
      <section className="space-y-4">
        <h2 className="font-semibold text-neutral-500">Card (SCSS mixin + Tailwind)</h2>
        <Card>
          <p className="text-sm">Default card — padding dari SCSS spacing(4).</p>
        </Card>
        {/* className Tailwind ditambah via cn, tidak konflik dengan SCSS */}
        <Card className="border-brand-500">
          <p className="text-sm">Override border color via Tailwind class.</p>
        </Card>
      </section>

      {/* Badge: BEM modifier dari SCSS module */}
      <section className="space-y-3">
        <h2 className="font-semibold text-neutral-500">Badge (BEM SCSS modifier)</h2>
        <div className="flex flex-wrap gap-2">
          <Badge label="Success" type="success" dot />
          <Badge label="Warning" type="warning" dot />
          <Badge label="Danger"  type="danger" />
          <Badge label="Info"    type="info"   dot />
        </div>
      </section>

      {/* Icon Button: SCSS focus-ring + sr-only */}
      <section className="space-y-3">
        <h2 className="font-semibold text-neutral-500">Icon Button (focus-ring + sr-only)</h2>
        <div className="flex gap-3">
          <IconButton label="Tutup" icon={<span>✕</span>} />
          <IconButton label="Edit"  icon={<span>✎</span>} />
        </div>
        <p className="text-xs text-neutral-400">
          Label tersembunyi visual (sr-only), terbaca screen reader via aria-label.
        </p>
      </section>
    </main>
  );
}
