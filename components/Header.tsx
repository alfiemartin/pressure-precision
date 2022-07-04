import Image from "next/image";
import Link from "next/link";
import siteLogo from "../public/logo.png";

export const Header = () => {
  return (
    <header className='w-full dark:text-white'>
      <nav className={`flex justify-between items-center bg-white fixed w-full z-10 shadow-md p-2`}>
        <div className='flex items-center'>
          <picture className='w-[280px] mr-3 relative'>
            <Link href='/' passHref>
              <a>
                <Image src={siteLogo} layout='responsive' quality={100} alt='Pressure Precision' />
              </a>
            </Link>
          </picture>
        </div>
        <ul className='flex justify-end gap-8 pr-8 font-semibold text-black'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
          <li>
            <Link href='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link href='/areas-covered'>Areas Covered</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const Logo = () => {
  return;
};
