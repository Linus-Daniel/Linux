import React from 'react'
import { services } from '../variants'
import { BsArrowUpRight } from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
function Services() {
  return (
    <section className='section' id='banner'>
      <div className='container mx-auto lg:grid lg:grid-cols-2 w-full'>

        <motion.div variants={fadeIn("right",0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}  className='lg:bg-services flex flex-col text-center lg:text-left flex-1 lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0 bg-no-repeat '>
            <h2 className='h2 text-accent'> What I Do</h2>
            <h3 className=' h3 maw-w-[455] mb-16'>Front-end Development, Programming, Engineering </h3>
            <a href='#'><button className='btn btn-sm'>See All My Works</button></a>
        </motion.div>
        <motion.div variants={fadeIn("left",0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}  className='second'>
            {
              services.map((service)=>{
                return(
                  <section key={Math.random()} className='flex border-b justify-between border-slate-300 p-2'>

                  <div  className='px-4'>
                      <p  className=' text-lg  font-primary'>{service.name}</p>
                      <p  className='text-sm lg:text-normal '>{service.description}</p>
                    </div>
                    <div>
                    <a href='more' className='btn w-9 h-9 text-white flex items-center justify-center'>
                    <BsArrowUpRight  />
                    </a>
                      <a  className='text-gradient text-sm'>Learn more</a>
                    </div>
                  </section>
                )
              })
            }
        </motion.div>

      </div>
    </section>
  )
}

export default Services