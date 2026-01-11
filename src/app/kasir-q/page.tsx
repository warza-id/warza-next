import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Download, 
  MessageCircle, 
  CheckCircle2, 
  BarChart3, 
  Zap, 
  Smartphone, 
  ShieldCheck,
  Store
} from 'lucide-react';
import Footer from '@/components/landing/footer';

export const metadata = {
  title: 'Kasir Q - Aplikasi Kasir untuk UMKM',
  description: 'Digitalisasi bisnis Anda dengan Kasir Q, aplikasi kasir (Point Of Sales) serba bisa untuk UMKM. Unduh sekarang di PlayStore dan nikmati kemudahan mengelola usaha Anda!',
}

export default function LandingPage() {
  // Ganti link ini dengan link asli Anda
  const LINK_PLAYSTORE = "https://play.google.com/store/apps/details?id=com.beebeesoft.beekasir"; // Link lama/baru
  const LINK_WHATSAPP = "https://wa.me/6285171064406?text=Halo%20Admin%20Kasir%20Q,%20saya%20tertarik%20menggunakan%20aplikasi%20ini.";
  const VIDEO_EMBED_URL = "https://youtube.com/embed/5kbo9R5OQO8?si=UlQHJwUPhNmgO-i0&modestbranding=1"; // Ganti ID video Youtube

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder */}
            <Image src="/img/Kasir-Q.png" width={25} height={25} alt="Logo Kasir Q" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Kasir Q
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <Link href="#kelebihan" className="hover:text-blue-600 transition">Kelebihan</Link>
        <Link href="#fitur" className="hover:text-blue-600 transition">Fitur</Link>
        <Link href="#harga" className="hover:text-blue-600 transition">Harga</Link> {/* Tambahkan ini */}
        <Link href="#video" className="hover:text-blue-600 transition">Video</Link>
        </div>
          <Link 
            href={LINK_PLAYSTORE}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2"
          >
            <Download size={16} />
            Download
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-2 border border-blue-100">
                🚀 Solusi UMKM Indonesia #GoDigital
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                Kelola Bisnis Jadi Lebih Mudah dengan <span className="text-blue-600">Kasir Q</span>
              </h1>
              <p className="text-lg text-slate-600 md:pr-10">
                Aplikasi kasir (Point Of Sales) serba bisa untuk UMKM. Terhubung ke Ekosistem Warza Teknologi : Kasir Q, Antrian Q, HR Q, Affiliate Q dan Toko Online.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                <Link 
                  href={LINK_PLAYSTORE}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Download />
                  Download di PlayStore
                </Link>
                <Link 
                  href={LINK_WHATSAPP}
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-bold text-lg transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="text-green-500" />
                  Hubungi Sales
                </Link>
              </div>
              
              <div className="pt-6 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600" /> Aplikasi Terintegrasi Ekosistem Warza Teknologi.
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600" /> Multi Payment, Multi Cabang.
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600" /> Support Offline dan Online
                </div>
              </div>
            </div>

            {/* Right Image (Mockup) */}
            <div className="flex-1 relative">
              <div className="relative z-10 mx-auto w-72 h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl">
                {/* Screen Content Placeholder */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                   {/* Ganti src dengan screenshot aplikasi asli Anda */}
                   <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center text-slate-400 space-y-2">
                    
                      <Image 
                        src="/img/SC-KASIR-Q-MENU.jpeg" 
                        alt="Aplikasi Kasir Q" 
                        fill 
                        className="object-cover"
                      /> 
                     
                   </div>
                   {/* Mockup UI Elements */}
                   <div className="absolute bottom-20 left-4 right-4 h-32 bg-slate-100 rounded-xl"></div>
                   <div className="absolute bottom-4 left-4 right-4 h-12 bg-blue-600 rounded-lg"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: KELEBIHAN / KOMPARASI --- */}
      <section id="kelebihan" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mengapa Harus <span className="text-blue-600">Kasir Q</span>?</h2>
            <p className="text-slate-600 text-lg">
              Kami merancang Kasir Q untuk menutupi kekurangan aplikasi kasir lain. Lebih hemat, dari UMKM untuk UMKM.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Aplikasi Terintegrasi</h3>
              
                <ul className="list-disc list-inside space-y-2">
                  <li>Kasir Q : Aplikasi Kasir (Point Of Sales)</li>
                  <li>Antrian Q : Dashboard Manajemen Antrian</li>
                  <li>Toko Online : Jangkau transaksi jarak jauh</li>
                  <li>HR Q : Kelola Karyawan dan Absensi (segera hadir)</li>
                  <li>Finance Q : Kelola Keuangan dan Perpajakan (Segera Hadir)</li>
                </ul>
              
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Laporan Lengkap</h3>
              
                Membantu dalam pengambilan keputusan bisnis dengan laporan : 
                 <ul className="list-disc list-inside space-y-2">
                  <li>Penjualan - Omzet, Laba, Rugi</li>
                  <li>Pembelian - Belanja Modal dan Stok</li>
                  <li>Produk Terlaris</li>
                  <li>Produk Kurang Laku (segera hadir)</li>
                  <li>Laporan Utama untuk tau anda untung atau rugi (Segera Hadir)</li>
                </ul>
              
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Multiplatform</h3>
              
                Aplikasi Kasir Q dapat digunakan di berbagai perangkat :
                <ul className="list-disc list-inside space-y-2">
                  <li>Android</li>
                  <li>Ios (Segera Hadir)</li>
                  <li>Web Browser (bisa untuk semua perangkat)</li>
                </ul>
              
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: FITUR UNGGULAN --- */}
      <section id="fitur" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
               <h2 className="text-3xl font-bold text-slate-900">
                 Fitur Lengkap untuk <br />
                 Mendukung Bisnis Anda
               </h2>
               
               <div className="space-y-6">
                 <FeatureItem 
                   title="Nota/Struk masih ditulis manual? atau malah tanpa nota/struk?" 
                   desc="Resiko salah hitung, lama dan perlu catat dua kali bisa dihindari dengan Kasir Q Tinggal klik struk dicetak via printer thermal yang hemat tinta, bisa share eNota via WhatsApp juga lho hemat kertas!"
                 />
                 <FeatureItem 
                   title="Pembayaran masih pake banyak EDC? atau Tunai semua? atau masih cek manual sudah masuk atau belum?" 
                   desc="Pelanggan akan senang jika pembayaran mudah dan cepat, Kasir Q mendukung berbagai metode pembayaran : Tunai, QRIS, E-Wallet, Kartu Debit/Kredit, Transfer Bank dalam satu device tanpa input nominal dan cek manual."
                 />
                 <FeatureItem 
                   title="Jualan Online banyak potongannya? atau persaingan harga terlalu ketat?" 
                   desc="Buka Toko Online Sendiri aja. Kasir Q sudah terintegrasi dengan Toko Online Sendiri, jadi pelanggan bisa pesan dari rumah tanpa potongan, bisa bayar di tempat (COD), terhubung ke whatapp, dan Pembayaran terintegrasi."
                 />
                 <FeatureItem 
                   title="Saat pake aplikasi kasir tiba tiba internet mati, aplikasi jadi error atau gak bisa dipake?" 
                   desc="Tenang, Kasir Q bisa tetap dipakai walaupun internet mati, data akan tersinkronisasi otomatis saat koneksi kembali. Jadi transaksi tetap lancar tanpa hambatan."
                 />
               </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-4">
               {/* Grid of Images / Screenshots */}
               <div className="space-y-4 mt-8">
                 <div className="h-64 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Dashboard UI</span>
                 </div>
                 <div className="h-40 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center">
                    <span className="text-blue-400 text-sm">Struk Digital</span>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="h-40 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center">
                    <span className="text-orange-400 text-sm">Laporan</span>
                 </div>
                 <div className="h-64 bg-slate-100 rounded-2xl border border-slate-200 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Scan QRIS</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: PILIHAN PAKET HARGA --- */}
      <section id="harga" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Pilih Paket Sesuai Kebutuhan
            </h2>
            <p className="text-slate-600 text-lg">
              Mulai dari gratis selamanya hingga paket lengkap untuk ekspansi bisnis Anda.
            </p>
          </div>

          {/* Grid Layout untuk 5 Card */}
          <div className="flex flex-wrap justify-center gap-6">
            
            {/* 1. PAKET GRATIS */}
            <PricingCard 
              name="Gratis"
              price="Rp 0"
              desc="Cocok untuk coba-coba"
              features={[
                "Iklan Aktif",
                "Fitur Dasar Kasir",
                "Laporan Sederhana",
                "1 Akun Device",
              ]}
              buttonText="Download Sekarang"
              isOutline
            />

            {/* 2. PAKET PEDAGANG */}
            <PricingCard 
              name="Pedagang"
              price="Rp 30.000"
              period="/bulan"
              desc="Untuk usaha mikro"
              features={[
                "Bebas Iklan (No Ads)",
                "1 Akun Kasir",
                "Upload Gambar Produk",
                "Support Standar",
              ]}
              buttonText="Pilih Paket"
              highlight
            />

            {/* 3. PAKET PERINTIS */}
            <PricingCard 
              name="Perintis"
              price="Rp 50.000"
              period="/bulan"
              desc="Untuk usaha berkembang"
              features={[
                "Bebas Iklan",
                "3 Akun Kasir",
                "1 Cabang Toko",
                "Upload Gambar Produk",
                "Laporan Lengkap",
              ]}
              buttonText="Pilih Paket"
              isPopular
            />

            {/* 4. PAKET PENGUSAHA */}
            <PricingCard 
              name="Pengusaha"
              price="Rp 100.000"
              period="/bulan"
              desc="Untuk ekspansi bisnis"
              features={[
                "Bebas Iklan",
                "5 Akun Kasir",
                "Unlimited Cabang",
                "Prioritas Support",
                "Fitur Premium Lengkap",
              ]}
              buttonText="Pilih Paket"
              highlight
            />

            {/* 5. PAKET ENTERPRISE */}
            <PricingCard 
              name="Enterprise"
              price="Hubungi Kami"
              desc="Solusi kustom bisnis besar"
              features={[
                "Akun & Cabang Tanpa Batas",
                "Custom Fitur (Request)",
                "Dedicated Server",
                "Training Pegawai",
                "Support VIP 24/7",
              ]}
              buttonText="Kontak Sales"
              isDark
            />

          </div>
        </div>
      </section>

      {/* --- SECTION: VIDEO DEMO --- */}
      <section id="video" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Lihat Kasir Q Beraksi</h2>
          <div className="max-w-4xl mx-auto aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative">
            
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={VIDEO_EMBED_URL} 
                    title="Video Demo Kasir Q" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    className="w-full h-full absolute inset-0"
                  ></iframe>
                  {/* <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center pointer-events-none">
                     <p className="text-slate-400">Video Demo Preview</p>
                     <p className="text-slate-600 text-sm mt-2">(Masukkan ID Youtube di kode)</p>
                  </div> */}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mengembangkan Usaha Anda?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan UMKM lain yang sudah beralih ke digital. Download Kasir Q sekarang, Gratis!<br />
            Butuh bantuan? Tim kami siap membantu Anda mulai dari cara penggunaan aplikasi, input data, sampai bisa jualan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href={LINK_PLAYSTORE}
              className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold text-lg transition flex items-center justify-center gap-3"
            >
              <Download />
              Download Aplikasi
            </Link>
            <Link 
              href={LINK_WHATSAPP}
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-xl font-bold text-lg transition flex items-center justify-center gap-3"
            >
              <MessageCircle />
              Tanya Admin via WA
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />

    </div>
  );
}

