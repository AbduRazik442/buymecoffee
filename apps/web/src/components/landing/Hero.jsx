// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Heart,
//   Coffee,
//   Sparkles
// } from "lucide-react";

// import Button from "../ui/Button";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden px-6 pb-24 pt-24 md:pb-32 md:pt-32">

//       <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />

//       <div className="pointer-events-none absolute -left-40 top-64 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

//       <div className="relative mx-auto max-w-5xl text-center">

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold shadow-sm"
//         >
//           <Sparkles size={16} className="text-amber-500" />
//           Your creativity deserves support
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
//         >
//           Make your passion
//           <br />

//           <span className="relative inline-block">
//             your livelihood.
//             <span className="absolute -bottom-1 left-0 -z-10 h-4 w-full -rotate-1 bg-brand/80" />
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted md:text-xl"
//         >
//           A simple way for creators to receive support,
//           build memberships and share their work with
//           the people who love what they do.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
//         >
//           <Button icon>
//             Start your creator page
//           </Button>

//           <a
//             href="#how-it-works"
//             className="rounded-xl border border-border bg-white px-6 py-3 font-bold transition hover:bg-gray-50"
//           >
//             See how it works
//           </a>
//         </motion.div>

//         <div className="mt-14 flex flex-wrap items-center justify-center gap-7 text-sm font-semibold text-gray-500">
//           <span className="flex items-center gap-2">
//             <Heart size={17} className="text-rose-400" />
//             Built for creators
//           </span>

//           <span className="flex items-center gap-2">
//             <Coffee size={17} className="text-amber-500" />
//             Simple support
//           </span>

//           <span className="flex items-center gap-2">
//             <Sparkles size={17} className="text-purple-400" />
//             Your own page
//           </span>
//         </div>

//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Coffee,
  Sparkles,
  CheckCircle2
} from "lucide-react";

import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-20 md:pt-28">

      <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 top-64 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left content */}

        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold shadow-sm"
          >
            <Sparkles size={16} className="text-amber-500" />
            A home for independent creators
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
          >
            Fund Your

            <span className="relative mt-2 block">
              creative work.
              <span className="absolute -bottom-1 left-0 -z-10 h-4 w-full -rotate-1 bg-brand/80" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-8 text-muted"
          >
            A simple way to receive support, build memberships,
            sell your creations and connect with the people
            who love what you do.
          </motion.p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button icon>
              Start my page
            </Button>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3 font-bold transition hover:bg-gray-50"
            >
              See how it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-5 text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-600" />
              Easy setup
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-green-600" />
              Your own page
            </span>
          </div>
        </div>

        {/* Right visual */}

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-lg"
        >

          <div className="absolute -right-5 -top-8 h-32 w-32 rounded-full bg-brand/30 blur-2xl" />

          <div className="relative rounded-[2rem] border border-border bg-white p-5 shadow-2xl sm:p-8">

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-xl font-extrabold">
                JD
              </div>

              <div>
                <h3 className="font-extrabold">Jamie Designer</h3>
                <p className="text-sm text-muted">@jamiedesigns</p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-[#fff7dc] p-6">
              <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-amber-200 to-orange-200">
                <span className="text-6xl">🎨</span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold">
                Creating something beautiful.
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                Every bit of support helps me keep creating
                and sharing my work.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold">
                Buy Jamie a coffee
              </p>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {["$3", "$5", "$10"].map((amount) => (
                  <div
                    key={amount}
                    className={`rounded-xl border px-3 py-3 text-center font-bold ${
                      amount === "$5"
                        ? "border-brand bg-brand"
                        : "border-border"
                    }`}
                  >
                    {amount}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#242424] px-4 py-4 font-bold text-white">
                <Coffee size={19} />
                Support this creator
              </div>
            </div>

          </div>

          {/* Floating support card */}

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-7 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-xl sm:-left-10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
              <Heart className="text-green-700" />
            </div>

            <div>
              <p className="text-sm font-extrabold">
                A little support matters
              </p>
              <p className="text-xs text-muted">
                Help creativity grow.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}