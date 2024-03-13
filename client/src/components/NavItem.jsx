import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function NavItem({ item }) {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((currState) => {
      return !currState;
    });
  };

  return (
    <li className='relative group'>
      {item.type === 'link' ? (
        <>
          <a href='/' className='px-4 py-2'>
            {item.name}
          </a>
          <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>
            /
          </span>
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <button
            className='flex items-center px-4 py-2 gap-x-1'
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? 'block' : 'hidden'
            } pt-4 transition-all duration-500 lg:absolute lg:bottom-0 lg:hidden lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className='flex flex-col overflow-hidden text-center rounded-lg shadow-lg bg-dark-soft lg:bg-transparent'>
              {item.items.map((page, idx) => (
                <a
                  key={idx}
                  href='/'
                  className='px-4 py-2 text-white hover:bg-dark-hard hover:text-white lg:text-dark-soft'
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}

export default NavItem;
