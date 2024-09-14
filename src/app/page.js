"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

//images
import hero from "@/public/images/principal.jpg";
import hero2 from "@/public/images/principal2.jpg";
import claro from "@/public/images/claro.png";

//components
import InfinityScroll from "@/components/dynamicComponents/InfinityScroll";

//icons 
import { Droplets, Star, ThumbsUp, ShieldCheck, Phone, UserRound, UsersRound, Building2, MapPinned, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center py-2 pt-20" >
        <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row px-3">
          <div className="flex flex-col items-center lg:items-start lg:w-3/5 pt-32 text-center lg:text-start">
            {/*  */}
            <h1 className="lg:text-7xl text-5xl font-normal text-secondary">
              Empowering Excellence through Training and Consulting
            </h1>
            {/*  */}
            <p className="lg:text-sm text-xs mt-8 text-[#00000056] md:pr-20 max-w-screen-sm px-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            {/*  */}
            <div className='flex flex-col md:flex-row items-start mt-7 gap-6 w-full'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='bg-primary text-white rounded-xl p-4 font-semibold '>Book an Appointment
              </motion.button>
              <div className='flex items-center md:ml-8'>
                <div className='border-2 rounded-xl p-1 border-primary'>
                  <div className='bg-gradient-to-b from-[#1f67f642] to-transparent text-primary rounded-lg w-9 h-9 md:w-12 md:h-12 flex justify-center items-center'>

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
              className="outline outline-1 outline-primary rounded-xl p-4 md:px-10 font-semibold mt-16 h-20 md:flex justify-between items-center max-w-screen-sm hidden w-fit">
              {/*  */}
              <div className="flex items-end text-[#00000056] mx-3">
                <UserRound className="" />
                <p className='ml-2 self-end leading-none '>Personas</p>
              </div>
              {/*  */}
              <div className="flex items-end text-[#00000056] mx-3">
                <UsersRound />
                <p className='ml-2 self-end leading-none '>Empresas</p>
              </div>
              {/*  */}
              <div className="flex items-end text-[#00000056] mx-3">
                <Building2 />
                <p className='ml-2 self-end leading-none '>Compañias</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/5 lg:pt-32 pt-16">
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
          <div className='my-20 flex justify-center gap-4 md:justify-between overflow-hidden md:px-36 flex-wrap px-2'>

            <div className="grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100 mt-5">
              <Image src={claro} alt="Claro" width={177} />
            </div>
            {/*  */}
            <div className=" grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100 mt-5">
              <Image src={claro} alt="Claro" width={177} />
            </div>
            {/*  */}
            <div className="grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100 mt-5">
              <Image src={claro} alt="Claro" width={177} />
            </div>
            {/*  */}
            <div className="grayscale hover:grayscale-0 cursor-pointer opacity-40 hover:opacity-100 mt-5">
              <Image src={claro} alt="Claro" width={177} />
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="flex flex-col items-center min-h-screen bg-primary mb-12 relative" id="services">
        <motion.h2
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-sm font-normal text-white mt-20 outline outline-back_white outline-1 px-4 py-[2px] rounded-full bg-[#ffffff33] cursor-pointer">Services</motion.h2>
        <h2 className="md:text-5xl text-3xl font-medium text-white mt-5 text-center">Explore our comprehensive range of professional services</h2>

        <div className="max-w-screen-2xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 mt-16">
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
          <div className=" p-8 text-back_white text-center flex flex-col justify-center items-center">
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
          {/*  */}
          <div className=" p-8 text-back_white text-center flex flex-col justify-center items-center" >
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
          {/*  */}
          <div className="   p-8 text-back_white text-center flex flex-col justify-center items-center">
            <Droplets className="size-16" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Plumbing</h3>
            <p className="text-back_white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing.</p>
          </div>
        </div>

        <div className="max-w-screen-2xl w-full mt-20 grid lg:grid-cols-3 grid-rows-1 gap-8 lg:absolute -bottom-28 px-4 pb-8">
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="bg-darkblue p-8 text-back_white text-center flex flex-col justify-center items-start rounded-lg">
            <Star className="size-10" />
            <h3 className="text-white mt-4 text-2xl font-semibold tracking-[2%]">Affordable Rates</h3>
          </motion.div>
          {/*  */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="bg-darkblue p-8 text-back_white text-center flex flex-col justify-center items-start rounded-lg">
            <ThumbsUp className="size-10" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Reliable Services</h3>
          </motion.div>
          {/*  */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="bg-darkblue p-8 text-back_white text-center flex flex-col justify-center items-start rounded-lg">
            <ShieldCheck className="size-10" />
            <h3 className="text-white mt-4 text-2xl font-semibold">Professional Expertise</h3>
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col items-center" id="about">
        <div className="max-w-screen-2xl w-full flex flex-col md:flex-row text-center items-center md:text-start md:pb-32 md:pt-40">
          <div className="md:w-3/5 md:pl-16">
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-medium text-secondary md:mt-20 leading-snug">Proving Excellente Through Training and Consulting</h2>
            {/*  */}
            <p className="text-xs md:text-sm px-3 mt-8 text-[#00000056] md:pr-20 max-w-screen-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          {/*  */}
          <div className="md:w-2/5 self-center ">
            <div className="color-primary rounded-lg flex flex-col items-center">

              <div className="text-center">
                <h3 className="text-6xl font-extrabold text-darkblue">125+</h3>
                <p className="text-[#00000056] text-base mt-2">Countries Serve by Multisemar</p>
              </div>
              <div className=" text-center">
                <h3 className="text-6xl font-extrabold text-darkblue mt-2">20+</h3>
                <p className="text-[#00000056] text-base">Years at working field</p>


              </div>
              <div className="w-full flex justify-center">
                <div className="text-center">
                  <h3 className="text-6xl font-extrabold text-darkblue mt-2">15k+</h3>
                  <p className="text-[#00000056] text-base">client Engagement per Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section className="flex flex-col items-center pt-10  pb-20 bg-[#F5F8FF]">
        <div className="max-w-screen-2xl w-full">
          <div className="w-full flex flex-col justify-between items-center mb-10">
            <h2 className="md:text-6xl text-5xl font-semibold text-secondary mt-20 text-center">Testimonials And Feedback</h2>
            <p className="text-[#00000056] text-center mt-4 max-w-screen-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
          </div>

          <div className="relative">
            <div className='absolute left-0 w-32 h-full bg-gradient-to-r from-[#F5F8FF] to-transparent z-[1]'></div>
            <div className='absolute right-0 w-32 h-full bg-gradient-to-l from-[#F5F8FF] to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
            <InfinityScroll animation={true} />
            <InfinityScroll animation={false} />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="flex flex-col items-center bg-darkblue">
        <div className="max-w-screen-2xl w-full py-20 flex flex-col items-center">
          <h2 className="md:text-7xl text-5xl font-bold text-back_white text-center leading-normal">Ready to get our <br /> Services</h2>
          <p className="text-[#ffffff56] text-center mt-1 max-w-screen-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white rounded-xl p-4 px-8 font-semibold mt-8">Book an Appointment
          </motion.button>

        </div>
      </section>

      {/*  */}
      <section className="flex flex-col items-center my-20" id="contact">
        <div className="max-w-screen-2xl w-full flex flex-col items-start pl-4 md:pl-0">
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm font-normal text-secondary mt-20 outline outline-secondary outline-1 px-4 py-[2px] rounded-full bg-[#ffffff33] cursor-pointer itemd-self-start">Services</motion.h2>
          <h2 className="md:text-6xl text-5xl font-bold text-secondary text-center leading-normal self-start mt-10">Contact Form</h2>
        </div>

        <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row">
          {/* Contact form */}
          <div className="flex flex-col justify-between items-center mt-10 lg:w-1/2 lg:pr-10">
            <form className="flex flex-col items-start w-full bg-[#0000000d] px-6 py-14 rounded-xl">
              <div className="flex flex-col lg:flex-row w-full gap-4 ">
                <div className="flex flex-col w-full">
                  <label className="text-secondary text-lg font-semibold" htmlFor="name">Name</label>
                  <input className="w-full bg-back_white rounded-lg p-4 mt-2 transition duration-300 ease focus:outline-none focus:ring-1 focus:border-primary hover:border-primary shadow-sm focus:shadow" type="text" id="name" name="name" />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-secondary text-lg font-semibold " htmlFor="email">Email</label>
                  <input className="w-full bg-back_white rounded-lg p-4 mt-2 transition duration-300 ease focus:outline-none focus:ring-1 focus:border-primary hover:border-primary shadow-sm focus:shadow" type="email" id="email" name="email" />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full mt-5 gap-4">
                <div className="flex flex-col w-full">
                  <label className="text-secondary text-lg font-semibold" htmlFor="phone">Phone</label>
                  <input className="w-full bg-back_white rounded-lg p-4 mt-2 transition duration-300 ease focus:outline-none focus:ring-1 focus:border-primary hover:border-primary shadow-sm focus:shadow" type="tel" id="phone" name="phone" />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-secondary text-lg font-semibold" htmlFor="company">Company</label>
                  <input className="w-full bg-back_white rounded-lg p-4 mt-2 transition duration-300 ease focus:outline-none focus:ring-1 focus:border-primary hover:border-primary shadow-sm focus:shadow" type="company" id="company" name="company" />
                </div>
              </div>
              <div className="flex flex-col w-full mt-5">
                <label className="text-secondary text-lg font-semibold" htmlFor="message">Message</label>
                <textarea className="w-full bg-back_white rounded-lg p-4 mt-2 transition duration-300 ease focus:outline-none focus:ring-1 focus:border-primary hover:border-primary shadow-sm focus:shadow" id="message" name="message" rows="4"></textarea>
              </div>
              <button className="bg-primary text-white rounded-xl p-4 px-8 font-semibold mt-8 focus:outline-primary">Send Message</button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-between items-start mt-10 lg:w-1/2 lg:px-10 px-5 gap-8">
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="cursor-pointer text-primary text-center flex flex-col justify-center items-start outline outline-1 outline-primary rounded-xl p-8 w-full">
              <MapPinned className="size-10" />

              <h3 className="text-[#00000056] mt-4 text-2xl font-normal">952 Bald Hill St,  Asheville NC 28803</h3>
            </motion.div>
            {/*  */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="cursor-pointer text-primary text-center flex flex-col justify-center items-start outline outline-1 outline-primary rounded-xl p-8 w-full">
              <Phone className="size-10" />
              <h3 className="text-[#00000056] mt-4 text-2xl font-normal"> +1 (809) -123-1234</h3>
            </motion.div>
            {/*  */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="cursor-pointer text-primary text-center flex flex-col justify-center items-start outline outline-1 outline-primary rounded-xl p-8 w-full">
              <Mail className="size-10" />
              <h3 className="text-[#00000056] mt-4 text-2xl font-normal">jondoe@example.com</h3>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
