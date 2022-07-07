import type { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import SlideCta, { SlideCtaProps } from "../components/SlideCta";
import CtaContainer from "../components/CtaContainer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import wallsAndFences from "../public/homepagebanner2.jpeg";
import driveways from "../public/homepagebanner.jpeg";
import howItWorks from "../public/howitsworks.jpeg";
import drivewaysBlock from "../public/driveway.jpeg";
import patiosBlock from "../public/patio.jpeg";
import soffitsBlock from "../public/soffit.jpeg";
import wallsBlock from "../public/wall-1.jpeg";
import sandBlock from "../public/dress.jpeg";
import quoteBlock from "../public/free-1.jpeg";
import Image from "next/image";
import GridBlock from "../components/GridBlock";
import SocialsBar from "../components/SocialsBar";

const slidesData: Array<SlideCtaProps> = [
  {
    image: wallsAndFences,
    bodyText:
      "Over the course of time your brick, stone or wooden fences walls grow moss, algae collect grime and there is no better way to freshen them up than a pressure wash. Taking the moss off will improve the life of the mortar and help with keeping the structural integrity.",
    ctaText: "Find Out More",
    imageAlt: "Walls and fences",
    title: "walls and fences",
  },
  {
    image: driveways,
    bodyText:
      "Mobile jet washing and steam cleaning, offering a wide range of services from deep cleans, driveways, patios, deckings to moss and weed removal. In addition re-sanding and sealing patios and driveways.",
    ctaText: "Find out more",
    imageAlt: "Driveways",
    title: "Driveways",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Swiper
        loop
        autoplay
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slidesData.map((slideData, i) => (
          <SwiperSlide key={i}>
            <SlideCta {...slideData} priority={i === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
      <section className='h-[350px] flex justify-center items-center relative'>
        <Image
          className='inset-0'
          src={howItWorks}
          priority
          alt='how it works'
          layout='fill'
          objectFit='cover'
          objectPosition='left'
        />
        <div className='bg-brand-blue absolute inset-0 opacity-70'></div>
        <CtaContainer className='text-white absolute'>
          <h1 className='text-5xl'>HOW IT WORKS</h1>
          <p>
            With the change in weather around the corner get your driveway, patio, decking or walls
            looking like new. Using the latest high pressure jets and surface cleaners I can help
            restore it to its former glory.
          </p>
        </CtaContainer>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 text-[0px]'>
        {[
          { image: drivewaysBlock },
          { image: patiosBlock },
          { image: soffitsBlock },
          { image: wallsBlock },
          { image: sandBlock },
          { image: quoteBlock },
        ].map(({ image }, i) => {
          return <GridBlock key={i} image={image} title={"hey"} text={"ss"} />;
        })}
      </section>
      <SocialsBar />
    </div>
  );
};

export default Home;
