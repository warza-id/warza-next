"use client";

import { useState } from 'react';

const exercises = [
  {
    id: 1,
    question: "Tuliskan hasil dari `buah[1]` jika `const buah = ['Apel', 'Jeruk', 'Mangga'];`",
    correctAnswer: "Jeruk"
  },
  {
    id: 2,
    question: "Berapa panjang array `const warna = ['Merah', 'Biru', 'Hijau', 'Kuning'];`?",
    correctAnswer: "4"
  },
  {
    id: 3,
    question: "Tuliskan sintaks untuk menambahkan 'Durian' ke akhir array `const buah = ['Apel', 'Jeruk'];`",
    correctAnswer: "buah.push('Durian')"
  },
  {
    id: 4,
    question: "Setelah `const angka = [1, 2, 3];` dan `angka.pop();`, elemen apa yang tersisa di array?",
    correctAnswer: "1, 2"
  },
  {
    id: 5,
    question: "Apa output dari `hewan.shift()` jika `const hewan = ['Kucing', 'Anjing', 'Kelinci'];`?",
    correctAnswer: "Kucing"
  },
  {
    id: 6,
    question: "Tuliskan sintaks untuk menambahkan 'Gajah' ke awal array `const hewan = ['Singa', 'Harimau'];`",
    correctAnswer: "hewan.unshift('Gajah')"
  },
  {
    id: 7,
    question: "Setelah operasi berikut, apa isi array `const data = [10, 20]; data.push(30); data.shift();`?",
    correctAnswer: "20, 30"
  },
  {
    id: 8,
    question: "Bagaimana cara mengakses elemen terakhir dari array `const items = ['A', 'B', 'C'];` menggunakan properti `.length`?",
    correctAnswer: "items[items.length - 1]"
  },
  {
    id: 9,
    question: "Apa hasil akhir dari array `const arr = ['a', 'b']; arr.push('c'); arr.pop();`?",
    correctAnswer: "a, b"
  },
  {
    id: 10,
    question: "Array dapat menyimpan data dengan tipe apa saja?",
    correctAnswer: "Beragam tipe data"
  }
];

export default function ArrayDasar() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Bekerja dengan Array</h1>
          <p className="text-lg text-gray-600">Pelajari cara menyimpan dan mengelola data dalam daftar.</p>
        </header>

        <main className="space-y-12">
          
          <section id="what-is-array" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Apa itu Array?</h2>
            <p className="text-gray-600 mb-6">
              Array adalah struktur data yang digunakan untuk menyimpan kumpulan nilai dalam satu variabel. Setiap nilai dalam array memiliki nomor indeks, dimulai dari 0.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deklarasi</h3>
                <div className="code-block text-sm">
                  <pre><code>const buah = ['Apel', 'Jeruk', 'Mangga'];
const angka = [1, 2, 3, 4, 5];</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Akses Elemen</h3>
                <p className="text-gray-600 mb-4">
                  Elemen diakses menggunakan indeks dalam tanda kurung siku `[]`. Ingat, indeks dimulai dari 0!
                </p>
                <div className="code-block text-sm">
                  <pre><code>console.log(buah[0]); // Output: Apel
console.log(angka[4]); // Output: 5</code></pre>
                </div>
              </div>
            </div>
          </section>

          <section id="array-methods" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Metode-metode Dasar</h2>
            <p className="text-gray-600 mb-6">
              Berikut adalah beberapa metode array yang paling sering digunakan untuk memanipulasi data.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">`.length`</h3>
                  <p className="text-gray-600 mb-2">Mengembalikan jumlah elemen dalam array.</p>
                  <div className="code-block text-sm">
                    <pre><code>const arr = ['a', 'b', 'c'];
console.log(arr.length); // Output: 3</code></pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">`.push()`</h3>
                  <p className="text-gray-600 mb-2">Menambahkan satu atau lebih elemen ke akhir array.</p>
                  <div className="code-block text-sm">
                    <pre><code>arr.push('d');
console.log(arr); // Output: ['a', 'b', 'c', 'd']</code></pre>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">`.pop()`</h3>
                  <p className="text-gray-600 mb-2">Menghapus elemen terakhir dari array.</p>
                  <div className="code-block text-sm">
                    <pre><code>arr.pop();
console.log(arr); // Output: ['a', 'b', 'c']</code></pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">`.shift()`</h3>
                  <p className="text-gray-600 mb-2">Menghapus elemen pertama dari array.</p>
                  <div className="code-block text-sm">
                    <pre><code>arr.shift();
console.log(arr); // Output: ['b', 'c']</code></pre>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">`.unshift()`</h3>
                  <p className="text-gray-600 mb-2">Menambahkan satu atau lebih elemen ke awal array.</p>
                  <div className="code-block text-sm">
                    <pre><code>arr.unshift('z');
console.log(arr); // Output: ['z', 'b', 'c']</code></pre>
                  </div>
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
              Array adalah fondasi untuk mengelola data dalam daftar. Dengan menguasai konsep ini, Anda siap untuk belajar tentang perulangan dan bagaimana menggunakannya untuk memproses setiap elemen dalam array.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
