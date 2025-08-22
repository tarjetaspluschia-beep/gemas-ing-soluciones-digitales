import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, User, Clock, AlertTriangle, Phone } from 'lucide-react';

const BlogArticle = () => {
  const { id } = useParams();
  
  if (id !== 'senales-alerta-infestacion') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
            <Button asChild>
              <Link to="/blog">Volver al blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hola, estás comunicado con Gemas Ingeniería, cuéntame como te puedo ayudar....');
    window.open(`https://wa.me/573112295499?text=${message}`, '_blank');
  };

  const handleScrollToContact = () => {
    // Si estamos en la página principal, ir a contacto
    window.location.href = '/#contacto';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild>
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              5 señales de alerta de infestación en tu empresa (y cómo actuar a tiempo)
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>22 de agosto, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>GEMAS Ingeniería</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 min de lectura</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introducción */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Introducción</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En GEMAS Ingeniería sabemos que la bioseguridad y la inocuidad son pilares fundamentales para mantener 
                la reputación y el funcionamiento de tu empresa. Detectar a tiempo una posible infestación puede marcar 
                la diferencia entre un incidente menor y un riesgo mayor para la salud, la estructura y la productividad 
                de tu organización. Aquí te contamos cinco señales clave que no debes ignorar —y qué hacer si las observas—.
              </p>
            </section>

            {/* Señales de Alerta */}
            <section className="mb-12">
              <div className="grid gap-8">
                {/* Señal 1 */}
                <Card className="border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <span className="bg-destructive text-destructive-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Presencia de excrementos o rastros visibles
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Los excrementos son una de las señales más evidentes de infestación. En entornos industriales o de oficina, 
                      pueden aparecer como pequeñas manchas oscuras (de roedores) o restos de alas y pieles mudadas (de insectos). 
                      Detectar estos rastros te alerta sobre una posible colonia activa dentro del establecimiento.
                    </p>
                  </CardContent>
                </Card>

                {/* Señal 2 */}
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Olores o ruidos inusuales
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Un olor persistente a humedad, amoníaco, moho o incluso feromonas liberadas por insectos puede indicar 
                      que hay plagas en áreas ocultas. Además, si escuchas crujidos, roer o zumbidos dentro de paredes, techos 
                      o mobiliario durante la noche, podrías tener una infestación activa.
                    </p>
                  </CardContent>
                </Card>

                {/* Señal 3 */}
                <Card className="border-l-4 border-l-yellow-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Daños en materiales, envases o estructuras
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Revisa si hay embalajes de alimentos con agujeros, envases dañados o productos almacenados con mordeduras. 
                      También observa la madera, muebles o cables; si muestran grietas, virutas o desgastes irregulares, 
                      son signos de roedores o termitas.
                    </p>
                  </CardContent>
                </Card>

                {/* Señal 4 */}
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      Insectos vivos o muertos en lugares poco comunes
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Encontrar cucarachas, hormigas, termitas u otros insectos fuera de zonas habituales —como en gabinetes, 
                      armarios o estanterías— es una clara señal de alerta. Aún observar insectos atrapados o muertos puede 
                      indicar una infestación oculta en tu empresa.
                    </p>
                  </CardContent>
                </Card>

                {/* Señal 5 */}
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-foreground">
                      <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      Materiales de anidación o exoesqueletos
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La presencia de exoesqueletos (pieles mudadas), trozos de madera, telas, pelo o residuos que puedan 
                      conformar un nido son signos comunes de insectos o roedores habitando en áreas poco visibles.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Por qué actuar rápidamente */}
            <section className="mb-12">
              <Card className="bg-destructive/10 border-destructive/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                    ¿Por qué es fundamental actuar rápidamente?
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                      Las plagas pueden causar riesgos sanitarios graves, daños estructurales y deterioro en productos.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                      Muchas industrias —como la alimentaria, sanitaria o hotelera— están sujetas a regulaciones estrictas 
                      que exigen controles periódicos y protocolos de control. Ignorar una infestación puede derivar en sanciones legales.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Pasos a seguir */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">¿Qué pasos seguir si detectas alguna señal?</h2>
              <div className="space-y-4">
                {[
                  { step: 1, action: "No subestimar la señal; incluso una indicación mínima puede reflejar una infestación mayor." },
                  { step: 2, action: "Registrar el lugar, número y frecuencia de avistamientos o señales." },
                  { step: 3, action: "Contactar de inmediato a GEMAS Ingeniería para una inspección profesional y plan de acción personalizado." },
                  { step: 4, action: "Implementar medidas preventivas: higiene rigurosa, sellado de accesos, mantenimiento general." },
                  { step: 5, action: "Formar al personal en detección temprana y buenas prácticas de bioseguridad." }
                ].map((item) => (
                  <Card key={item.step} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.step}
                        </span>
                        <p className="text-muted-foreground">{item.action}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Conclusión */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Conclusión</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Detectar a tiempo señales de infestación es clave para proteger tus instalaciones, evitar sanciones y 
                garantizar la continuidad operativa de tu empresa. Si identificas alguna de las cinco señales descritas, 
                lo mejor es actuar sin demora.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En GEMAS Ingeniería, contamos con experiencia, tecnología y enfoque en bioseguridad para diseñar y aplicar 
                soluciones efectivas para tu caso específico. Contáctanos hoy mismo para proteger tu empresa de forma integral.
              </p>
            </section>

            {/* Call to Action */}
            <Card className="bg-primary/10 border-primary/20 mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">¿Detectaste alguna de estas señales?</h3>
                <p className="text-muted-foreground mb-6">
                  No esperes más. Contacta a nuestros expertos para una inspección profesional gratuita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleWhatsAppContact} className="bg-[#2bb22b] hover:bg-[#25a025]">
                    <Phone className="w-4 h-4 mr-2" />
                    Contactar por WhatsApp
                  </Button>
                  <Button variant="outline" onClick={handleScrollToContact}>
                    Ir a Contacto
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogArticle;