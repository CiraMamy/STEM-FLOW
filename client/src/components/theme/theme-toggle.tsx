import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const nextLabel = resolvedTheme === "dark" ? "clair" : "sombre";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Basculer vers le theme ${nextLabel}`}
      title={`Theme ${nextLabel}`}
      className={`relative overflow-hidden ${className}`}
      data-testid="button-theme-toggle"
    >
      <Sun
        className="h-[1.15rem] w-[1.15rem] transition-all duration-500 ease-spring dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <Moon
        className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all duration-500 ease-spring dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
    </Button>
  );
}
