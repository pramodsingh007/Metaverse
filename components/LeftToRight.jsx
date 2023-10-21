import React from 'react'
import {motion} from 'framer-motion';

function RightToLeft({children,className}) {
  return (
    <motion.div className={className} initial={{opacity:0, x:-100}} whileInView={{opacity:1,x:0}} transition={{delay:0.8,duration:1}}>
        {children}
    </motion.div>
  )
}

export default RightToLeft