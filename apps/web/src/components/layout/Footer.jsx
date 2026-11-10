import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

        <a href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
            <Coffee size={22} />
          </span>

          <span className="text-xl font-extrabold">
            buymecoffee.
          </span>
        </a>

        <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
          <a href="#features" className="hover:text-black">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-black">
            How it works
          </a>

          <a href="/login" className="hover:text-black">
            Log in
          </a>

          <a href="/register" className="hover:text-black">
            Sign up
          </a>
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Supportly. All rights reserved.
        </p>

      </div>
    </footer>
  );
}


// import { Coffee } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="border-t border-border bg-white px-6 py-14">
//       <div className="mx-auto max-w-7xl">

//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

//           <div className="lg:col-span-2">
//             <a href="/" className="flex items-center gap-2">
//               <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
//                 <Coffee size={22} />
//               </span>

//               <span className="text-xl font-extrabold">
//                 supportly.
//               </span>
//             </a>

//             <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
//               A home for independent creators. Build your
//               community, share your creativity and receive
//               support for what you love doing.
//             </p>

//             <div className="mt-6 flex gap-3">
//               {[Coffee].map((Icon, index) => (
//                 <span
//                   key={index}
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff7dc] text-ink"
//                 >
//                   <Icon size={18} />
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="font-extrabold">Platform</h3>

//             <div className="mt-5 flex flex-col gap-4 text-sm text-muted">
//               <a href="#explore">Explore creators</a>
//               <a href="#features">Features</a>
//               <a href="#how-it-works">How it works</a>
//               <a href="#faq">FAQs</a>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-extrabold">Account</h3>

//             <div className="mt-5 flex flex-col gap-4 text-sm text-muted">
//               <a href="/register">Get started</a>
//               <a href="/login">Log in</a>
//               <a href="/register">Become a creator</a>
//             </div>
//           </div>

//         </div>

//         <div className="mt-14 flex flex-col justify-between gap-5 border-t border-border pt-7 text-sm text-muted md:flex-row">
//           <p>© {new Date().getFullYear()} Supportly. All rights reserved.</p>

//           <div className="flex gap-6">
//             <a href="/privacy">Privacy</a>
//             <a href="/terms">Terms</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }