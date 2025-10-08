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
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-md bg-secondary-light/20">
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

      </div>
    </section>
  );
};

export default Clients;