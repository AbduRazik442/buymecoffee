import { motion } from "framer-motion";
import {
  Play,
  Heart,
  MessageCircle,
  Share2,
  Lock,
  RotateCcw,
  RotateCw,
  Headphones,
  FileText,
  Image as ImageIcon,
  AudioLines,
} from "lucide-react";
import "./Publish.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function VideoPreview() {
  return (
    <motion.div
      className="publish-video-card"
      variants={fadeUp}
      transition={{ duration: 0.7 }}
    >
      <img
        src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1100&q=85"
        alt="Travel video preview"
      />

      <div className="publish-video-overlay">
        <div className="publish-play-button">
          <Play size={27} fill="currentColor" />
        </div>

        <div className="publish-video-controls">
          <div className="publish-progress">
            <span />
          </div>
          <div className="publish-video-time">
            <span>0:00</span>
            <span>55:08</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ImagePostStack() {
  return (
    <motion.div
      className="publish-image-stack"
      variants={fadeUp}
      transition={{ duration: 0.7, delay: 0.12 }}
    >
      <div className="publish-stack-layer publish-stack-back">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=85"
          alt=""
        />
      </div>

      <div className="publish-stack-layer publish-stack-middle">
        <img
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=85"
          alt=""
        />
      </div>

      <div className="publish-stack-front">
        <img
          src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&q=85"
          alt="Creative image post preview"
        />

        <div className="publish-stack-caption">
          <strong>Senak peaks 👀</strong>
          <div>
            <span><Heart size={14} /> 24</span>
            <span><MessageCircle size={14} /> 33</span>
            <Share2 size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EarlyAccessCard() {
  return (
    <motion.article
      className="publish-early-card"
      variants={fadeUp}
      transition={{ duration: 0.7, delay: 0.18 }}
    >
      <span className="publish-content-label">Early access</span>

      <p>
        Check out this week's episode a full 24 hours before
        the rest of the world!
      </p>

      <div className="publish-post-actions">
        <span><Heart size={17} /> 24</span>
        <span><MessageCircle size={17} /> 33</span>
        <Share2 size={17} />
      </div>
    </motion.article>
  );
}

function LockedPostCard() {
  return (
    <motion.div
      className="publish-locked-card"
      variants={fadeUp}
      transition={{ duration: 0.7, delay: 0.24 }}
    >
      <div className="publish-locked-blur" />

      <div className="publish-lock-pill">
        <Lock size={16} />
        <span>Members only</span>
      </div>
    </motion.div>
  );
}

function AudioPlayer() {
  return (
    <motion.div
      className="publish-audio-card"
      variants={fadeUp}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="publish-audio-cover">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=85"
          alt="Audio creator cover"
        />
        <span className="publish-audio-cover-name">Eleanor Pe</span>
        <div className="publish-audio-wave" />
      </div>

      <div className="publish-audio-content">
        <div className="publish-audio-controls">
          <RotateCcw size={22} />
          <div className="publish-audio-play">
            <Play size={22} fill="currentColor" />
          </div>
          <RotateCw size={22} />
        </div>

        <div className="publish-audio-progress">
          <span />
        </div>

        <div className="publish-audio-time">
          <span>0:00</span>
          <span>55:08</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Publish() {
  return (
    <section className="publish-section" id="publish">
      <div className="publish-container">
        <motion.header
          className="publish-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <span className="publish-eyebrow">
            POSTS, AUDIO & EMAIL
          </span>

          <h2>Publish your best work</h2>

          <p>
            Supportly makes it easy to publish free and exclusive
            content. Try different formats such as audio, and make
            it members-only to drive more memberships.
          </p>
        </motion.header>

        <motion.div
          className="publish-gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <VideoPreview />
          <ImagePostStack />
          <EarlyAccessCard />
          <LockedPostCard />
          <AudioPlayer />
        </motion.div>

        <div className="publish-bottom-note">
          <AudioLines size={16} />
          <span>
            Share stories, updates, audio and exclusive content with your community.
          </span>
        </div>
      </div>
    </section>
  );
}