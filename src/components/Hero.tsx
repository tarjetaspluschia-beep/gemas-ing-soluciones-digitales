import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
const Hero = () => {
  const benefits = ['Soluciones técnicas certificadas', 'Atención inmediata en Casanare', 'Resultados garantizados'];
  
  const heroImages = [
    '/lovable-uploads/10d315ad-746d-4023-8c4f-b13f1fbd9917.png',
    '/lovable-uploads/29974db3-0230-44ef-83bb-728f26b41c8a.png',
    '/lovable-uploads/21f6f2d8-1f46-4842-9414-016352ad200c.png',
    '/lovable-uploads/5a2d4dc0-08c1-465b-b6a5-eada986e03ba.png'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Cambia imagen cada 4 segundos
    
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background image with rotation */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Personal de bioseguridad GEMAS ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              Certificados en bioseguridad
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Soluciones integrales en{' '}
                <span className="text-primary">bioseguridad</span>,{' '}
                <span className="text-secondary">inocuidad</span> y{' '}
                <span className="text-accent">control de plagas</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Protegemos tu negocio en Tauramena y Casanare con experiencia técnica, 
                confianza y compromiso social que marca la diferencia.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Contáctanos ahora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Ver nuestros servicios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Clientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;