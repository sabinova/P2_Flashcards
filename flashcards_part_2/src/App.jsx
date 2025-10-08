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
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(''); 
  const [cards, setCards] = useState(places);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const total = cards.length;

  // this starts app
  const start = () => setStarted(true);

  // flips card
  const flip = () => setIsFlipped(f => !f);

  // normalizes fuzzy matching (case-insensitive + ignore punctuation)
  const normalize = text =>
    text.toLowerCase().replace(/[^\w\s]/gi, '').trim();

  // checks user answer
  const checkAnswer = e => {
    e.preventDefault();
    const card = cards[currentIndex];
    const correctCountry = normalize(card.back.country);
    const correctCity = normalize(card.back.city);
    const user = normalize(userAnswer);

    // accepts(user answer) if matches city, country, or both
    const correct =
      user === correctCountry ||
      user === correctCity ||
      correctCity.includes(user) ||
      correctCountry.includes(user);

    if (correct) {
      setFeedback('correct');
      setStreak(s => {
        const newStreak = s + 1;
        if (newStreak > longestStreak) setLongestStreak(newStreak);
        return newStreak;
      });
    } else {
      setFeedback('incorrect');
      setStreak(0);
    }

    setIsFlipped(true);
  };

  // next / previous navigation
  const nextCard = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(i => i + 1);
      resetCardState();
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      resetCardState();
    }
  };

  const resetCardState = () => {
    setIsFlipped(false);
    setFeedback('');
    setUserAnswer('');
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    resetCardState();
  };

  // marks card as mastered
  const markAsMastered = () => {
    const updated = cards.filter((_, i) => i !== currentIndex);
    setCards(updated);
    if (currentIndex >= updated.length) setCurrentIndex(updated.length - 1);
    resetCardState();
  };

  if (cards.length === 0) {
    return (
      <div className="app">
        <div className="overlay">
          <header>
            <h1>World Wonders Flashcards</h1>
            <p>🎉 You have mastered all cards!</p>
          </header>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const color = colors[currentCard.continent] || '#ccc';

  return (
    <div className="app">
      <div className="overlay">
        <header>
          <h1>World Wonders Flashcards</h1>
          <p>Test your geography skills — where is each landmark located?</p>
          <p>Total Cards: {total}</p>
          <p>
            Current Streak: <strong>{streak}</strong> | Longest Streak:{' '}
            <strong>{longestStreak}</strong>
          </p>
        </header>

        {!started ? (
          <div className="start">
            <h2>Start!</h2>
            <button onClick={start}>Begin</button>
          </div>
        ) : (
          <>
            <Cards
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={flip}
              color={color}
            />

            <form className="guess-form" onSubmit={checkAnswer}>
              <input
                type="text"
                placeholder="Enter the country or city..."
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>

            {feedback && (
              <p className={feedback === 'correct' ? 'correct' : 'incorrect'}>
                {feedback === 'correct' ? '✅ Correct!' : '❌ Incorrect'}
              </p>
            )}

            <div className="controls">
              <button onClick={prevCard} disabled={currentIndex === 0}>
                ⏮️ Previous
              </button>
              <button
                onClick={nextCard}
                disabled={currentIndex === total - 1}
              >
                Next ⏭️
              </button>
            </div>

            <div className="extra-controls">
              <button onClick={shuffleCards}>🔀 Shuffle</button>
              <button onClick={markAsMastered}>✅ Mark as Mastered</button>
            </div>

            <p>
              Card {currentIndex + 1} of {total}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

