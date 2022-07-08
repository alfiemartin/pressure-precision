import Image, { StaticImageData } from "next/image";
import React from "react";

export interface GridBlockProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const GridBlock = ({ image, text, title }: GridBlockProps) => {
  return (
    <article className='info-block overflow-hidden relative'>
      <Image src={image} layout='responsive' alt='driveways' />
      <div className='info-block__overlay transition-all duration-300 opacity-0 inset-0 bg-brand-blue absolute text-4xl'></div>
      <div className='info-block__text w-full transition-all duration-300 absolute flex top-[calc(100%-66px)] flex-col justify-end text-white'>
        <div className="info-block__text-overlay transition-all duration-300 absolute inset-0 bg-brand-blue opacity-70"></div>
        <div className="p-4 relative">
          <h1 className='text-3xl mb-4'>{title}</h1>
          <p className="text-lg">
            {text}
          </p>
        </div>
      </div>
    </article>
  );
};

export default GridBlock;
