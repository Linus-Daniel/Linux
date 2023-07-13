import React from 'react'
import WorkCard from './workCard'
import image1 from '../assets/portfolio-img1.png'
import image2 from '../assets/portfolio-img2.png'
import image3 from '../assets/portfolio-img3.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
function Work() {
  return (
    <section className='section' id='work'>
        <div className=' container mx-auto  '>
        <div className='flex flex-wrap gap-8 items-center justify-center mb-10'>


          <div className=' w-1/2 flex flex-col lg:h-[30vh] lg:w-[30vw]  justify-between text-center lg:text-left '>
          
              <h2 className='text-gradient'>
                My Latest Work
              </h2>
              <p>
                Below are few of my completed projects which you Access.
                click the below button to view more projects and Explore the beauty of web development
              </p>
              <a className=''>
                <button className='btn btn-sm' >
                  View all my Projects
                </button>
              </a>
          </div>
          <WorkCard image={image1 } id={"Web design"} title={"Crypto Market"}/>
          <WorkCard image={image2} id={"Mobile App"} title={"Vibes Music"}/>
          <WorkCard image={image3} id={"Artificial Intelligence"} title={'Event Scheduler'}/>
        
        </div>
        </div>
    </section>
  )
}

export default Work