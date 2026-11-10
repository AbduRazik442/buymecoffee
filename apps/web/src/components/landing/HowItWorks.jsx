// import {
//   UserRound,
//   Link,
//   Heart
// } from "lucide-react";

// const steps = [
//   {
//     number: "01",
//     icon: UserRound,
//     title: "Create your page",
//     description:
//       "Set up your creator profile and tell people what you create."
//   },
//   {
//     number: "02",
//     icon: Link,
//     title: "Share your link",
//     description:
//       "Share your personal creator page with your audience."
//   },
//   {
//     number: "03",
//     icon: Heart,
//     title: "Receive support",
//     description:
//       "Let your community support your work and creativity."
//   }
// ];

// export default function HowItWorks() {
//   return (
//     <section
//       id="how-it-works"
//       className="bg-white px-6 py-24"
//     >
//       <div className="mx-auto max-w-7xl">

//         <div className="mb-16 text-center">
//           <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
//             Simple process
//           </span>

//           <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
//             Three steps. That's it.
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-muted">
//             Everything you need to start receiving support
//             from your audience.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-3">
//           {steps.map((step) => {
//             const Icon = step.icon;

//             return (
//               <div
//                 key={step.number}
//                 className="rounded-3xl border border-border bg-[#fffdf7] p-8 transition hover:-translate-y-2 hover:shadow-xl"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand">
//                     <Icon size={27} />
//                   </div>

//                   <span className="text-4xl font-extrabold text-gray-200">
//                     {step.number}
//                   </span>
//                 </div>

//                 <h3 className="mt-8 text-2xl font-bold">
//                   {step.title}
//                 </h3>

//                 <p className="mt-3 leading-7 text-muted">
//                   {step.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import {
  UserRound,
  Link,
  Heart,
  ArrowRight
} from "lucide-react";

import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Create your page",
    description:
      "Set up your personal creator profile, add your story and show people what you create."
  },
  {
    number: "02",
    icon: Link,
    title: "Share your link",
    description:
      "Share your unique page with your audience through social media, websites and communities."
  },
  {
    number: "03",
    icon: Heart,
    title: "Receive support",
    description:
      "Let your community support your work through contributions and memberships."
  }
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Getting started"
          title="Simple for you. Meaningful for them."
          description="You don't need a complicated setup to start building a community around your creativity."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded-3xl border border-border bg-[#fffdf7] p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand">
                    <Icon size={28} />
                  </div>

                  <span className="text-5xl font-extrabold text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-9 text-2xl font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {step.description}
                </p>

                {index !== 2 && (
                  <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-white p-2 md:block">
                    <ArrowRight size={19} />
                  </div>
                )}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
