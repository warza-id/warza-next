"use client";

import { useState } from 'react';

const exercises = [
  {
    id: 1,
    question: "Tuliskan hasil dari `tambah(5, 3)` jika fungsi `tambah` didefinisikan sebagai `function tambah(a, b) { return a + b; }`",
    correctAnswer: "8"
  },
  {
    id: 2,
    question: "Apa yang akan dicetak oleh `console.log(namaLengkap('Budi', 'Santoso'))` jika fungsi `namaLengkap` tidak memiliki `return` statement?",
    correctAnswer: "undefined"
  },
  {
    id: 3,
    question: "Berapa banyak parameter yang dimiliki fungsi `hitungLuas(panjang, lebar)`?",
    correctAnswer: "2"
  },
  {
    id: 4,
    question: "Fungsi `sapa()` tidak memiliki parameter. Apakah `sapa('Halo')` akan menghasilkan error?",
    correctAnswer: "Tidak"
  },
  {
    id: 5,
    question: "Apa perbedaan antara parameter dan argumen?",
    correctAnswer: "Parameter adalah variabel di definisi fungsi, argumen adalah nilai yang diteruskan saat memanggil fungsi."
  },
  {
    id: 6,
    question: "Ubah fungsi ini menjadi arrow function: `function kali(a, b) { return a * b; }`",
    correctAnswer: "const kali = (a, b) => a * b;"
  },
  {
    id: 7,
    question: "Jika sebuah fungsi tidak memiliki `return` statement, nilai apa yang dikembalikan secara default?",
    correctAnswer: "undefined"
  },
  {
    id: 8,
    question: "Apakah sebuah fungsi bisa memanggil fungsi lain di dalamnya? (Ya/Tidak)",
    correctAnswer: "Ya"
  },
  {
    id: 9,
    question: "Sebutkan salah satu manfaat menggunakan fungsi.",
    correctAnswer: "Mengurangi duplikasi kode"
  },
  {
    id: 10,
    question: "Apa output dari `hitung(10)` jika fungsi `hitung(x) { return x + 5; }`?",
    correctAnswer: "15"
  },
  {
    id: 11,
    question: "Tuliskan sintaks untuk fungsi yang menerima satu parameter bernama `nama` dan mencetak `Halo, [nama]`.",
    correctAnswer: "function sapa(nama) { console.log('Halo, ' + nama); }"
  },
  {
    id: 12,
    question: "Apa output dari `(x) => x * x` jika argumennya adalah 4?",
    correctAnswer: "16"
  },
  {
    id: 13,
    question: "Mengapa disarankan untuk menggunakan `const` saat mendeklarasikan arrow function?",
    correctAnswer: "Untuk mencegahnya dideklarasikan ulang."
  },
  {
    id: 14,
    question: "Apakah `function a() { return; }` akan menghentikan eksekusi fungsi? (Ya/Tidak)",
    correctAnswer: "Ya"
  },
  {
    id: 15,
    question: "Apa yang akan dikembalikan oleh fungsi ini: `function getAngka() { let x = 10; }`?",
    correctAnswer: "undefined"
  }
];

export default function FungsiDasar() {
  const [answers, setAnswers] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));
  const [results, setResults] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));
  const [activeTab, setActiveTab] = useState('named');

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

  const codeBlocks = {
    named: `function sapa(nama) {
  // block of code to be executed
  console.log("Halo, " + nama);
}`,
    return: `function hitungLuasPersegi(panjang, lebar) {
  const luas = panjang * lebar;
  return luas; // Mengembalikan nilai
}

const hasil = hitungLuasPersegi(5, 10);
console.log(hasil); // Output: 50`,
    arrow: `// Arrow function sederhana
const tambah = (a, b) => {
  return a + b;
};

// Dengan satu parameter, tanda kurung bisa dihilangkan
const kuadrat = angka => {
  return angka * angka;
};

// Sintaks yang lebih ringkas untuk satu baris
const kaliDua = angka => angka * 2;`,
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Dasar-dasar Fungsi</h1>
          <p className="text-lg text-gray-600">Blok kode yang dapat digunakan kembali.</p>
        </header>

        <main className="space-y-12">
          
          <section id="what-is-function" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Apa itu Fungsi?</h2>
            <p className="text-gray-600 mb-6">
              Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi membuat kode Anda lebih terstruktur, mudah dibaca, dan dapat digunakan kembali.
              
            </p>
          </section>

          <section id="function-types" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Jenis-jenis Fungsi</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <button 
                onClick={() => setActiveTab('named')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${activeTab === 'named' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Fungsi Bernama
              </button>
              <button 
                onClick={() => setActiveTab('return')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${activeTab === 'return' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Statement `return`
              </button>
              <button 
                onClick={() => setActiveTab('arrow')}
                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${activeTab === 'arrow' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Arrow Function
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              {activeTab === 'named' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Fungsi Bernama (Named Functions)</h3>
                  <p className="text-gray-600 mb-4">Ini adalah cara paling dasar untuk membuat fungsi di JavaScript. Anda memberikan nama pada fungsi untuk memanggilnya nanti.</p>
                  <div className="code-block text-sm">
                    <pre><code>{codeBlocks.named}</code></pre>
                  </div>
                </div>
              )}
              {activeTab === 'return' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Statement `return`</h3>
                  <p className="text-gray-600 mb-4">
                    Statement `return` digunakan untuk mengembalikan nilai dari sebuah fungsi. Setelah `return` dijalankan, fungsi akan berhenti dieksekusi.
                  </p>
                  <div className="code-block text-sm">
                    <pre><code>{codeBlocks.return}</code></pre>
                  </div>
                </div>
              )}
              {activeTab === 'arrow' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Arrow Function (`=&gt;`)</h3>
                  <p className="text-gray-600 mb-4">
                    Diperkenalkan di ES6, arrow function menawarkan sintaks yang lebih ringkas dan modern, terutama untuk fungsi anonim.
                  </p>
                  <div className="code-block text-sm">
                    <pre><code>{codeBlocks.arrow}</code></pre>
                  </div>
                </div>
              )}
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
              Fungsi adalah salah satu konsep terpenting dalam pemrograman. Setelah menguasai ini, Anda bisa mulai membuat blok kode yang lebih kompleks dan dapat digunakan kembali.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
