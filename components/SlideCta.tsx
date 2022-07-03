import React from "react";
import Image, { StaticImageData } from "next/image";
import CtaContainer from "./CtaContainer";

export interface SlideCtaProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  bodyText: string;
  ctaText: string;
}

const SlideCta = ({ bodyText, ctaText, image, imageAlt, title }: SlideCtaProps) => {
  return (
    <section className='relative'>
      <div className='w-full h-[450px] relative'>
        <Image src={image} alt={imageAlt} layout='fill' objectFit='cover' objectPosition='left' />
        <div className='absolute inset-0 w-full h-full bg-white opacity-75'></div>
        <CtaContainer className='absolute left-1/2 -translate-x-1/2 w-full h-full inset-0'>
          <h1 className='text-brand-blue text-5xl'>{title}</h1>
          <p className='font-light'>{bodyText}</p>
          <a className='btn-pill' href='/walls-and-fences'>
            {ctaText}
          </a>
        </CtaContainer>
      </div>
    </section>
  );
};

export default SlideCta;
