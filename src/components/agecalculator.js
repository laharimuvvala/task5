import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Agecalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  function calculateAge() {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDate;
    const calculatedAge = Math.floor(ageDiff / (365.25 * 24 * 60 * 60 * 1000));
    setAge(calculatedAge);
  }

  return (
    <div>
      <h1>Age Calculator</h1>
      <p style={{ color: 'black', fontWeight: 'bold' }}>
        Enter your date of birth:
      </p>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <br /> {/* Add a line break */}
      <button
        onClick={calculateAge}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          marginTop: '10px',
        }}
      >
        Calculate Age
      </button>
      {age !== null && (
        <p style={{ color: 'blue' }}>
          You are {age} years old.
        </p>
      )}
    </div>
  );
}

export default Agecalculator;