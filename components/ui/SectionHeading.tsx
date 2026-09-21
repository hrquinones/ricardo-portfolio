interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? (
        <p className="font-mono text-sm tracking-widest text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
