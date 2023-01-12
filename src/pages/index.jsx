import React from 'react';
import Heroe from '../Components/Heroe/Heroe'
import indexStyles from '../Styles/index.module.css';
import PeopleCard from '../Components/PeopleCard';
import aboutImg from '../assets/5064259-removebg-preview.png'
import Navbar from '../Components/Navbar/Navbar';
import logo from '../assets/VeriFyer-Logo-3 1.png';
import BlogCard from '../Components/BlogCard';
import blgimg1 from '../assets/Rectangle 36.png';
import blgimg2 from '../assets/Rectangle 38.png';
import blgimg3 from '../assets/Rectangle 37.png';
import person2 from '../assets/Ellipse 13.png';
import person1 from '../assets/Ellipse 12.png';
import person3 from '../assets/Ellipse 14.png';
import person4 from '../assets/Ellipse 15.png';
import person5 from '../assets/Ellipse 16.png';
import person6 from '../assets/Ellipse 17.png';
import step3 from '../assets/Group 11 (1).png';
import step1 from '../assets/Group 11 (2).png';
import step2 from '../assets/Group 11 (3).png';


  // blog write up
  const blogs = [
    {
      img:blgimg1,
      text:'Lorem ipsum dolor sit amet consectetur. Vel'   
    },
    {
      img:blgimg2,
      text:'Lorem ipsum dolor sit amet consectetur. Vel'   
    },
    {
      img:blgimg3,
      text:'Lorem ipsum dolor sit amet consectetur. Vel'   
    },
  ]

// people that can use verifier  
const people = [
  {
    img:person1,
    text:'Employers'
  },
  {
    img:person2,
    text:'Background Check Companies'
  },
  {
    img:person3,
    text:'Embassies/Consulate'
  },
  {
    img:person4,
    text:'Professional Bodies'
  },
  {
    img:person5,
    text:'Government MDA’s'
  },
  {
    img:person6,
    text:'Recruitment Agencies Globally'
  },
]


