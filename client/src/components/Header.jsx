import React, { useState } from 'react';
import { images } from '../constants/images';
import NavItem from './NavItem';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const navItemsInfo = [
    { id: '1', name: 'Home', type: 'link' },
    { id: '2', name: 'Articles', type: 'link' },
    {
      id: '3',
      name: 'Pages',
      type: 'dropdown',
      items: ['About us', 'Contact us'],
    },
    { id: '4', name: 'Pricing', type: 'link' },
    { id: '5', name: 'Faq', type: 'link' },
  ];

  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
      <header className='container flex items-center justify-between px-5 py-4 mx-auto'>
        <div>
          <img className='w-16' src={images.Logo} alt='Logo' />
        </div>

        <div className='z-50 lg:hidden'>
          {navIsVisible ? (
            <AiOutlineClose
              className='w-6 h-6'
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? 'right-0' : '-right-full'
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] fixed top-0 bottom-0 flex flex-col justify-center items-center w-full lg:justify-end gap-x-9 lg:w-auto lg:static lg:flex-row`}
        >
          <ul className='flex flex-col items-center font-semibold text-white gap-y-5 gap-x-2 lg:flex-row lg:text-dark-soft'>
            {navItemsInfo?.map((navItem) => (
              <NavItem key={navItem.id} item={navItem} />
            ))}
          </ul>
          <button className='px-6 py-2 mt-5 font-semibold text-blue-500 transition-all duration-300 border-2 border-blue-500 rounded-full lg:mt-0 hover:bg-blue-500 hover:text-white'>
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
