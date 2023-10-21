'use client'

import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';

function Navbar() {
  return (
    <motion.nav initial={{y:-50,opacity:0}} whileInView={{y:0,opacity:1,type:'spring'}} transition={{type: "spring",duration:0.20,damping: 8,stiffness: 100}} className=' pb-20 flex justify-between p-4'>
       <Image src={'/search.svg'} alt='search' width={30} height={30} />
        <h1 className=' text-2xl text-white font-bold'>METAVERSUS</h1>
        <Image src={'/menu.svg'} alt='menu' width={30} height={30} />
    </motion.nav>
  )
}

export default Navbar