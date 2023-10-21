'use client'

import Image from 'next/image'
import React from 'react'
import LeftToRight from './LeftToRight'
import RightToLeft from './RightToLeft'
import {motion} from 'framer-motion';

function FounderInfo() {
  return (
    <section className='mb-40 lg:pl-20 relative lg:pr-20 pl-10 pr-10 flex lg:flex-row flex-col overflow-hidden gap-10 '>
        <LeftToRight className='relative  rounded-3xl overflow-hidden lg:max-w-md flex items-end '>
       
            <div className=' z-10 relative p-12 '>
            <div>
            <h1 className='text-white font-bold text-3xl'>Samantha</h1>
            <p className='text-gray-400 text-sm'>Founder | Metaversus</p>
            </div>
            <h1 className='text-gray-400 text-xl leading-10 font-medium'>
                'With the developement of today's technology, metaverse is very useful for today's work, or can be called web 3.0 by using metaverse you can use it as anything'
            </h1>
            </div>
            <div className='absolute w-full h-full  top-0 glassmorphism'/>
      
        </LeftToRight>
        <RightToLeft className=' rounded-3xl overflow-hidden lg:min-h-[600px] '>
            <Image src={'/planet-09.png'} className='w-full h-full object-cover' alt='planet img' width={1500} height={1500} />
        </RightToLeft>
        <Image className=' absolute top-0 left-[28rem] lg:flex hidden' src={'/stamp.png'} alt='stamp' width={200} height={200}/>
    </section>
  )
}

export default FounderInfo