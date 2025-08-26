import clsx from "clsx";

export default function Border({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "inline-flex mb-4 animate-rotate-border from-black rounded-full from-80% via-white/70 via-90% to-black to-100% p-px bg-conic/[from_var(--border-angle)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
