import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import "./CreatorHero.css";

const leftCreators = [
  {
    name: "Cara",
    description: "Cara is building a new platform for artists",
    supporters: "9,138",
    image: null,
    initials: "C",
    className: "creator-card-left-top",
  },
  {
    name: "Kaleigh Cohen",
    description: "Kaleigh Cohen is Indoor Cycle & Strength At-Home Workout Programs",
    supporters: "9,045",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    className: "creator-card-left-middle",
  },
  {
    name: "Teacher Stefano",
    description: "Teacher Stefano is creating YouTube videos and Podcast",
    supporters: "703",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    className: "creator-card-left-bottom",
  },
];

const rightCreators = [
  {
    name: "The Thrill Of The Thrift",
    description: "The Thrill Of The Thrift is creating thrifting videos",
    supporters: "146",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    className: "creator-card-right-top",
  },
  {
    name: "Beach Talk Radio",
    description: "Beach Talk Radio is a Dinky Little Podcast",
    supporters: "2,095",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    className: "creator-card-right-middle",
    logo: "Beach Talk",
  },
  {
    name: "Simple Politics",
    description: "Simple Politics is helping people have better conversations about politics",
    supporters: null,
    image: null,
    initials: "SP",
    className: "creator-card-right-bottom",
  },
];

function CreatorCard({ creator, index }) {
  return (
    <motion.article
      className={`floating-creator-card ${creator.className}`}
      initial={{ opacity: 0, y: 35, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: "easeOut",
      }}
    >
      <div className="creator-card-avatar">
        {creator.image ? (
          <img src={creator.image} alt={`${creator.name} profile`} />
        ) : (
          <span className={creator.initials === "SP" ? "creator-sp-logo" : ""}>
            {creator.initials}
          </span>
        )}
      </div>

      <p className="creator-card-description">{creator.description}</p>

      {creator.supporters && (
        <div className="creator-card-supporters">
          <Heart size={17} strokeWidth={1.8} />
          <span>{creator.supporters} supporters</span>
        </div>
      )}
    </motion.article>
  );
}

export default function CreatorHero() {
  return (
    <section className="creator-hero">
      {/* Floating creator cards - left */}
      <div className="creator-floating-side creator-floating-left">
        {leftCreators.map((creator, index) => (
          <CreatorCard
            key={creator.name}
            creator={creator}
            index={index}
          />
        ))}
      </div>

      {/* Main hero content */}
      <div className="creator-hero-content">
        <motion.div
          className="creator-trust"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="creator-trust-stars" aria-label="Five stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={23} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          <span>Loved by 2,000,000+ creators</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          Fund your
          <br />
          creative work
        </motion.h1>

        <motion.p
          className="creator-hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Accept support. Start a membership. Setup a shop.
          It’s easier than you think.
        </motion.p>

        <motion.a
          href="/register"
          className="creator-hero-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Start my page
        </motion.a>

        <motion.span
          className="creator-hero-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          It’s free and takes less than a minute!
        </motion.span>
      </div>

      {/* Floating creator cards - right */}
      <div className="creator-floating-side creator-floating-right">
        {rightCreators.map((creator, index) => (
          <CreatorCard
            key={creator.name}
            creator={creator}
            index={index + 3}
          />
        ))}
      </div>
    </section>
  );
}