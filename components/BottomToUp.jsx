import React from 'react'
import {motion} from 'framer-motion';

function BottomToUp({children,className}) {
  return (
    <motion.div className={`${className}`} initial={{y:100,opacity:0}}  transition={{duration:1,delay:0.5}}  whileInView={{y:0,opacity:1}} >
        {children}
    </motion.div>
    
   
    )
}

export default BottomToUp