import React from 'react'
import image from '../assets/avatar.svg'
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
function Banner() {
  return (
    <section className='section lg:mt-[-50px] lg:mb-[300px]' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center  lg:gap-x-12'>
          <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}  className="flex-1 text-center font-secondary lg:text-left">

              <motion.h1 className="text-[50px] font-semibold leading-[0.8]" variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}>Linus <span className='text-'>Daniel</span></motion.h1>
              <motion.div  variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='mb-6 p-3 text-[36px] lg:text-[40px] font-secondary font-normal uppercase leading-[1]'>
                <span className='mr-3'>I am a</span>
                <TypeAnimation sequence={[
                  'Developer',
                  2000,
                  'Programmer',
                  2000,
                  'Friend',
                  2000,

                ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity} />
              </motion.div>
              <motion.p variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}>
                A Developer with the passion to bring your designs to reality. Futuristic tech Looking sites, fully fuctional, No lags with high speed.
                purged codes to stop re-rendering and keeping of junky codes that hinders app from optimaly work well.<br />
                A Programmer that provides best algorithms to solve your problems in fewest lines of code. with robust functionalities, few codes powerful and secured results
              </motion.p>
              <motion.div className='flex mx-auto items-center gap-x-6 mb-10 lg:mx-0 max-w-max ' variants={fadeIn("up",0.1)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.3}}>

              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient '>My Portfolio</a>
            </motion.div>
              <div className='Media flex gap-x-6 text-2xl max-w-max mx-auto lg:mx-0'>
                <a href='https://web.facebook.com/emerald.daniel.5/'>
                  <FaFacebook />

                </a>
                <a href='https://www.linkedin.com/in/linus-daniel-a734b2283/'>
                  <FaLinkedin />

                </a>
                <a href='https://twitter.com/Linus_vandu'>

                  <FaTwitter />
                </a>
                <a href='https://github.com/Linus-Daniel/Linux'>

                  <FaGithub />
                </a>
              </div>
         </motion.div>
        <motion.div variants={fadeIn("up",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='image hidden lg:flex max-w-[320px] lg:max-w-[482] mx-ato'>
          <img src={image} alt='my image' />
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner