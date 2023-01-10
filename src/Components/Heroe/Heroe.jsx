import React from 'react';
import heroStyles from './Heroe.module.css'

function Heroe() {
    return (
      <div className={`bg-white mt-[7vh] md:mt-[10vh] 3xl:mt-0  ${heroStyles.container}`} >
          <div className={heroStyles.overlay}>
             <div className={` h-[90%] md:h-[60%] lg:h-[50%]  lg:w-[70%] xl:w-[40%] ml-[4%] ${heroStyles.gen}`}>
              <div className={`h-[70%]  flex flex-col justify-between text-white ${heroStyles.textsCont}`}>
                <h1 className={`font-Roboto font-[800] text-[20px] md:text-[36px] leading-[25px] md:leading-[42px]  ${heroStyles.textHead}`}>Verifyer Is a Reliable And Fast Way to Verify Certificates in Nigeria</h1>
                <p className={`w-[87%] font-openSans font-[500] text-[13px] md:text-[16px] leading-[18px] md:leading-[22px] ${heroStyles.textBody}`}>Make well-informed decision by improving your verification process by making VeriFyer do the job for you in secure, fast and reliable way.</p>
              </div>
              <div className='flex items-end h-[30%]'>
                <button className={`rounded-lg w-[100px] md:w-[149px] h-[40px] bg-[#F8501A] hover:bg-[#D8122B] text-white font-openSans text-[14px] md:text-[16px] font-[700] leading-[22px] 3xl:text-[20px] 4xl:text-[25px] 3xl:h-[70px] 3xl:w-[200px] ${heroStyles.btn}`}>Register</button>
              </div>

             </div>
          </div>
      </div>
    )
}
export default Heroe;


