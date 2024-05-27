import React, { useState } from 'react';
import MatchComponent from './MatchComponent';
import MedalDropdowns from './MedalDropdowns';
import './App.css';

function App() {
  const matches = [
    'Tyskland - Skotland',
    'Ungarn - Schweiz',
    'Spanien - Kroatien',
    'Italien - Albanien',
    'Polen - Holland',
    'Slovenien - Danmark',
    'Serbien - England',
    'Rumænien - Ukraine',
    'Belgien - Slovakiet',
    'Østrig - Frankrig',
    'Tyrkiet - Georgien',
    'Portugal - Tjekkiet',
    'Kroatien - Albanien',
    'Tyskland - Ungarn',
    'Skotland - Schweiz',
    'Slovenien - Serbien',
    'Danmark - England',
    'Spanien - Italien',
    'Slovakiet - Ukraine',
    'Polen - Østrig',
    'Holland - Frankrig',
    'Georgien - Tjekkiet',
    'Tyrkiet - Portugal',
    'Belgien - Rumænien',
    'Schweiz - Tyskland',
    'Skotland - Ungarn',
    'Albanien - Spanien',
    'Kroatien - Italien',
    'Frankrig - Polen',
    'Holland - Østrig',
    'Danmark - Serbien',
    'England - Slovenien',
    'Slovakiet - Rumænien',
    'Ukraine - Belgien',
    'Georgien - Portugal',
    'Tjekkiet - Tyrkiet',
  ];

  const [guesses, setGuesses] = useState({});
  const [medalSelections, setMedalSelections] = useState({ guld: '', sølv: '', bronze: '' });
  const [name, setName] = useState('');

  const handleSelectionChange = (match, outcome) => {
    setGuesses((prevGuesses) => ({
      ...prevGuesses,
      [match]: outcome,
    }));
  };

  const handleMedalSelectionChange = (selections) => {
    setMedalSelections(selections);
  };

  const allMatchesSelected = matches.every((match) => guesses[match]);
  const allMedalsSelected = medalSelections.guld && medalSelections.sølv && medalSelections.bronze;
  const allMedalsDifferent = new Set(Object.values(medalSelections)).size === 3;

  const handleSubmit = () => {
    const submissionData = {
      name,
      guld: medalSelections.guld,
      sølv: medalSelections.sølv,
      bronze: medalSelections.bronze,
      ...Object.fromEntries(Object.entries(guesses).map(([key, value]) => [`${key}`, value])),
    };

    console.log(submissionData);

    const subject = `EM2024 ${name}`;
    const body = `${JSON.stringify(submissionData, null, 2)}
    `;
    
    const mailtoLink = `mailto:jonas.fischer@sktst.dk?subject=${subject}&body=${body}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Reset guesses, medal selections, and name after submission
    setGuesses({});
    setMedalSelections({ guld: '', sølv: '', bronze: '' });
    setName('');
  };

  return (
    <div className="container">
      <h1>EM 2024</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
        </label>
      </div>
      {matches.map((match) => (
        <MatchComponent
          key={match}
          match={match}
          onSelectionChange={handleSelectionChange}
          selectedOutcome={guesses[match]}
        />
      ))}
      <MedalDropdowns onSelectionChange={handleMedalSelectionChange} />
      {(allMatchesSelected && allMedalsSelected && allMedalsDifferent && name) ? (
        <button onClick={handleSubmit} className="submit-button">Send</button>
      ) : <button className="fejl-button">Send</button>}

    </div>
  );
}

export default App;
