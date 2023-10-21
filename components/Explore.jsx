'use client'

import React, { useState } from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';
import ExploreCard from './ExploreCard';

function Explore() {
  const [selectedCard,setSelectedCard] = useState('')
  const clicked = (id)=>{
    console.log(id)
    
    setSelectedCard(id)
  }
  return (
        <section className='mb-40 sm:mr-10 sm:ml-10 max-sm:ml-10 max-sm:mr-10 mr-20 ml-20 overflow-hidden'>
            <p className='text-center mb-4'>
            {'| The World'.split('').map((item,index)=>{
            return <motion.span key={index} className="text-gray-300" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1*index}} >{item}</motion.span>
        })}
            </p>

            <motion.h1 className="text-white font-bold leading-relaxed text-4xl mb-12 lg:text-7xl text-center " initial={{y:50,opacity:0}}  transition={{duration:1,delay:0.5}}  whileInView={{y:0,opacity:1}}>
            Choose the world you <br /> want to explore
         </motion.h1>

         <div className='flex flex-row  justify-center  w-full min-h-[300px] lg:min-h-[100vh] gap-1  lg:gap-7'>
          {[<ExploreCard id='1' className={selectedCard==1?'300px':''}  onClick={clicked}  img={'/planet-01.png'} />,
          <ExploreCard id='2' className={selectedCard==2?'300px':''} onClick={clicked} img={'/planet-02.png'} />,
          <ExploreCard id='3' className={selectedCard==3?'300px':''} onClick={clicked} img={'/planet-03.png'} />,
          <ExploreCard id='4' className={selectedCard==4?'300px':''} onClick={clicked} img={'/planet-04.png'} />,
          <ExploreCard id='5' className={selectedCard==5?'300px':''} onClick={clicked} img={'/planet-05.png'} />].map((card,index)=>{
            return <motion.div key={index} initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{delay:index*0.5,duration:1}}>
              {card}
            </motion.div>
          })}
         </div>
        </section>
  )
}

export default Explore