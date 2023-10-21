import Image from "next/image";
import React from "react";

function InsightItem({title,content,img}) {
  return (
    <div className="flex items-center justify-center lg:flex-row md:flex-row lg:space-x-16 md:space-x-16 max-sm:flex-col sm:flex-col   sm:space-y-6 max-sm:space-y-6">
      <Image className=" rounded-2xl lg:w-72 lg:h-72 object-cover  max-sm:w-full sm:w-full   sm:max-h-[15rem] max-sm:max-h-[12rem]"
        src={`/${img}`}
        alt={img}
        width={400}
        height={400}
      />
      <div className=" lg:space-y-4 ">
        <h1 className="text-white font-normal lg:text-5xl text-3xl leading-relaxed">
          {title}
        </h1>
        <p className="text-gray-400">
          {content}
        </p>
      </div>
      <div className=" hidden lg:block">
        <div className="p-6 border rounded-full min-h-[6rem] min-w-[6rem] border-white">
          <Image src={"/arrow.svg"} alt="arrow" className=" w-full h-full" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

export default InsightItem;
