import { useState } from "react";
import "./App.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const avg = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div className="page">
      <div className="card">

        <header>
          <h1>Unicafe Feedback</h1>
          <p>Beautiful analytics dashboard ✨</p>
        </header>

        <div className="buttons">
          <button className="good" onClick={() => setGood(good + 1)}>Good</button>
          <button className="neutral" onClick={() => setNeutral(neutral + 1)}>Neutral</button>
          <button className="bad" onClick={() => setBad(bad + 1)}>Bad</button>
        </div>

        <div className="stats">

          {total === 0 ? (
            <div className="empty">No feedback yet 👀</div>
          ) : (
            <>
              <div className="grid">
                <div>Good <b>{good}</b></div>
                <div>Neutral <b>{neutral}</b></div>
                <div>Bad <b>{bad}</b></div>
                <div>Total <b>{total}</b></div>
                <div>Avg <b>{avg.toFixed(2)}</b></div>
                <div>Positive <b>{positive.toFixed(1)}%</b></div>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}