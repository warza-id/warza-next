import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"

const testimonials = [
  {
    quote: "ApexCloud's infrastructure has been a game-changer for our scalability. We've seen a 300% increase in performance since migrating.",
    name: "Jane Doe",
    title: "CTO, Innovate Inc.",
    avatar: "JD",
    logoUrl: "https://placehold.co/120x40.png",
    logoHint: "logo technology"
  },
  {
    quote: "The reliability and security are top-notch. We trust ApexCloud with our most critical data, and they've never let us down.",
    name: "John Smith",
    title: "CEO, SecureNow",
    avatar: "JS",
    logoUrl: "https://placehold.co/120x40.png",
    logoHint: "logo security"
  },
  {
    quote: "Their developer tools and managed services save us hundreds of hours a month, allowing our team to focus on innovation.",
    name: "Emily White",
    title: "Head of Engineering, DevTools Co.",
    avatar: "EW",
    logoUrl: "https://placehold.co/120x40.png",
    logoHint: "logo developer"
  },
]

export default function Testimonials() {
  return (
    <section id="products" className="py-10 md:py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Produk Kami</h2>
          <p className="text-lg text-foreground/70 mb-12">
            Kami memiliki produk software yang bisa digunakan untuk bisnis anda.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card key={'ecommerce-key'} className="flex flex-col justify-between p-6 bg-card">
            <CardContent className="p-0 flex-1 mb-6">
              <p className="text-lg italic text-foreground/90">
                <Image src="/img/showcase-ecommerce.png" width={500} height={150} alt="Showcase ecommerce" />
              </p>
            </CardContent>
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <Image src="/img/logo-wcommerce.png" width={100} height={50} alt="Logo W Commerce" />
                </Avatar>
                <div>
                  <p className="font-semibold">WCommerce</p>
                  <p className="text-sm text-foreground/70">Web Ecommerce</p>
                </div>
              </div>
              <div className="border-t pt-4">
                Platform : Web Responsive<br />Fitur : Product, Shop, Payment.
              </div>
              <Button asChild className="w-full" variant={'outline'}>
                <Link href="https://blog.warza.id/" target="blank">Preview</Link>
              </Button>
            </div>
          </Card>

          <Card key={'compro-key'} className="flex flex-col justify-between p-6 bg-card">
            <CardContent className="p-0 flex-1 mb-6">
              <p className="text-lg italic text-foreground/90">
                <Image src="/img/showcase-compro.png" width={500} height={150} alt="Showcase Compro" />
              </p>
            </CardContent>
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  O | O
                </Avatar>
                <div>
                  <p className="font-semibold">Compro</p>
                  <p className="text-sm text-foreground/70">Website Company Profile</p>
                </div>
              </div>
              <div className="border-t pt-4">
                Platform : Web Responsive.<br />Fitur : Landing Page, Blog, Post, Dashboard, Commentar, Galery, Oranization.
              </div>
              <Button asChild className="w-full" variant={'outline'}>
                <Link href="http://perumahan.beebeesoft.com/" target="blank">Preview</Link>
              </Button>
            </div>
          </Card>

          <Card key={'shoping-key'} className="flex flex-col justify-between p-6 bg-card">
            <CardContent className="p-0 flex-1 mb-6">
              <p className="text-lg italic text-foreground/90">
                <Image src="/img/showcase-bazet.png" width={500} height={150} alt="Showcase Kasir" />
              </p>
            </CardContent>
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <Image src="/img/bazet-icon-mini.png" width={100} height={50} alt="Logo Beekasir" />
                </Avatar>
                <div>
                  <p className="font-semibold">Bazet</p>
                  <p className="text-sm text-foreground/70">Aplikasi Catatan Keuangan</p>
                </div>
              </div>
              <div className="border-t pt-4">
                Platform : Mobile Android.<br />Fitur : Catat Pendapatan, Catat Pengeluaran, Lihat Margin Keuangan.
              </div>
              <Button asChild className="w-full" variant={'outline'}>
                <Link href="https://play.google.com/store/apps/details?id=com.beebeesoft.bazet" target="blank">Preview</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Software As A Services</h2>
          <p className="text-lg text-foreground/70 mb-12">
            Kami memiliki produk software yang bisa langsung anda download gratis di google play store dan buat akun sendiri.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card key={'beekasir-key'} className="flex flex-col justify-between p-6 bg-card">
            <CardContent className="p-0 flex-1 mb-6">
              <p className="text-lg italic text-foreground/90">
                <Image src="/img/showcase-kasir.png" width={500} height={150} alt="Showcase Kasir" />
              </p>
            </CardContent>
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <Image src="/img/logo-beekasir.png" width={100} height={50} alt="Logo Beekasir" />
                </Avatar>
                <div>
                  <p className="font-semibold">Beekasir</p>
                  <p className="text-sm text-foreground/70">Aplikasi Kasir</p>
                </div>
              </div>
              <div className="border-t pt-4">
                Platform : Web, Mobile Android.<br />Fitur : Produk Stock Opname, Cashdrawer, Nota Cetak dan Digital.
              </div>
              <Button asChild className="w-full" variant={'outline'}>
                <Link href="https://play.google.com/store/apps/details?id=com.beebeesoft.beekasir" target="blank">Preview</Link>
              </Button>
            </div>
          </Card>

          <Card key={'compro-key'} className="flex flex-col justify-between p-6 bg-card">
            <CardContent className="p-0 flex-1 mb-6">
              <p className="text-lg italic text-foreground/90">
                <Image src="/img/showcase-compro.png" width={500} height={150} alt="Showcase Compro" />
              </p>
            </CardContent>
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  O | O
                </Avatar>
                <div>
                  <p className="font-semibold">Compro</p>
                  <p className="text-sm text-foreground/70">Website Company Profile</p>
                </div>
              </div>
              <div className="border-t pt-4">
                Platform : Web Responsive.<br />Fitur : Landing Page, Blog, Post, Dashboard, Commentar, Galery, Oranization.
              </div>
              <Button asChild className="w-full" variant={'outline'}>
                <Link href="http://perumahan.beebeesoft.com/" target="blank">Preview</Link>
              </Button>
            </div>
          </Card>

          <Card key={'shoping-key'} className="flex flex-col justify-between p-6 bg-card">
            <CardContent className="p-0 flex-1 mb-6">
              <p className="text-lg italic text-foreground/90">
                <Image src="/img/showcase-bazet.png" width={500} height={150} alt="Showcase Kasir" />
              </p>
            </CardContent>
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <Image src="/img/bazet-icon-mini.png" width={100} height={50} alt="Logo Beekasir" />
                </Avatar>
                <div>
                  <p className="font-semibold">Bazet</p>
                  <p className="text-sm text-foreground/70">Aplikasi Catatan Keuangan</p>
                </div>
              </div>
              <div className="border-t pt-4">
                Platform : Mobile Android.<br />Fitur : Catat Pendapatan, Catat Pengeluaran, Lihat Margin Keuangan.
              </div>
              <Button asChild className="w-full" variant={'outline'}>
                <Link href="https://play.google.com/store/apps/details?id=com.beebeesoft.bazet" target="blank">Preview</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
