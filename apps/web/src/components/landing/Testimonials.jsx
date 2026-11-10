import { Star } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    name: "Olivia Carter",
    role: "Illustrator — Sample profile",
    initials: "OC",
    quote: "A simple and welcoming way to bring my creative community together."
  },
  {
    name: "Ethan Brooks",
    role: "Writer — Sample profile",
    initials: "EB",
    quote: "I love the idea of having one place to share my work and connect with readers."
  },
  {
    name: "Mia Anderson",
    role: "Designer — Sample profile",
    initials: "MA",
    quote: "The creator-first experience makes supporting independent work feel personal."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Community first"
          title="Creativity deserves appreciation."
          description="A platform concept built around the connection between creators and their communities."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-border p-8 transition hover:shadow-lg"
            >
              <div className="flex gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 text-lg font-semibold leading-8">
                "{item.quote}"
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0c1] font-extrabold">
                  {item.initials}
                </div>

                <div>
                  <p className="text-sm font-extrabold">{item.name}</p>
                  <p className="text-xs text-muted">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          Sample design content only. These are not verified reviews.
        </p>
      </div>
    </section>
  );
}