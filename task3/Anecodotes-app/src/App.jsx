import { useState, useEffect } from "react";

const App = () => {
  const anecdotes = [
    "Debugging is twice as hard as writing the code in the first place.",
    "Talk is cheap. Show me the code.",
    "Programs must be written for people to read.",
    "Premature optimization is the root of all evil.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "The best error message is the one that never shows up.",
    "Naming things is one of the hardest problems in programming.",
    "Code never lies, comments sometimes do.",
    "Fix the cause, not the symptom.",
    "Make it work, make it right, make it fast.",
    "Deleted code is debugged code.",
    "Clean code always looks like it was written by someone who cares."
  ];

  const getInitialVotes = () => {
    const saved = localStorage.getItem("votes");
    return saved
      ? JSON.parse(saved)
      : new Array(anecdotes.length).fill(0);
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(getInitialVotes);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleNextAnecdote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);

    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const handleReset = () => {
    const resetVotes = new Array(anecdotes.length).fill(0);
    setVotes(resetVotes);
    localStorage.removeItem("votes");
  };

  const maxVotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxVotes);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ Anecdote Hub</h1>

      <div style={styles.card}>
        <p style={styles.quote}>
          "{anecdotes[selected]}"
        </p>
        <p style={styles.votes}>Votes: {votes[selected]}</p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn} onClick={handleVote}>
            👍 Vote
          </button>
          <button style={styles.secondaryBtn} onClick={handleNextAnecdote}>
            🔀 Next
          </button>
          <button style={styles.dangerBtn} onClick={handleReset}>
            ♻ Reset
          </button>
        </div>
      </div>

      <h2 style={styles.subtitle}>🏆 Top Voted</h2>

      {maxVotes > 0 ? (
        <div style={styles.card}>
          <p style={styles.quote}>
            "{anecdotes[mostVotedIndex]}"
          </p>
          <p style={styles.votes}>{maxVotes} votes</p>
        </div>
      ) : (
        <p style={{ color: "#777" }}>No votes yet</p>
      )}
    </div>
  );
};

// 🎨 Modern UI styles
const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Inter, sans-serif",
    color: "#fff"
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px"
  },
  subtitle: {
    marginTop: "40px",
    fontSize: "1.8rem"
  },
  card: {
    background: "#ffffff",
    color: "#333",
    padding: "25px",
    borderRadius: "16px",
    width: "60%",
    margin: "20px auto",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
  },
  quote: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    marginBottom: "10px"
  },
  votes: {
    fontWeight: "bold",
    marginBottom: "15px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  },
  primaryBtn: {
    background: "#667eea",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  secondaryBtn: {
    background: "#6c757d",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  dangerBtn: {
    background: "#e63946",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default App;