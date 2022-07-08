import Image, { StaticImageData } from "next/image";

interface SocialIconProps { image: StaticImageData; imageAlt: string, href: string; }

const SocialIcon = ({ image, imageAlt, href }: SocialIconProps) => {
    return (
      <div className='transition-all cursor-pointer duration-150 ease-out relative top-0 hover:top-1'>
        <a href={href} target="_blank" rel="noreferrer">
          <Image src={image} width={60} height={60} alt={imageAlt} />
        </a>
      </div>
    );
  };

  export default SocialIcon;