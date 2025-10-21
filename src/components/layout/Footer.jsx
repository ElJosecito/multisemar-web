"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, LinkedinIcon, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/public/images/Logo_Multisemar.svg'

function Footer() {
    return (
        <footer className='w-full flex flex-col items-center bottom-0 bg-white text-gray-800'>
            <div className='max-w-screen-2xl w-full pt-8 px-4 md:px-8'>
                {/* Main footer content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-200'>
                    {/* Company info */}
                    <div className='flex flex-col gap-4'>
                        <div className='mb-2'>
                            <a href='/' aria-label='Inicio'>
                                <Image 
                                    src={Logo}
                                    alt="Logo Multiservicios Martínez" 
                                    width={180} 
                                    height={60}
                                    className='object-contain'
                                />
                            </a>
                        </div>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            Más de 25 años brindando servicios especializados en electromecánica 
                            e infraestructuras civil e industrial. Comprometidos con la calidad 
                            y el medio ambiente desde 1996.
                        </p>
                        <div className='flex gap-4 mt-4'>
                            <motion.a 
                                whileHover={{ scale: 1.2, y: -2 }}
                                href="#" 
                                className='flex justify-center items-center h-10 w-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
                                aria-label='Facebook'
                            >
                                <Facebook className='text-primary' size={18} />
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.2, y: -2 }}
                                href="#" 
                                className='flex justify-center items-center h-10 w-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
                                aria-label='Instagram'
                            >
                                <Instagram className='text-primary' size={18} />
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.2, y: -2 }}
                                href="#" 
                                className='flex justify-center items-center h-10 w-10 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors'
                                aria-label='LinkedIn'
                            >
                                <LinkedinIcon className='text-primary' size={18} />
                            </motion.a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-lg font-semibold mb-2'>Nuestros Servicios</h3>
                        <ul className='space-y-3'>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#services" className='text-gray-600 hover:text-primary text-sm transition-colors'>Infraestructura Civil</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#services" className='text-gray-600 hover:text-primary text-sm transition-colors'>Ingeniería Electromecánica</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#services" className='text-gray-600 hover:text-primary text-sm transition-colors'>Servicios Industriales</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#services" className='text-gray-600 hover:text-primary text-sm transition-colors'>Alquiler de Grúas</a>
                            </motion.li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-lg font-semibold mb-2'>Enlaces Rápidos</h3>
                        <ul className='space-y-3'>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#" className='text-gray-600 hover:text-primary text-sm transition-colors'>Inicio</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#services" className='text-gray-600 hover:text-primary text-sm transition-colors'>Servicios</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#about" className='text-gray-600 hover:text-primary text-sm transition-colors'>Nosotros</a>
                            </motion.li>
                            <motion.li whileHover={{ x: 5 }}>
                                <a href="#contact" className='text-gray-600 hover:text-primary text-sm transition-colors'>Contacto</a>
                            </motion.li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-lg font-semibold mb-2'>Contacto</h3>
                        <div className='space-y-3'>
                            <motion.div whileHover={{ x: 5 }} className='flex items-center gap-3'>
                                <MapPin className='text-primary' size={18} />
                                <span className='text-gray-600 text-sm'>República Dominicana</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className='flex items-center gap-3'>
                                <Phone className='text-primary' size={18} />
                                <span className='text-gray-600 text-sm'>Tel: 809-550-8815</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className='flex items-center gap-3'>
                                <Phone className='text-primary' size={18} />
                                <span className='text-gray-600 text-sm'>Cel: 829-523-8815</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className='flex items-center gap-3'>
                                <Mail className='text-primary' size={18} />
                                <span className='text-gray-600 text-sm'>multiserviciosmartinez@hotmail.com</span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className='w-full py-6 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-600 text-sm text-center md:text-left'>
                        © {new Date().getFullYear()} Multiservicios Martínez. Todos los derechos reservados.
                    </p>
                    <div className='flex gap-6 text-sm text-gray-600'>
                        <motion.a whileHover={{ scale: 1.05 }} href="#" className='hover:text-primary transition-colors'>
                            Términos y Condiciones
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} href="#" className='hover:text-primary transition-colors'>
                            Política de Privacidad
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer