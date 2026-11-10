import { ShieldCheck, Globe2, Zap, Users } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const benefits = [
  {
    icon: Zap,
    title: "Get started quickly",
    description: "Create a creator page without building an entire website."
  },
  {
    icon: Users,
    title: "Build your community",
    description: "Connect with people who appreciate and support your work."
  },
  {
    icon: ShieldCheck,
    title: "Manage everything",
    description: "Keep your creator activity, supporters and earnings organized."
  },
  {
    icon: Globe2,
    title: "Share anywhere",
    description: "Use your creator page link across your online platforms."
  }
];

export default function Benefits() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        <div>
          <SectionHeading
            centered={false}
            eyebrow="Why buymecoffee"
            title="Everything you need to grow independently."
            description="Spend more time creating and less time managing complicated tools. Supportly brings your creator activities together."
          />

          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-4 font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#ffe9a0] p-8 md:p-12">
          <div className="rounded-3xl bg-white p-7 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-extrabold">Creator workspace</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                Preview
              </span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#fff8df] p-5">
                <p className="text-xs text-muted">Creator page</p>
                <p className="mt-2 font-extrabold">Your identity</p>
              </div>

              <div className="rounded-2xl bg-[#f1f5ff] p-5">
                <p className="text-xs text-muted">Community</p>
                <p className="mt-2 font-extrabold">Your audience</p>
              </div>

              <div className="rounded-2xl bg-[#f3f9f0] p-5">
                <p className="text-xs text-muted">Support</p>
                <p className="mt-2 font-extrabold">Contributions</p>
              </div>

              <div className="rounded-2xl bg-[#fff0ed] p-5">
                <p className="text-xs text-muted">Content</p>
                <p className="mt-2 font-extrabold">Your creations</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border p-5">
              <p className="text-sm font-bold">
                Your creative journey starts here.
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-2/3 rounded-full bg-brand" />
              </div>

              <p className="mt-3 text-xs text-muted">
                Illustrative workspace preview
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}