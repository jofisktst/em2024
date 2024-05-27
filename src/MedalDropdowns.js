import React, { useState } from 'react';
import './App.css';

const countries = ['Albanien', 'Belgien', 'Danmark', 'England', 'Frankrig', 'Georgien', 'Holland', 'Italien', 'Kroatien', 'Polen', 'Portugal', 'Rumænien', 'Schweiz', 'Serbien', 'Skotland', 'Slovakiet', 'Slovenien', 'Spanien', 'Tjekkiet', 'Tyrkiet', 'Tyskland', 'Ukraine', 'Ungarn', 'Østrig' 
];

function MedalDropdowns({ onSelectionChange }) {
  const [guld, setGuld] = useState('');
  const [sølv, setSølv] = useState('');
  const [bronze, setBronze] = useState('');

  const handleGuldChange = (e) => {
    const value = e.target.value;
    setGuld(value);
    onSelectionChange({ guld: value, sølv, bronze });
  };

  const handleSølvChange = (e) => {
    const value = e.target.value;
    setSølv(value);
    onSelectionChange({ guld, sølv: value, bronze });
  };

  const handleBronzeChange = (e) => {
    const value = e.target.value;
    setBronze(value);
    onSelectionChange({ guld, sølv, bronze: value });
  };

  return (
    <div className="medal-container">
      <div>
        
        <select className='guld' value={guld} onChange={handleGuldChange}>
          <option value="">Vælg vinderen</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div>
        
        <select className='sølv' value={sølv} onChange={handleSølvChange}>
          <option value="">Vælg andepladsen</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div>
        
        <select className='bronze' value={bronze} onChange={handleBronzeChange}>
          <option value="">Vælg tredjepladsen</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MedalDropdowns;
