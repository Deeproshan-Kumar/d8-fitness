import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/80">
      <div className="h-15 flex flex-col sm:flex-row items-center justify-between gap-1.5 border-t border-border/50 px-4">
        <p className="text-xs text-faint">&copy; 2024 FitZone Gym Management. All rights reserved.</p>
        <p className="font-mono text-xs text-quaternary">v1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;