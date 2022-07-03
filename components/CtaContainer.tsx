import React, { ReactNode } from "react";

const CtaContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={`text-center px-4 sm:px-8 md:max-w-[600px] flex flex-col gap-5 justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default CtaContainer;
