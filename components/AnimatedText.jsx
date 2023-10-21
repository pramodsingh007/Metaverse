import React from 'react'
import {motion} from 'framer-motion';

function AnimatedText({text,className}) {
  return (
    <p className={`mb-4 ${className}`}>
    {text.split('').map((item,index)=>{
        return <motion.span key={index} className="text-gray-300" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1*index}} >{item}</motion.span>
    })}
   
  </p>
  )
}

export default AnimatedText