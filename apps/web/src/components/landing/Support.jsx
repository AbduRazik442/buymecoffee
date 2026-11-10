
import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Heart, Hand, Sparkles } from "lucide-react";
import "./Support.css";

const notifications = [
  {
    id: 1,
    className: "support-notification notification-anie",
    name: "Anie",
    amount: "10 coffees",
    message: "",
    reply: "",
    avatar: "☕",
    color: "yellow",
  },
  {
    id: 2,
    className: "notification-cathy",
    name: "Cathy G",
    amount: "a coffee.",
    message: "",
    reply: "Thanks Cathy! 💗",
    avatar: "☕",
    color: "mint",
  },
  {
    id: 3,
    className: "notification-alex",
    name: "Alex",
    amount: "25 coffees",
    message: "",
    reply: "Thanks Alex!",
    avatar: "☕",
    color: "yellow",
  },
  {
    id: 4,
    className: "notification-tony",
    name: "Tony Steel",
    amount: "3 coffees.",
    message:
      "Absolutely love the show! I'm already waiting for next week's episode. Thank you, and keep doing what you're doing.",
    reply: "Thanks Tony!",
    avatar: "☕",
    color: "peach",
  },
];

function Notification({ item }) {
  return (
    <motion.div
      className={`support-notification ${item.className}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`notification-avatar ${item.color}`}>
        {item.avatar}
      </div>

      <div className="notification-content">
        <p className="notification-title">
          <strong>{item.name}</strong> bought {item.amount}
        </p>

        {item.message && (
          <p className="notification-message">{item.message}</p>
        )}

        {item.reply && (
          <p className="notification-reply">
            <span>👩🏻</span>
            {item.reply}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Support() {
  const [amount, setAmount] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const total = amount * Math.max(1, Number(quantity) || 1);

  return (
    <section className="support-section" id="support">
      <div className="support-container">
        <motion.div
          className="support-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="support-eyebrow">SUPPORT</span>

          <h2>
            Give your audience
            <br />
            an easy way to say thanks.
          </h2>

          <p>
            Buymecoffee makes supporting fun and easy. In just a couple
            of taps, your fans can make a contribution and leave a
            message.
          </p>
        </motion.div>

        <div className="support-visual">
          {/* Decorative floating icons */}
          <motion.div
            className="floating-icon icon-100"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💯
          </motion.div>

          <motion.div
            className="floating-icon icon-heart"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <Heart size={27} fill="#ff3f68" color="#ff3f68" />
          </motion.div>

          <motion.div
            className="floating-icon icon-wave"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2.8, repeat: Infinity }}
          >
            👋
          </motion.div>

          {/* Main support card */}
          <motion.div
            className="coffee-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3>Buy Juliet a coffee</h3>

            <div className="coffee-options">
              <div className="coffee-illustration">
                <Coffee size={39} strokeWidth={1.5} />
              </div>

              <span className="multiply-sign">×</span>

              {[1, 3, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`amount-option ${
                    amount === value ? "active" : ""
                  }`}
                  onClick={() => setAmount(value)}
                  aria-pressed={amount === value}
                >
                  {value}
                </button>
              ))}

              <input
                className="quantity-input"
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(event) =>
                  setQuantity(Math.max(1, Number(event.target.value)))
                }
                aria-label="Number of coffees"
              />
            </div>

            <textarea
              className="support-message"
              placeholder="Say something nice..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength={250}
            />

            <button
              className="support-submit"
              type="button"
              onClick={() =>
                alert(
                  `Demo interaction: Support amount $${total}${
                    message ? ` — ${message}` : ""
                  }`
                )
              }
            >
              Support ${total}
            </button>
          </motion.div>

          {/* Floating supporter notifications */}
          {notifications.map((item) => (
            <Notification key={item.id} item={item} />
          ))}
        </div>

        <div className="support-bottom-note">
          <Sparkles size={16} />
          <span>Every little bit of support makes a difference.</span>
        </div>
      </div>
    </section>
  );
}