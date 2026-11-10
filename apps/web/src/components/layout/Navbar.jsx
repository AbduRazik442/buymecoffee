// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Coffee,
//   Menu,
//   X,
//   ArrowUpRight
// } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { label: "FAQ", href: "/faq" },
//     { label: "Wall of Love", href: "#explore" },
//     { label: "How it works", href: "#how-it-works" },
//     { label: "Features", href: "#features" },
    
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-border bg-[#fffdf7]/90 backdrop-blur-xl">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

//         <div className="hidden items-center gap-8 lg:flex">
//           {links.map((link) => (
//             <Link
//               key={link.label}
//               to={link.href}
//               onClick={() => setOpen(false)}
//               className="text-sm font-extrabold text-gray-600 transition hover:text-black"
//             >
//               {link.label}
//             </Link>
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

//         <div className="hidden items-center gap-5 md:flex">
//           <Link
//             to="/login"
//             className="text-sm font-bold hover:text-amber-700"
//           >
//             Log in
//           </Link>

//           <Link
//             to="/register"
//             className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 hover:bg-brand-dark"
//           >
//             Start my page
//             <ArrowUpRight size={17} />
//           </Link>
//         </div>

//         <button
//           onClick={() => setOpen(!open)}
//           className="rounded-xl border border-border p-2 md:hidden"
//           aria-label="Toggle navigation"
//           aria-expanded={open}
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </nav>

//       {open && (
//         <div className="border-t border-border bg-[#fffdf7] px-6 py-6 md:hidden">
//           <div className="flex flex-col gap-6">
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

//             <a
//               href="/register"
//               className="rounded-xl bg-brand px-5 py-3 text-center font-bold"
//             >
//               Start my page
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  Menu,
  X,
  Search,
  ChevronDown,
  Apple,
  Smartphone,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [search, setSearch] = useState("");

  const links = [
    { label: "FAQ", href: "/faq", type: "link" },
    { label: "Wall of Love", href: "/#explore", type: "link" },
    {
      label: "Apps",
      type: "dropdown",
      items: [
        {
          label: "iOS",
          href: "#ios-app",
          icon: Apple,
        },
        {
          label: "Android",
          href: "#android-app",
          icon: Smartphone,
        },
      ],
    },
    {
      label: "Resources",
      type: "dropdown",
      items: [
        { label: "How it works", href: "/#how-it-works" },
        { label: "Features", href: "/#features" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ];

  const toggleDropdown = (label) => {
    setActiveDropdown((current) =>
      current === label ? null : label
    );
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Connect this to your creator search page/API
    // when that feature is implemented.
    console.log("Search creators:", search);
  };

  return (
    <header className="top-0 z-50 border-b border-[#eee9e3] bg-white/95 backdrop-blur-xl">
      <nav className="relative mx-auto grid w-full max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 py-4 lg:px-10">

        {/* LEFT NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">

          {links.map((link) => (
            <div
              key={link.label}
              className="relative"
            >
              {link.type === "dropdown" ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.label)}
                    aria-expanded={activeDropdown === link.label}
                    className="flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-gray-800 transition hover:text-black"
                  >
                    {link.label}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === link.label && (
                    <div className="absolute left-0 top-full z-50 mt-4 min-w-[190px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.10)]">

                      {link.items.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 hover:text-black"
                          >
                            {Icon && <Icon size={20} />}
                            {item.label}
                          </Link>
                        );
                      })}

                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  onClick={closeMenu}
                  className="whitespace-nowrap text-sm font-bold text-gray-800 transition hover:text-black"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

        </div>

        {/* CENTER LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
            <Coffee size={23} />
          </span>

          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            buymecoffee<span className="text-amber-500">.</span>
          </span>
        </Link>

        {/* RIGHT NAVIGATION */}
        <div className="hidden items-center justify-end gap-6 md:flex">

          {/* SEARCH */}
          <form
            onSubmit={handleSearch}
            className="flex w-[260px] items-center gap-3 rounded-full bg-[#f5f5f5] px-5 py-4 transition focus-within:ring-2 focus-within:ring-brand/30 xl:w-[310px]"
          >
            <Search
              size={21}
              className="shrink-0 text-gray-600"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search creators"
              aria-label="Search creators"
              className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none placeholder:text-gray-700"
            />
          </form>

          {/* LOGIN */}
          <Link
            to="/login"
            className="whitespace-nowrap text-sm font-bold text-gray-900 transition hover:text-gray-500"
          >
            Log in
          </Link>

          {/* SIGN UP */}
          <Link
            to="/register"
            className="whitespace-nowrap rounded-full bg-[#ffdc00] px-7 py-4 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#f4d000]"
          >
            Sign up
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-gray-200 p-2.5 text-gray-800"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 lg:hidden">

          {/* MOBILE SEARCH */}
          <form
            onSubmit={handleSearch}
            className="mb-6 flex items-center gap-3 rounded-full bg-gray-100 px-5 py-4"
          >
            <Search size={20} className="text-gray-500" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search creators"
              className="w-full bg-transparent text-sm outline-none"
              aria-label="Search creators"
            />
          </form>

          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <div key={link.label}>

                {link.type === "dropdown" ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.label)}
                      className="flex w-full items-center justify-between font-semibold text-gray-800"
                      aria-expanded={activeDropdown === link.label}
                    >
                      {link.label}

                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          activeDropdown === link.label
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === link.label && (
                      <div className="mt-3 flex flex-col gap-2 border-l-2 border-gray-100 pl-4">
                        {link.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={closeMenu}
                              className="flex items-center gap-3 rounded-lg py-2 text-sm font-medium text-gray-600 hover:text-black"
                            >
                              {Icon && <Icon size={18} />}
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className="block font-semibold text-gray-800"
                  >
                    {link.label}
                  </Link>
                )}

              </div>
            ))}

            <div className="my-2 border-t border-gray-100" />

            <Link
              to="/login"
              onClick={closeMenu}
              className="font-semibold text-gray-800"
            >
              Log in
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="rounded-full bg-[#ffdc00] px-6 py-3.5 text-center font-bold text-black"
            >
              Sign up
            </Link>

          </div>
        </div>
      )}

    </header>
  );
}
