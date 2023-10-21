"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="   mb-60  min-h-[60rem] overflow-hidden    relative">
      <div className=" z-10 relative text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="  lg:text-9xl md:text-9xl sm:text-6xl max-sm:text-6xl font-bold text-white"
        >
          METAVERSE
        </motion.h1>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex  lg:text-9xl md:text-9xl  sm:text-6xl max-sm:text-6xl font-bold justify-center text-white"
        >
          MA{" "}
          <div className=" lg:min-w-[12rem] min-w-[8rem] h-contain  border-white border-[15px] rounded-r-full "></div>
          NESS
        </motion.h1>
      </div>
      <motion.div
        className="absolute top-16 right-0 w-full max-h-[20rem]  lg:max-h-[20rem]  "
        initial={{ x: 500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"/cover.png"}
          className=" w-full h-full  rounded-tl-[200px]"
          width={1000}
          height={1000}
          alt="cover"
        />
        <motion.div
          className="absolute bottom-0 cursor-pointer right-3 w-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeatDelay: 0, repeat: Infinity }}
        >
          <Image
            src={"/stamp.png"}
            className=" w-full"
            alt="stamp"
            width={200}
            height={200}
          ></Image>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
