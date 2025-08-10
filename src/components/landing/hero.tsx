import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-background pt-32 pb-20 md:pt-48 md:pb-32">
       <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.4) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
          maskImage: 'radial-gradient(ellipse 100% 60% at 50% 50%, black, transparent)',
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Warza
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            UMKM Jasa Pembuatan Software untuk support bisnis anda.<br/>Seperti : Aplikasi Kasir, Sistem HR, Absensi Karyawan, dan Website Perusahaan.
            dengan harga terjangkau sesuai kebutuhan bisnis anda.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Request a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
