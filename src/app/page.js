"use client";

import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
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
  ThermometerSnowflake,
  Wrench,
  Truck,
  Cog,
  Zap,
  HardHat,
  Tool,
  Home,
  Construction,
  Settings,
  Cctv,
  Droplets,
  Generator,
  Trees,
  Palette
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
    ThermometerSnowflake,
    Wrench,
    Truck,
    Cog,
    Zap,
    HardHat,
    Tool,
    Construction,
    Settings,
    Cctv,
    Droplets,
    Generator,
    Trees,
    Palette
  };

  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return <div className={className} />; // Fallback
  }
  
  return <IconComponent className={className} {...props} />;
}

// Services Data - Updated to match Multiservicios Martínez
const servicesData = [
  {
    id: 1,
    icon: "Construction",
    title: "Infraestructura Civil",
    description: "Construcción de casetas, localidades, cercados perimetrales, diseño y construcción de imbornales y registros sanitarios y eléctricos."
  },
  {
    id: 2,
    icon: "Settings",
    title: "Reparación Estructuras",
    description: "Reparación y mantenimiento de estructuras metálicas, fabricación e instalación de canaletas."
  },
  {
    id: 3,
    icon: "Zap",
    title: "Instalaciones Eléctricas",
    description: "Diseño e instalación de facilidades eléctricas residenciales e industriales, reacondicionamiento de sistemas eléctricos."
  },
  {
    id: 4,
    icon: "Cog",
    title: "Automatización Industrial",
    description: "Automatización industrial, domótica y diseño de circuitos y tarjetas electrónicas."
  },
  {
    id: 5,
    icon: "ThermometerSnowflake",
    title: "Sistemas de Refrigeración",
    description: "Diseño e instalación de sistemas de refrigeración doméstica e industrial, mantenimiento de equipos de refrigeración."
  },
  {
    id: 6,
    icon: "Wrench",
    title: "Generadores de Emergencia",
    description: "Instalación, reparación y mantenimiento de sistemas de generadores de emergencia."
  }
];

