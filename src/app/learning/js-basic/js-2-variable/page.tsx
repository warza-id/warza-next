"use client";

import { useState } from 'react';

const codeSnippets = {
  var: `var nama = "John";\nvar usia = 30;`,
  let: `let kota = "Jakarta";\nkota = "Bandung"; // Bisa diubah`,
  const: `const phi = 3.14;\n// phi = 3.14159; // Akan error!`,
  primitif: `let namaDepan: string = "Jane";
let umur: number = 25;
let aktif: boolean = true;
let tidakAda: null = null;
let belumDidefinisikan: undefined = undefined;`,
  nonPrimitif: `const person = {
  nama: "Alice",
  umur: 28,
};

const fruits = ["Apel", "Jeruk", "Pisang"];`
};

export default function VariabelTipeData() {
  const [activeTab, setActiveTab] = useState<'var' | 'let' | 'const'>('let');
  const [activeDataType, setActiveDataType] = useState<'primitif' | 'nonPrimitif'>('primitif');
  const [q1Answer, setQ1Answer] = useState('');
  const [q1Result, setQ1Result] = useState('');
  const [q2Answer, setQ2Answer] = useState('');
  const [q2Result, setQ2Result] = useState('');

  const checkQ1 = () => {
    if (q1Answer === 'const') {
      setQ1Result('Jawaban Benar! const adalah pilihan terbaik untuk nilai yang tidak akan berubah.');
    } else {
      setQ1Result('Jawaban Salah. Coba lagi!');
    }
  };

  const checkQ2 = () => {
    if (q2Answer === 'boolean') {
      setQ2Result('Jawaban Benar! true dan false adalah nilai boolean.');
    } else {
      setQ2Result('Jawaban Salah. Pikirkan kembali jenis data yang menyimpan nilai benar/salah.');
    }
  };

  return (
    <div className="antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
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
        .tab-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 500;
            transition: all 0.2s ease-in-out;
        }
        .tab-btn.active {
            background-color: #4f46e5;
            color: white;
            box-shadow: 0 4px 6px -1px rgb(79 70 229 / 0.2), 0 2px 4px -2px rgb(79 70 229 / 0.1);
        }
      `}</style>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Variabel dan Tipe Data</h1>
          <p className="text-lg text-gray-600">Dasar dari setiap program adalah menyimpan dan mengolah data.</p>
        </header>

        <main className="space-y-12">
          
          <section id="variables" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Apa Itu Variabel?</h2>
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-2xl mx-auto">Variabel adalah "wadah" untuk menyimpan nilai data. Di JavaScript, ada tiga cara untuk mendeklarasikan variabel: `var`, `let`, dan `const`.</p>
            </div>
            <div className="flex justify-center mb-6 space-x-4">
              <button
                className={`tab-btn ${activeTab === 'let' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('let')}
              >
                let
              </button>
              <button
                className={`tab-btn ${activeTab === 'const' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('const')}
              >
                const
              </button>
              <button
                className={`tab-btn ${activeTab === 'var' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('var')}
              >
                var
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <div className="code-block text-sm">
                        <pre><code>{codeSnippets[activeTab]}</code></pre>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    {activeTab === 'let' && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">let</h3>
                            <p className="text-gray-600">Digunakan untuk variabel yang nilainya bisa **diubah** di kemudian hari. Ini adalah cara modern yang paling sering digunakan.</p>
                        </div>
                    )}
                    {activeTab === 'const' && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">const</h3>
                            <p className="text-gray-600">Digunakan untuk variabel yang nilainya **tidak bisa diubah** (konstan). Gunakan ini jika Anda yakin nilainya tidak akan berubah.</p>
                        </div>
                    )}
                    {activeTab === 'var' && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">var</h3>
                            <p className="text-gray-600">Cara lama untuk mendeklarasikan variabel. Saat ini sudah jarang digunakan karena memiliki beberapa kelemahan (misalnya, cakupan variabel yang tidak jelas).</p>
                        </div>
                    )}
                </div>
            </div>
          </section>

          <section id="data-types" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tipe Data</h2>
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-2xl mx-auto">Tipe data menentukan jenis nilai yang bisa disimpan oleh sebuah variabel. Ada dua kategori utama: Primitif dan Non-Primitif.</p>
            </div>
            <div className="flex justify-center mb-6 space-x-4">
              <button
                className={`tab-btn ${activeDataType === 'primitif' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveDataType('primitif')}
              >
                Primitif
              </button>
              <button
                className={`tab-btn ${activeDataType === 'nonPrimitif' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveDataType('nonPrimitif')}
              >
                Non-Primitif
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <div className="code-block text-sm">
                        <pre><code>{codeSnippets[activeDataType]}</code></pre>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    {activeDataType === 'primitif' && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Tipe Data Primitif</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li><strong>string:</strong> Teks. Contoh: `"Hello World"`.</li>
                                <li><strong>number:</strong> Angka, termasuk desimal. Contoh: `100`, `3.14`.</li>
                                <li><strong>boolean:</strong> Nilai logika (`true` atau `false`).</li>
                                <li><strong>null:</strong> Nilai kosong yang disengaja.</li>
                                <li><strong>undefined:</strong> Variabel yang belum memiliki nilai.</li>
                            </ul>
                        </div>
                    )}
                    {activeDataType === 'nonPrimitif' && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Tipe Data Non-Primitif</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li><strong>Object:</strong> Koleksi pasangan kunci-nilai. Contoh: data profil pengguna.</li>
                                <li><strong>Array:</strong> Koleksi nilai yang diurutkan. Contoh: daftar belanja.</li>
                            </ul>
                            <p className="text-gray-600 mt-4">Tipe data non-primitif adalah objek. Mereka menyimpan referensi, bukan nilai itu sendiri.</p>
                        </div>
                    )}
                </div>
            </div>
          </section>

          <section id="exercises" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latihan</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Soal 1: Pemilihan Variabel</h3>
                <p className="text-gray-600 mb-4">Anda ingin menyimpan nilai Pi ($$3.14159$$) yang tidak akan pernah berubah. Deklarasi variabel mana yang paling tepat?</p>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <label className="flex items-center text-gray-600">
                    <input type="radio" name="q1" value="let" checked={q1Answer === 'let'} onChange={(e) => setQ1Answer(e.target.value)} className="mr-2" /> let
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input type="radio" name="q1" value="const" checked={q1Answer === 'const'} onChange={(e) => setQ1Answer(e.target.value)} className="mr-2" /> const
                  </label>
                  <label className="flex items-center text-gray-600">
                    <input type="radio" name="q1" value="var" checked={q1Answer === 'var'} onChange={(e) => setQ1Answer(e.target.value)} className="mr-2" /> var
                  </label>
                </div>
                <button onClick={checkQ1} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-4 py-2 font-semibold">Cek Jawaban</button>
                {q1Result && <p className="mt-4 font-medium" dangerouslySetInnerHTML={{ __html: q1Result }}></p>}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Soal 2: Identifikasi Tipe Data</h3>
                <p className="text-gray-600 mb-4">Tipe data apa yang digunakan untuk menyimpan nilai logika seperti `true` atau `false`?</p>
                <input type="text" value={q2Answer} onChange={(e) => setQ2Answer(e.target.value)} placeholder="Tulis jawaban di sini..." className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg mb-4" />
                <button onClick={checkQ2} className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-4 py-2 font-semibold">Cek Jawaban</button>
                {q2Result && <p className="mt-4 font-medium" dangerouslySetInnerHTML={{ __html: q2Result }}></p>}
              </div>
            </div>
          </section>

          <section id="conclusion" className="text-center p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Langkah Selanjutnya</h2>
            <p className="text-gray-600 mb-6">Memahami variabel dan tipe data adalah pondasi fundamental. Sekarang Anda dapat menyimpan dan mengolah informasi di dalam program Anda.</p>
          </section>

        </main>
      </div>
    </div>
  );
}
