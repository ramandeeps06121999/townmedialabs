interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export function Marquee({ children, className, reverse }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className="flex w-max gap-16"
        style={{
          animation: `marquee ${reverse ? "30s" : "30s"} linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
