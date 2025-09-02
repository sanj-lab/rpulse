// import { cn } from "@/lib/utils"; // Remove this line if you don't have a utils function
// OR create a simple cn function:
// const cn = (...classes) => classes.filter(Boolean).join(' ')

const QuentlexLogo = ({ className, size = "md", showText = true }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8",
    header: "w-10 h-10"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    header: "text-xl"
  };

  if (size === "header" && showText) {
    return (
      <a href="/" className="flex items-center space-x-3 group">
        <img 
          src="/expert-avatar-1.png"
          alt="Quentlex Logo"
          className={`object-contain transition-all group-hover:scale-105 ${sizes[size]} ${className || ''}`}
        />
        <div>
          <span className="text-xl font-bold text-foreground tracking-tight">Quentlex</span>
        </div>
      </a>
    );
  }

  return (
    <img 
      src="/assets/quentlex-logo.png"
      alt="Quentlex Logo"
      className={`object-contain ${sizes[size]} ${className || ''}`}
    />
  );
};

export default QuentlexLogo;