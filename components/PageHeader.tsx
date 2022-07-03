import React from "react";
import Image, { StaticImageData } from "next/image";
import water from "../public/water.jpeg";

export interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className='h-[300px] relative flex justify-center items-center'>
      <Image src={water} alt={title} layout='fill' objectFit='cover' objectPosition={"center"} />
      <div className='absolute inset-0 bg-brand-blue opacity-70 flex justify-center items-center'></div>
      <h1 className='text-5xl z-10 text-white'>{title}</h1>
    </div>
  );
};

export default PageHeader;
