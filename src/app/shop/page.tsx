import React from 'react';
import Image from 'next/image'; // Import Next Image component
import { 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';

// --- DATA PRODUK DENGAN GAMBAR ---
// Ganti URL 'image' dengan URL gambar produk asli dari Shopee
const HARDWARE_LIST = [
  {
    id: '1',
    name: 'Printer Thermal 58mm Bluetooth',
    desc: 'Untuk cetak nota di kasir, ukuran standar. hemat tinta, dengan baterai/tanpa kabel.',
    priceRange: 'Rp 250rb - 350rb',
    // Gunakan URL gambar asli. Ini hanya placeholder.
    image: 'https://down-id.img.susercontent.com/file/1afeafb6cbbdbf3068c0a815149f8723@resize_w900_nl.webp', 
    tag: 'Best Seller',
    tagColor: 'bg-yellow-100 text-yellow-800',
    link: 'https://s.shopee.co.id/9AIGVmtCh3?share_channel_code=1', 
  },
  {
    id: '2',
    name: 'Printer Thermal 80mm Bluetooth',
    desc: 'Untuk cetak nota dan label pesanan di kasir atau bagian dapur, ukuran lebih lebar.',
    priceRange: 'Rp 300rb - 400rb',
    image: 'https://down-id.img.susercontent.com/file/sg-11134201-7rdxn-lxwbt6va4jf0c3@resize_w900_nl.webp',
    tag: 'Professional',
    tagColor: 'bg-blue-100 text-blue-800',
    link: 'https://s.shopee.co.id/806J7dxe3m?share_channel_code=1',
  },
  {
    id: '2.1',
    name: 'Printer Thermal 58mm Bluetooth + USB + RJ11',
    desc: 'Untuk cetak nota di kasir, ukuran standar. dengan kabel listrik. Bisa dihubungkan ke Cashdrawer agar otomatis buka laci.',
    priceRange: 'Rp 300rb',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-7r991-lmrofhgl3urw50@resize_w900_nl.webp',
    tag: 'Professional',
    tagColor: 'bg-blue-100 text-blue-800',
    link: 'https://s.shopee.co.id/141dCgM7g?share_channel_code=1',
  },
  {
    id: '3',
    name: 'Paket Kertas Thermal 58mm (10 Roll)',
    desc: 'Kertas struk putih bersih, ukuran standar. Wajib stok.',
    priceRange: 'Rp 35rb / pack',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-7rbka-m70pp33togmi5a@resize_w900_nl.webp',
    tag: 'Wajib Stok',
    tagColor: 'bg-green-100 text-green-800',
    link: 'https://s.shopee.co.id/8zyqJTtq20?share_channel_code=1',
  },
  {
    id: '3.1',
    name: 'Paket Kertas Thermal 80mm',
    desc: 'Kertas struk putih bersih, untuk printer thermal ukuran 80mm. Isi 10 Roll.',
    priceRange: 'Rp 35rb / pack',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98q-lr775wcsep59b7@resize_w900_nl.webp',
    tag: 'Wajib Stok',
    tagColor: 'bg-green-100 text-green-800',
    link: 'https://s.shopee.co.id/8APjJwx0ip?share_channel_code=1',
  },
  {
    id: '4',
    name: 'Tablet Android 10 Inch',
    desc: 'Layar luas nyaman untuk kasir. Spesifikasi minimal untuk performa Kasir Q maksimal.',
    priceRange: 'Rp 2jt - 3jt',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-8224y-mh08r0213abxd6.webp',
    tag: 'Rekomendasi',
    tagColor: 'bg-purple-100 text-purple-800',
    link: 'https://s.shopee.co.id/8Kj9YdBztg?share_channel_code=1',
  },
  {
    id: '5',
    name: 'Laci Uang (Cash Drawer)',
    desc: 'Tempat penyimpanan uang kembalian, Otomatis terbuka saat print nota pembayaran cash (RJ11). Bahan besi kokoh.',
    priceRange: 'Rp 499rb',
    image: 'https://down-id.img.susercontent.com/file/id-11134207-7ra0g-mc60j4tt1pgf3a@resize_w900_nl.webp',
    tag: null,
    tagColor: '',
    link: 'https://s.shopee.co.id/8fLzurv6hy?share_channel_code=1',
  },
];

export default function HardwareShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* --- HERO BANNER --- */}
      <div className="bg-indigo-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Official Hardware Store
            </h1>
            <p className="text-indigo-100 text-lg max-w-2xl leading-relaxed">
              Koleksi perangkat kasir pilihan yang sudah 
              <span className="font-bold text-white bg-indigo-500/50 px-2 py-0.5 rounded mx-1">
                teruji kompatibel 100%
              </span> 
              dengan aplikasi Kasir Q.
            </p>
          </div>
          <div className="hidden md:block opacity-20 transform rotate-12">
             <CheckCircle2 size={120} />
          </div>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {HARDWARE_LIST.map((item) => {
            return (
              <div 
                key={item.id} 
                // Added group class for hover effects on child elements
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                
                {/* --- PRODUCT IMAGE CONTAINER --- */}
                {/* relative & aspect-square ensures a perfect square container */}
                <div className="relative w-full aspect-square bg-gray-50 p-4 overflow-hidden">
                   {/* Badge Tag Absolute */}
                   {item.tag && (
                    <span className={`absolute top-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  )}
                  
                  {/* Next Image with fill & object-contain */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* ------------------------------- */}


                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                    {item.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto w-full pt-3 border-t border-dashed border-gray-200">
                    <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wider">
                      Estimasi Harga
                    </p>
                    <p className="text-lg font-bold text-indigo-600">
                      {item.priceRange}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-4 pt-0 bg-white">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-2 bg-[#EE4D2D] hover:bg-[#d63f21] text-white font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-sm hover:shadow-md"
                  >
                    <span>Beli di Shopee</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            );
          })}

        </div>

        {/* --- DISCLAIMER --- */}
        <div className="mt-12 text-center border-t border-gray-200 pt-8 max-w-2xl mx-auto pb-10">
          <p className="text-sm text-gray-400 italic">
            *Kasir Q berpartisipasi dalam program afiliasi Shopee. Harga adalah estimasi dan dapat berubah.
          </p>
        </div>

      </main>
    </div>
  );
}