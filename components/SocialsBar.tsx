import Image, { StaticImageData } from "next/image";
import React from "react";
import CtaContainer from "./CtaContainer";

import facebookIcon from "../public/Facebook.svg";
import tiktokIcon from "../public/TikTok.svg";
import youtubeIcon from "../public/YouTube.svg";
import phoneIcon from "../public/phone.svg";

const SocialIcon = ({ image, imageAlt }: { image: StaticImageData; imageAlt: string }) => {
  return (
    <div className='transition-all duration-150 ease-out relative top-0 hover:top-1'>
      <Image src={image} width={60} height={60} alt={imageAlt} />
    </div>
  );
};

const SocialsBar = () => {
  return (
    <CtaContainer className='py-16'>
      <h2 className='text-2xl mb-4'>FOLLOW ME ON SOCIAL MEDIA</h2>
      <div className='flex justify-center gap-16'>
        <SocialIcon image={facebookIcon} imageAlt='Facebook' />
        <SocialIcon image={tiktokIcon} imageAlt='TikTok' />
        <SocialIcon image={youtubeIcon} imageAlt='Facebook' />
        <SocialIcon image={phoneIcon} imageAlt='YouTube' />
      </div>
    </CtaContainer>
  );
};

export default SocialsBar;
