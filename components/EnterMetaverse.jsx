'use client'

import React from 'react'
import BottomToUp from './BottomToUp'
import Image from 'next/image'

function EnterMetaverse() {
  return (
    <section className='lg:pl-20 lg:pr-20 pl-10 pr-10 pb-12 border-b border-gray-400 ' >
        <BottomToUp className='flex flex-col lg:flex-row lg:justify-between'>
        <h1 className='text-white font-bold text-3xl mb-6 lg:text-5xl'>Enter the Metaverse</h1>
        <button className='flex p-4 bg-blue-700 max-w-fit max items-center text-white rounded-full'>
            <Image className='mr-2' src={'/headset.svg'} width={30} height={30} alt='vrpano'/>
            ENTER METAVERSE
        </button>
        </BottomToUp>
    </section>
  )
}

export default EnterMetaverse