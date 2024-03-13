import React from 'react';
import ArticleCard from '../../../components/ArticleCard';
import { FaArrowRight } from 'react-icons/fa';

function Articles() {
  return (
    <section className='container flex flex-col px-5 py-10 mx-auto'>
      <div className='flex flex-wrap pb-10 md:gap-x-5 gap-y-5'>
        <ArticleCard className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
        <ArticleCard className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
      </div>
      {/* <button className='flex items-center px-6 py-3 mx-auto font-bold border-2 rounded-lg gap-x-2 text-primary border-primary'>
        <span>More articles</span>
        <FaArrowRight className='w-3 h-3' />
      </button> */}

      <button className='flex items-center px-6 py-3 mx-auto font-bold transition duration-300 ease-in border-2 rounded-lg gap-x-2 text-primary border-primary'>
        <span className='transition-transform transform hover:scale-105 hover:translate-x-1'>
          More articles
        </span>
        <FaArrowRight className='w-3 h-3 transition-transform transform hover:translate-x-1' />
      </button>
    </section>
  );
}

export default Articles;
