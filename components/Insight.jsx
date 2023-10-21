'use client'

import React from 'react'
import AnimatedText from './AnimatedText'
import BottomToUp from './BottomToUp'
import InsightItem from './InsightItem'

function Insight() {
  return (
    <section className='lg:pr-20 lg:pl-20 pr-10 pl-10 mb-40'>
        <AnimatedText className={'text-center'} text={'| Insight'} />
        <BottomToUp className={'text-white lg:text-7xl text-5xl text-center'} >Insight about metaverse</BottomToUp>

        <div className='mt-8 space-y-8'>
            <InsightItem title={'The launch of the Metaverse makes Elon musk ketar-ketir'} img={'planet-06.png'} content='Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.' />
            <InsightItem title={'7 tips to easily master the madness of the Metaverse'} img={'planet-07.png'} content='Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.' />
            <InsightItem title={'With one platform you can explore the whole world virtually'} img={'planet-08.png'} content='Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.' />
            
        </div>
    </section>
  )
}

export default Insight