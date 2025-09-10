"use client";

import { useState } from 'react';

const sectionData = {
  arithmetic: {
    title: "Operator Aritmatika",
    description: "Digunakan untuk melakukan operasi matematika dasar pada angka.",
    operators: [
      { op: '+', name: 'Penjumlahan', example: '10 + 5', result: '15' },
      { op: '-', name: 'Pengurangan', example: '10 - 5', result: '5' },
      { op: '*', name: 'Perkalian', example: '10 * 5', result: '50' },
      { op: '/', name: 'Pembagian', example: '10 / 5', result: '2' },
      { op: '%', name: 'Sisa Pembagian (Modulus)', example: '10 % 3', result: '1' }
    ]
  },
  comparison: {
    title: "Operator Perbandingan",
    description: "Digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (`true` atau `false`).",
    operators: [
      { op: '==', name: 'Sama dengan (nilai saja)', example: `'5' == 5`, result: 'true' },
      { op: '===', name: 'Sama dengan (nilai & tipe)', example: `'5' === 5`, result: 'false' },
      { op: '!=', name: 'Tidak sama dengan (nilai saja)', example: `'5' != 6`, result: 'true' },
      { op: '!==', name: 'Tidak sama dengan (nilai & tipe)', example: `'5' !== 5`, result: 'true' },
      { op: '>', name: 'Lebih besar dari', example: `10 > 5`, result: 'true' },
      { op: '<', name: 'Lebih kecil dari', example: `10 < 5`, result: 'false' },
    ]
  },
  logical: {
    title: "Operator Logika",
    description: "Digunakan untuk menggabungkan atau membalikkan kondisi boolean.",
    operators: [
      { op: '&&', name: 'AND', example: `(5 > 3) && (10 > 5)`, result: 'true' },
      { op: '||', name: 'OR', example: `(5 > 10) || (10 > 5)`, result: 'true' },
      { op: '!', name: 'NOT', example: `!(5 > 3)`, result: 'false' },
    ]
  }
};

const exercises = [
  {
    id: 1,
    question: "Apa hasil dari `15 % 4`?",
    correctAnswer: "3"
  },
  {
    id: 2,
    question: "Apakah hasil dari `'10' === 10`?",
    correctAnswer: "false"
  },
  {
    id: 3,
    question: "Operator mana yang digunakan untuk memeriksa apakah dua nilai tidak sama?",
    correctAnswer: "!="
  },
  {
    id: 4,
    question: "Apa hasil dari `(8 < 5) || (5 * 2 === 10)`?",
    correctAnswer: "true"
  },
  {
    id: 5,
    question: "Nilai apa yang akan dikembalikan oleh `!(5 === 5)`?",
    correctAnswer: "false"
  }
];

export default function OperatorDasar() {
  const [activeTab, setActiveTab] = useState('arithmetic');
  const [answers, setAnswers] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));
  const [results, setResults] = useState(exercises.reduce((acc, ex) => ({ ...acc, [ex.id]: '' }), {}));

  const handleInputChange = (e, id) => {
    const newAnswers = { ...answers, [id]: e.target.value };
    setAnswers(newAnswers);
  };

  const checkAnswers = (id) => {
    const exercise = exercises.find(ex => ex.id === id);
    if (exercise?.correctAnswer.toLowerCase() === answers[id].toLowerCase()) {
      setResults({ ...results, [id]: 'Jawaban Benar!' });
    } else {
      setResults({ ...results, [id]: `Jawaban Salah. Jawaban yang benar adalah '${exercise?.correctAnswer}'` });
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
        .operator-table th, .operator-table td {
            padding: 0.75rem;
            text-align: left;
        }
        .operator-table th {
            background-color: #f7f7f9;
            font-weight: 600;
        }
        .operator-table tr:nth-child(even) {
            background-color: #fafafa;
        }
        .exercise-input {
            width: 100%;
            max-width: 300px;
            padding: 0.5rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
        }
        .check-btn {
            background-color: #22c55e;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            transition: background-color 0.2s;
        }
        .check-btn:hover {
            background-color: #16a34a;
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Operator Dasar JavaScript</h1>
          <p className="text-lg text-gray-600">Pelajari cara memanipulasi nilai dan membuat keputusan dalam kode Anda.</p>
        </header>

        <main className="space-y-12">
          
          <section id="operators" className="section-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Jenis-jenis Operator</h2>
            <div className="flex justify-center mb-6 space-x-4">
              <button
                className={`tab-btn ${activeTab === 'arithmetic' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('arithmetic')}
              >
                Aritmatika
              </button>
              <button
                className={`tab-btn ${activeTab === 'comparison' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('comparison')}
              >
                Perbandingan
              </button>
              <button
                className={`tab-btn ${activeTab === 'logical' ? 'active bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('logical')}
              >
                Logika
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{sectionData[activeTab].title}</h3>
              <p className="text-gray-600 mb-4">{sectionData[activeTab].description}</p>
              <table className="w-full operator-table rounded-lg overflow-hidden">
                <thead>
                  <tr>
                    <th>Operator</th>
                    <th>Nama</th>
                    <th>Contoh</th>
                    <th>Hasil</th>
                  </tr>
                </thead>
                <tbody>
                  {sectionData[activeTab].operators.map((op, index) => (
                    <tr key={index}>
                      <td className="font-mono">{op.op}</td>
                      <td>{op.name}</td>
                      <td className="font-mono">{op.example}</td>
                      <td className="font-mono">{op.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                      className="exercise-input"
                    />
                    <button
                      onClick={() => checkAnswers(exercise.id)}
                      className="check-btn"
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
            <p className="text-gray-600 mb-6">Sekarang Anda sudah menguasai operator dasar, Anda bisa mulai membangun logika yang lebih kompleks dan membuat keputusan dalam program Anda.</p>
          </section>

        </main>
      </div>
    </div>
  );
}
