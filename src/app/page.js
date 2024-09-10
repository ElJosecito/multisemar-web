"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

import { Phone, UserRound, UsersRound, Building2 } from 'lucide-react';

//images
import hero from "@/public/images/principal.jpg";
import hero2 from "@/public/images/principal2.jpg";
import claro from "@/public/images/claro.png";

//components
import InfinityScroll from "@/components/dynamicComponents/InfinityScroll";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center py-2 pt-20">
        <div className="max-w-screen-2xl w-full flex">
          <div className="flex flex-col w-3/5 pt-32">
            {/*  */}
            <h1 className="text-7xl font-normal text-secondary">
              Empowering Excellence through Training and Consulting
            </h1>
            {/*  */}
            <p className="text-sm mt-8 text-[#00000056] pr-20 max-w-screen-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {/*  */}
            <div className='flex mt-7'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-primary text-white rounded-xl p-4 font-semibold'>Book an Appointment</motion.button>
              <div className='flex items-center md:ml-8 ml-2'>
                <div className='border-2 rounded-xl p-1 border-primary'>
                  <div className='bg-gradient-to-b from-[#1f67f642] to-transparent text-primary rounded-lg w-9 h-9 md:w-12 md:h-12 flex justify-center items-center'>
                    {/* <FaPhoneVolume className='text-xl md:text-2xl' /> */}
                    <Phone className='text-xl md:text-2xl' />
                  </div>
                </div>
                <div className='ml-2 md:ml-4 w-full'>
                  <p className='text-secondary font-semibold text-sm'>Llamanos Ahora</p>
                  <p className='text-primary font-bold text-sm'>+1 123 456 7890</p>
                </div>
              </div>
            </div>
            {/*  */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              className="outline outline-1 outline-primary rounded-xl p-4 px-10 font-semibold mt-16 h-20 flex justify-between items-center max-w-screen-sm">
              {/*  */}
              <div className="flex items-end text-[#00000056]">
                <UserRound className="" />
                <p className='ml-2 self-end leading-none '>Personas</p>
              </div>
              {/*  */}
              <div className="flex items-end text-[#00000056]">
                <UsersRound />
                <p className='ml-2 self-end leading-none '>Empresas</p>
              </div>
              {/*  */}
              <div className="flex items-end text-[#00000056]">
                <Building2 />
                <p className='ml-2 self-end leading-none '>Compañias</p>
              </div>
            </motion.div>
          </div>

          <div className="w-2/5 pt-32">
            <Image
              src={hero}
              alt="Hero"
              className="object-cover max-h-[350px] rounded-lg"
              layout="responsive"
              placeholder="blur"
            />

            <Image
              src={hero2}
              alt="Hero"
              className="object-cover max-h-[177px] rounded-lg mt-5"
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="flex flex-col items-center">
        <div className="max-w-screen-2xl w-full">
          <div className='my-20 py-5 flex justify-between overflow-hidden px-36'>

            <div className="grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100">
              <Image src={claro} alt="Claro" width={177} />
            </div>
            {/*  */}
            <div className=" grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100">
              <Image src={claro} alt="Claro" width={177} />
            </div>
            {/*  */}
            <div className="grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100">
              <Image src={claro} alt="Claro" width={177} />
            </div>
            {/*  */}
            <div className="grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100">
              <Image src={claro} alt="Claro" width={177} />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="flex flex-col items-center min-h-screen bg-primary">
        <div className="max-w-screen-2xl w-full">
        </div>
      </section>


      <Footer />
    </>
  );
}
