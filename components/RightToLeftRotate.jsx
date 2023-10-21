import React from 'react'
import {motion} from 'framer-motion';

function RightToLeftRotate({children}) {
  return (
    <motion.div initial={{x:400,rotate:60,opacity:0}} whileInView={{x:0,rotate:0,opacity:1}} transition={{duration:1,delay:0.8,type:'spring',stiffness:50}}>{children}</motion.div>
  )
}

export default RightToLeftRotate