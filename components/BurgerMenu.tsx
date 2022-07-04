import React from "react";
import { stack as Menu } from "react-burger-menu";
import MenuList from "./MenuList";

const BurgerMenu = () => {
  return (
    <div className='nav-close:hidden'>
      <Menu
        right
        overlayClassName='inset-0 top-[85px]'
        menuClassName='bg-brand-blue p-4'
        className='top-[85px]'
        burgerButtonClassName='w-8 h-8 bg-none relative'
        burgerBarClassName='bg-brand-blue hover:bg-black'
      >
        <MenuList className='flex-col pr-0' />
      </Menu>
    </div>
  );
};

export default BurgerMenu;
