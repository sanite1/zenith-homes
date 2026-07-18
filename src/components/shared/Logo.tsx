import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-mark.png";

interface LogoProps {
  className?: string;
  link?: string;
  variant?: "light" | "dark";
}

// "light" = for light backgrounds (nav pill), "dark" = for the forest footer.
const Logo = ({ className, link = "/", variant = "light" }: LogoProps) => (
  <Link to={link} className={cn("flex items-center gap-2.5", className)}>
    <img
      src={logoMark}
      alt="Zenith Homes and Apartments Ltd"
      className={cn(
        "block w-auto",
        variant === "light" ? "h-9" : "h-11 brightness-125",
      )}
    />
    <span className="leading-[1.15]">
      <span
        className={cn(
          "block text-[13.5px] font-bold tracking-[0.03em]",
          variant === "light" ? "text-forest-700" : "text-white",
        )}
      >
        ZENITH HOMES
      </span>
      <span
        className={cn(
          "block font-bold",
          variant === "light"
            ? "text-[8.5px] tracking-[0.3em] text-gold-600"
            : "text-[10px] tracking-[0.16em] text-sage-500",
        )}
      >
        {variant === "light" ? "PEAK OF EXCELLENCE" : "AND APARTMENTS LTD"}
      </span>
    </span>
  </Link>
);

export default Logo;
