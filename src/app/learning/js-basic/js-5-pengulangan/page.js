"use client";

import { useState } from 'react';

const exercises = [
  {
    id: 1,
    question: "Tuliskan hasil dari `for (let i = 0; i < 3; i++) { console.log(i); }`",
    correctAnswer: "0, 1, 2"
  },
  {
    id: 2,
    question: "Apa output dari `let count = 0; while (count < 2) { console.log(count); count++; }`",
    correctAnswer: "0, 1"
  },
  {
    id: 3,
    question: "Jika Anda ingin memastikan perulangan berjalan setidaknya satu kali, loop mana yang paling cocok?",
    correctAnswer: "do-while"
  },
  {
    id: 4,
    question: "Perbaiki kode ini agar hanya mencetak angka ganjil: `for (let i = 1; i <= 5; i++) { if (i % 2 === 0) continue; console.log(i); }`",
    correctAnswer: "1, 3, 5"
  },
  {
    id: 5,
    question: "Berapa kali loop ini akan berjalan: `let j = 5; while (j > 0) { j--; }`",
    correctAnswer: "5"
  }
];

export default function PerulanganDasar() {
  const [answers, setAnswers] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));
  const [results, setResults] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));

  const handleInputChange = (e, id) => {
    const newAnswers = { ...answers, [id]: e.target.value };
    setAnswers(newAnswers);
  };

  const checkAnswers = (id) => {
    const exercise = exercises.find(ex => ex.id === id);
    if (!exercise) return;
    const isCorrect = exercise.correctAnswer.toLowerCase().replace(/\s/g, '') === answers[id].toLowerCase().replace(/\s/g, '');
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Perulangan (Loops)</h1>
          <p className="text-lg text-gray-600">Jalankan blok kode berulang kali dengan efisien.</p>
        </header>

        <main className="space-y-12">
          
          <section id="for-loop" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">`for` Loop</h2>
            <p className="text-gray-600 mb-6">Loop `for` adalah perulangan yang paling umum digunakan. Ini ideal ketika Anda tahu persis berapa kali Anda ingin mengulang kode.</p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="code-block text-sm">
                  <pre><code>for (let i = 0; i &lt; 5; i++) &#123;
  console.log("Nomor: " + i);
&#125;</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sintaks</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>**Inisialisasi (`let i = 0;`):** Dijalankan satu kali di awal.</li>
                  <li>**Kondisi (`i &lt; 5;`):** Diperiksa sebelum setiap iterasi. Jika `true`, loop berlanjut.</li>
                  <li>**Ekspresi Akhir (`i++`):** Dijalankan setelah setiap iterasi.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="while-loop" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">`while` dan `do-while` Loops</h2>
            <p className="text-gray-600 mb-6">Loop `while` mengulang selama kondisinya `true`. Loop ini berguna ketika Anda tidak tahu berapa kali perulangan akan terjadi sebelumnya.</p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">`while` Loop</h3>
                <div className="code-block text-sm mb-4">
                  <pre><code>let angka = 0;
while (angka &lt; 3) &#123;
  console.log(angka);
  angka++;
&#125;</code></pre>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">`do-while` Loop</h3>
                <div className="code-block text-sm">
                  <pre><code>let i = 0;
do &#123;
  console.log("Cetak sekali.");
  i++;
&#125; while (i &lt; 0);</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Perbedaan Kunci</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>**`while`:** Memeriksa kondisi **sebelum** menjalankan blok kode. Kode mungkin tidak pernah dijalankan jika kondisi awalnya `false`.</li>
                  <li>**`do-while`:** Menjalankan blok kode **setidaknya satu kali**, lalu memeriksa kondisi setelahnya.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="break-continue" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">`break` dan `continue`</h2>
            <p className="text-gray-600 mb-6">Kedua pernyataan ini memberikan kontrol tambahan pada perulangan Anda.</p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="code-block text-sm mb-4">
                  <pre><code>// `break`
for (let i = 0; i &lt; 5; i++) &#123;
  if (i === 3) &#123;
    break; // Hentikan loop
  &#125;
  console.log(i); // Output: 0, 1, 2
&#125;</code></pre>
                </div>
                <div className="code-block text-sm">
                  <pre><code>// `continue`
for (let i = 0; i &lt; 5; i++) &#123;
  if (i === 2) &#123;
    continue; // Lewati iterasi ini
  &#125;
  console.log(i); // Output: 0, 1, 3, 4
&#125;</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Penjelasan</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>**`break`:** Segera keluar dari perulangan, bahkan jika kondisi loop masih terpenuhi.</li>
                  <li>**`continue`:** Melewatkan sisa kode dalam iterasi saat ini dan langsung berpindah ke iterasi berikutnya.</li>
                </ul>
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
            <p className="text-gray-600 mb-6">Hebat! Sekarang Anda bisa mengulang tugas dalam program Anda. Ini adalah fondasi untuk bekerja dengan data dalam jumlah besar, seperti elemen dalam array.</p>
          </section>

        </main>
      </div>
    </div>
  );
}
