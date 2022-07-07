import React, { ReactNode } from "react";

interface CtaContainerProps {
  children: ReactNode;
  className?: string;
  row?: boolean;
}

const CtaContainer = ({ children, className, row }: CtaContainerProps) => {
  return (
    <div
      className={`text-center px-4 mx-auto sm:px-8 md:max-w-[600px] flex ${
        !row && "flex-col"
      } gap-5 justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default CtaContainer;
