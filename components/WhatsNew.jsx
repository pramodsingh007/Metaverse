'use client'

import React from 'react'
import AnimatedText from './AnimatedText'
import LeftToRight from './LeftToRight'
import WhatsNewCard from './WhatsNewCard'
import Image from 'next/image'
import RightToLeftRotate from './RightToLeftRotate'

function WhatsNew() {
  return (
    <section className='grid lg:grid-cols-2 overflow-hidden place-items-center grid-cols-1 pr-10 pl-10 lg:pr-20 lg:pl-20 mb-40'>
        <div>
        <AnimatedText text="| What's New?"/>
        <LeftToRight className={'text-white font-bold text-5xl mb-8'} children="What's new about Metaversus?"/>
        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-14'>
            <WhatsNewCard  img={'vrpano.svg'} title={'A new world'} text={'we have the latest update with new world for you to try never mind'} />
            <WhatsNewCard  img={'headset.svg'} title={'More realistic'} text={'In the latest update, your eyes are narrow, making the world more realistic than ever'} />
        </div>
        </div>
        
        <RightToLeftRotate>
            <Image src={'/whats-new.png'} alt='whats-new' width={500} height={500}/>
        </RightToLeftRotate>
    </section>
  )
}

export default WhatsNew