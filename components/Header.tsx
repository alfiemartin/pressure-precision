import Image from "next/image";
import siteLogo from "../public/logo.png";

export const Header = () => {
  return (
    <header className='w-full dark:text-white'>
      <nav className={`flex justify-between items-center bg-white fixed w-full z-10 shadow-md p-2`}>
        <div className='flex items-center'>
          <picture className='w-[280px] mr-3'>
            <Image src={siteLogo} layout='responsive' quality={30} alt='Site Logo' />
          </picture>
        </div>
        <ul className='flex justify-end gap-8 pr-8 font-semibold text-black'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Areas Covered</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Logo = () => {
  return;
};