// Component Helper untuk List Fitur
function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
          <CheckCircle2 size={14} className="text-blue-600" />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
        <p className="text-slate-600 mt-1 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}

// Component Helper untuk Kartu Harga
function PricingCard({ 
  name, 
  price, 
  period = "", 
  desc, 
  features, 
  buttonText, 
  isPopular = false,
  isDark = false,
  isOutline = false,
  highlight = false
}: { 
  name: string, 
  price: string, 
  period?: string, 
  desc: string, 
  features: string[], 
  buttonText: string,
  isPopular?: boolean,
  isDark?: boolean,
  isOutline?: boolean,
  highlight?: boolean
}) {
  return (
    <div className={`
      relative w-full md:w-[280px] p-8 rounded-3xl flex flex-col transition-all duration-300
      ${isPopular ? 'bg-white border-2 border-blue-600 shadow-xl scale-105 z-10' : ''}
      ${isDark ? 'bg-slate-900 text-white shadow-lg' : 'bg-white'}
      ${!isPopular && !isDark ? 'border border-slate-100 shadow-sm hover:shadow-md' : ''}
    `}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          Paling Laris
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{name}</h3>
        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      </div>

      <div className="mb-6">
        <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{price}</span>
        <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{period}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <CheckCircle2 size={18} className={`${isDark || isPopular || highlight ? 'text-blue-500' : 'text-slate-400'} shrink-0`} />
            <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
          </li>
        ))}
      </ul>

      <Link 
        href="https://wa.me/6285171064406?text=Halo%20Admin%20Kasir%20Q,%20saya%20tertarik%20menggunakan%20aplikasi%20ini." 
        className={`
          w-full py-3 rounded-xl font-bold text-sm transition text-center
          ${isPopular || isDark || highlight
            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' 
            : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
          }
        `}
      >
        {buttonText}
      </Link>
    </div>
  )
}