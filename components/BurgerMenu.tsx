import React from "react";
import { stack as Menu } from "react-burger-menu";
import MenuList from "./MenuList";

const BurgerMenu = () => {
  return (
    <div className='nav-close:hidden'>
      <Menu
        right
        overlayClassName='inset-0'
        menuClassName='bg-brand-blue p-4'
        className='top-0'
        crossClassName='z-1 bg-black'
        burgerButtonClassName='w-8 h-8 bg-none relative'
        burgerBarClassName='bg-brand-blue hover:bg-black'
      >
        <MenuList className='flex-col mt-8 pr-0' />
      </Menu>
    </div>
  );
};

export default BurgerMenu;
