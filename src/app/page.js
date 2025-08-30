"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  // Icons for services
  Users,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Briefcase,
  // Original icons
  Star,
  ThumbsUp,
  ShieldCheck,
  Phone,
  UserRound,
  UsersRound,
  Building2,
  MapPinned,
  Mail,
  ArrowRight,
  Play,
  Wrench,
  Truck,
  Cog,
  Zap,
  HardHat,
  Tool
} from 'lucide-react';

//images
import hero from "@/public/images/principal.jpg";
import hero2 from "@/public/images/principal2.jpg";
import claro from "@/public/images/claro.png";

//components
import InfinityScroll from "@/components/dynamicComponents/InfinityScroll";

// Icon Renderer Component
function IconRenderer({ iconName, className = "size-16", ...props }) {
  const iconMap = {
    Users,
    Target,
    TrendingUp,
    Award,
    BookOpen,
    Briefcase,
    Wrench,
    Truck,
    Cog,
    Zap,
    HardHat,
    Tool
  };

  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return <div className={className} />; // Fallback
  }
  
  return <IconComponent className={className} {...props} />;
}

// Services Data
const servicesData = [
  {
    id: 1,
    icon: "Truck",
    title: "Servicios de Grúas",
    description: "Servicios profesionales de grúas las 24 horas para transporte pesado, rescate vehicular y apoyo en obras de construcción."
  },
  {
    id: 2,
    icon: "Wrench",
    title: "Mantenimiento Electromecánico",
    description: "Soluciones integrales en electromecánica para vehículos, maquinaria industrial y equipos especializados."
  },
  {
    id: 3,
    icon: "Zap",
    title: "Instalaciones Eléctricas",
    description: "Diseño, instalación y mantenimiento de sistemas eléctricos residenciales, comerciales e industriales."
  },
  {
    id: 4,
    icon: "Cog",
    title: "Ingeniería y Consultoría",
    description: "Asesoría técnica especializada, planificación de proyectos y soluciones de ingeniería personalizadas."
  },
  {
    id: 5,
    icon: "HardHat",
    title: "Servicios de Construcción",
    description: "Ejecución de obras civiles, remodelaciones y construcciones con los más altos estándares de calidad."
  },
  {
    id: 6,
    icon: "Tool",
    title: "Mantenimiento General",
    description: "Servicios de mantenimiento preventivo y correctivo para todo tipo de equipos e instalaciones."
  }
];

