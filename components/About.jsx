'use client'

import React from "react";
import {motion} from 'framer-motion';
import Image from "next/image";
import BottomToUp from "./BottomToUp";
import AnimatedText from "./AnimatedText";

function About() {
  return (
    <section className="lg:mr-20 lg:ml-10 mr-10 ml-10 relative sm:mr-0 sm:ml-0 max-sm:mr-0 max-sm:ml-0 mb-40 overflow-hidden p-4">
    <AnimatedText text={'|About Metaverse'} className={'text-center'} />
      
        <BottomToUp className={'text-gray-400 text-center lg:text-4xl text-2xl'}>
        <span className="text-white font-bold">Metaverse</span> is a new thing in the future, where you can enjoy the virtual
        world by feeling like it's really real, you can feel what you feel in
        this metaverse world, because this is really the <span className="text-white font-bold">madness of the metaverse</span> of today, using only<span className="text-white font-bold">VR</span> devices you can easily explore the
        metaverse world you want, turn your dreams into reality. Let's <span className="text-white font-bold">explore</span> the madness of the metaverse by scrolling down
        <div className="flex justify-center mt-4">
        <Image src={'/arrow.svg'} alt="arrow" className=" rotate-[120deg]" width={20} height={20} />
        </div>
        </BottomToUp>
      
    </section>
  );
}

export default About;
