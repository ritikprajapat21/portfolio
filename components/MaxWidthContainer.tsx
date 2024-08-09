import { cn } from "@/lib/utils";

const MaxWidthContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between pt-20 px-8 md:px-12 lg:px-24",
        className,
      )}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {children}
      </div>
    </main>
  );
};

export default MaxWidthContainer;
