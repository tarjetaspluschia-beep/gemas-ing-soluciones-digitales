import React, { useState } from 'react';
import { Menu, X, Smartphone, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TPHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#caracteristicas', label: 'Características' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#precios', label: 'Precios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-primary to-secondary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+573197577476" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Smartphone className="h-4 w-4" />
              +57 319 757 7476
            </a>
            <a href="mailto:info@tarjetasplus.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Heart className="h-4 w-4" />
              info@tarjetasplus.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>¡Activación inmediata disponible!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  TarjetasPlus
                </h1>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Contacta • Impresiona • Vende
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-white shadow-lg hover:shadow-primary/25 transition-all duration-300"
              asChild
            >
              <a href="#contacto">Solicitar Tarjeta Plus</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                variant="default"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary text-white"
                asChild
              >
                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Tarjeta Plus
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default TPHeader;