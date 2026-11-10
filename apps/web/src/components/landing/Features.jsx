const features = [
  {
    emoji: "☕",
    title: "One-time support",
    description:
      "Let your audience contribute whenever they want."
  },
  {
    emoji: "💛",
    title: "Memberships",
    description:
      "Build recurring relationships with your biggest supporters."
  },
  {
    emoji: "🛍️",
    title: "Digital products",
    description:
      "Sell your digital work directly to your community."
  },
  {
    emoji: "✍️",
    title: "Exclusive content",
    description:
      "Share special posts and updates with your supporters."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Everything in one place
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            More ways to earn from what you love.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">
                {feature.emoji}
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}