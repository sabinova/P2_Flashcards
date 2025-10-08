import '../App.css';

export default function Cards({ card, isFlipped, onFlip, color }) {
  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ' ? onFlip() : null)}
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{ borderColor: color, backgroundColor: `${color}22` }}
        >
          <img src={card.front.image} alt={card.name} className="image" />
          <h2>{card.name}</h2>
          <p>{card.front.info}</p>
          <p className="hint">Tap to reveal details</p>
        </div>

        <div
          className="flip-card-back"
          style={{ borderColor: color, backgroundColor: `${color}22` }}
        >
          <h3>Location</h3>
          <p><strong>Country:</strong> {card.back.country}</p>
          <p><strong>City:</strong> {card.back.city}</p>
          <p><strong>Established:</strong> {card.back.established}</p>
          <p className="hint">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
}
