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

//icons 
import { Droplets, Star, ThumbsUp, ShieldCheck } from 'lucide-react';

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
      <section className="flex flex-col items-center min-h-screen bg-primary mb-12 relative">
        <motion.h2
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-sm font-normal text-white mt-20 outline outline-back_white outline-1 px-4 py-[2px] rounded-full bg-[#ffffff33] cursor-pointer">Services</motion.h2>
        <h2 className="text-5xl font-medium text-white mt-5 text-center">Explore our comprehensive range <br /> of professional services</h2>

        <div className="max-w-screen-2xl w-full grid grid-cols-3 grid-rows-2 gap-4 mt-16">
          <div className=" p-8 text-back_white text-center flex flex-col justify-center items-center">
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
          {/*  */}
          <div className="  p-8 text-back_white text-center flex flex-col justify-center items-center">
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
          {/*  */}
          <div className=" p-8 text-back_white text-center flex flex-col justify-center items-center">
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
          {/*  */}
          <div className="col-start-3 row-start-2  p-8 text-back_white text-center flex flex-col justify-center items-center">
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
          <div className="col-start-2 row-start-2  p-8 text-back_white text-center flex flex-col justify-center items-center" >
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
          <div className="col-start-1 row-start-2  p-8 text-back_white text-center flex flex-col justify-center items-center">
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
        </div>

        <div className="max-w-screen-2xl w-full mt-20 grid grid-cols-3 grid-rows-1 gap-8 absolute -bottom-16">
          <div className="bg-darkblue p-8 text-back_white text-center flex flex-col justify-center items-start rounded-lg">
            <Star className="size-10" />
            <h3 className="text-white mt-4 text-2xl font-semibold tracking-[2%]">Affordable Rates</h3>
          </div>
          {/*  */}
          <div className="bg-darkblue p-8 text-back_white text-center flex flex-col justify-center items-start rounded-lg">
            <ThumbsUp className="size-10" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Reliable Services</h3>
          </div>
          {/*  */}
          <div className="bg-darkblue p-8 text-back_white text-center flex flex-col justify-center items-start rounded-lg">
            <ShieldCheck className="size-10" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Professional Expertise</h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className="max-w-screen-2xl w-full flex items-center pb-32 pt-40">
          <div className="w-3/5 pl-16">
            <h2 className="text-6xl font-medium text-secondary mt-20 leading-snug">Proving Excellente Through Training and Consulting</h2>
            {/*  */}
            <p className="text-sm mt-8 text-[#00000056] pr-20 max-w-screen-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          {/*  */}
          <div className="w-2/5 self-end">
            <div className="color-primary rounded-lg flex flex-col items-center">
              <div className="p-8  w-full flex justify-between px-14">
                <div className=" w-44 text-center">
                  <h3 className="text-6xl font-extrabold text-darkblue">125+</h3>
                  <p className="text-[#00000056] text-base mt-2">Countries Serve by Multisemar</p>
                </div>
                <div className=" w-44 text-center">
                  <h3 className="text-6xl font-extrabold text-darkblue mt-2">20+</h3>
                  <p className="text-[#00000056] text-base">Years at working field</p>
                </div>

              </div>
              <div className=" w-full flex justify-center">
                <div className=" w-44 text-center">
                  <h3 className="text-6xl font-extrabold text-darkblue mt-2">15k+</h3>
                  <p className="text-[#00000056] text-base">client Engagement per Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="flex flex-col items-center mt-20">
        <div className="max-w-screen-2xl w-full">
          <div className="w-full flex flex-col justify-between items-center mb-10">
            <h2 className="text-6xl font-semibold text-secondary mt-20 text-center">Testimonials And Feedback</h2>
            <p className="text-[#00000056] text-center mt-4 max-w-screen-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
          </div>

          <div className="relative">
            <div className='absolute left-0 w-32 h-full bg-gradient-to-r from-back_white to-transparent z-[1]'></div>
            <div className='absolute right-0 w-32 h-full bg-gradient-to-l from-back_white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
            <InfinityScroll animation={true} />
            <InfinityScroll animation={false} />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="flex flex-col items-center mt-20 bg-darkblue">
        <div className="max-w-screen-2xl w-full py-20 flex flex-col items-center">
          <h2 className="text-7xl font-bold text-back_white text-center leading-normal">Ready to get our <br /> Services</h2>
          <p className="text-[#ffffff56] text-center mt-1 max-w-screen-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white rounded-xl p-4 px-8 font-semibold mt-8">Book an Appointment
          </motion.button>

        </div>
      </section>

      <Footer />
    </>
  );
}
