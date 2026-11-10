import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Globe2,
  Mail,
  Heart,
  ShieldCheck,
} from "lucide-react";

import "./Benefits.css";

const benefits = [
  {
    icon: CalendarCheck2,
    title: "Not just a membership",
    description:
      "Creators who previously only used Patreon noticed a massive increase in earnings after accepting one-off payments.",
  },
  {
    icon: Globe2,
    title: "6 new languages",
    description:
      "We now support Spanish, French, Italian, German and Ukrainian—making it easier for your global audience to support you.",
  },
  {
    icon: Mail,
    title: "Email marketing",
    description:
      "Instead of paying separately for email marketing tools like Mailchimp, send unlimited emails to your fans for free.",
  },
  {
    icon: Heart,
    title: "Being friendly converts",
    description:
      "ICYMI, we make it simple and fun for your supporters. While you cannot put a number on feelings, it tends to show on the results.",
  },
  {
    icon: ShieldCheck,
    title: "Your privacy comes first",
    description:
      "Receive fan support safely without disclosing your identity or address. We’ll do the heavy-lifting.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <motion.div
          className="benefits-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <span>Make 20% or more,</span>
            <span className="benefits-heading-muted">
              compared to other platforms.
            </span>
          </h2>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                className="benefit-item"
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="benefit-icon">
                  <Icon size={43} strokeWidth={2} />
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}