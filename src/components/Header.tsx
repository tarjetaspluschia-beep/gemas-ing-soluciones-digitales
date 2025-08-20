import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [{
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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-muted-foreground border-b">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+57 3</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contacto@gemasing.com</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/dc81770e-e27e-4c58-a256-9a988e6fc8db.png" alt="GEMAS Ingeniería SAS BIC" className="h-20 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                {item.name}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="lg" className="bg-yellow-600 hover:bg-yellow-500 text-slate-50">
              Solicitar asesoría
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navigation.map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-primary transition-colors duration-200 font-medium" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>)}
              <Button variant="cta" className="mt-4">
                Solicitar asesoría
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;