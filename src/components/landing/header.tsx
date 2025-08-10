"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cloud, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMenuOpen ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Cloud className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline">ApexCloud</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button asChild>
              <Link href="#contact">Request a Consultation</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-background/95">
          <nav className="flex flex-col items-center gap-4 py-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg font-medium hover:text-primary transition-colors" onClick={toggleMenu}>
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link href="#contact" onClick={toggleMenu}>Request a Consultation</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
