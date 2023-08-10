import { useState } from 'react';
import './App.css';

function App() {
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();
  const [result, setResult] = useState();

  const handleAge = () => {
    const birthDate = new Date(`${month} ${day}  ${year}`);
    const currentDate = new Date();

    // Age in milliseconds
    const ageDifference = currentDate - birthDate;

    // Convert milliseconds to years
    let ageInDays = Math.floor(ageDifference / (1000 * 60 * 60 * 24));
    const ageInYear = Math.floor(ageInDays / 365);
    ageInDays -= ageInYear * 365;
    const ageInMonth = Math.floor(ageInDays / 31);
    ageInDays -= ageInMonth * 31;

    setResult(`${ageInDays} DAYS - ${ageInMonth} MONTH - ${ageInYear} YEAR`);
  };
  return (
    <>
      <main className='flex justify-center items-center space-x-4 flex-wrap gap-4 my-5'>
        <div>
          <label className='font-bold' htmlFor=''>
            DAY
          </label>
          <br />
          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            type='number'
            className='border-2 border-slate-300 mx-4 font-bold w-28 py-3 text-center rounded-lg'
            placeholder='DD'
          />
        </div>
        <div>
          <label className='font-bold' htmlFor=''>
            MONTH
          </label>
          <br />

          <input
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            type='number'
            className='border-2 border-slate-300 mx-4 text-center font-bold w-28 py-3 rounded-lg'
            placeholder='MM'
          />
        </div>
        <div>
          <label className='font-bold' htmlFor=''>
            YEAR
          </label>
          <br />

          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type='number'
            className='border-2 border-slate-300 mx-4 text-center font-bold w-28 py-3 rounded-lg'
            placeholder='YYYY'
          />
        </div>

        <div>
          <button
            onClick={handleAge}
            className='bg-amber-500 text-white py-3 px-6 rounded-full'
          >
            Calculate Your Age
          </button>
        </div>
      </main>
      <main className='flex justify-center items-center my-16'>
        <h1 className='bg-sky-500 py-3 px-6 text-white rounded-full mx-10'>
          Your Age Is --->
        </h1>
        <br />
        <span className='text4xl font-bold'> {result}</span>
      </main>
    </>
  );
}

export default App;
