import Image from "next/image";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import siteLogo from "../public/logo.png";
import MenuList from "./MenuList";
import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  return (
    <header className='w-full dark:text-white'>
      <nav className={`flex justify-between items-center bg-white fixed w-full z-10 shadow-md p-2`}>
        <picture className='w-[280px] relative'>
          <Link href='/' passHref>
            <a>
              <Image src={siteLogo} layout='responsive' quality={100} alt='Pressure Precision' />
            </a>
          </Link>
        </picture>

        <div className='flex justify-end gap-8 font-semibold text-black'>
          <MenuList className='hidden nav-close:flex' />
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
};
