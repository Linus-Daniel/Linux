import React from 'react'
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {variant } from "../variants"
function About() {
  const [ref,inView] = useInView({
    threshold:0.5,
  })
  return (
    <section className='px-5 py-10' id='about' ref={ref}>
        <div className='container mx-auto grid grid-cols-2'>
          <div className='bg-about bg-contain hidden lg:flex bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            
          </div>


          <div className='text flex flex-col text-center lg:text-left w-[80vw] lg:w-auto px-5 items-center'>

          <h2 className="underline">About Me</h2>
          <h3 className="font-primary">
            I am a Freelance front-end Developer with years of experience. In my journey over the years, I've worked on projects, coming in contacts with Veteran Developers that helped me improved my skills<br/>
            working with startsups and also Doing the remote jobs for the people in need of my Services.
            <p>
              Prior to that I Built my own personal projects. Building want i love using built by others actually .

            </p>
            <ul>
              some of these are
              <li><a href='#' className="text-gradient" >Music Player App</a></li>
              <li><a href='#' className="text-gradient"> Dummy Ecommerce </a>
            <span>😁</span>

              </li>
              <li><a href='' className="text-gradient"> A Gallery of memories</a></li>
            </ul> 
          </h3>
          </div>

        </div>
    </section>
  )
}

export default About