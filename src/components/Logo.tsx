
interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10", 
    lg: "h-12"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/e8b2a7cc-a868-44d7-a179-57e9fb90b29c.png" 
        alt="AI Affiliate Pro - AI for Smarter Reviews" 
        className={`${sizes[size]} w-auto`}
      />
    </div>
  );
};

export default Logo;
