import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const add = () => setValue((v) => v + step);
  const sub = () => setValue((v) => v - step);
  const reset = () => {
    setValue(0);
    setStep(1);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.gridGlow}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>NEON CONTROL</h1>
        <p style={styles.subtitle}>Cyber Counter Interface</p>

        <div style={styles.display}>
          <span style={styles.smallText}>CURRENT VALUE</span>
          <h2 style={styles.value}>{value}</h2>
        </div>

        <div style={styles.stepArea}>
          <span style={styles.stepText}>STEP SIZE: {step}</span>
          <input
            type="range"
            min="1"
            max="15"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={styles.slider}
          />
        </div>

        <div style={styles.buttons}>
          <button style={styles.minus} onClick={sub}>−</button>
          <button style={styles.reset} onClick={reset}>RESET</button>
          <button style={styles.plus} onClick={add}>+</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #0f0c29, #302b63, #24243e)",
    fontFamily: "Arial",
    overflow: "hidden",
    position: "relative",
  },

  gridGlow: {
    position: "absolute",
    width: "200%",
    height: "200%",
    background:
      "linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.08) 1px, transparent 1px)",
    backgroundSize: "50px 50px",
    transform: "rotate(25deg)",
    opacity: 0.3,
  },

  card: {
    zIndex: 2,
    width: "360px",
    padding: "30px",
    borderRadius: "18px",
    background: "rgba(0,0,0,0.5)",
    border: "1px solid rgba(0,255,255,0.3)",
    boxShadow: "0 0 25px rgba(0,255,255,0.2)",
    textAlign: "center",
    color: "#fff",
    backdropFilter: "blur(10px)",
  },

  title: {
    margin: 0,
    fontSize: "22px",
    letterSpacing: "3px",
    color: "#00f5ff",
    textShadow: "0 0 10px #00f5ff",
  },

  subtitle: {
    fontSize: "12px",
    color: "#aaa",
    marginBottom: "20px",
  },

  display: {
    margin: "20px 0",
    padding: "15px",
    border: "1px solid rgba(255,0,255,0.3)",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(255,0,255,0.2)",
  },

  smallText: {
    fontSize: "10px",
    color: "#999",
    letterSpacing: "2px",
  },

  value: {
    fontSize: "48px",
    margin: "5px 0",
    color: "#ff00ff",
    textShadow: "0 0 15px #ff00ff",
  },

  stepArea: {
    marginBottom: "20px",
  },

  stepText: {
    fontSize: "12px",
    color: "#00f5ff",
  },

  slider: {
    width: "100%",
    marginTop: "8px",
    accentColor: "#ff00ff",
  },

  buttons: {
    display: "flex",
    gap: "10px",
  },

  plus: {
    flex: 1,
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(45deg, #00f5ff, #0088ff)",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 15px #00f5ff",
  },

  minus: {
    flex: 1,
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(45deg, #ff004c, #ff00ff)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 15px #ff00ff",
  },

  reset: {
    flex: 1,
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#111",
    color: "#00f5ff",
    border: "1px solid #00f5ff",
    cursor: "pointer",
  },
};

export default App;