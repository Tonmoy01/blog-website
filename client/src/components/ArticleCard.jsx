import React from 'react';
import { images } from '../constants/images';
import { BsCheckLg } from 'react-icons/bs';

function ArticleCard({ className }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,0.1)_0px_9px_30px] ${className}`}
    >
      {/* Article Image */}
      <img
        src={images.PostImage}
        alt='title'
        className='object-cover object-center w-full h-auto md:h-52 lg:h-48 xl:h-80'
      />

      {/* Article Text */}
      <div className='p-5'>
        <h2 className='text-xl font-bold font-roboto text-dark-soft md:text-2xl lg:text-[28px]'>
          Future of Work
        </h2>
        <p className='mt-3 text-sm font-normal text-dark-light md:text-lg'>
          Majority of people will work in jobs that don't exist today.
        </p>
        <div className='flex items-center justify-between mt-6 flex-nowrap'>
          {/* Post Profile Images */}
          <div className='flex items-center gap-x-2 md:gap-x-2.5'>
            <img
              src={images.PostProfileImage}
              alt='Profile Image'
              className='w-9 h-9 md:w-10 md:h-10'
            />

            <div className='flex flex-col'>
              <h4 className='text-sm italic font-bold text-dark-soft md:text-base'>
                Viola Manisa
              </h4>
              <div className='flex items-center gap-x-2'>
                {/* Icon Span */}
                <span className='bg-[#36b37e] w-fit bg-opacity-20 p-1 rounded-full'>
                  <BsCheckLg className='w-3 h-3 text-[#36B37E]' />
                </span>
                {/* Verified Or Not Span */}
                <span className='text-xs italic text-dark-light md:text-sm'>
                  Verified writer
                </span>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className='text-sm italic font-bold text-dark-hard md:text-base'>
            02 May
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
