import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion';

function ExploreCard({img,title,id,onClick,className}) {
  
    
  return (
    <motion.div animate={{width:className}} transition={{duration:0.20}} onClick={()=>{onClick(id)}} className={`lg:min-w-[9rem] min-w-[5rem] h-full  relative overflow-hidden ${className}`} id={id}>
            <Image className=' h-full w-full object-cover absolute rounded-2xl  '  src={img} alt='card img' width={1000} height={1000}/>
          </motion.div>
  )
}

export default ExploreCard