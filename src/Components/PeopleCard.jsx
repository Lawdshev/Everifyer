import React from 'react'

function PeopleCard({img, text}) {
  return (
    <div className=' w-[147px] h-[150px] 2xl:w-[10%] 2xl:h-full flex flex-col justify-between m-5 lg:m-0 items-center'>
        <div className='w-[80px] h-[80px] rounded-full' >
          <img src={img} className='w-full h-full' />
        </div>
        <h1 className='text-white text-center font-workSans h-[35%] text-[16px] leading-[19px] font-medium 3xl:text-[18px] 3xl:leading-[24px] 4xl:text-[22px] 4xl:leading-[28px]'>{text}</h1>
    </div>
  )
}

export default PeopleCard