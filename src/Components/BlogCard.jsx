import React from 'react';
import indexStyles from '../Styles/index.module.css'


function BlogCard({img, text}) {
  return (
    <div className={`${indexStyles.blogCard} flex flex-col m-5 xl:m-0 items-center 2xl:w-[30%] 2xl:h-full`}>
        <div className={`${indexStyles.blogImg} w-[90vw] md:w-[334px] md:h-[330px] lg:w-full 2xl:h-[70%]`}>
           <img src={img} className='w-full h-full' />
        </div>
        <div className='h-[140px] w-[250px] border-x-[2px] border-x-[#535252] border-x-solid border-b-[2px] border-b-[#535252] border-b-solid  py-[6%] px-4 flex flex-col  justify-between font-roboto text-[16px] leading-[18.75px] font-[500] 2xl:w-[70%] 2xl:h-[40%] 2xl:text-[20px] 2xl:leading-[24px] 4xl:text-[24px] 4xl:leading-[30px]  hover:text-[18px] 2xl:hover:text-[22px] 4xl:hover:text-[26px]'>
          <p className='text-[#535252]'>{text}</p>
          <h1 className='text-[#F8501A]'>Read More</h1>
        </div>
    </div>
  )
}
export default BlogCard