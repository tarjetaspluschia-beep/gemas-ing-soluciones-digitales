import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Lazy load below-the-fold components to reduce initial bundle size
const About = React.lazy(() => import('@/components/About'));
const Services = React.lazy(() => import('@/components/Services'));
const Gallery = React.lazy(() => import('@/components/Gallery'));
const Clients = React.lazy(() => import('@/components/Clients'));
const Contact = React.lazy(() => import('@/components/Contact'));

const Index = () => {
  return (
    <div className="min-h-screen">
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
