'use client'
import React from 'react'
import AnimatedText from './AnimatedText'
import BottomToUp from './BottomToUp'
import Image from 'next/image'

async function MapWorld() {
  return (
    <section className=' overflow-hidden mb-40 lg:pr-20 lg:pl-20 pr-10 pl-10'>
        <AnimatedText className={'text-center'} text={'| People on the World'} />
        <BottomToUp className={'mb-12 text-white leading-relaxed font-bold text-center lg:text-7xl text-5xl'}>Track friends around you and invite them to play together in the same world</BottomToUp>
        <div>
            <Image className='w-full h-full' src={'/map.png'} alt='map' width={1500} height={1500}  />
           
        </div>
    </section>
  )
}

export default MapWorld