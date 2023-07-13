import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <header className='pt-10 '>
      <div className='container mx-auto '>
            <div className='flex items-center justify-between'>
                <a href='#' > <p className="text-gradient text-normal font-primary text-3xl">LINUS</p><p className="text-white font-secondary font-normal text-4xl">DANIEL</p></a>
                <button className='btn btn-sm'>Work with me</button>
            </div>
      </div>
    </header>
  )
}

export default Header