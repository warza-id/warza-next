"use client";

import { useState } from 'react';

const exercises = [
  { id: 1, type: 'text', question: "Jika `x` adalah 10, apa yang akan dicetak oleh kode ini: `if (x > 5) { 'besar'; } else { 'kecil'; }`?", correctAnswer: "besar" },
  { id: 2, type: 'radio', question: "Kondisi ini akan menghasilkan `true` atau `false`: `(suhu > 30) && (hujan == false)`?", correctAnswer: "boolean" },
  { id: 3, type: 'text', question: "Apa hasil dari `let nilai = 85; if (nilai >= 90) { 'A'; } else if (nilai >= 80) { 'B'; } else { 'C'; }`?", correctAnswer: "B" },
  { id: 4, type: 'text', question: "Tuliskan hasil dari `let isTired = true; let result = isTired ? 'istirahat' : 'kerja';`?", correctAnswer: "istirahat" },
  { id: 5, type: 'text', question: "Jika `let hari = 'Minggu';` apa yang akan dicetak oleh `switch` statement ini: `case 'Sabtu': 'libur'; case 'Minggu': 'santai';`?", correctAnswer: "santai" },
  { id: 6, type: 'text', question: "Operator logika apa yang menghasilkan `true` jika setidaknya salah satu dari dua kondisi benar?", correctAnswer: "||" },
  { id: 7, type: 'radio', question: "Percabangan mana yang lebih disukai untuk memeriksa banyak nilai dari satu variabel tunggal (misalnya `hari` atau `bulan`)?", correctAnswer: "switch" },
  { id: 8, type: 'text', question: "Tuliskan hasil dari `let a = 5; if (a > 10) { 'A'; } else { if (a === 5) { 'B'; } else { 'C'; } }`?", correctAnswer: "B" },
  { id: 9, type: 'text', question: "Jika `let isAdmin = false;` apa yang akan dicetak oleh `if (!isAdmin) { 'Anda bukan Admin'; }`?", correctAnswer: "Anda bukan Admin" },
  { id: 10, type: 'radio', question: "Pernyataan mana yang paling ringkas untuk percabangan sederhana?", correctAnswer: "ternary" },
];

export default function PercabanganDasar() {
  const [answers, setAnswers] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));
  const [results, setResults] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));

  const handleInputChange = (e, id) => {
    const newAnswers = { ...answers, [id]: e.target.value };
    setAnswers(newAnswers);
  };

  const checkAnswers = (id) => {
    const exercise = exercises.find(ex => ex.id === id);
    if (!exercise) return;
    if (exercise.correctAnswer.toLowerCase() === answers[id].toLowerCase()) {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Percabangan (Conditional Statements)</h1>
          <p className="text-lg text-gray-600">Pelajari cara membuat keputusan dalam kode Anda dengan pernyataan kondisional.</p>
        </header>

        <main className="space-y-12">
          
          <section id="if-else" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">`if`, `else if`, dan `else`</h2>
            <p className="text-gray-600 mb-6">Ini adalah cara paling dasar untuk membuat keputusan. Kode di dalam blok `{}` hanya akan dieksekusi jika kondisinya `true`.</p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="code-block text-sm">
                  <pre><code>let umur = 20;

if (umur &gt;= 18) &#123;
  console.log("Anda sudah dewasa.");
&#125; else &#123;
  console.log("Anda masih di bawah umur.");
&#125;</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Penjelasan</h3>
                <p className="text-gray-600">Pernyataan `if` mengevaluasi kondisi di dalam tanda kurung `()`. Jika kondisinya `true`, blok kode pertama akan dijalankan. Jika `false`, blok `else` akan dijalankan.</p>
                <p className="text-gray-600 mt-4">Anda dapat menambahkan lebih banyak kondisi dengan `else if`.</p>
              </div>
            </div>
          </section>

          <section id="switch" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">`switch` Statement</h2>
            <p className="text-gray-600 mb-6">`switch` adalah alternatif yang lebih rapi dari `if/else if/else` ketika Anda membandingkan satu variabel dengan banyak nilai yang berbeda.</p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="code-block text-sm">
                  <pre><code>let buah = "apel";

switch (buah) &#123;
  case "apel":
    console.log("Ini adalah apel.");
    break;
  case "jeruk":
    console.log("Ini adalah jeruk.");
    break;
  default:
    console.log("Buah tidak dikenal.");
&#125;</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Penjelasan</h3>
                <p className="text-gray-600">Pernyataan `switch` mengevaluasi ekspresi dan mencocokkannya dengan `case` yang sesuai. Kata kunci `break` menghentikan eksekusi setelah `case` ditemukan. Jika tidak ada `case` yang cocok, blok `default` akan dijalankan.</p>
              </div>
            </div>
          </section>

          <section id="ternary" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Operator Ternary</h2>
            <p className="text-gray-600 mb-6">Ini adalah cara ringkas untuk menulis pernyataan `if/else` sederhana dalam satu baris. Sangat berguna untuk memberikan nilai ke variabel berdasarkan kondisi.</p>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <div className="code-block text-sm">
                  <pre><code>let usia = 15;
let status = usia &gt;= 18 ? "Dewasa" : "Anak-anak";

console.log(status); // "Anak-anak"</code></pre>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Penjelasan</h3>
                <p className="text-gray-600">Sintaksnya adalah `kondisi ? nilai_jika_true : nilai_jika_false`. Jika kondisi di depan tanda tanya `?` benar, nilai pertama akan digunakan. Jika salah, nilai kedua setelah titik dua `:` akan digunakan.</p>
              </div>
            </div>
          </section>

          <div className="relative mx-auto max-w-md h-auto my-12 hidden md:block">
            
          </div>

          <section id="exercises" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latihan Soal</h2>
            <div className="space-y-8">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Soal {exercise.id}</h3>
                  <p className="text-gray-600 mb-4">{exercise.question}</p>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    {exercise.type === 'text' ? (
                      <input
                        type="text"
                        value={answers[exercise.id]}
                        onChange={(e) => handleInputChange(e, exercise.id)}
                        placeholder="Tulis jawaban Anda..."
                        className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg"
                      />
                    ) : (
                      <div className="flex gap-4">
                        <label className="flex items-center text-gray-600">
                          <input type="radio" name={`q${exercise.id}`} value="boolean" checked={answers[exercise.id] === 'boolean'} onChange={(e) => handleInputChange(e, exercise.id)} className="mr-2" /> boolean
                        </label>
                        <label className="flex items-center text-gray-600">
                          <input type="radio" name={`q${exercise.id}`} value="switch" checked={answers[exercise.id] === 'switch'} onChange={(e) => handleInputChange(e, exercise.id)} className="mr-2" /> switch
                        </label>
                        <label className="flex items-center text-gray-600">
                          <input type="radio" name={`q${exercise.id}`} value="ternary" checked={answers[exercise.id] === 'ternary'} onChange={(e) => handleInputChange(e, exercise.id)} className="mr-2" /> ternary
                        </label>
                      </div>
                    )}
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
            <p className="text-gray-600 mb-6">Sekarang Anda dapat mengontrol alur program Anda! Ini adalah salah satu konsep terpenting dalam pemrograman. Selanjutnya, kita akan membahas perulangan untuk mengeksekusi kode berulang kali.</p>
          </section>

        </main>
      </div>
    </div>
  );
}
