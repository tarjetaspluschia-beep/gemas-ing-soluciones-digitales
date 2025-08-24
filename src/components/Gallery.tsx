import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: "Desinfección de oficinas",
      description: "Personal especializado realizando protocolos de desinfección en espacios de oficina",
      category: "Desinfección",
      imageUrl: "/lovable-uploads/c8ba083d-f166-4df3-a7bb-3471457ef599.png"
    },
    {
      id: 2,
      title: "Servicios en sector petrolero",
      description: "Fumigación especializada en instalaciones petroleras de Casanare",
      category: "Sector Petrolero",
      imageUrl: "/lovable-uploads/5730c00d-e873-4016-924d-cfcda346e2fb.png"
    },
    {
      id: 3,
      title: "Sanitización en cocinas industriales",
      description: "Control de plagas y sanitización en áreas de preparación de alimentos",
      category: "Inocuidad Alimentaria",
      imageUrl: "/lovable-uploads/206bad96-a610-4d65-ab5a-8377fa76f2bb.png"
    },
    {
      id: 4,
      title: "Fumigación industrial",
      description: "Aplicación de tratamientos especializados en zonas industriales",
      category: "Control de Plagas",
      imageUrl: "/lovable-uploads/0c20caac-bffb-4a72-b384-d19771d288b5.png"
    },
    {
      id: 5,
      title: "Fumigación urbana",
      description: "Servicios de control de plagas en áreas urbanas y residenciales",
      category: "Control de Plagas",
      imageUrl: "/lovable-uploads/7d32bb3d-eb05-423c-9f48-f27dc3988914.png"
    },
    {
      id: 6,
      title: "Desinfección institucional",
      description: "Protocolos de bioseguridad en instituciones gubernamentales",
      category: "Bioseguridad",
      imageUrl: "/lovable-uploads/a66ebcf2-b092-44e3-af1b-dec2f734c6f4.png"
    },
    {
      id: 7,
      title: "Sociedad BIC - Empresa con propósito",
      description: "Certificación como Sociedad de Beneficio e Interés Colectivo",
      category: "Certificaciones",
      imageUrl: "/lovable-uploads/be71bece-2f93-4146-982e-8c106c6ace2f.png"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Desinfección": "bg-blue-500/10 text-blue-600 border-blue-200",
      "Sector Petrolero": "bg-yellow-500/10 text-yellow-600 border-yellow-200",
      "Inocuidad Alimentaria": "bg-green-500/10 text-green-600 border-green-200",
      "Control de Plagas": "bg-red-500/10 text-red-600 border-red-200",
      "Bioseguridad": "bg-purple-500/10 text-purple-600 border-purple-200",
      "Servicios Especializados": "bg-orange-500/10 text-orange-600 border-orange-200",
      "Certificaciones": "bg-cyan-500/10 text-cyan-600 border-cyan-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-200";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestros trabajos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Casos reales</span> de éxito en Casanare
          </h2>
          <p className="text-xl text-muted-foreground">
            Conoce de primera mano el profesionalismo y calidad técnica que caracterizan 
            nuestros servicios de bioseguridad, inocuidad y control de plagas.
          </p>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {galleryImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(image.category)}`}>
                      {image.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="space-y-4">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(image.category)}>
                        {image.category}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold">{image.title}</h3>
                    <p className="text-muted-foreground">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg bg-card">
                        <div className="relative overflow-hidden">
                          <img
                            src={image.imageUrl}
                            alt={image.title}
                            className="w-full h-64 object-cover"
                            loading="lazy"
                          />
                          <Badge className={`absolute top-4 left-4 ${getCategoryColor(image.category)}`}>
                            {image.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-2 text-card-foreground">{image.title}</h3>
                          <p className="text-sm text-muted-foreground">{image.description}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="space-y-4">
                        <img
                          src={image.imageUrl}
                          alt={image.title}
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Badge className={getCategoryColor(image.category)}>
                              {image.category}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold">{image.title}</h3>
                          <p className="text-muted-foreground">{image.description}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas servicios similares?</h3>
            <p className="text-muted-foreground mb-6">
              Contamos con el equipo y la experiencia para atender las necesidades específicas de tu empresa.
            </p>
            <a
              href="https://wa.me/573003456789?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20bioseguridad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors duration-200"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
