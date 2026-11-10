import { ArrowRight, Coffee } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#ffdd57] px-8 py-20 text-center md:px-16">

        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Coffee size={30} />
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Your next chapter starts with one cup.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/70">
            Create your page, share your story and let
            your community become part of your journey.
          </p>

          <a
            href="/register"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#242424] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-black"
          >
            Create your page
            <ArrowRight size={19} />
          </a>

          <p className="mt-5 text-sm font-medium text-black/60">
            Start building your creator community.
          </p>
        </div>
      </div>
    </section>
  );
}