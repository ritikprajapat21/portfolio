const Section = ({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24 py-14">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6" />
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;
