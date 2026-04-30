export default function Goal({ goal }) {
  return (
    <div style={styles.card}>
      <h3>🎯 Career Goal</h3>
      <p>{goal}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)"
  }
};