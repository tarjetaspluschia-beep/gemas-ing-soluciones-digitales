import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Video, 
  Palette, 
  Share2, 
  Link, 
  RefreshCw, 
  Leaf, 
  Zap,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const TPFeatures = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Tecnología NFC Integrada',
      description: 'Comparte toda tu información con un simple toque o aproximación al smartphone, sin aplicaciones adicionales.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'Compatibilidad Universal',
      description: 'Funciona con la mayoría de smartphones modernos sin necesidad de aplicaciones adicionales.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Video,
      title: 'Contenido Multimedia',
      description: 'Comparte videos, catálogos, presentaciones y archivos relevantes para destacar tu trabajo.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Diseños Exclusivos',
      description: 'Adaptados a tu industria, profesión y estilo personal o corporativo que reflejan tu marca personal.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Share2,
      title: 'Integración con Redes',
      description: 'Conecta directamente con todos tus perfiles profesionales y plataformas en un solo lugar.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Link,
      title: 'Enlaces a Sitios Web',
      description: 'Acceso directo a tu página web, tienda online y muestras de trabajo para impresionar a tus contactos.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: RefreshCw,
      title: 'Actualizaciones Ilimitadas',
      description: 'Modifica tu información en cualquier momento sin necesidad de reimprimir nuevas tarjetas.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Leaf,
      title: 'Ecológicamente Responsables',
      description: 'Reduce la huella ambiental eliminando la necesidad de reimprimir tarjetas de papel tradicionales.',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Zap,
      title: 'Activación Inmediata',
      description: 'Comienza a usar tu tarjeta desde el momento en que la recibes, sin complicaciones técnicas.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const stats = [
    { icon: Shield, number: '100%', label: 'Seguridad Garantizada' },
    { icon: Clock, number: '<1s', label: 'Tiempo de Transferencia' },
    { icon: Users, number: '500+', label: 'Clientes Satisfechos' },
    { icon: Leaf, number: '0%', label: 'Impacto Ambiental' }
  ];

  return (
    <section id="caracteristicas" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tecnología Avanzada</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Características Principales
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre todo lo que nuestras tarjetas pueden hacer para transformar tu presencia profesional
            y revolucionar la forma en que haces networking.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">¿Por qué elegir TarjetasPlus?</h3>
            <p className="text-muted-foreground">Números que respaldan la calidad de nuestro servicio</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Tabs */}
        <div className="mt-16 bg-background rounded-3xl border border-border/50 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Tecnología de Vanguardia</h3>
            <p className="text-muted-foreground">Conoce la tecnología que hace posible la magia</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">NFC Chip</h4>
              <p className="text-sm text-muted-foreground">Tecnología de comunicación de campo cercano de última generación</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">Cloud Sync</h4>
              <p className="text-sm text-muted-foreground">Sincronización en tiempo real con la nube para actualizaciones instantáneas</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">Seguridad</h4>
              <p className="text-sm text-muted-foreground">Encriptación de datos y protección de privacidad garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TPFeatures;