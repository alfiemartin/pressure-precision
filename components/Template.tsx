import Head from "next/head";
import React, { ReactNode } from "react";
import CtaContainer from "./CtaContainer";
import Footer from "./Footer";
import { Header } from "./Header";

interface PageTemplateProps {
  children: ReactNode;
}

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>
          Driveway cleaning Nottingham - Pressure Precision | Mobile pressure washing services in
          Nottinghamshire
        </title>
        <link rel='icon' type='image/png' href='/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='/favicon-16x16.png' sizes='16x16' />
        <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png'></link>
        <meta
          name='description'
          content='Mobile jet &amp; pressure washing cleaning in Nottinghamshire, offering a wide range of services from deep cleans, driveways, patios, deckings to moss and weed removal. In addition re-sanding and sealing patios and driveways.'
        ></meta>
        <link rel='canonical' href='https://pressureprecision.co.uk/'></link>
      </Head>
      <Header />
      <div className='main-content pt-[50px] md:pt-[76px] h-100-accom font-poppins px-0'>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default PageTemplate;
