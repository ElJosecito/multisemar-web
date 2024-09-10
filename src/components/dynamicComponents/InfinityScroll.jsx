"use client";

import React from "react";
import { DevTools } from "../../shared/utils/Global-Utils";
import Image from "next/image";


const InfinityScroll = () => {

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden"
      onMouseEnter={()=>{
        document.querySelectorAll('.animate-infinite-scroll').forEach((el) => {
          el.style.animationPlayState = 'paused';
        });
      }}

      onMouseLeave={()=>{
        document.querySelectorAll('.animate-infinite-scroll').forEach((el) => {
          el.style.animationPlayState = 'running';
        });
      }}
    >
      <ul className={`infinity flex  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll`}>
        {DevTools.map((tool) => (
          <li key={tool.id} className="mx-8 cursor-pointer min-w-52 min-h-14 relative">
            <Image
              className={`grayscale object-fill hover:grayscale-0 relative`}
              src={tool.icon}
              alt={tool.name}
              title={tool.name}
              layout="fill"
            />
          </li>
        ))}
      </ul>

      <ul className={`infinity flex  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll`}>
        {DevTools.map((tool) => (
          <li key={tool.id} className="mx-8 cursor-pointer min-w-52 min-h-14 relative">
            <Image
              className={` grayscale object-fill hover:grayscale-0 `}
              src={tool.icon}
              alt={tool.name}
              title={tool.name}
              layout="fill"
              
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfinityScroll;
