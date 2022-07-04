import Link from "next/link";
import React, { ReactNode } from "react";

interface MenuListProps {
  className?: ReactNode;
}

const MenuList = ({ className }: MenuListProps) => {
  return (
    <ul className={`flex justify-end gap-8 pr-8 font-semibold text-black ${className}`}>
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
  );
};

export default MenuList;
