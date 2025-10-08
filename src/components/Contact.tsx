import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+57 3112295449',
      action: 'tel:+573112295449',
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contacto@gemasing.com',
      action: 'mailto:contacto@gemasing.com',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Carrera 16 No 3-29 Tauramena, Casanare',
      action: '#',
    },
    {
      icon: Clock,
      title: 'Horarios',
      info: 'Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 12:00 PM',
      action: '#',
    },
  ];

  const handleWhatsApp = () => {
    const baseMessage = 'Hola, estás comunicado con Gemas Ingeniería, cuéntame como te puedo ayudar....';
    const formInfo = formData.name || formData.company || formData.email || formData.phone || formData.message
      ? `\n\nInformación del formulario:\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`
      : '';
    const message = encodeURIComponent(baseMessage + formInfo);
    window.open(`https://wa.me/573112295449?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contacto
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para proteger tu negocio?
          </h2>
          <p className="text-xl text-muted-foreground">
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte 
            con soluciones personalizadas en bioseguridad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Solicita tu cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1" variant="default">
                    Enviar consulta
                  </Button>
                  <Button
                    type="button"
                    variant="cta"
                    className="flex-1"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-secondary-light/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        {info.action.startsWith('#') ? (
                          <p className="text-muted-foreground">{info.info}</p>
                        ) : (
                          <a
                            href={info.action}
                            className="text-primary hover:underline"
                          >
                            {info.info}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-0">
                <a 
                  href="https://maps.app.goo.gl/zAtj1oAibohkAJoP7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-muted h-64 rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground font-medium">
                        Ver ubicación en Google Maps
                      </p>
                      <p className="text-sm text-muted-foreground/80 mt-1">
                        Carrera 16 No 3-29 Tauramena, Casanare
                      </p>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;