
import { BrainCircuitIcon } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizes[size]} bg-gradient-hero rounded-lg flex items-center justify-center`}>
        <BrainCircuitIcon className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-7 h-7'} text-white`} />
      </div>
      {showText && (
        <span className={`font-bold ${textSizes[size]}`}>AI Affiliate Pro</span>
      )}
    </div>
  );
};

export default Logo;
