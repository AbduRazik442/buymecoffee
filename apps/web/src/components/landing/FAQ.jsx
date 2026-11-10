import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const questions = [
  {
    question: "What is buymecoffee?",
    answer:
      "buymecoffee is a creator-support platform concept that allows creators to receive contributions, build memberships and share digital content with their audience."
  },
  {
    question: "Who can create a page?",
    answer:
      "Artists, writers, developers, educators, musicians and other independent creators can create a page to introduce their work and connect with supporters."
  },
  {
    question: "How can creators receive support?",
    answer:
      "Creators will be able to receive one-time contributions and recurring membership payments through supported payment integrations."
  },
  {
    question: "Can I offer exclusive content?",
    answer:
      "Yes. Our planned membership and publishing features will allow creators to provide exclusive posts and other benefits to their supporters."
  },
  {
    question: "Is creating an account free?",
    answer:
      "Our initial platform will provide account creation and creator onboarding. Any platform fees or paid features will be clearly explained before launch."
  }
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <SectionHeading
          eyebrow="Got questions?"
          title="Frequently asked questions."
          description="Everything you need to know about getting started with buymecoffee."
        />

        <div className="mt-14 space-y-4">
          {questions.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-border bg-white"
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold md:text-lg">
                    {item.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff5cf]">
                    {isOpen ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="leading-7 text-muted">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}