import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "./Header";

interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>Midlands Pressure Washing - Pressure Precision</title>
      </Head>
      <Header />
      <div className='main-content pt-[76px] h-100-accom font-poppins px-2 sm:px-0'>{children}</div>
    </>
  );
};

export default PageTemplate;
