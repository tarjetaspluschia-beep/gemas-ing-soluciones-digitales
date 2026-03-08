import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOHead from '@/components/SEOHead';

// Lazy load below-the-fold components to reduce initial bundle size
const About = React.lazy(() => import('@/components/About'));
const Services = React.lazy(() => import('@/components/Services'));
const Gallery = React.lazy(() => import('@/components/Gallery'));
const Clients = React.lazy(() => import('@/components/Clients'));
const Contact = React.lazy(() => import('@/components/Contact'));

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GEMAS Ingeniería SAS BIC",
  "description": "Soluciones integrales en bioseguridad, inocuidad y control de plagas en Tauramena y Casanare.",
  "url": "https://www.gemasing.com",
  "telephone": "+573112295449",
  "email": "contacto@gemasing.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tauramena",
    "addressRegion": "Casanare",
    "addressCountry": "CO"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Casanare"
  },
  "priceRange": "$$",
  "sameAs": [],
  "serviceType": ["Bioseguridad", "Control de plagas", "Fumigación", "Desinfección", "Inocuidad alimentaria"]
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="GEMAS Ingeniería - Bioseguridad, Control de Plagas y Fumigación en Casanare"
        description="Soluciones integrales en bioseguridad, inocuidad y control de plagas en Tauramena, Casanare. 5+ años de experiencia, ingenieros certificados y empresa SAS BIC."
        canonical="https://www.gemasing.com"
        jsonLd={localBusinessJsonLd}
      />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-muted/50" />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-muted/50" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-muted/50" />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-muted/50" />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<div className="min-h-[200px] animate-pulse bg-muted/50" />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
