// app/privacy-policy/page.tsx
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-8">Kebijakan Privasi</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Aplikasi Warza Teknologi</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Kasir Q</strong>: Aplikasi Kasir berbasis android dan web</li>
          <li><strong>Antrian Q</strong>: Aplikasi Antrian berbasis android dan web.</li>
          <li><strong>HR Q</strong>: Human Resource Information System berbasis android dan web.</li>
        </ul>
        <p className="mb-4">
          Kebijakan Privasi ini menjelaskan bagaimana <strong>Warza Teknologi</strong> (&quot;Aplikasi&quot;, &quot;kami&quot;, &quot;milik kami&quot;) mengumpulkan, menggunakan, dan mengungkapkan informasi Anda ketika Anda menggunakan layanan kami.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">1. Informasi yang Kami Kumpulkan</h3>
        <p className="mb-4">
          Aplikasi <strong>Warza Teknologi</strong> adalah aplikasi gratis dan tidak secara langsung mengumpulkan informasi identitas pribadi (seperti nama, alamat email, atau nomor telepon) dari pengguna.
        </p>

        <p className="mb-4">
          Kami dapat mengumpulkan informasi non-pribadi secara otomatis, termasuk namun tidak terbatas pada:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Informasi Perangkat</strong>: Model perangkat Anda, sistem operasi, versi aplikasi, dan pengenal unik perangkat (seperti ID iklan).</li>
          <li><strong>Data Penggunaan</strong>: Informasi tentang bagaimana Anda berinteraksi dengan Aplikasi, seperti durasi sesi, fitur yang digunakan, dan frekuensi penggunaan.</li>
        </ul>
        <p>
          Informasi ini dikumpulkan untuk tujuan analitik internal guna meningkatkan fungsionalitas dan kinerja Aplikasi.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">2. Data yang Dikumpulkan oleh Pihak Ketiga</h3>
        <p className="mb-4">
          Aplikasi kami menggunakan layanan pihak ketiga yang dapat mengumpulkan informasi untuk tujuan mereka sendiri. Layanan-layanan ini tunduk pada kebijakan privasi mereka sendiri. Kami menggunakan layanan berikut:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Google Analytics for Firebase</strong>: Untuk menganalisis penggunaan Aplikasi dan perilaku pengguna. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tautan ke Kebijakan Privasi Google</a></li>
          <li><strong>Google AdMob</strong>: Jika Aplikasi menampilkan iklan, Google AdMob dapat mengumpulkan data untuk tujuan penayangan iklan yang dipersonalisasi. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tautan ke Kebijakan Privasi Google</a></li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">3. Izin yang Diperlukan Aplikasi</h3>
        <p className="mb-4">
          Aplikasi kami mungkin meminta izin tertentu pada perangkat Anda untuk berfungsi dengan baik. Izin-izin ini digunakan untuk tujuan yang spesifik, seperti:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Akses Internet</strong>: Untuk memuat iklan dan data analitik.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">4. Keamanan Data Anda</h3>
        <p className="mb-4">
          Kami berkomitmen untuk melindungi informasi Anda. Meskipun kami mengambil langkah-langkah yang wajar untuk melindungi data yang kami kumpulkan, tidak ada metode transmisi data melalui internet atau penyimpanan elektronik yang 100% aman.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">5. Perubahan pada Kebijakan Privasi Ini</h3>
        <p className="mb-4">
          Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini. Perubahan ini berlaku segera setelah diposting di halaman ini.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-2">6. Hubungi Kami</h3>
        <p className="mb-4">
          Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Email</strong>: help@warza.id</li>
        </ul>
      </div>
    </div>
  );
}