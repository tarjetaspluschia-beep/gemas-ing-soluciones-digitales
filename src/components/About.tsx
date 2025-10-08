import React, { useState, useEffect } from 'react';
import { Award, Users, Target, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
const About = () => {
  const aboutImages = ['/lovable-uploads/gallery-cocina-industrial-new.jpg', '/lovable-uploads/gallery-fumigacion-industrial-new.jpg', '/lovable-uploads/gallery-sector-petrolero-new.jpg', '/lovable-uploads/gallery-petrolero-campo.jpg', '/lovable-uploads/gallery-fumigacion-planta.jpg', '/lovable-uploads/gallery-fumigacion-comercial.jpg', '/lovable-uploads/team-office.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [aboutImages.length]);
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % aboutImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + aboutImages.length) % aboutImages.length);
  };
  const values = [{
    icon: Target,
    title: 'Misión',
    description: 'Brindar soluciones integrales en bioseguridad, inocuidad y control de plagas con el más alto estándar de calidad.'
  }, {
    icon: Heart,
    title: 'Visión',
    description: 'Ser la empresa líder en servicios de bioseguridad en la región, generando impacto social y ambiental positivo.'
  }, {
    icon: Award,
    title: 'Valores',
    description: 'Compromiso, responsabilidad, innovación y respeto por el medio ambiente en cada proyecto.'
  }];
  const certifications = ['Ingeniera de Alimentos', 'Concepto favorable secretaria salud del gobierno de Casanare', 'Certificados en manejo integrado de plagas SENA', 'Empresa SAS BIC registrada'];
  return <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-light text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nuestra empresa
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">5 años</span> liderando la bioseguridad en Casanare
          </h2>
          <p className="text-xl text-muted-foreground">
            Empresa SAS BIC con Ingeniera de Alimentos certificada, brindando soluciones 
            técnicas especializadas para la industria regional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
              {aboutImages.map((image, index) => <img key={index} src={image} alt={`Equipo profesional GEMAS ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
              
              {/* Navigation buttons */}
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
              
              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {aboutImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`} />)}
              </div>

              {/* SOCIEDAD BIC Logo */}
              <div className="absolute bottom-4 right-4">
                <img 
                  src="/lovable-uploads/405f82bd-eca2-4bc7-91c3-52a1912c8648.png" 
                  alt="Sociedad BIC" 
                  className="h-12 w-auto opacity-90"
                />
              </div>
            </div>
            
            
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Fundada por expertos, impulsada por resultados</h3>
              <p className="text-muted-foreground">Liderada por una Ingeniera de Alimentos , hemos construido una sólida reputación atendiendo empresas petroleras, hospitales, instituciones públicas, restaurantes, farmacias, casas y sectores agroindustriales.</p>
              <p className="text-muted-foreground">
                Como empresa SAS BIC, combinamos rentabilidad con impacto social positivo, 
                generando empleo local y contribuyendo al desarrollo sostenible de Casanare.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Certificaciones y respaldos:</h4>
              <div className="grid gap-2">
                {certifications.map((cert, index) => <div key={index} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm">{cert}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => <div key={index} className="text-center p-6 rounded-xl bg-accent-light border border-accent/20 shadow-sm">
              <div className="mx-auto w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;