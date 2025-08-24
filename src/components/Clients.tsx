import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Hospital, UtensilsCrossed, Factory, MapPin, Wheat } from 'lucide-react';

const Clients = () => {
  const sectors = [
    {
      icon: Factory,
      title: 'Hidrocarburos',
      description: 'Empresas petroleras y gasíferas',
      color: 'text-primary',
    },
    {
      icon: Hospital,
      title: 'Sector Salud',
      description: 'Hospitales, clínicas y farmacias',
      color: 'text-secondary',
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurantes',
      description: 'Cadenas y restaurantes corporativos',
      color: 'text-accent',
    },
    {
      icon: Building2,
      title: 'Hogares, residencias, conjuntos, edificios',
      description: 'Sectores residenciales',
      color: 'text-primary',
    },
    {
      icon: MapPin,
      title: 'Instituciones públicas',
      description: 'Alcaldías, juzgados, colegios',
      color: 'text-secondary',
    },
    {
      icon: Wheat,
      title: 'Sector Agrícola',
      description: 'Silos y negocios ganaderos',
      color: 'text-accent',
    },
  ];

  const testimonials = [
    {
      quote: "GEMAS Ingeniería ha sido fundamental en mantener nuestros estándares de bioseguridad. Su profesionalismo y puntualidad son excepcionales.",
      author: "María González",
      position: "Gerente de Operaciones",
      company: "Empresa Petrolera Regional",
    },
    {
      quote: "El servicio de control de plagas que brindan es muy completo. Nos han ayudado a cumplir con todas las normativas sanitarias.",
      author: "Dr. Carlos Rodríguez",
      position: "Director Médico",
      company: "Hospital San José",
    },
    {
      quote: "Su equipo técnico es muy capacitado y siempre están disponibles para resolver cualquier situación. Los recomendamos ampliamente.",
      author: "Ana Martínez",
      position: "Administradora",
      company: "Restaurante El Dorado",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Sectores atendidos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia en múltiples sectores
          </h2>
          <p className="text-xl text-muted-foreground">
            Trabajamos con empresas de diferentes sectores, adaptando nuestros servicios 
            a las necesidades específicas de cada industria.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {sectors.map((sector, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <sector.icon className={`h-8 w-8 ${sector.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{sector.title}</h3>
                <p className="text-muted-foreground text-sm">{sector.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Lo que dicen nuestros clientes</h3>
            <p className="text-muted-foreground">
              La confianza de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-accent text-2xl mb-2">"</div>
                    <p className="text-muted-foreground italic">{testimonial.quote}</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;