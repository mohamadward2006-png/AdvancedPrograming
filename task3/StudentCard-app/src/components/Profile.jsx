export default function Profile({ student }) {
  return (
    <div style={styles.card}>
      <h1>{student.name}</h1>
      <p>{student.major}</p>
      <p>{student.university}</p>
      <span style={styles.badge}>{student.year}</span>
    </div>
  );
}

const styles = {
  card: {
    padding: "25px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    marginBottom: "20px"
  },
  badge: {
    background: "#6366f1",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px"
  }
};