import React from "react";
import Image, { StaticImageData } from "next/image";
import CtaContainer from "./CtaContainer";

export interface SlideCtaProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  bodyText: string;
  ctaText: string;
  priority?: boolean;
}

const SlideCta = ({ bodyText, ctaText, image, imageAlt, title, priority }: SlideCtaProps) => {
  return (
    <section className='relative'>
      <div className='w-full h-[450px] relative'>
        <Image
          priority={priority}
          src={image}
          alt={imageAlt}
          layout='fill'
          objectFit='cover'
          objectPosition='left'
        />
        <div className='absolute inset-0 w-full h-full bg-white opacity-75'></div>
        <CtaContainer className='absolute left-1/2 -translate-x-1/2 w-full h-full '>
          <h1 className='text-brand-blue uppercase text-5xl'>{title}</h1>
          <p className='font-light'>{bodyText}</p>
          <a className='btn-pill uppercase text-sm font-bold shadow' href='/walls-and-fences'>
            {ctaText}
          </a>
        </CtaContainer>
      </div>
    </section>
  );
};

export default SlideCta;
