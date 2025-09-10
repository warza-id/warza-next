"use client";

import { useState } from 'react';

const BoxDescription = ({ activeKey } : any) => {
  const descriptions : any = {
    html: '<strong>HTML (HyperText Markup Language)</strong> adalah kerangka dari halaman web. Ia mendefinisikan struktur dan konten, seperti judul, paragraf, dan gambar.',
    css: '<strong>CSS (Cascading Style Sheets)</strong> adalah penata gaya. Ia mengatur tampilan visual, seperti warna, font, dan tata letak untuk membuat halaman web terlihat menarik.',
    js: '<strong>JavaScript</strong> adalah otak yang memberikan perilaku dan fungsionalitas. Ia menangani interaksi pengguna, mengubah konten secara dinamis, dan banyak lagi.'
  };

  return (
    <div className="w-full md:w-1/2 p-6 bg-gray-50 rounded-lg min-h-[150px] flex items-center justify-center">
      <p className="text-gray-700 text-center italic" dangerouslySetInnerHTML={{ __html: descriptions[activeKey] || 'Arahkan kursor atau klik sebuah kotak untuk melihat deskripsinya.' }} />
    </div>
  );
};

const HelloModal = ({ isOpen, onClose } : any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Pesan dari Halaman Web</h3>
        <p className="text-gray-600 mb-6">Hello, World!</p>
        <button onClick={onClose} className="bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-200 rounded-lg px-4 py-2 font-semibold">Tutup</button>
      </div>
    </div>
  );
};

export default function Page() {
  const [activeBox, setActiveBox] = useState('html');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="antialiased">
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f5f3f1;
            color: #3f3c3a;
        }
        .section-card {
            background-color: #ffffff;
            border: 1px solid #e7e5e4;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
            transition: all 0.3s ease-in-out;
        }
        .code-block {
            background-color: #282c34;
            color: #abb2bf;
            border-radius: 0.5rem;
            padding: 1rem;
            font-family: 'Courier New', Courier, monospace;
            overflow-x: auto;
        }
        .interactive-box {
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        .interactive-box.active {
            border-color: #4f46e5;
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Pengantar JavaScript</h1>
          <p className="text-lg text-gray-600">Membangun Website Interaktif Pertama Anda</p>
        </header>

        <main className="space-y-12">
          <section id="what-is-js" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Apa Itu JavaScript?</h2>
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-2xl mx-auto">JavaScript (JS) adalah bahasa pemrograman yang membuat website menjadi hidup. Jika HTML adalah kerangka dan CSS adalah tampilannya, maka JavaScript adalah otaknya. Klik pada setiap komponen di bawah untuk melihat perannya.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 space-y-4">
                <div id="box-html" className={`interactive-box p-4 bg-orange-50 border border-orange-200 rounded-lg shadow-sm ${activeBox === 'html' ? 'active' : ''}`} onClick={() => setActiveBox('html')}>
                  <h3 className="text-lg font-semibold text-orange-800">HTML</h3>
                </div>
                <div id="box-css" className={`interactive-box p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm ${activeBox === 'css' ? 'active' : ''}`} onClick={() => setActiveBox('css')}>
                  <h3 className="text-lg font-semibold text-blue-800">CSS</h3>
                </div>
                <div id="box-js" className={`interactive-box p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm ${activeBox === 'js' ? 'active' : ''}`} onClick={() => setActiveBox('js')}>
                  <h3 className="text-lg font-semibold text-yellow-800">JavaScript</h3>
                </div>
              </div>
              <BoxDescription activeKey={activeBox} />
            </div>
          </section>
          
          <section id="why-js" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Peran Penting JavaScript</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-indigo-700">Interaktivitas di Browser</h3>
                <p className="text-gray-600">Mengubah konten tanpa refresh, memvalidasi formulir, membuat animasi, dan merespons tindakan pengguna.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-indigo-700">Pengembangan Sisi Server</h3>
                <p className="text-gray-600">Dengan Node.js, JS digunakan untuk membangun backend, API, dan server yang kuat.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-indigo-700">Aplikasi Mobile & Desktop</h3>
                <p className="text-gray-600">Framework seperti React Native & Electron memungkinkan pembuatan aplikasi untuk berbagai platform.</p>
              </div>
            </div>
          </section>

          <section id="setup" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Persiapan Lingkungan</h2>
            <p className="text-gray-600 text-center mb-6">Anda tidak perlu instalasi yang rumit. Cukup dua hal ini:</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <div className="text-center p-6 bg-gray-50 rounded-lg flex-1">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="text-xl font-semibold mb-2">1. Teks Editor</h3>
                <p className="text-gray-600">Tempat Anda menulis kode. Rekomendasi populer adalah <a href="https://code.visualstudio.com/" target="_blank" className="text-indigo-600 hover:underline">Visual Studio Code</a>.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg flex-1">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-xl font-semibold mb-2">2. Web Browser</h3>
                <p className="text-gray-600">Untuk menjalankan kode. Semua browser modern sudah mendukung JavaScript. Buka Developer Tools dengan menekan F12.</p>
              </div>
            </div>
          </section>

          <section id="hello-world" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Kode Pertama: "Hello, World!"</h2>
            <p className="text-gray-600 text-center mb-6">Mari kita jalankan kode JavaScript pertama Anda. Cukup tekan tombol di bawah.</p>
            <div className="code-block text-sm">
              <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Halo Dunia!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script&gt;
      // Kode ini akan menampilkan pop-up
      alert("Hello, World!");
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
            </div>
            <div className="text-center mt-6">
              <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-6 py-3 font-semibold">Jalankan Kode</button>
            </div>
          </section>
          
          <section id="conclusion" className="text-center p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Langkah Selanjutnya</h2>
            <p className="text-gray-600 mb-6">Selamat! Anda telah menjalankan kode JavaScript pertama. Sekarang Anda siap untuk belajar bagaimana menyimpan dan memanipulasi data menggunakan **variabel dan tipe data**.</p>
          </section>
        </main>
      </div>
      <HelloModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
