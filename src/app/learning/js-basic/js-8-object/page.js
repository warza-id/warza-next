"use client";

import { useState } from 'react';

const exercises = [
  {
    id: 1,
    question: "Tuliskan sintaks untuk mengakses properti 'nama' dari objek `pengguna`.",
    correctAnswer: "pengguna.nama"
  },
  {
    id: 2,
    question: "Jika `produk = { harga: 1000 };`, apa hasil dari `produk.harga`?",
    correctAnswer: "1000"
  },
  {
    id: 3,
    question: "Tuliskan sintaks untuk mengubah properti 'usia' menjadi 25 pada objek `orang = { nama: 'Budi', usia: 20 };`.",
    correctAnswer: "orang.usia = 25"
  },
  {
    id: 4,
    question: "Bagaimana cara menambahkan properti 'kota' dengan nilai 'Jakarta' pada objek `pengguna = { nama: 'Ana' };`?",
    correctAnswer: "pengguna.kota = 'Jakarta'"
  },
  {
    id: 5,
    question: "Apa output dari `console.log(buku.penulis)` jika `const buku = { judul: 'Laskar Pelangi' };`?",
    correctAnswer: "undefined"
  },
  {
    id: 6,
    question: "Tuliskan sintaks untuk menghapus properti 'warna' dari objek `mobil = { merek: 'Toyota', warna: 'Merah' };`.",
    correctAnswer: "delete mobil.warna"
  },
  {
    id: 7,
    question: "Apakah objek bisa memiliki properti dengan nama yang merupakan string dengan spasi, misalnya 'jenis makanan'?",
    correctAnswer: "Ya"
  },
  {
    id: 8,
    question: "Jika nama properti memiliki spasi, bagaimana cara mengaksesnya dari objek `menu = { 'jenis makanan': 'Bakso' };`?",
    correctAnswer: "menu['jenis makanan']"
  },
  {
    id: 9,
    question: "Apa hasil dari `Object.keys(laptop)` jika `const laptop = { merek: 'Dell', harga: 12000000 };`?",
    correctAnswer: "['merek', 'harga']"
  },
  {
    id: 10,
    question: "Tuliskan satu alasan mengapa objek lebih disukai daripada array untuk menyimpan data yang tidak berurutan.",
    correctAnswer: "Properti objek memiliki nama yang bermakna"
  }
];

export default function ObjekDasar() {
  const [answers, setAnswers] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));
  const [results, setResults] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));

  const handleInputChange = (e, id) => {
    const newAnswers = { ...answers, [id]: e.target.value };
    setAnswers(newAnswers);
  };

  const checkAnswers = (id) => {
    const exercise = exercises.find(ex => ex.id === id);
    if (!exercise) return;
    const isCorrect = exercise.correctAnswer.toLowerCase().replace(/\s/g, '').replace(/[\.,!`]/g, '') === answers[id].toLowerCase().replace(/\s/g, '').replace(/[\.,!`]/g, '');
    if (isCorrect) {
      setResults({ ...results, [id]: 'Jawaban Benar!' });
    } else {
      setResults({ ...results, [id]: `Jawaban Salah. Jawaban yang benar adalah '${exercise.correctAnswer}'` });
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
      `}</style>
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Bekerja dengan Objek</h1>
          <p className="text-lg text-gray-600">Simpan data dalam pasangan properti dan nilai.</p>
        </header>

        <main className="space-y-12">
          
          <section id="what-is-object" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Apa itu Objek?</h2>
            <p className="text-gray-600 mb-6">
              Objek adalah struktur data yang digunakan untuk menyimpan kumpulan data terstruktur dalam pasangan **properti** dan **nilai**. Objek mirip dengan array, tetapi daripada menggunakan indeks numerik, Anda menggunakan nama properti yang bermakna. .
            </p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deklarasi Objek</h3>
                <div className="code-block text-sm">
                  <pre><code>{`const pengguna = {
  nama: 'Budi',
  usia: 30,
  isMember: true
};`}</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Akses Properti</h3>
                <p className="text-gray-600 mb-4">
                  Anda dapat mengakses nilai properti menggunakan notasi titik (`.`) atau tanda kurung siku (`[]`).
                </p>
                <div className="code-block text-sm">
                  <pre><code>{`// Notasi titik
console.log(pengguna.nama); // Output: Budi

// Notasi tanda kurung siku
console.log(pengguna['usia']); // Output: 30`}</code></pre>
                </div>
              </div>
            </div>
          </section>

          <section id="manipulating-objects" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Memanipulasi Objek</h2>
            <p className="text-gray-600 mb-6">
              Anda bisa mengubah, menambah, atau menghapus properti objek dengan mudah.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Menambah Properti</h3>
                <div className="code-block text-sm">
                  <pre><code>{`const mobil = {};
mobil.merek = 'Toyota';
mobil['model'] = 'Avanza';
console.log(mobil); // Output: { merek: 'Toyota', model: 'Avanza' }`}</code></pre>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mengubah Nilai Properti</h3>
                <div className="code-block text-sm">
                  <pre><code>{`mobil.merek = 'Honda';
console.log(mobil.merek); // Output: Honda`}</code></pre>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Menghapus Properti</h3>
                <div className="code-block text-sm">
                  <pre><code>{`delete mobil.model;
console.log(mobil); // Output: { merek: 'Honda' }`}</code></pre>
                </div>
              </div>
            </div>
          </section>

          <section id="exercises" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latihan Soal</h2>
            <div className="space-y-8">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Soal {exercise.id}</h3>
                  <p className="text-gray-600 mb-4">{exercise.question}</p>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <input
                      type="text"
                      value={answers[exercise.id]}
                      onChange={(e) => handleInputChange(e, exercise.id)}
                      placeholder="Tulis jawaban Anda..."
                      className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg"
                    />
                    <button
                      onClick={() => checkAnswers(exercise.id)}
                      className="bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-4 py-2 font-semibold"
                    >
                      Cek Jawaban
                    </button>
                  </div>
                  {results[exercise.id] && <p className="mt-4 font-medium">{results[exercise.id]}</p>}
                </div>
              ))}
            </div>
          </section>

          <section id="conclusion" className="text-center p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Langkah Selanjutnya</h2>
            <p className="text-gray-600 mb-6">
              Objek dan array sering digunakan bersamaan. Menguasai keduanya akan membuka pintu untuk membangun aplikasi yang lebih kompleks dan terorganisir.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
