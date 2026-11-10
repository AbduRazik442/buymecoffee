import { motion } from "framer-motion";
import {
  Truck,
  Store,
  Star,
  Landmark,
} from "lucide-react";
import "./Shop.css";

const floatingTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};

function EbookIllustration() {
  return (
    <svg
      className="ebook-illustration"
      viewBox="0 0 220 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Open illustrated ebook"
      role="img"
    >
      {/* Left page */}
      <path
        d="M110 47 L47 25 L47 126 L110 151 Z"
        fill="#F15B4A"
        stroke="#171717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Right page */}
      <path
        d="M110 47 L174 25 L174 126 L110 151 Z"
        fill="#D9473D"
        stroke="#171717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Top pages */}
      <path
        d="M47 25 L62 17 L110 35 L110 47 Z"
        fill="#E9DDAA"
        stroke="#171717"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M110 47 L110 35 L158 17 L174 25 L110 47 Z"
        fill="#D8C99A"
        stroke="#171717"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Page fold */}
      <path
        d="M110 47 L110 151"
        stroke="#171717"
        strokeWidth="4"
      />
      <path
        d="M110 47 C107 30 94 16 88 12 L88 30"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M110 47 C114 29 130 15 136 12 L136 30"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Left cover detail */}
      <path
        d="M67 51 L91 60 L91 94 L67 84 Z"
        fill="#F8D33F"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M67 101 L91 111 M67 112 L88 120"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Right cover detail */}
      <path
        d="M129 60 L153 51 L153 84 L129 94 Z"
        fill="#F8D33F"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M129 111 L153 101 M132 120 L153 112"
        stroke="#171717"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Sparkles */}
      <path
        d="M24 112 L29 122 L39 127 L29 132 L24 142 L19 132 L9 127 L19 122 Z"
        fill="white"
      />
      <path
        d="M185 65 L190 75 L200 80 L190 85 L185 95 L180 85 L170 80 L180 75 Z"
        fill="white"
      />
    </svg>
  );
}

function Notification({ className, children }) {
  return (
    <motion.div
      className={`shop-floating-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function Shop() {
  return (
    <section className="shop-section">
      <div className="shop-container">
        <motion.div
          className="shop-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="shop-eyebrow">SHOP</span>

          <h2>
            Introducing Shop,
            <br />
            the creative way to sell.
          </h2>

          <p>
            The things you’d like to sell probably do not belong in a
            Shopify store. Shop is designed from the ground up with
            creators in mind. Whether it’s a 1-1 Zoom call, art
            commissions, or an ebook, Shop is for you.
          </p>
        </motion.div>

        <div className="shop-showcase">
          {/* Left floating cards */}
          <Notification className="shop-checkout">
            <Truck size={29} strokeWidth={1.8} />
            <span>One-tap checkout</span>
          </Notification>

          <motion.div
            className="shop-sales-card"
            animate={{ y: [0, -7, 0] }}
            transition={floatingTransition}
          >
            <Store size={36} strokeWidth={1.8} />
            <strong>753</strong>
            <span>Sales</span>
          </motion.div>

          {/* Main product card */}
          <motion.div
            className="shop-product-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <div className="shop-product-image">
              <span className="shop-file-type">.PDF</span>
              <EbookIllustration />
            </div>

            <div className="shop-product-content">
              <h3>Design E-book</h3>

              <div className="shop-product-meta">
                <strong>$200</strong>
                <span className="shop-meta-divider" />
                <span className="shop-rating">
                  <Star size={15} fill="#26743c" color="#26743c" />
                  4.9 (36)
                </span>
              </div>

              <div className="shop-skeleton-lines">
                <span />
                <span />
              </div>

              <button className="shop-buy-button" type="button">
                Buy
              </button>
            </div>
          </motion.div>

          {/* Right floating cards */}
          <Notification className="shop-rating-card">
            <span className="shop-rating-title">Liked it? give rating</span>

            <div className="shop-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={27}
                  strokeWidth={2}
                  fill={star < 5 ? "#FFD600" : "white"}
                  color="#111"
                />
              ))}
            </div>

            <span className="shop-rating-tooltip">4 star</span>
          </Notification>

          <motion.div
            className="shop-earnings-card"
            animate={{ y: [0, 7, 0] }}
            transition={{ ...floatingTransition, duration: 3.5 }}
          >
            <Landmark size={17} strokeWidth={1.7} />
            <strong>$244</strong>
            <span>Earnings</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}