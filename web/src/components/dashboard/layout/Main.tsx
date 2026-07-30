import React from "react";

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 space-y-4">
      {children}
    </main>
  );
};

export default Main;