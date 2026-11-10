// import { useState } from "react";
// import { Menu, X, Coffee } from "lucide-react";
// import Button from "../ui/Button";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { label: "Explore", href: "#explore" },
//     { label: "How it works", href: "#how-it-works" },
//     { label: "For creators", href: "#features" }
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-border bg-[#fffdf7]/90 backdrop-blur-xl">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

//         <div className="hidden items-center gap-9 md:flex">
//           {links.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-sm font-semibold text-gray-600 transition hover:text-black"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <a href="/" className="flex items-center gap-2">
//           <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
//             <Coffee size={23} />
//           </span>

//           <span className="text-2xl font-extrabold tracking-tight">
//             buymecoffee<span className="text-amber-500">.</span>
//           </span>
//         </a>

//         <div className="hidden items-center gap-4 md:flex">
//           <a href="/login" className="text-sm font-bold">
//             Log in
//           </a>

//           <Button icon>
//             Start my page
//           </Button>
//         </div>

//         <button
//           onClick={() => setOpen(!open)}
//           className="rounded-lg p-2 md:hidden"
//           aria-label="Toggle navigation"
//           aria-expanded={open}
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </nav>

//       {open && (
//         <div className="border-t border-border bg-[#fffdf7] px-6 py-5 md:hidden">
//           <div className="flex flex-col gap-5">
//             {links.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 onClick={() => setOpen(false)}
//                 className="font-semibold"
//               >
//                 {link.label}
//               </a>
//             ))}

//             <a href="/login" className="font-semibold">
//               Log in
//             </a>

//             <Button className="w-full">
//               Start my page
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState } from "react";
import {
  Coffee,
  Menu,
  X,
  ArrowUpRight
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Explore", href: "#explore" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#fffdf7]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-extrabold text-gray-600 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
            <Coffee size={23} />
          </span>

          <span className="text-2xl font-extrabold tracking-tight">
            buymecoffee<span className="text-amber-500">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="/login"
            className="text-sm font-bold hover:text-amber-700"
          >
            Log in
          </a>

          <a
            href="/register"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Start my page
            <ArrowUpRight size={17} />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-border p-2 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-[#fffdf7] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                {link.label}
              </a>
            ))}

            <a href="/login" className="font-semibold">
              Log in
            </a>

            <a
              href="/register"
              className="rounded-xl bg-brand px-5 py-3 text-center font-bold"
            >
              Start my page
            </a>
          </div>
        </div>
      )}
    </header>
  );
}