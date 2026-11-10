import { motion } from "framer-motion";
import {
  Check,
  Mail,
  Gift,
  Globe2,
  Users,
  Landmark,
  Star,
  Heart,
  Sparkles,
} from "lucide-react";
import "./Membership.css";

const plans = [
  {
    id: "basic",
    name: "Basic membership",
    price: 5,
    description: "A simple way to support my work.",
    icon: Mail,
    illustration: "basic",
    features: [
      "33% OFF all my eBooks & resources",
      "Access to members-only posts",
      "Exclusive posts and messages",
    ],
  },
  {
    id: "pro",
    name: "Pro membership",
    price: 15,
    description: "Get closer and enjoy more benefits.",
    icon: Gift,
    illustration: "pro",
    featured: true,
    features: [
      "Support me on a monthly basis",
      "Email alert for new posts",
      "Exclusive posts and messages",
    ],
  },
  {
    id: "advanced",
    name: "Advanced membership",
    price: 25,
    description: "For my biggest supporters.",
    icon: Globe2,
    illustration: "advanced",
    features: [
      "Monthly printable journal pages",
      "Email alert for new posts",
      "Behind-the-scenes progress updates",
    ],
  },
];

function PlanIllustration({ type }) {
  const illustrations = {
    basic: (
      <div className="membership-art membership-art-basic">
        <div className="art-envelope">
          <Mail size={57} strokeWidth={1.5} />
        </div>
        <span className="art-spark art-spark-one">✦</span>
        <span className="art-spark art-spark-two">✦</span>
        <span className="art-spark art-spark-three">◆</span>
      </div>
    ),
    pro: (
      <div className="membership-art membership-art-pro">
        <div className="art-circle art-circle-yellow">
          <Heart size={31} fill="white" color="white" />
        </div>
        <div className="art-gift">
          <Gift size={60} strokeWidth={1.7} />
        </div>
        <div className="art-circle art-circle-pink">
          <Heart size={29} fill="white" color="white" />
        </div>
        <span className="art-spark art-spark-pro">✦</span>
      </div>
    ),
    advanced: (
      <div className="membership-art membership-art-advanced">
        <div className="art-globe">
          <Globe2 size={72} strokeWidth={1.3} />
        </div>
        <div className="art-circle art-circle-star">
          <Star size={25} fill="white" color="white" />
        </div>
        <div className="art-circle art-circle-heart">
          <Heart size={24} fill="white" color="white" />
        </div>
      </div>
    ),
  };

  return illustrations[type];
}

function MembershipPlan({ plan, index }) {
  return (
    <motion.article
      className={`membership-plan ${
        plan.featured ? "membership-plan-featured" : ""
      }`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
    >
      <PlanIllustration type={plan.illustration} />

      <h3>{plan.name}</h3>

      <p className="membership-price">
        <strong>${plan.price}</strong>/month
      </p>

      <p className="membership-description">{plan.description}</p>

      <ul className="membership-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <Check size={17} strokeWidth={2.8} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="/register" className="membership-join">
        Join
      </a>
    </motion.article>
  );
}

export default function Membership() {
  return (
    <section className="membership-section" id="memberships">
      <div className="membership-container">
        <motion.header
          className="membership-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="membership-eyebrow">MEMBERSHIPS</span>

          <h2>
            Start a membership for
            <br />
            your biggest fans.
          </h2>

          <p>
            Earn a recurring income by accepting monthly or yearly
            subscriptions. Share exclusive content, or just give them
            a way to support your work on an ongoing basis.
          </p>
        </motion.header>

        <div className="membership-visual">
          <div className="membership-plans">
            {plans.map((plan, index) => (
              <MembershipPlan
                key={plan.id}
                plan={plan}
                index={index}
              />
            ))}
          </div>

          {/* Floating member count */}
          <motion.div
            className="membership-stat membership-stat-members"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="membership-avatars">
              <span>👩🏽</span>
              <span>👨🏻</span>
              <span>👩🏻</span>
            </div>

            <strong>286</strong>
            <span>Members</span>
          </motion.div>

          {/* Floating earnings card */}
          <motion.div
            className="membership-stat membership-stat-earnings"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Landmark size={37} strokeWidth={1.5} />

            <div>
              <strong>$1,500</strong>
              <span>Earned this month</span>
            </div>
          </motion.div>
        </div>

        <div className="membership-bottom-note">
          <Sparkles size={16} />
          <span>Build a community that supports you every month.</span>
        </div>
      </div>
    </section>
  );
}