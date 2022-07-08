import Image, { StaticImageData } from "next/image";
import React from "react";
import CtaContainer from "./CtaContainer";

import facebookIcon from "../public/Facebook.svg";
import tiktokIcon from "../public/TikTok.svg";
import youtubeIcon from "../public/YouTube.svg";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

const SocialsBar = () => {
  return (
    <CtaContainer className='py-16'>
      <h2 className='text-2xl mb-4'>FOLLOW ME ON SOCIAL MEDIA</h2>
      <div className='flex justify-center gap-16'>
        <SocialIcon href="https://www.facebook.com/pressureprecision" image={facebookIcon} imageAlt='Facebook' />
        <SocialIcon href="https://www.tiktok.com/@pressureprecision" image={tiktokIcon} imageAlt='TikTok' />
        <SocialIcon href="https://www.youtube.com/channel/UCDbSMHf0T-tVrvBYrMBs6SA" image={youtubeIcon} imageAlt='YouTube' />
      </div>
    </CtaContainer>
  );
};

export default SocialsBar;
