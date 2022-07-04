import Image, { StaticImageData } from "next/image";
import React from "react";

export interface GridBlockProps {
  image: StaticImageData;
  title: string;
  text: string;
}

const GridBlock = ({ image, text, title }: GridBlockProps) => {
  return (
    <div className='info-block relative'>
      <Image src={image} layout='responsive' alt='driveways' />
      <h1>{title}</h1>
      <div className='info-block__content absolute z-10 text-blue-400 text-4xl'>{text}</div>
    </div>
  );
};

export default GridBlock;
