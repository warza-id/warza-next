import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"

interface Product {
  desc: string;
  short: string;
  title: string;
  avatar: string;
  logoUrl: string;
  logoHint: string;
}

const listProduct : Product[] = [
  {
    desc: "Fitur : \n- Transaksi Penjualan\n- Manajemen Produk\n- Laporan Penjualan\n- Manajemen Pelanggan\n- Multi User",
    short: "Point of Sale",
    title: "Kasir Q",
    avatar: "/img/logo-beekasir.png",
    logoUrl: "/img/showcase-kasir.png",
    logoHint: "/kasir-q"
  },
  {
    desc: "Fitur : \n- Cetak Nomor Antria\n- Display Dashboard Antrian\n- Panggilan Suara\n- eAntrian (lihat antrian terakhir realtime)",
    short: "Mesin Antrian",
    title: "Antrian Q",
    avatar: "/img/LogoAntrianku.png",
    logoUrl: "/img/showcase-antrianku.png",
    logoHint: "https://play.google.com/store/apps/details?id=com.warza.antrianku"
  },
  // {
  //   desc: "Deskripsi",
  //   short: "Kelola Keuangan",
  //   title: "Bazet",
  //   avatar: "/img/bazet-icon-mini.png",
  //   logoUrl: "/img/showcase-bazet.png",
  //   logoHint: "https://play.google.com/store/apps/details?id=com.beebeesoft.bazet"
  // },
  {
    desc: "Fitur : \n- Halaman Profil Perusahaan\n- Layanan dan Produk\n- Kontak Perusahaan\n- Galeri Foto",
    short: "Website Company Profile",
    title: "Compro",
    avatar: "/img/compro.png",
    logoUrl: "/img/showcase-compro.png",
    logoHint: "http://perumahan.beebeesoft.com/"
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
          {listProduct.map((product : Product, index) => (
          <Card key={index} className="flex flex-col justify-between p-6 bg-card">
            <CardContent className="p-0 flex-1 mb-6">
              <p className="text-lg italic text-foreground/90">
                <Image src={product.logoUrl} width={500} height={150} alt="Showcase ecommerce" />
              </p>
            </CardContent>
            <div className="mt-auto">
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <Image src={product.avatar} width={100} height={50} alt={product.title} />
                </Avatar>
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-sm text-foreground/70">{product.short}</p>
                </div>
              </div>
              <div className="border-t pt-4">
                {product.desc}
              </div>
              <Button asChild className="w-full" variant={'outline'}>
                <Link href={product.logoHint}>Preview</Link>
              </Button>
            </div>
          </Card>))}
        </div>
      </div>
    </section>
  )
}
