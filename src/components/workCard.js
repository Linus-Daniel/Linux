import React, { useState } from 'react'

function WorkCard({image, id,title}) {
  return (
    <div className=" parent relative w-[60vw]  lg:w-[30vw] rounded-xl overflow-hidden  lg:h-[35vh] border-slate-300 border-[1px]">
        <img src={image}  className='img rounded-2xl lg:w[40vw] lg:h-[35vh] '/>
        <div className='visibleHover top-0 h-full w-full  bg-black/50 absolute rounded-lg flex flex-col items-center font-secondary justify-center'>
            <p className='text-gradient text-xl flex'>{id}</p>
            <p className='text-lg font-primary'>{title}</p> 
        </div>
    </div>
  )
}

export default WorkCard