export default function Home() {
  return (
    <>
      <Header />
{/* HERO SECTION - Enhanced */}
<section className="flex flex-col items-center py-2 bg-white">
  <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row px-6 lg:px-12">
    <div className="flex flex-col items-center lg:items-start lg:w-3/5 pt-20 lg:pt-32 text-center lg:text-start">
      {/* Main Title - Enhanced */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:text-6xl md:text-5xl text-4xl font-bold text-secondary leading-[1.1] tracking-tight"
      >
        Multisemar: Soluciones Integrales en 
        <span className="text-primary mt-2 "> Multiservicios</span>
      </motion.h1>
      
      {/* Description - Enhanced */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base mt-6 lg:mt-8 text-gray-600 lg:pr-20 max-w-2xl leading-relaxed"
      >
        Más de 20 años brindando servicios especializados en grúas, electromecánica, 
        instalaciones eléctricas y construcción. Confiabilidad y excelencia en cada proyecto.
      </motion.p>
      
      {/* CTA Buttons - Enhanced */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='flex flex-col md:flex-row items-center justify-center lg:justify-start mt-8 lg:mt-10 gap-6 w-full'
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className='bg-primary text-white rounded-2xl px-6 py-3 md:px-8 md:py-4 font-bold text-base md:text-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center gap-2'
        >
          Solicitar Cotización
          <ArrowRight className="size-4 md:size-5" />
        </motion.button>
        
        <div className='flex items-center md:ml-4 lg:ml-8'>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className='border-2 rounded-2xl p-2 border-primary hover:bg-primary/5 transition-colors duration-300'
          >
            <div className='bg-primary/10 text-primary rounded-xl w-10 h-10 md:w-12 md:h-12 flex justify-center items-center'>
              <Phone className='text-xl md:text-2xl' />
            </div>
          </motion.div>
          <div className='ml-3 md:ml-4'>
            <p className='text-secondary font-bold text-xs md:text-sm uppercase tracking-wide'>Llámenos Ahora</p>
            <p className='text-primary font-bold text-base md:text-lg'>+1 (809) 556-7890</p>
          </div>
        </div>
      </motion.div>
      
      {/* Categories - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ y: -3 }}
        className="border-2 border-primary rounded-2xl p-4 md:p-6 font-semibold mt-12 lg:mt-16 md:flex justify-between items-center max-w-2xl hidden w-full hover:bg-primary/5 transition-all duration-300"
      >
        <div className="flex items-center text-secondary mx-2 md:mx-4 hover:text-primary transition-colors duration-300">
          <UserRound className="size-5 md:size-6" />
          <p className='ml-2 md:ml-3 font-bold text-sm md:text-base'>Particulares</p>
        </div>
        <div className="w-px h-6 md:h-8 bg-primary/20"></div>
        <div className="flex items-center text-secondary mx-2 md:mx-4 hover:text-primary transition-colors duration-300">
          <UsersRound className="size-5 md:size-6" />
          <p className='ml-2 md:ml-3 font-bold text-sm md:text-base'>Empresas</p>
        </div>
        <div className="w-px h-6 md:h-8 bg-primary/20"></div>
        <div className="flex items-center text-secondary mx-2 md:mx-4 hover:text-primary transition-colors duration-300">
          <Building2 className="size-5 md:size-6" />
          <p className='ml-2 md:ml-3 font-bold text-sm md:text-base'>Constructoras</p>
        </div>
      </motion.div>
    </div>

    {/* Hero Images - Enhanced */}
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:w-2/5 lg:pt-32 pt-12"
    >
      <div className="relative">
        <Image
          src={hero}
          alt="Servicios de Grúas y Electromecánica"
          className="object-cover w-full h-auto rounded-3xl border-4 border-white"
          layout="responsive"
          placeholder="blur"
        />
      </div>

      {/* Segunda imagen con tamaño original */}
      <Image
        src={hero2}
        alt="Servicios de Construcción y Mantenimiento"
        className="object-cover max-h-[200px] rounded-3xl mt-8 border-4 border-white"
        layout="responsive"
        placeholder="blur"
      />
    </motion.div>
  </div>
</section>

{/* COMPANIES SECTION - Enhanced */}
<section className="flex flex-col items-center py-20 bg-gray-50">
  <div className="max-w-screen-2xl w-full px-4">
    <motion.h3 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center text-secondary font-bold text-xl mb-12 uppercase tracking-wide"
    >
      Empresas que Confían en Nosotros
    </motion.h3>
    
    {/* Container with horizontal scroll for mobile */}
    <div className="relative">
      {/* Scrollable container - hidden on desktop */}
      <div className="flex overflow-x-auto pb-6 hide-scrollbar md:hidden">
        <div className="flex gap-8 min-w-max px-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 grayscale hover:grayscale-0 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 rounded-2xl p-4"
            >
              <Image src={claro} alt="Cliente" width={120} />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Desktop layout - centered without scroll */}
      <div className="hidden md:flex justify-center gap-8 px-6">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="grayscale hover:grayscale-0 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 rounded-2xl p-4"
          >
            <Image src={claro} alt="Cliente" width={150} />
          </motion.div>
        ))}
      </div>
      
      {/* Gradient fade effects for mobile */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-50 to-transparent md:hidden"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50 to-transparent md:hidden"></div>
    </div>
    
    {/* Mobile indicator */}
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center text-gray-500 mt-4 text-sm md:hidden"
    >
      Desliza para ver más ›
    </motion.p>
  </div>

  <style jsx>{`
    .hide-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;  /* Chrome, Safari and Opera */
    }
  `}</style>
</section>

{/* SERVICES SECTION - Enhanced */}
<section className="flex flex-col items-center min-h-screen bg-primary relative overflow-visible pb-32" id="services">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
    <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
    <div className="absolute bottom-32 left-1/3 w-28 h-28 border border-white rounded-full"></div>
  </div>
  
  <div className="relative z-10 w-full max-w-screen-2xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mt-20 mb-16"
    >
      <motion.h2
        whileHover={{ scale: 1.05 }}
        className="inline-block text-sm font-bold text-white border-2 border-white px-8 py-4 rounded-full bg-white/10 cursor-pointer uppercase tracking-wide"
      >
        Nuestros Servicios
      </motion.h2>
      <h2 className="md:text-6xl text-4xl font-bold text-white mt-8 leading-tight max-w-4xl mx-auto">
        Soluciones Integrales para Todas sus Necesidades
      </h2>
    </motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-12">
      {servicesData.map((service, index) => (
        <motion.div 
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
        >
          <div className="bg-white/20 rounded-2xl p-4 w-fit mx-auto mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
            <IconRenderer iconName={service.icon} className="size-12 text-white" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-white/90">{service.title}</h3>
          <p className="text-white/80 leading-relaxed group-hover:text-white/70">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
  
  {/* Bottom Cards - Visible only on desktop */}
  <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-screen-2xl w-full absolute -bottom-28 left-1/2 transform -translate-x-1/2 px-6 z-20">
    {[
      { icon: Star, title: "Precios Competitivos", desc: "Tarifas justas y transparentes para todos los servicios" },
      { icon: ThumbsUp, title: "Servicio Confiable", desc: "Más de 20 años de experiencia respaldan nuestro trabajo" },
      { icon: ShieldCheck, title: "Personal Calificado", desc: "Profesionales certificados y altamente capacitados" }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.03 }}
        className="bg-darkblue border-2 border-darkblue hover:border-white/20 rounded-3xl p-8 text-white hover:bg-darkblue/90 transition-all duration-300 group shadow-xl"
      >
        <item.icon className="size-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-white/80 group-hover:text-white/70">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Additional Cards Section - Visible only on mobile and tablet */}
<section className="lg:hidden bg-darkblue py-16">
  <div className="max-w-screen-xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-white text-center mb-12">¿Por Qué Elegirnos?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: Star, title: "Precios Competitivos", desc: "Tarifas justas y transparentes para todos los servicios" },
        { icon: ThumbsUp, title: "Servicio Confiable", desc: "Más de 20 años de experiencia respaldan nuestro trabajo" },
        { icon: ShieldCheck, title: "Personal Calificado", desc: "Profesionales certificados y altamente capacitados" }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-primary border-2 border-primary hover:border-white/20 rounded-3xl p-8 text-white text-center hover:bg-primary/90 transition-all duration-300 group shadow-lg"
        >
          <item.icon className="size-12 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-white/80 group-hover:text-white/70">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ABOUT SECTION - Enhanced */}
      <section className="flex flex-col items-center bg-white py-20 lg:pt-40" id="about">
        <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row text-center items-center lg:text-start px-6 lg:px-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-3/5"
          >
            <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold text-secondary leading-tight mb-8">
              Más de 20 Años Demostrando
              <span className="text-primary"> Excelencia</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              En Multisemar nos especializamos en brindar soluciones integrales con los más altos 
              estándares de calidad. Nuestra trayectoria de más de dos décadas nos avala como 
              líderes en servicios de grúas, electromecánica, instalaciones eléctricas y construcción 
              en La Romana y toda la región este del país.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              className="mt-8 bg-primary text-white px-8 py-4 rounded-2xl font-bold border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              Conozca Más Sobre Nosotros
              <ArrowRight className="size-5" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-2/5"
          >
            <div className="grid grid-cols-1 gap-8">
              {[
                { number: "20+", label: "Años de Experiencia", color: "text-primary" },
                { number: "150+", label: "Empleados Calificados", color: "text-secondary" },
                { number: "5k+", label: "Proyectos Completados", color: "text-primary" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center border-2 border-gray-200 rounded-3xl p-8 hover:border-primary/30 hover:bg-gray-50 transition-all duration-300"
                >
                  <h3 className={`text-6xl font-black ${stat.color} mb-2`}>{stat.number}</h3>
                  <p className="text-gray-600 text-lg font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - Enhanced */}
      <section className="flex flex-col items-center pt-20 pb-32 bg-[#F5F8FF]">
        <div className="max-w-screen-2xl w-full px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="md:text-6xl text-4xl font-bold text-secondary mb-6">
              Lo Que Dicen Nuestros 
              <span className="text-primary"> Clientes</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              La satisfacción de nuestros clientes es nuestra mayor garantía. Conozca las experiencias 
              de quienes han confiado en nuestros servicios.
            </p>
          </motion.div>

          <div className="relative">
            <div className='absolute left-0 w-32 h-full bg-gradient-to-r from-[#F5F8FF] to-transparent z-[1]'></div>
            <div className='absolute right-0 w-32 h-full bg-gradient-to-l from-[#F5F8FF] to-transparent z-[1]' />
            <InfinityScroll animation={true} />
            <InfinityScroll animation={false} />
          </div>
        </div>
      </section>

      {/* CTA SECTION - Enhanced */}
      <section className="flex flex-col items-center bg-secondary py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="max-w-screen-2xl w-full text-center relative z-10 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:text-7xl text-5xl font-black text-white leading-tight mb-6"
          >
            ¿Listo para Su 
            <span className="text-primary"> Próximo Proyecto?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Contáctenos hoy mismo y descubra cómo nuestros servicios pueden hacer la diferencia 
            en su próximo proyecto. Calidad, confianza y resultados garantizados.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white rounded-2xl py-5 px-10 font-black text-xl border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Solicitar Servicios
            <ArrowRight className="size-6" />
          </motion.button>
        </div>
      </section>

      {/* CONTACT SECTION - Enhanced */}
      <section className="flex flex-col items-center bg-[#F5F8FF] py-32" id="contact">
        <div className="max-w-screen-2xl w-full px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="inline-block text-sm font-bold text-secondary border-2 border-secondary px-8 py-4 rounded-full bg-white cursor-pointer uppercase tracking-wide mb-8"
            >
              Contáctenos
            </motion.h2>
            <h2 className="md:text-6xl text-4xl font-bold text-secondary leading-tight mb-6">
              Estamos para 
              <span className="text-primary"> ayudarle</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Póngase en contacto con nuestro equipo para solicitar cotizaciones, programar servicios 
              o resolver cualquier consulta. Estamos disponibles las 24 horas para emergencias.
            </p>
          </motion.div>

          <div className="flex flex-col xl:flex-row gap-16 items-start">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="xl:w-3/5 w-full"
            >
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-10 lg:p-16 hover:border-primary/30 transition-colors duration-300">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="space-y-3"
                    >
                      <label className="text-secondary text-sm font-bold tracking-wide uppercase block" htmlFor="name">
                        Nombre Completo *
                      </label>
                      <input 
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 text-lg transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white hover:border-primary/50 placeholder-gray-500" 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="Ingrese su nombre completo"
                      />
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="space-y-3"
                    >
                      <label className="text-secondary text-sm font-bold tracking-wide uppercase block" htmlFor="email">
                        Correo Electrónico *
                      </label>
                      <input 
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 text-lg transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white hover:border-primary/50 placeholder-gray-500" 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="su.correo@empresa.com"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="space-y-3"
                    >
                      <label className="text-secondary text-sm font-bold tracking-wide uppercase block" htmlFor="phone">
                        Teléfono
                      </label>
                      <input 
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 text-lg transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white hover:border-primary/50 placeholder-gray-500" 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        placeholder="+1 (809) 123-4567"
                      />
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="space-y-3"
                    >
                      <label className="text-secondary text-sm font-bold tracking-wide uppercase block" htmlFor="company">
                        Empresa
                      </label>
                      <input 
                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 text-lg transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white hover:border-primary/50 placeholder-gray-500" 
                        type="text" 
                        id="company" 
                        name="company"
                        placeholder="Su Empresa S.R.L."
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="space-y-3"
                  >
                    <label className="text-secondary text-sm font-bold tracking-wide uppercase block" htmlFor="service">
                      Servicio de Interés *
                    </label>
                    <select 
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 text-lg transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white hover:border-primary/50 placeholder-gray-500" 
                      id="service" 
                      name="service"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="gruas">Servicios de Grúas</option>
                      <option value="electromecanica">Mantenimiento Electromecánico</option>
                      <option value="electricas">Instalaciones Eléctricas</option>
                      <option value="construccion">Servicios de Construcción</option>
                      <option value="ingenieria">Ingeniería y Consultoría</option>
                      <option value="mantenimiento">Mantenimiento General</option>
                    </select>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="space-y-3"
                  >
                    <label className="text-secondary text-sm font-bold tracking-wide uppercase block" htmlFor="message">
                      Mensaje *
                    </label>
                    <textarea 
                      className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 text-lg transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white hover:border-primary/50 placeholder-gray-500 min-h-[150px] resize-none" 
                      id="message" 
                      name="message" 
                      rows="6"
                      placeholder="Describa su proyecto o necesidad y cómo podemos ayudarle..."
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary text-white rounded-2xl py-5 px-8 font-black text-xl border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Enviar Mensaje
                    <ArrowRight className="size-6" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="xl:w-2/5 w-full space-y-8"
            >
              {[
                {
                  icon: MapPinned,
                  title: "Visite Nuestras Oficinas",
                  content: "Calle Principal #123, Melisa\nLa Romana, República Dominicana",
                  extra: "Horario: Lunes a Viernes 8:00 AM - 6:00 PM"
                },
                {
                  icon: Phone,
                  title: "Llámenos Ahora",
                  content: "+1 (809) 556-7890\n+1 (809) 556-EMER (3637) - Emergencias 24/7",
                  extra: "Disponibles las 24 horas para emergencias"
                },
                {
                  icon: Mail,
                  title: "Escríbanos",
                  content: "info@multisemar.com\ncotizaciones@multisemar.com",
                  extra: "Respondemos en menos de 24 horas"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary/10 border-2 border-primary/20 p-4 rounded-2xl group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <item.icon className="size-8 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-secondary text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-2">
                        {item.content}
                      </p>
                      <p className="text-sm text-gray-500 font-medium">{item.extra}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Emergency Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 hover:bg-red-100 transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className="text-red-700 text-2xl font-bold mb-4">¿Emergencia las 24 horas?</h3>
                  <p className="text-red-600 mb-6 text-lg">Servicio de grúas y asistencia disponible todo el día, todos los días</p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    Llamar Emergencia
                    <Phone className="size-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}