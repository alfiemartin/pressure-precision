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
      <div className='absolute inset-0 flex flex-col justify-end p-6 text-white'>
        <h1 className='text-xl'>{title}</h1>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quae vel dolorum
            doloremque repellat at laudantium et ratione tempora sint!
          </p>
        </div>
      </div>
      <div className='info-block__content absolute z-10 text-4xl'></div>
    </div>
  );
};

export default GridBlock;
