const ButtonLink = ({
  href,
  children,
  icon: Icon,
  target = "_blank",
  variant = "primary",
  disabled,
}: {
  href: string;
  children: string | React.ReactNode;
  icon?: React.ElementType;
  target?: string;
  variant?: string;
  disabled?: boolean;
}) => (
  <a
    href={disabled ? undefined : href}
    target={target}
    rel="noreferrer noopener"
    className={`inline-flex transition duration-250 ease-in-out hover:scale-[1.1] items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow  ${
      variant === "primary"
        ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
        : "bg-white text-black hover:bg-neutral-100 border dark:bg-neutral-900 dark:text-white dark:border-neutral-800"
    } ${disabled ? "opacity-50 pointer-events-none" : ""}`}
  >
    {Icon && <Icon className="h-4 w-4" />}
    {children}
  </a>
);

export default ButtonLink;