export default function HomePage() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Por favor complete todos los campos obligatorios'
      });
      return;
    }

    // For now open user's email client with a mailto: link so office can handle sending.
    // Keep backend intact for future server-side sending.
    setFormStatus({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const recipient = 'multiserviciosmartinez@hotmail.com';
      const subject = `Consulta: ${formData.service || 'General'} - ${formData.name}`;
      const bodyLines = [
        `Nombre: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.phone ? `Teléfono: ${formData.phone}` : null,
        formData.company ? `Empresa: ${formData.company}` : null,
        `\nMensaje:`,
        formData.message || '',
        '\n---',
        'Enviado desde el formulario web de Multiservicios Martínez'
      ].filter(Boolean).join('\n');

      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;

      // Open mail client in new tab/window. Some clients will open desktop mail app.
      window.open(mailto);

      // Set success state (inform user to complete/send in their mail client)
      setFormStatus({ isSubmitting: false, isSuccess: true, error: null });

      // Reset form fields
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSuccess: false, error: 'No se pudo abrir el cliente de correo. Por favor intente manualmente.' });
    }
  };

  return (
    <>
      <Header />
{/* HERO SECTION - Enhanced */}
<section className="flex flex-col items-center py-2 bg-white h-screen">
  <div className="max-w-screen-2xl w-full flex flex-col lg:flex-row px-6 lg:px-12">
    <div className="flex flex-col items-center lg:items-start lg:w-3/5 pt-20 lg:pt-32 text-center lg:text-start">
      {/* Main Title - Enhanced */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:text-6xl md:text-5xl text-4xl font-bold text-secondary leading-[1.1] tracking-tight"
      >
        Multiservicios Martínez: 
        <span className="text-primary mt-2 block">Soluciones Integrales desde 1996</span>
      </motion.h1>
      
      {/* Description - Enhanced */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base mt-6 lg:mt-8 text-gray-600 lg:pr-20 max-w-2xl leading-relaxed"
      >
        Más de 25 años brindando servicios especializados en electromecánica, infraestructuras civil e industrial. 
        Confiabilidad y excelencia en cada proyecto con compromiso medio ambiental.
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
            <p className='text-primary font-bold text-base md:text-lg'>809-550-8815</p>
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
          <p className='ml-2 md:ml-3 font-bold text-sm md:text-base'>Industrias</p>
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
          alt="Servicios de Infraestructura y Electromecánica"
          className="object-cover w-full h-auto rounded-3xl border-4 border-white"
          layout="responsive"
          placeholder="blur"
        />
      </div>

      {/* Segunda imagen con tamaño original */}
      <Image
        src={hero2}
        alt="Servicios de Construcción y Mantenimiento Industrial"
        className="object-cover max-h-[200px] rounded-3xl mt-8 border-4 border-white"
        layout="responsive"
        placeholder="blur"
      />
    </motion.div>
  </div>
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
        Soluciones Integrales para Infraestructura Civil e Industrial
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
      { icon: Star, title: "Alta Calidad", desc: "Mantenemos los más altos estándares de calidad en todos nuestros servicios" },
      { icon: ThumbsUp, title: "Experiencia", desc: "Más de 25 años de experiencia respaldan nuestro trabajo" },
      { icon: ShieldCheck, title: "Compromiso Ambiental", desc: "Nos comprometemos con el medio ambiente en todos nuestros proyectos" }
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
<section className="lg:hidden bg-primary py-16">
  <div className="max-w-screen-xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-white text-center mb-12">¿Por Qué Elegirnos?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: Star, title: "Alta Calidad", desc: "Mantenemos los más altos estándares de calidad en todos nuestros servicios" },
        { icon: ThumbsUp, title: "Experiencia", desc: "Más de 25 años de experiencia respaldan nuestro trabajo" },
        { icon: ShieldCheck, title: "Compromiso Ambiental", desc: "Nos comprometemos con el medio ambiente en todos nuestros proyectos" }
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
              Más de 25 Años Demostrando
              <span className="text-primary"> Excelencia</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              En Multiservicios Martínez nos especializamos en brindar soluciones integrales con los más altos 
              estándares de calidad. Nuestra trayectoria desde 1996 nos avala como líderes en servicios de 
              electromecánica e infraestructuras civil e industrial, manteniendo siempre nuestro compromiso 
              medio ambiental.
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
                { number: "25+", label: "Años de Experiencia", color: "text-primary" },
                { number: "100+", label: "Proyectos Completados", color: "text-secondary" },
                { number: "3", label: "Áreas de Especialización", color: "text-primary" }
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

      {/* FULL SERVICES SECTION */}
      <section className="flex flex-col items-center bg-gray-50 py-20">
        <div className="max-w-screen-2xl w-full px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="md:text-5xl text-4xl font-bold text-secondary mb-6">
              Nuestro Catálogo Completo de 
              <span className="text-primary"> Servicios</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de servicios especializados para satisfacer todas sus necesidades de infraestructura y electromecánica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Infraestructura Civil */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl mr-4">
                  <Construction className="size-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Infraestructura Civil</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Construcción de casetas, localidades, cercados perimetrales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño y construcción de imbornales y registros sanitarios y eléctricos</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Reparación y mantenimiento de estructuras metálicas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Fabricación e instalación de canaletas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Pintura en general</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Plomería en general</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño y construcción de estructuras aligeradas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Mantenimiento de limpieza interior, exterior y áreas verdes</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Trabajos en madera</span>
                </li>
              </ul>
            </motion.div>

            {/* Ingeniería Electromecánica */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl mr-4">
                  <Settings className="size-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Ingeniería Electromecánica</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño e instalación de facilidades eléctricas residenciales e industriales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Reacondicionamiento de sistemas eléctricos</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Automatización industrial</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Domótica y diseño de circuitos y tarjetas electrónicas</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño e instalación de sistemas de refrigeración doméstica e industrial</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Mantenimiento de equipos de refrigeración (aires acondicionados, cuartos fríos, chillers, VRF)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño, instalación y mantenimiento de sistemas de purificación de agua y ósmosis inversa</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Instalación, reparación y mantenimiento de sistemas de generadores de emergencia</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño de sistemas de puesta a tierra</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Instalación y mantenimiento de equipos eléctricos (bombas, motores, ventiladores, maquinarias)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Seguridad electrónica (cámaras, alarmas)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Mantenimiento de ascensores y elevadores de carga</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño, instalación y mantenimiento de sistemas hidráulicos y neumáticos</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño, instalación y mantenimiento de sistemas para ayudas visuales en aeropuertos</span>
                </li>
              </ul>
            </motion.div>

            {/* Industrial */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl mr-4">
                  <Cog className="size-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Servicios Industriales</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Diseño, construcción y mantenimiento de naves industriales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Metalurgia</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Mecanizados</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Corte computarizado</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Mantenimiento de naves industriales</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span>Servicios de alquiler de grúa (17 toneladas)</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
              o resolver cualquier consulta. Estamos disponibles para atenderle.
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
                {/* Alerts moved below submit button */}

                <form className="space-y-8" onSubmit={handleSubmit}>
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
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ingrese su nombre completo"
                        required
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
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="su.correo@empresa.com"
                        required
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="809-550-8815"
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
                        value={formData.company}
                        onChange={handleInputChange}
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
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="Infraestructura Civil">Infraestructura Civil</option>
                      <option value="Ingeniería Electromecánica">Ingeniería Electromecánica</option>
                      <option value="Servicios Industriales">Servicios Industriales</option>
                      <option value="Alquiler de Grúas">Alquiler de Grúas</option>
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
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describa su proyecto o necesidad y cómo podemos ayudarle..."
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02, y: formStatus.isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`w-full rounded-2xl py-5 px-8 font-black text-xl border-2 transition-all duration-300 flex items-center justify-center gap-3 ${
                      formStatus.isSubmitting 
                        ? 'bg-gray-400 text-white border-gray-400 cursor-not-allowed' 
                        : 'bg-primary text-white border-primary hover:bg-transparent hover:text-primary'
                    }`}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <ArrowRight className="size-6" />
                      </>
                    )}
                  </motion.button>

                  {/* Success Message (moved below submit) */}
                  {formStatus.isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-green-100 border-2 border-green-300 rounded-2xl text-green-800"
                    >
                      <p className="font-semibold">¡Mensaje enviado correctamente!</p>
                      <p className="text-sm">Nos pondremos en contacto contigo pronto.</p>
                    </motion.div>
                  )}

                  {/* Error Message (moved below submit) */}
                  {formStatus.error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-red-100 border-2 border-red-300 rounded-2xl text-red-800"
                    >
                      <p className="font-semibold">Error:</p>
                      <p className="text-sm">{formStatus.error}</p>
                    </motion.div>
                  )}

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
                  icon: Mail,
                  title: "Escríbanos",
                  content: "multiserviciosmartinez@hotmail.com",
                  extra: "Respondemos a la brevedad posible"
                },
                {
                  icon: Phone,
                  title: "Llámenos Ahora",
                  content: "Tel: 809-550-8815\nCel: 829-523-8815",
                  extra: "Disponibles para atender sus necesidades"
                },
                {
                  icon: MapPinned,
                  title: "Ubicación",
                  content: "República Dominicana\nServicios en toda la región",
                  extra: "Atendemos proyectos a nivel nacional"
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

              {/* Special Service Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-primary/10 border-2 border-primary/20 rounded-3xl p-8 hover:bg-primary/20 transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className="text-primary text-2xl font-bold mb-4">Servicio de Grúas</h3>
                  <p className="text-secondary mb-6 text-lg">Disponemos de grúa de 17 toneladas para alquiler</p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-8 py-4 rounded-2xl font-bold border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    Consultar Disponibilidad
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