import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoNav from "@/assets/logo-nav.png";

interface LogoProps {
  className?: string;
  link?: string;
}

const Logo = ({ className, link = "/" }: LogoProps) => (
  <Link to={link} className={cn("flex items-center", className)}>
    <img
      src={logoNav}
      alt="Zenith Homes and Apartments"
      className="block h-7 w-auto sm:h-8"
    />
  </Link>
);

export default Logo;
