import { Heart, ArrowUpRight } from "lucide-react";

export default function CreatorCard({
  name,
  username,
  category,
  description,
  initials,
  color,
  supporters
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className={`flex h-36 items-center justify-center ${color}`}>
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white/80 text-2xl font-extrabold shadow-lg">
          {initials}
        </div>
      </div>

      <div className="p-6">

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-extrabold">{name}</h3>
            <p className="mt-1 text-sm text-muted">@{username}</p>
          </div>

          <ArrowUpRight
            size={20}
            className="text-gray-400 transition group-hover:text-black"
          />
        </div>

        <span className="mt-4 inline-flex rounded-full bg-[#fff5cf] px-3 py-1 text-xs font-bold text-amber-800">
          {category}
        </span>

        <p className="mt-4 min-h-12 text-sm leading-6 text-muted">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="flex items-center gap-2 text-sm text-muted">
            <Heart size={16} className="text-rose-400" />
            {supporters}
          </span>

          <span className="text-sm font-bold transition group-hover:text-amber-600">
            View page →
          </span>
        </div>

      </div>
    </article>
  );
}