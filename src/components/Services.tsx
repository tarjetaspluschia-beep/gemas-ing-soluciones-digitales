import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Droplets, Bug, Bird, FileCheck, Wrench } from 'lucide-react';
const Services = () => {
  const services = [{
    icon: Shield,
    title: 'Bioseguridad',
    description: 'Protocolos completos de bioseguridad para empresas e instituciones',
    features: ['Auditorías de bioseguridad', 'Capacitación del personal', 'Protocolos personalizados']
  }, {
    icon: Droplets,
    title: 'Desinfección',
    description: 'Servicios profesionales de desinfección y sanitización',
    features: ['Desinfección industrial', 'Sanitización de áreas', 'Productos certificados']
  }, {
    icon: Bug,
    title: 'Control de Plagas',
    description: 'Manejo integral de plagas urbanas e industriales',
    features: ['Control de insectos', 'Manejo de roedores', 'Planes de monitoreo']
  }, {
    icon: Bird,
    title: 'Control de Aves y Murciélagos',
    description: 'Soluciones especializadas para control de fauna',
    features: ['Control humano', 'Sistemas de exclusión', 'Monitoreo continuo']
  }, {
    icon: FileCheck,
    title: 'Constancia Sanitaria',
    description: 'Certificaciones y constancias para cumplimiento normativo',
    features: ['Certificación sanitaria', 'Documentación técnica', 'Seguimiento normativo']
  }, {
    icon: Wrench,
    title: 'Asesoría Técnica',
    description: 'Consultoría especializada y programas de mantenimiento',
    features: ['Consultoría técnica', 'Programas preventivos', 'Soporte continuo']
  }];
  return <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestros servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones completas para cada necesidad
          </h2>
          <p className="text-xl text-muted-foreground">
            Ofrecemos servicios especializados en bioseguridad, inocuidad y control de plagas 
            para diferentes sectores industriales y comerciales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-muted/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                  <service.icon className="h-10 w-10 text-white drop-shadow-sm" />
                </div>
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature}</span>
                    </li>)}
                </ul>
                <Button 
                  variant="professional" 
                  className="w-full"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="mr-2">Solicitar información</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-secondary p-12 rounded-3xl text-white shadow-2xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-24 -translate-x-24"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4 drop-shadow-sm">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Contacta nuestro equipo técnico especializado para recibir una consulta gratuita y personalizada
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              className="px-12 py-4 text-lg bg-[#2bb22b]"
              onClick={() => {
                const message = encodeURIComponent('Hola, estás comunicado con Gemas Ingeniería, cuéntame como te puedo ayudar....');
                window.open(`https://wa.me/573112295449?text=${message}`, '_blank');
              }}
            >
              <span className="mr-3">Consulta gratuita</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;