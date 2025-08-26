const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6">
    {children}
  </span>
);

export default Pill;
