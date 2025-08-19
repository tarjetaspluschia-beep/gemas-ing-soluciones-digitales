import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Award, 
  Zap, 
  Leaf,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TPBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Impacto Memorable',
      description: 'Destaca desde el primer contacto con tecnología innovadora que demuestra profesionalismo y visión de futuro.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Ahorro Económico',
      description: 'Olvídate de reimprimir tarjetas cuando cambies información. Actualiza ilimitadamente y ahorra dinero.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Target,
      title: 'Reducción de Oportunidades Perdidas',
      description: 'Facilita que tus contactos te encuentren al instante con todos tus canales integrados en un solo lugar.',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Imagen Profesional Reforzada',
      description: 'Proyecta una imagen innovadora y tecnológicamente avanzada que refleja la calidad de tus servicios.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Simplicidad en la Gestión',
      description: 'Tus clientes guardan toda tu información con un solo toque, sin errores de transcripción.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Leaf,
      title: 'Respeto al Medio Ambiente',
      description: 'Contribuye a la sostenibilidad eliminando el desperdicio de papel y la impresión constante.',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  const comparison = {
    traditional: {
      title: 'Tarjetas Tradicionales',
      items: [
        { text: 'Información limitada', negative: true },
        { text: 'Requieren reimprimir', negative: true },
        { text: 'Se pierden fácilmente', negative: true },
        { text: 'Sin actualizaciones', negative: true },
        { text: 'Impacto ambiental', negative: true },
        { text: 'Costo por reimpresión', negative: true }
      ]
    },
    tarjetasplus: {
      title: 'TarjetasPlus NFC',
      items: [
        { text: 'Información completa multimedia', negative: false },
        { text: 'Actualizaciones ilimitadas', negative: false },
        { text: 'Siempre accesible en tu teléfono', negative: false },
        { text: 'Cambios en tiempo real', negative: false },
        { text: '100% ecológico', negative: false },
        { text: 'Inversión única', negative: false }
      ]
    }
  };

  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Award className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Ventajas Competitivas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Beneficios Clave
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo TarjetasPlus puede transformar tu manera de hacer conexiones profesionales
            y potenciar tu crecimiento empresarial.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-background to-muted/20 rounded-3xl border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {benefit.description}
              </p>

              <div className="flex items-center text-secondary font-medium group-hover:gap-3 transition-all duration-300">
                <span>Conocer más</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-muted/30 to-background rounded-3xl p-8 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">¿Por qué elegir tecnología NFC?</h3>
            <p className="text-muted-foreground text-lg">
              Compara las ventajas y toma la mejor decisión para tu networking profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Cards */}
            <div className="bg-background rounded-2xl p-6 border border-border/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <X className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-muted-foreground">{comparison.traditional.title}</h4>
              </div>
              
              <div className="space-y-3">
                {comparison.traditional.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TarjetasPlus */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-2 right-2 px-3 py-1 bg-gradient-to-r from-secondary to-accent rounded-full text-xs font-bold text-white">
                RECOMENDADO
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary">{comparison.tarjetasplus.title}</h4>
              </div>
              
              <div className="space-y-3">
                {comparison.tarjetasplus.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">¿Listo para revolucionar tu networking?</h3>
              <p className="text-xl mb-8 opacity-90">
                Únete a más de 500 profesionales que ya están impresionando con TarjetasPlus
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  asChild
                >
                  <a href="#contacto">Solicitar Mi Tarjeta Plus</a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <a href="#precios">Ver Precios</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TPBenefits;