function Index() {



  return (
    <div>
      {/* navbar */}
      <Navbar/>
      <div className={`md:flex flex-row hidden items-center lg:pl-[5%] justify-between fixed top-0 left-0 right-0 bg-white z-[99] ${indexStyles.LargeNavbar}`}>
        <span className={indexStyles.logoCont}>
          <img src={logo} alt="" className={indexStyles.logo}/>
        </span>
        <span className={` flex flex-row items-center justify-around w-[40%] font-openSans text-[16px] font-[700] leading-[22px] ${indexStyles.LargeNavbarItems}`}>
              <a href='#about' className='navItems' >About</a>
              <a  href='#blog' className='navItems' >Blog</a>
              <a  href='#contact' className='navItems' >Contact</a>
              <a  href='#faq' className='navItems' >FAQ</a> 
        </span>
        <button className='joinUsBtn ml-[5%] '>Join us</button>
      </div>
      <Heroe/>
      {/* steps */}

      <div className='xl:h-[40vh] flex items-center justify-center mx-[2%] mt-[10%] xl:mt-[5%] bg-white'>
        <div className='h-[80%] w-full lg:w-[95%] xl:w-[95%] py-8 xl:py-0 flex flex-col justify-between '>
          <div className={`h-[30%] md:w-[80%] lg:w-[60%] xl:w-[50%] 3xl:w-[60%] flex items-center justify-around md:ml-[15%] lg:ml-[5%] xl:ml-0  ${indexStyles.how} `}>
            <div className='md:w-[120px] w-[20%] 3xl:w-[30%] h-[5px] bg-[#F8501A]'></div>
            <h1 className={` font-roboto font-extrabold text-[20px] leading-[28px] md:text-[28px] lg:text-[32px]   md:leading-[38px] text-[#535252] ${indexStyles.text32}`}>How Our Product Works In <br /> Three Steps </h1>
          </div>
          <div className={`h-[50%] 3xl:h-[70%] items-center flex flex-wrap  justify-between w-full mt-[5%] xl:mt-0 xl:px-[3%] 3xl:mt-[5vh] ${indexStyles.stepsCont}`}>
             <div className=' my-5 mx-[2%] xl:m-0 flex h-[90px] 3xl:h-[50%] w-full md:w-[350px] xl:w-[35%] justify-around items-center  steps  '>
                 <div className={`${indexStyles.step} h-[83px] w-[83px] 3xl:w-[calc(120px+1vw)] 3xl:h-[calc(120px+1vw)] flex items-center justify-center hover:bg-white hover:border-[#F8501A] hover:border-[1px] hover:border-solid rounded-full`}>
                    <img src={step1} alt="" srcset="" />
                 </div>
                 <div className='w-[70%] md:w-[72%] h-[70%] md:h-[80%] 3xl:h-full flex flex-col justify-between'>
                    <h1 className={`font-roboto text-[16px] md:text-[20px] leading-[23.44px] font-extrabold text-[#535252] ${indexStyles.text20}`}>Upload Results</h1>
                    <p className={`h-[50%] font-workSans font-medium text-[12px] md:text-[15px]  leading-[17.6px] text-[#535252] ${indexStyles.text15} `}>Upload the results you want to verify <br /> to get checked easily and fast</p>
                 </div>
             </div>
             <div className='my-5 ml-[3%] xl:m-0  flex h-[90px]  w-full md:w-[350px] xl:w-[35%] justify-center items-center 3xl:h-[60%] steps '>
                 <div className={`${indexStyles.step} hover:bg-white hover:border-[#F8501A] hover:border-[1px] hover:border-solid h-[83px] w-[83px] rounded-full flex justify-center items-center 3xl:w-[calc(120px+1vw)] 3xl:h-[calc(120px+1vw)]`}>
                    <img src={step2} alt="" srcset="" />
                 </div>
                 <div className='w-[70%] md:w-[72%] xl:w-[60%] h-[70%] md:h-[80%] flex flex-col justify-between ml-3'>
                    <h1 className={`font-roboto text-[16px] md:text-[20px] leading-[23.44px] font-extrabold text-[#535252] 3xl:text-[24px] 3xl:leading-[30px] ${indexStyles.text20}`}>Wait a While</h1>
                    <p className={`h-[50%] font-workSans font-medium text-[12px] md:text-[15px] leading-[17.6px] text-[#535252] 3xl:text-[20px] 3xl:leading-[24px] ${indexStyles.text15} `}>Wait a while for result to load <br /> and download</p>
                 </div>
             </div>
             <div className='my-5 mx-[2%] xl:m-0  flex h-[90px]  w-full md:w-[350px]  xl:w-[30%] justify-around items-center 3xl:h-[60%] steps '>
                 <div className={`${indexStyles.step} hover:bg-white hover:border-[#F8501A] hover:border-[1px] hover:border-solid h-[83px] flex items-center justify-center w-[83px] rounded-full 3xl:w-[calc(120px+1vw)] 3xl:h-[calc(120px+1vw)]`}>
                    <img src={step3} alt="" srcset="" />
                 </div>
                 <div className=' w-[70%] md:w-[72%] xl:w-[70%] h-[70%] md:h-[80%] flex flex-col justify-between '>
                    <h1 className={`text-[#535252] font-roboto text-[16px] md:text-[20px] leading-[23.44px] font-extrabold 3xl:text-[24px] 3xl:leading-[30px]  ${indexStyles.text20} `}>Get Result</h1>
                    <p className={`text-[#535252] h-[50%] font-workSans font-medium text-[12px] md:text-[15px] leading-[17.6px] 3xl:text-[20px] 3xl:leading-[24px] ${indexStyles.text15} `}>Get your result. Secure <br /> fast and reliable</p>
                 </div>
             </div>
          </div>
        </div>
      </div>

      {/* About Verifier  */}
      <div className={`${indexStyles.aboutVerifierDiv} md:h-[120vh] mt-[10vh] 3xl:h-[80vh] flex items-center justify-center bg-[#F5F5F5] mb-[3vh] md:mb-0`} id='about' >
         <div className='w-[90%] h-[90%] xl:h-[80%] flex flex-col xl:flex-row justify-between'>
             <div className={` ${indexStyles.aboutVerifierImgDiv} xl:w-[55%] 3xl:w-[50%] h-[50vh]  md:h-[70%] xl:h-full flex relative mb-2 md:mb-0`}>
                 <div className={` ${indexStyles.aboutVerifier} w-[70%] h-[80%] border-[3px] border-[#F8501A] border-solid  absolute`}></div>
                 <img src={aboutImg} className='bg-[#ffffff] w-[80%] absolute left-[10%] top-[10%] z-10 xl:top-[5%]' /> 
                 <div className={` ${indexStyles.aboutVerifierSmallBox} w-[15%] h-[15%] border-[3px] border-[#F8501A] border-solid absolute bottom-[10%] md:bottom-[5%] md:right-[7%] xl:-bottom-[3%] right-[4%]`}></div>
             </div>

             <div className={`mt-[2vh] xl:w-[42%] md:h-[30%] xl:h-[85%]  4xl:h-[80%] flex flex-col justify-between lg:w-4/5 mx-auto xl:mx-0 md:mt-[2%] xl:mt-[0%] ${indexStyles.abtDiv}`}>
               <h1 className={`font-roboto font-bold md:text-[36px] md:leading-[42.19px] text-[28px] leading-[36px] text-[#535252]   ${indexStyles.text36}`}>About Verifyer</h1>
               <p className={`${indexStyles.verifierText} ${indexStyles.text16} text-[#535252] h-[80%] md:h-[70%] xl:h-[85%] 4xl:h-[65%] lg:w-[80%] text-[12px] leading-[29.81px] md:text-[16px] font-workSans font-medium xl:mt-[5%]`}>Verifyer helps organizations and institutions increase efficiency, lessen expenses and workload by improving the time to verify certificates and results provided them. Verifyer is a pay-as-a-go platform that guarantees to reduce the turn-around time in getting checks done.
                The Verifyer platform connects persons that need confirmation or verification services with the institutes or organizations that have the data of the subjects to be verified. It does this in three easy steps: Upload Results, Wait a While & Get Result.
                Verifyer is a 24/7 digital verification and e-transcript solution established to automates and certificates and credentials verification processes.
                </p>
               <button className={`bg-[#F8501A] py-2 w-[50%] 3xl:w-[50%] 3xl:py-[3%] md:w-[237px] rounded-[5px] text-[#FFFFFF] text-[16px] 3xl:text-[22px] 4xl:text-[26px] font-semibold leading-[22px] font-openSans hover:bg-[#D8122B] mt-3 md:mt-0  ${indexStyles.conBtn}`}>Contact Us Now</button>
             </div>
         </div>
      </div>

      {/* people that use our product */}
      <div className={`${indexStyles.peopleDivbg}`}>
      <div className={`${indexStyles.peopleDiv} lg:h-[383px] flex justify-center `}>
        <div className='w-full xl:w-[90%] h-[90%] flex flex-col mt-[1%] justify-between py-8'>
            <div className='flex flex-col h-[25%] w-full justify-between font-roboto font-bold text-[#FFFFFF] text-center px-2 md:px-4 lg:p-0'>
              <h1 className='text-[22px] leading-[30px] md:text-[30px] md:leading-[36px] lg:text-[32px] lg:leading-[38px] 3xl:text-[35px] 4xl:text-[40px]'>People That Can Use Our Product</h1>
              <p className='text-[12px] leading-[16px] md:text-[16px] md:leading-[20px] lg:text-[20px] lg:leading-[23px] mt-[2%] lg:mt-[0%] 3xl:text-[25px] 4xl:text-[30px]'>Who can Make Use Of Verifyer</p>
            </div>
            <div className='flex h-[60%] w-full items-center justify-around flex-wrap md:px-[5%] lg:px-0'>
              {
                people.map(person => {
                  return <PeopleCard {...person}/>
                })
              }        
            </div>  
        </div>
      </div>
      </div>

      {/* blog */}
      <div className={`${indexStyles.blog} lg:h-[100vh] xl:h-[120vh] mb-[10%] lg:mb-0`} id='blog'>
        <div className={`${indexStyles.blogFirstDiv} h-[20vh] lg:h-[20%] xl:h-[40%] flex flex-col items-center pt-[5%]`}>
          <h3 className={`font-roboto text-[20px] font-[800] leading-[28px] md:text-[24px] xl:leading-[36px] mb-2 landscape:text-[36px] landscape:leading-[32px] ${indexStyles.text24}`}>Blog</h3>
          <h1 className={`font-roboto font-[800] text-[24px] leading-[42px] md:text-[36px] 2xl:text-[40px] xl:leading-[50px] ${indexStyles.text36}`}>Read Some Of Our Articles Here</h1>
        </div>
        <div className={`${indexStyles.blogs} -mt-[10%] md:-mt-[8%] lg:-mt-[5%] flex flex-wrap justify-around w-full h-[60%]`}>
          {
            blogs.map(blog => {
            return <BlogCard {...blog} />
            })
          }
          
        </div>
      </div>

    </div>
  )
}

export default Index