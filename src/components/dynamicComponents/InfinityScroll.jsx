"use client";

import React,{ useEffect, useState } from "react";
import { DevTools } from "../../shared/utils/Global-Utils";
import Image from "next/image";
import { motion } from "framer-motion";


const InfinityScroll = ({animation}) => {

  const [animate, setAnimate] = useState(animation);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden"
      onMouseEnter={() => {
        document.querySelectorAll('.animate-infinite-scroll' || '.animate-infinite-inverse-scroll').forEach((el) => {
          el.style.animationPlayState = 'paused';
        });
      }}

      onMouseLeave={() => {
        document.querySelectorAll('.animate-infinite-scroll' || '.animate-infinite-inverse-scroll').forEach((el) => {
          el.style.animationPlayState = 'running';
        });
      }}
    >
      <ul className={`infinity flex  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${animate ? 'animate-infinite-scroll': 'animate-infinite-inverse-scroll'}`}>
        {DevTools.map((tool) => (
          <li key={tool.id} className="mx-8 cursor-pointer min-w-52 min-h-14 relative">
            {/* user card */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-start justify-center bg-white rounded-lg shadow-md w-[528px] h-[264px] px-10 my-5" 
            >
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden flex justify-center items-center">
                  <img src={tool.icon} alt={tool.name} className="w-14 h-14 object-cover"/>
                </div>

                <div className="flex flex-col ml-3">
                  <p className="text-sm font-semibold text-gray-800">{tool.name}</p>
                  <p className="text-xs font-normal text-[#00000056]">{tool.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-4">
                <p className="text-sm font-normal text-[#00000056] pr-20">{tool.description}</p>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>

      <ul className={`infinity flex  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${animate ? 'animate-infinite-scroll': 'animate-infinite-inverse-scroll'}`}>
        {DevTools.map((tool) => (
          <li key={tool.id} className="mx-8 cursor-pointer min-w-52 min-h-14 relative">
            {/* user card */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-start justify-center bg-white rounded-lg shadow-md w-[528px] h-[264px] px-10 my-5" 
            >
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden flex justify-center items-center">
                  <img src={tool.icon} alt={tool.name} className="w-14 h-14 object-cover"/>
                </div>

                <div className="flex flex-col ml-3">
                  <p className="text-sm font-semibold text-gray-800">{tool.name}</p>
                  <p className="text-xs font-normal text-[#00000056]">{tool.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-4">
                <p className="text-sm font-normal text-[#00000056] pr-20">{tool.description}</p>
              </div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfinityScroll;
