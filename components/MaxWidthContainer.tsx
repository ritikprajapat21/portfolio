import { cn } from "@/lib/utils";

const MaxWidthContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col items-center justify-between pt-24 px-8 md:px-12 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthContainer;
