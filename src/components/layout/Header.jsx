"use client";

import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// icons
import { Menu, X, Phone } from 'lucide-react'

function Header() {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    // mobile menu
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    // display mobile menu
    const mobileMenu = menu ? 'flex' : 'hidden'

    return (
        <header className='w-full flex justify-center fixed z-[10000]'>
            <div className={`w-full px-0`}>
                <nav className={`flex justify-between items-center w-full h-20 px-8 rounded-b-md backdrop-blur-lg transition-all duration-500 ${scroll ? 'bg-[#E6F6FE]' : 'bg-transparent'}`}>
                    <div className='text-2xl font-bold flex items-center'>
                        <span className='text-secondary'>Multiservicios Martínez</span>
                    </div>
                    <ul className='lg:flex gap-8 font-semibold text-base hidden'>
                        <motion.li whileHover={{ scale: 1.1 }} className='text-sm'>
                            <a href='/#'>Inicio</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='text-sm'>
                            <a href='#services'>Servicios</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='text-sm'>
                            <a href='#about'>Nosotros</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.1 }} className='text-sm'>
                            <a href='#contact'>Contacto</a>
                        </motion.li>
                    </ul>

                    <div className='hidden lg:flex items-center gap-4'>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="tel:8095508815"
                            className='flex items-center gap-2 text-primary font-semibold'
                        >
                            <Phone size={18} />
                            <span>809-550-8815</span>
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-primary text-white px-6 py-3 text-sm rounded-xl font-semibold'
                        >
                            Solicitar Cotización
                        </motion.button>
                    </div>

                    {/* mobile menu */}
                    <div className='lg:hidden flex items-center'>
                        <button onClick={handleMenu} className='text-2xl'>
                            {menu ? <X absoluteStrokeWidth /> : <Menu absoluteStrokeWidth />}
                        </button>
                    </div>

                    <ul className={`flex flex-col gap-6 font-semibold text-base ${mobileMenu} lg:hidden absolute top-20 left-0 right-0 ${scroll ? 'bg-[#E6F6FE] shadow-lg' : 'bg-white'} rounded-b-md shadow-lg p-8 transition-all duration-500`}>
                        <motion.li whileHover={{ scale: 1.05 }} className='text-sm py-2' onClick={handleMenu}>
                            <a href='/#'>Inicio</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05 }} className='text-sm py-2' onClick={handleMenu}>
                            <a href='#services'>Servicios</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05 }} className='text-sm py-2' onClick={handleMenu}>
                            <a href='#about'>Nosotros</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05 }} className='text-sm py-2' onClick={handleMenu}>
                            <a href='#contact'>Contacto</a>
                        </motion.li>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="tel:8095508815"
                            className='flex items-center gap-2 text-primary font-semibold py-2'
                            onClick={handleMenu}
                        >
                            <Phone size={18} />
                            <span>809-550-8815</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="tel:8295238815"
                            className='flex items-center gap-2 text-primary font-semibold py-2'
                            onClick={handleMenu}
                        >
                            <Phone size={18} />
                            <span>829-523-8815</span>
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-primary text-white px-6 py-3 text-sm rounded-xl font-semibold mt-2'
                            onClick={handleMenu}
                        >
                            Solicitar Cotización
                        </motion.button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header