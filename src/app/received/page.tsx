import React from 'react';

// 
// Ikon Sederhana (SVG) untuk status sukses. Anda bisa menggantinya dengan react-icons.
const CheckIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-16 h-16 text-green-500"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

// 
// Ikon Sederhana (SVG) untuk status pending/gagal.
const WarningIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-16 h-16 text-yellow-500"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);


// Tentukan tipe untuk searchParams yang kita harapkan
type ReceivedPageProps = {
  searchParams: {
    order_id?: string;
    status_code?: string;
    transaction_status?: string;
  };
};

/**
 * Halaman untuk menampilkan status transaksi setelah redirect dari payment gateway.
 */
export default function ReceivedPage({ searchParams }: ReceivedPageProps) {
  const { order_id, status_code, transaction_status } = searchParams;

  // Cek apakah transaksi sukses berdasarkan parameter
  const isSuccess = status_code === '200' && transaction_status === 'settlement';

  // Fallback jika parameter tidak ada
  if (!order_id || !status_code || !transaction_status) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-lg bg-white p-8 md:p-12 shadow-xl rounded-lg text-center">
          <WarningIcon />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            Link Tidak Valid
          </h1>
          <p className="text-gray-600 mt-2">
            Parameter transaksi tidak ditemukan. Harap periksa kembali link Anda.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Kartu responsif:
        - `w-full`: Lebar penuh di layar kecil
        - `max-w-lg`: Lebar maksimum di layar besar (lg)
        - `p-6 md:p-10`: Padding responsif
      */}
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Bagian Header Kartu */}
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 border-b">
          {isSuccess ? <CheckIcon /> : <WarningIcon />}
          <h1 className="mt-4 text-3xl font-bold text-center text-gray-800">
            {isSuccess ? 'Pembayaran Berhasil' : 'Transaksi Diproses'}
          </h1>
          <p className="mt-2 text-gray-600">
            {isSuccess 
              ? 'Terima kasih, transaksi Anda telah kami terima.' 
              : 'Status transaksi Anda: ' + transaction_status
            }
          </p>
        </div>

        {/* Bagian Detail Transaksi */}
        <div className="p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Detail Transaksi
          </h2>
          
          {/* Item Detail: Order ID */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <span className="text-sm font-medium text-gray-500">
              Order ID
            </span>
            <span className="text-base font-medium text-gray-800 font-mono break-all">
              {order_id}
            </span>
          </div>
          
          {/* Item Detail: Transaction Status */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <span className="text-sm font-medium text-gray-500">
              Status Transaksi
            </span>
            <span className={`text-base font-medium ${isSuccess ? 'text-green-600' : 'text-yellow-600'}`}>
              {transaction_status}
            </span>
          </div>

          {/* Item Detail: Status Code */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <span className="text-sm font-medium text-gray-500">
              Kode Status
            </span>
            <span className="text-base font-medium text-gray-800">
              {status_code}
            </span>
          </div>
        </div>

        {/* Bagian Footer Kartu (Aksi) */}
        <div className="p-6 bg-gray-50 text-center">
          <a
            href="/" // Ganti dengan link yang Anda inginkan, misal '/dashboard'
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </main>
  );
}