type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="section-heading mb-8 max-w-3xl">
      {eyebrow && eyebrow.toLocaleLowerCase('es') !== title.toLocaleLowerCase('es') ? (
        <p className="mb-3 text-sm font-medium text-cyan-200/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionTitle;
