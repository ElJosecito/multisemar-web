"use client";

import React, { useEffect, useState } from "react";
import { DevTools } from "../../shared/utils/Global-Utils";
import { motion } from "framer-motion";
import { User, Building2, HardHat, Star } from "lucide-react";

// Función para obtener el icono según el tipo
const getIconByType = (type) => {
  switch(type) {
    case 'individual':
      return User;
    case 'empresa':
      return Building2;
    case 'constructora':
      return HardHat;
    default:
      return User;
  }
};

// Función para obtener el color según el tipo
const getColorByType = (type) => {
  switch(type) {
    case 'individual':
      return 'text-blue-600 bg-blue-100';
    case 'empresa':
      return 'text-green-600 bg-green-100';
    case 'constructora':
      return 'text-orange-600 bg-orange-100';
    default:
      return 'text-blue-600 bg-blue-100';
  }
};

const InfinityScroll = ({ animation }) => {
  const [animate, setAnimate] = useState(animation);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden"
      onMouseEnter={() => {
        document.querySelectorAll('.animate-infinite-scroll, .animate-infinite-inverse-scroll').forEach((el) => {
          el.style.animationPlayState = 'paused';
        });
      }}
      onMouseLeave={() => {
        document.querySelectorAll('.animate-infinite-scroll, .animate-infinite-inverse-scroll').forEach((el) => {
          el.style.animationPlayState = 'running';
        });
      }}
    >
      <ul className={`infinity flex justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${animate ? 'animate-infinite-scroll': 'animate-infinite-inverse-scroll'}`}>
        {DevTools.map((testimonial) => {
          const IconComponent = getIconByType(testimonial.type);
          const colorClasses = getColorByType(testimonial.type);
          
          return (
            <li key={testimonial.id} className="mx-8 cursor-pointer min-w-52 min-h-14 relative">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-start justify-center bg-white rounded-2xl w-[520px] h-[280px] px-8 py-6 my-5 border-2 border-gray-100 hover:border-primary/20 transition-all duration-300" 
              >
                {/* Header con icono y nombre */}
                <div className="flex items-center w-full mb-4">
                  <div className={`w-14 h-14 rounded-full flex justify-center items-center ${colorClasses}`}>
                    <IconComponent size={24} />
                  </div>
                  
                  <div className="flex flex-col ml-4 flex-1">
                    <p className="text-lg font-bold text-gray-800 truncate">{testimonial.name}</p>
                    <p className="text-sm font-medium text-gray-500">{testimonial.email}</p>
                  </div>
                  
                  {/* Estrellas de rating */}
                  <div className="flex ml-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial text */}
                <div className="flex-1 w-full">
                  <p className="text-sm leading-relaxed text-gray-700 line-clamp-6">
                    "{testimonial.description}"
                  </p>
                </div>
                
                {/* Badge del tipo de cliente */}
                <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClasses}`}>
                    <IconComponent size={12} className="mr-1" />
                    {testimonial.type === 'individual' ? 'Cliente Particular' : 
                     testimonial.type === 'empresa' ? 'Empresa' : 'Constructora'}
                  </span>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>

      {/* Segunda fila para el efecto infinito */}
      <ul className={`infinity flex justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${animate ? 'animate-infinite-scroll': 'animate-infinite-inverse-scroll'}`}>
        {DevTools.map((testimonial) => {
          const IconComponent = getIconByType(testimonial.type);
          const colorClasses = getColorByType(testimonial.type);
          
          return (
            <li key={`${testimonial.id}-2`} className="mx-8 cursor-pointer min-w-52 min-h-14 relative">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-start justify-center bg-white rounded-2xl w-[520px] h-[280px] px-8 py-6 my-5 border-2 border-gray-100 hover:border-primary/20 transition-all duration-300" 
              >
                {/* Header con icono y nombre */}
                <div className="flex items-center w-full mb-4">
                  <div className={`w-14 h-14 rounded-full flex justify-center items-center ${colorClasses}`}>
                    <IconComponent size={24} />
                  </div>
                  
                  <div className="flex flex-col ml-4 flex-1">
                    <p className="text-lg font-bold text-gray-800 truncate">{testimonial.name}</p>
                    <p className="text-sm font-medium text-gray-500">{testimonial.email}</p>
                  </div>
                  
                  {/* Estrellas de rating */}
                  <div className="flex ml-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial text */}
                <div className="flex-1 w-full">
                  <p className="text-sm leading-relaxed text-gray-700 line-clamp-6">
                    "{testimonial.description}"
                  </p>
                </div>
                
                {/* Badge del tipo de cliente */}
                <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClasses}`}>
                    <IconComponent size={12} className="mr-1" />
                    {testimonial.type === 'individual' ? 'Cliente Particular' : 
                     testimonial.type === 'empresa' ? 'Empresa' : 'Constructora'}
                  </span>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InfinityScroll;