export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true
}) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}