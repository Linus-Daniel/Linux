import React from 'react'
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData,BsBriefcase,BsChatSquare} from 'react-icons/bs'
import {Link} from 'react-scroll'
function Nav() {  
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden'>
      <div className='flex justify-between items-center bg-black/20 w-fit px-3 py-1 height-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto text-white/50 text-2xl'>
        <Link activeClass='active' offset={-200} smooth={true} spy={true} to='home' className='cursor-pointer w-[40px] h-[40px]  flex justify-center items-center'><BiHomeAlt className="hover:text-2xl" /></Link>
        <Link activeClass='active' smooth={true} spy={true}  to='about' className='cursor-pointer w-[40px] h-[40px] flex justify-center items-center'><BiUser /></Link>
        <Link activeClass='active' smooth={true} spy={true}  to='banner' className='cursor-pointer w-[40px] h-[40px] flex justify-center items-center'><BsClipboardData /></Link>
        <Link activeClass='active' smooth={true} spy={true}  to='work' className='cursor-pointer w-[40px] h-[40px] flex justify-center items-center'><BsBriefcase /></Link>
        <Link activeClass='active' smooth={true} spy={true}  to='contact' className='cursor-pointer w-[40px] h-[40px] flex justify-center items-center'><BsChatSquare /></Link>

      </div>
    </nav>
  ) 
}

export default Nav