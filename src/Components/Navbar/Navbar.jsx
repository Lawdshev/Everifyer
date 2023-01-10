import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/VeriFyer-Logo-3 1.png'
import '../Navbar/Navbar.css'

function Navbar() {
  const [sidebar,setSidebar] = useState(false);
   
  const toggleNavbar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className='bg-white md:hidden landscape:hidden '>
    <div className='absolute right-5 z-20 block top-4 bar md:hidden' onClick={toggleNavbar}>
        <i className="fa-solid fa-bars text-[#F8501A] text-[20px] " ></i>
    </div>
    <Link to='/' className='bg-white w-full'>
        <img src={logo} className="w-[30%] top-[1%] absolute md:top-[1%] z-20 md:w-[20%] lg:w-[16%] ml-[3.5%] logo 2xl:w-[10%]"  />
    </Link>
    <div className={sidebar ? 'nav active' : 'nav'}>
        <div className='navbars'>
            <div className="navItemsDiv cursor-pointer  " onClick={toggleNavbar}>
                <a href='#about' className='navItems'>About</a>
                <a href='#blog' className='navItems 3xl:text-[24px]'>Blog</a>
                <a  href='#contact'  className='navItems'>Contact</a>
                <a  href='#faq' className='navItems'>FAQ</a>
            </div>
            <button className='joinUsBtn'>Join us</button>
        </div>
    </div>
    </div>
  )
}
export default Navbar;

