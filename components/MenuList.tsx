import Link from "next/link";
import React, { ReactNode } from "react";

interface MenuListProps {
  className?: ReactNode;
}

const MenuList = ({ className }: MenuListProps) => {
  return (
    <ul className={`flex justify-end gap-8 pr-8 font-semibold text-black ${className}`}>
      <li>
        <Link href='/'>
          <a className='hover:underline'>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a className='hover:underline'>About</a>
        </Link>
      </li>
      <li>
        <Link href='/services'>
          <a className='hover:underline'>Services</a>
        </Link>
      </li>
      <li>
        <Link href='/gallery'>
          <a className='hover:underline'>Gallery</a>
        </Link>
      </li>
      <li>
        <Link href='/areas-covered'>
          <a className='hover:underline'>Areas Covered</a>
        </Link>
      </li>
      <li>
        <Link href='/contact'>
          <a className='hover:underline'>Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
