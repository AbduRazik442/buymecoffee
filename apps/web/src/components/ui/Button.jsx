import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  icon = false,
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-brand text-ink hover:bg-brand-dark shadow-sm",
    secondary:
      "bg-white text-ink border border-border hover:bg-gray-50",
    dark:
      "bg-ink text-white hover:bg-black"
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-xl px-6 py-3 font-bold
        transition-all duration-200
        hover:-translate-y-0.5
        active:translate-y-0
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}

      {icon && <ArrowRight size={18} />}
    </button>
  );
}