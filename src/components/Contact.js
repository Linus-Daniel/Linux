import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
function Contact() {
  return (
    <section className='section' id='contact'>
      <div  className='container mx-auto p-4'>
          <h4 className='text-accent text-xl font-primary'>Get In Touch</h4>
          <h1 className='font-secondary font-semibold text-4xl'>Let's Work <p>Together!</p></h1>
        <form className='fill px-5 border-slate-300 rounded-xl mt-10 border-[1px] h-[60vh] flex flex-col gap-8 '>
        <input type='text' className='focus:border-accent border-b-[2px]' placeholder=' Your Name' />
        <input type='text'  className='border-b-[2px] focus:border-accent' placeholder='Your Email' />
        <textarea type='text'  className='border-b-[2px] bg-transparent focus:border-accent outline-none h-[100px]' placeholder=' Message' />
        <button type='submit' className='btn btn-sm' >Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact