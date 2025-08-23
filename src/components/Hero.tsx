import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
const Hero = () => {
  const benefits = ['Soluciones técnicas certificadas', 'Atención inmediata en Casanare', 'Resultados garantizados'];
  const heroImages = ['/lovable-uploads/995bfbca-b7c3-4b86-bc1b-5354f9f67db4.png', '/lovable-uploads/bc43e198-0322-49e4-b7c4-ced0a459d530.png', '/lovable-uploads/242959eb-eedb-4224-841f-89516416857f.png', '/lovable-uploads/ee35565a-6c74-4fa8-9636-718820907fe5.png', '/lovable-uploads/23ee7c69-5820-4b15-99ea-b45e8bf7214f.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 4000); // Cambia imagen cada 4 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);
  return <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background image with rotation */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          {heroImages.map((image, index) => <img key={index} src={image} alt={`Personal de bioseguridad GEMAS ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
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
                <span className="text-accent">control de plagas, servicio de fumigación y desinfección</span>
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
              <Button variant="outline" size="lg" onClick={() => document.getElementById('servicios')?.scrollIntoView({
              behavior: 'smooth'
            })}>
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
                <div className="text-2xl font-bold text-secondary">200+</div>
                <div className="text-sm text-muted-foreground">Clientes atendidos</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;