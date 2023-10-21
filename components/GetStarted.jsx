'use client'

import Image from 'next/image'
import React from 'react'
import AnimatedText from './AnimatedText'
import GetStartedItem from './GetStartedItem'
import RightToLeft from './RightToLeft'
import LeftToRightRotate from './LeftToRightRotate'

function GetStarted() {
  return (
    <section className='lg:pl-20 mb-40 overflow-hidden place-items-center lg:pr-20 pl-10 pr-10 grid lg:grid-cols-2 grid-cols-1'>
        <LeftToRightRotate>
            <Image src={'/get-started.png'} alt='get-started img' width={500} height={500}/>
        </LeftToRightRotate>
        

        <div>
            <AnimatedText text={'| How Metaversus Works'} className={''} />
            <RightToLeft className={ ' leading-relaxed text-white text-5xl mb-8 font-bold'}>
            Get started with just a few clicks
            </RightToLeft>
            <div className=' space-y-6'>
                <GetStartedItem text={'Find a world that suits you and you want to enter'} order={'01'} />
                <GetStartedItem text={'Enter the world by reading basmalah to be safe'} order={'02'} />
                <GetStartedItem text={'No need to beat around the bush, just stay on the gas and have fun'} order={'03'} />
            </div>
        </div>
        
    </section>
  )
}

export default GetStarted