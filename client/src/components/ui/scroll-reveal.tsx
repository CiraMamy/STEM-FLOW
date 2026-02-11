import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

function getTransform(direction: Direction): string {
  switch (direction) {
    case "up": return "translateY(2rem)";
    case "down": return "translateY(-2rem)";
    case "left": return "translateX(2rem)";
    case "right": return "translateX(-2rem)";
    case "none": return "none";
  }
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getTransform(direction),
      }}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode[];
  staggerDelay?: number;
  direction?: Direction;
  className?: string;
}) {
  return (
    <>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={index * staggerDelay}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
