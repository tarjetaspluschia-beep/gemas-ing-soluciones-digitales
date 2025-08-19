import React from 'react';
import { Play, CheckCircle, Zap, Smartphone, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TPHero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">La Evolución de las Tarjetas de Presentación</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  CONTACTA
                </span>
                {' • '}
                <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                  IMPRESIONA
                </span>
                {' • '}
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                  VENDE
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Comparte toda tu información profesional con un{' '}
                <span className="text-primary font-semibold">simple toque</span>. 
                Diseños exclusivos, actualizaciones ilimitadas, conexión instantánea.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-4 my-8">
              {[
                { icon: Smartphone, text: 'Tecnología NFC' },
                { icon: Globe, text: 'Sin Apps Necesarias' },
                { icon: CheckCircle, text: 'Eco-Friendly' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                  <benefit.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                asChild
              >
                <a href="#contacto" className="flex items-center gap-2">
                  Solicitar Mi Tarjeta Plus
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                asChild
              >
                <a href="#demo" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Ver Demostración
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border/50">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">99%</div>
                  <div className="text-sm text-muted-foreground">Compatibilidad</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Soporte Técnico</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Mockup */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] p-6 aspect-[9/16] flex flex-col justify-center items-center space-y-6">
                  {/* NFC Animation */}
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <Zap className="h-16 w-16 text-white" />
                    </div>
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 border-2 border-primary rounded-2xl animate-ping"></div>
                    <div className="absolute inset-0 border-2 border-secondary rounded-2xl animate-ping delay-75"></div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-slate-800">TarjetasPlus</h3>
                    <p className="text-sm text-slate-600">Contacta • Impresiona • Vende</p>
                  </div>
                  
                  <div className="w-full space-y-2">
                    <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-center text-slate-500">Transfiriendo contacto...</p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="w-32 h-20 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Zap className="h-6 w-6 mx-auto mb-1" />
                    <div className="text-xs font-bold">NFC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TPHero;