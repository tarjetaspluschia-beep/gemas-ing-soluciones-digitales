import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    name: 'Inicio',
    href: '#inicio'
  }, {
    name: 'Quiénes somos',
    href: '#nosotros'
  }, {
    name: 'Servicios',
    href: '#servicios'
  }, {
    name: 'Blog',
    href: '#blog'
  }, {
    name: 'Contacto',
    href: '#contacto'
  }];
  const services = ['Control de plagas', 'Bioseguridad', 'Desinfección', 'Constancia sanitaria', 'Asesoría técnica'];
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }];
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  GEMAS <span className="text-accent">INGENIERÍA</span>
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Soluciones integrales en bioseguridad, inocuidad y control de plagas. 
                  Empresa SAS BIC comprometida con el impacto social.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                    <social.icon className="h-5 w-5" />
                  </a>)}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => <a key={index} href={link.href} className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                    {link.name}
                  </a>)}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <nav className="space-y-3">
                {services.map((service, index) => <a key={index} href="#servicios" className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                    {service}
                  </a>)}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                  <div>
                    <p className="text-primary-foreground/80">
                      Tauramena, Casanare<br />
                      Colombia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:+573112295499" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">+57 3112295499</a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:info@gemasing.com" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">contacto@gemasing.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 GEMAS Ingeniería SAS BIC. Todos los derechos reservados.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                Política de privacidad
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-200">
                Términos de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;