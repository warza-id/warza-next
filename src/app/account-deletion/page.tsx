// app/account-deletion/page.tsx
import React from 'react';
import Link from 'next/link';

export default function AccountDeletionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl text-gray-800">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
        Penghapusan Akun dan Data
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Halaman ini menjelaskan cara pengguna aplikasi Warza meminta penghapusan akun dan semua data terkait.
      </p>

      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Bagaimana Cara Meminta Penghapusan Akun?
        </h2>
        
        <div className="space-y-6">
          <p>
            Jika Anda ingin menghapus akun Anda dan semua data yang terkait dengan aplikasi **Warza**, Anda dapat mengajukan permintaan melalui email.
          </p>
          
          <p>
            Permintaan ini akan diproses oleh tim kami, dan semua data yang terasosiasi dengan akun Anda akan dihapus secara permanen dari server kami.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">(Opsi 1) Langkah-langkah untuk Menghapus Akun via Email:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Kirimkan email ke alamat dukungan kami: **<a href="mailto:help@warza.id" className="text-blue-600 hover:underline">help@warza.id</a>**.</li>
              <li>Sertakan subjek email dengan jelas, contoh: <strong>"Permintaan Penghapusan Akun Warza"</strong>.</li>
              <li>Dalam isi email, mohon sertakan informasi berikut untuk verifikasi:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Alamat email atau ID pengguna yang terdaftar di aplikasi (jika ada).</li>
                  <li>Alasan Anda ingin menghapus akun (opsional, untuk membantu kami meningkatkan layanan).</li>
                </ul>
              </li>
            </ol>
          </div>

          
          
          <p className="italic text-gray-600">
            Setelah menerima permintaan Anda, tim kami akan memprosesnya dalam waktu 3-5 hari kerja. Anda akan menerima email konfirmasi setelah akun dan data Anda berhasil dihapus.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">(Opsi 2) Langkah-langkah untuk Menghapus Akun via Aplikasi:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Buka Aplikasi Main Menu</li>
              <li>Klik Menu Profile.</li>
              <li>Klik Hapus Akun
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Untuk konfirmasi masukan Email yang akan di hapus</li>
                  <li>Klik Hapus Sekarang</li>
                </ul>
              </li>
            </ol>
          </div>

          <p className="italic text-gray-600">
            Setelah berhasil, akun akan terhapus secara otomatis dan permanen.
          </p>
        </div>
        
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Lihat juga <Link href="/privacy-policy" className="text-blue-600 hover:underline">Kebijakan Privasi</Link> kami untuk informasi lebih lanjut mengenai pengelolaan data.
        </p>
      </div>
    </div>
  );
}