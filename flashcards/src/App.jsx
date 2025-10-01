import { useState } from 'react';
import places from './places';
import Cards from './components/Cards';
import './App.css';

const colors = {
  Europe: '#F9E79F',
  Asia: '#F8C471',
  Africa: '#FAD7A0',
  'North America': '#AED6F1',
  'South America': '#A3E4D7',
  Oceania: '#D7BDE2',
  Antarctica: '#EBF5FB'
};

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const total = places.length;

  const start = () => setStarted(true);
  const flip = () => setIsFlipped(f => !f);

  const nextRandom = () => {
    let index = Math.floor(Math.random() * total);
    if (index === currentIndex && total > 1) index = (index + 1) % total;
    setCurrentIndex(index);
    setIsFlipped(false);
  };

  return (
    <div className="app">
      <div className="overlay">
        <header>
          <h1>World Wonders Flashcards</h1>
          <p>Test if you know where each renowned place is located.</p>
          <p>Number of cards: {total}</p>
        </header>

        {!started ? (
          <div className="start">
            <h2>Start!</h2>
            <button onClick={start}>Begin</button>
          </div>
        ) : (
          <>
            <Cards
              card={places[currentIndex]}
              isFlipped={isFlipped}
              onFlip={flip}
              color={colors[places[currentIndex].continent]}
            />
            <div className="controls">
              <button onClick={nextRandom}>Next ⏭️</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
