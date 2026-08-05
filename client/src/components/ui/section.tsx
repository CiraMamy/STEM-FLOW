import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: LucideIcon;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowIcon: Icon,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-2xl text-left items-start";

  return (
    <ScrollReveal>
      <div className={`flex flex-col ${alignment} ${className}`}>
        {eyebrow && (
          <Badge
            variant="outline"
            className="mb-5 gap-1.5 rounded-full border-primary/25 bg-primary/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur"
          >
            {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
            {eyebrow}
          </Badge>
        )}
        <h2 className="font-display font-bold text-balance">{title}</h2>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}

export function Section({
  children,
  className = "",
  id,
  muted = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 ${muted ? "bg-muted/40" : ""} ${className}`}
    >
      <div className="container relative">{children}</div>
    </section>
  );
}
