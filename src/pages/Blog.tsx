import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 'senales-alerta-infestacion',
      title: '5 señales de alerta de infestación en tu empresa',
      description: 'Detectar a tiempo una posible infestación puede marcar la diferencia entre un incidente menor y un riesgo mayor para la salud, la estructura y la productividad de tu organización.',
      date: '2024-08-22',
      author: 'GEMAS Ingeniería',
      readTime: '5 min'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Blog de GEMAS Ingeniería
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Conocimiento especializado en bioseguridad, control de plagas y soluciones de ingeniería para tu empresa
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {articles.map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime} de lectura</span>
                      <Button variant="ghost" size="sm" asChild className="group-hover:text-primary">
                        <Link to={`/blog/${article.id}`}>
                          Leer más
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;