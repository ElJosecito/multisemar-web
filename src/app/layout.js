import localFont from "next/font/local";
import "./globals.css";

const generalSansVariable = localFont({
  src: "./fonts/general-sans/GeneralSans-Variable.woff",
  variable: "--font-general-sans",
  weight: "100 900",
});
const generalSansVariableItalic = localFont({
  src: "./fonts/general-sans/GeneralSans-VariableItalic.woff",
  variable: "--font-general-sans-italic",
  weight: "100 900",
});

export const metadata = {
  title: "Multisemar - Multiservicios Martínez | Soluciones Integrales desde 1996",
  description: "Multisemar (Multiservicios Martínez) ofrece servicios especializados en electromecánica, infraestructura civil e industrial en República Dominicana. Más de 25 años de experiencia en instalaciones eléctricas, refrigeración, construcción y servicios industriales.",
  keywords: [
    "Multisemar",
    "Multiservicios Martínez",
    "servicios electromecánicos",
    "infraestructura civil",
    "instalaciones eléctricas República Dominicana",
    "refrigeración industrial",
    "construcción RD",
    "automatización industrial",
    "generadores emergencia",
    "mantenimiento industrial",
    "servicios industriales",
    "grúas República Dominicana"
  ],
  authors: [{ name: "Multiservicios Martínez" }],
  creator: "Multiservicios Martínez",
  publisher: "Multisemar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://multisemar.com",
    siteName: "Multisemar - Multiservicios Martínez",
    title: "Multisemar | Multiservicios Martínez - Soluciones Integrales desde 1996",
    description: "Más de 25 años brindando servicios especializados en electromecánica, infraestructura civil e industrial. Confiabilidad y excelencia en cada proyecto.",
    images: [
      {
        url: "/images/principal.jpg",
        width: 1200,
        height: 630,
        alt: "Multisemar - Multiservicios Martínez"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multisemar | Multiservicios Martínez",
    description: "Servicios especializados en electromecánica e infraestructura civil desde 1996",
    images: ["/images/principal.jpg"],
  },
  alternates: {
    canonical: "https://multisemar.com",
  },
  verification: {
    google: "your-google-verification-code", // Añadir código real cuando tengas la Search Console
  },
};

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) para SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Multiservicios Martínez",
    "alternateName": "Multisemar",
    "description": "Servicios especializados en electromecánica, infraestructura civil e industrial en República Dominicana desde 1996",
    "foundingDate": "1996",
    "url": "https://multisemar.com",
    "telephone": "+1-809-550-8815",
    "email": "multiserviciosmartinez@hotmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DO",
      "addressRegion": "República Dominicana"
    },
    "areaServed": {
      "@type": "Country",
      "name": "República Dominicana"
    },
    "logo": "https://multisemar.com/images/Logo_Multisemar.svg",
    "image": "https://multisemar.com/images/principal.jpg",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      // Añadir redes sociales cuando estén disponibles
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Multisemar",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Infraestructura Civil",
            "description": "Construcción de casetas, localidades, cercados perimetrales, diseño y construcción de imbornales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalaciones Eléctricas",
            "description": "Diseño e instalación de facilidades eléctricas residenciales e industriales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistemas de Refrigeración",
            "description": "Diseño e instalación de sistemas de refrigeración doméstica e industrial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización Industrial",
            "description": "Automatización industrial, domótica y diseño de circuitos electrónicos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generadores de Emergencia",
            "description": "Instalación, reparación y mantenimiento de sistemas de generadores"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Servicios Industriales",
            "description": "Diseño, construcción y mantenimiento de naves industriales, alquiler de grúas"
          }
        }
      ]
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${generalSansVariable.variable} ${generalSansVariableItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
