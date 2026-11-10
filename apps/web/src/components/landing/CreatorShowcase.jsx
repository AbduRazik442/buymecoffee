import { motion } from "framer-motion";
import CreatorCard from "../ui/CreatorCard";
import SectionHeading from "../ui/SectionHeading";

const creators = [
  {
    name: "Alex Morgan",
    username: "alexcreates",
    category: "Digital Artist",
    description: "Creating illustrations, digital art and visual stories.",
    initials: "AM",
    color: "bg-orange-100",
    supporters: "Example creator"
  },
  {
    name: "Sarah Wilson",
    username: "sarahwrites",
    category: "Writer",
    description: "Sharing stories, thoughtful essays and creative writing.",
    initials: "SW",
    color: "bg-pink-100",
    supporters: "Example creator"
  },
  {
    name: "Daniel Lee",
    username: "danielcodes",
    category: "Developer",
    description: "Building open-source tools and sharing coding knowledge.",
    initials: "DL",
    color: "bg-blue-100",
    supporters: "Example creator"
  }
];

export default function CreatorShowcase() {
  return (
    <section id="explore" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Meet the community"
          title="Made for people who create."
          description="Artists, writers, developers and independent creators can build a community around their work."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.username}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <CreatorCard {...creator} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/explore"
            className="inline-flex rounded-xl border border-border px-6 py-3 font-bold transition hover:bg-[#fff5cf]"
          >
            Explore creators →
          </a>
        </div>

      </div>
    </section>
  );
}