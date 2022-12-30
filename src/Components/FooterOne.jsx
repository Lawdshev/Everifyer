import React from 'react';
import styles from '../Styles/index.module.css';
import copy from '../assets/copy.png'

function FooterOne() {
  return (
    <>
    <div className='flex flex-col md:h-[602px] mx-auto bg-[#F5F5F5] text-[#3D3B3B] overflow-x-hidden '>
        <div className='flex flex-col items-center justify-center py-2 lg:py-12'>
           <h1 className='font-extrabold text-[20px] leading-[36px] md:text-[30px] md:leading-[48px] lg:text-[36px] lg:leading-[54px] font-workSans 3xl:text-[48px] 3xl:leading-[60px] text-[#3D3B3B]' id='contact'>Contact Us</h1>
           <p id='inTouch' className='text-[#F8501A] text-[14px] leading-[20px] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[30px] font-bold font-inter 3xl:text-[30px] 3xl:leading-[36px]'>Keep in touch with Us</p>
        </div>
        <div className=' mx-auto flex flex-wrap h-[60%] pl-[5%] py-4 md:px-8 lg:px-0 xl:px-8 md:py-8 lg:py-4 lg:w-[90%] 5xl:w-[80%]'>
          <div className='flex flex-col h-[33%] lg:w-1/4 w-1/2 md:w-[33%] md:h-[52%] lg:h-[60%] justify-between xl:pl-4'>
             <h1 className='text-[#F8501A] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter 3xl:text-[24px] 3xl:leading-[28px] 5xl:text-[30px]5xl:leading-[32px]'>Lagos Office</h1>
             <p className='text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] h-[70%] font-workSans font-medium 3xl:text-[17px] 3xl:leading-[21px] 5xl:text-[18px] '>Plot 1187, Abimbola Awoniyi Close,<br/>
                off Kasumu Ekemode Str, Via Saka <br />
                Tinubu Street, Victoria island, <br /> Nigeria.
             </p>
             <div className=' font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter 3xl:text-[17px] 3xl:leading-[24px] 5xl:text-[18px] '>   
                <p className='text-[#3D3B3B]'>T: 234-1-9049320, 234-1-2710670-2</p>
                <p>E: info@vatebra.com</p>
                <p>E: customersupport@vatebra.com</p>
             </div>
          </div>
          <div className='flex flex-col h-[29%] lg:w-1/4 w-1/2 md:w-[36%] md:h-[46%] lg:h-[53%] justify-between lg:pl-8 md:pl-4'>
              <h1 className='text-[#F8501A] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter 3xl:text-[24px] 3xl:leading-[28px] 5xl:text-[30px] 5xl:leading-[32px]'>Abuja Office</h1>
              <p className='text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px]  h-[70%] font-workSans font-medium 3xl:text-[17px] 3xl:leading-[21px] 5xl:text-[18px] '>Suite 302 Fortune Place, <br /> No 9 Nairobi Street, off <br /> Aminu Kano Cresent, <br /> Wuse 2, Abuja, Nigeria.</p>
              <div className='font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter 3xl:text-[17px] 3xl:leading-[24px] 5xl:text-[18px] '>
                <p>T: 234-1-9049320, 234-1-2710670-2</p>
                <p>E: abujaoffice@vatebra.com</p>
              </div> 
          </div>
          <div className='flex flex-col h-[23%] p-0 lg:w-1/4 w-1/2 md:w-[30%] md:h-[39%] lg:h-[46%] justify-between md:pl-6 lg:pl-20 mt-2 md:mt-0'>
             <h1 className='text-[#F8501A] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] w-full font-inter 3xl:text-[24px] 3xl:leading-[28px] 5xl:text-[30px] 5xl:leading-[32px]'>Nairobi Office</h1>
             <p className='text-[10px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] h-[70%] font-medium font-workSans 3xl:text-[17px] 3xl:leading-[21px] 5xl:text-[18px]  '>AG02, Madonna House, <br /> Westlands Road, Nairobi, <br /> Kenya</p>
             <p className='font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter 3xl:text-[17px] 3xl:leading-[24px] 5xl:text-[18px] '>E: nairobioffice@vatebra.com</p>
          </div>
          <div className='flex flex-col h-[29%] lg:w-1/4 w-1/2 md:mt-4 lg:mt-0 md:w-[33%] md:h-[45%] lg:h-[53%] justify-between lg:pl-20 mt-2'>
             <h1 className='text-[#F8501A] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter 3xl:text-[24px] 3xl:leading-[28px] 5xl:text-[30px] 5xl:leading-[32px]'>Accra Office</h1>
             <p className='text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-medium h-[70%] font-workSans 3xl:text-[17px] 3xl:leading-[21px] 5xl:text-[18px] '>202, Westland Boulevard, <br /> west Legon, Accra, Ghana, <br /> PO Box AN 5208 Accra- <br /> North, Accra Ghana.</p>
             <div className='font-semibold text-[9px] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter 3xl:text-[17px] 3xl:leading-[24px] 5xl:text-[18px] '>
              <p>T: 233(0) 302402339</p>
              <p>E; ghanaoffice@vatebra.com</p>
             </div>
          </div>
          <div className='md:ml-[2%] lg:ml-[0] before:flex flex-col h-[18%] lg:w-[30%] w-4/5 md:w-[33%] lg:mt-4 lg:h-[40%] md:h-[33%] justify-between  md:mt-4 xl:pl-4 text-[#3D3B3B]'>
              <h1 className='text-[#F8501A] text-[12px] leading-[20px] md:text-[14px] lg:text-[16px] font-bold lg:leading-[24px] h-[25%] md:h-[20%] font-inter 3xl:text-[24px] 3xl:leading-[28px]'>Sierra Leone Office</h1>
              <div className='font-medium text-[#3D3B3B] text-[9px] mt-[2%] leading-[15px] md:text-[12px] lg:text-[14px] md:leading-[21px] font-inter 3xl:text-[17px] 3xl:leading-[22px] 5xl:text-[18px] '>
                <p>55A Wilkinson Road, Freetown, Sierra Leone</p>
                <p>T: +2349062547274</p>
                <p>E: info@vatebra.com</p>
              </div> 
          </div>
        </div>
    </div>
      
        <div className={`${styles.footer} flex pl-[8%] py-8 5xl:pl-[10%] h-[98px] bg-[#F8501A]`}>
          <div className='flex text-white font-normal font-inter items-center w-full'>
            <img src={copy} className='3xl:w-[50px]' />
            <p className='text-[14px] font-[500] leading-[21px] ml-[0.5%] font-inter w-full' id='copyright font-inter 3xl:text-[24px] 5xl:text-[28px]'>Copyright 2022 by Vatebra.com</p>
          </div>
        </div>
    </>
  )
}
export default FooterOne;