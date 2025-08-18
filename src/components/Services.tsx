import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Droplets, Bug, Bird, FileCheck, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Bioseguridad',
      description: 'Protocolos completos de bioseguridad para empresas e instituciones',
      features: ['Auditorías de bioseguridad', 'Capacitación del personal', 'Protocolos personalizados'],
    },
    {
      icon: Droplets,
      title: 'Desinfección',
      description: 'Servicios profesionales de desinfección y sanitización',
      features: ['Desinfección industrial', 'Sanitización de áreas', 'Productos certificados'],
    },
    {
      icon: Bug,
      title: 'Control de Plagas',
      description: 'Manejo integral de plagas urbanas e industriales',
      features: ['Control de insectos', 'Manejo de roedores', 'Planes de monitoreo'],
    },
    {
      icon: Bird,
      title: 'Control de Aves y Murciélagos',
      description: 'Soluciones especializadas para control de fauna',
      features: ['Control humano', 'Sistemas de exclusión', 'Monitoreo continuo'],
    },
    {
      icon: FileCheck,
      title: 'Constancia Sanitaria',
      description: 'Certificaciones y constancias para cumplimiento normativo',
      features: ['Certificación sanitaria', 'Documentación técnica', 'Seguimiento normativo'],
    },
    {
      icon: Wrench,
      title: 'Asesoría Técnica',
      description: 'Consultoría especializada y programas de mantenimiento',
      features: ['Consultoría técnica', 'Programas preventivos', 'Soporte continuo'],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
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
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Solicitar información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Contacta nuestro equipo técnico para una consulta gratuita
          </p>
          <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
            Consulta gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;