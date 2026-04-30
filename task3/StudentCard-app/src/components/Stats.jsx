export default function Stats({ student }) {
  return (
    <div style={styles.grid}>
      <Stat title="GPA" value={student.gpa} />
      <Stat title="Field" value={student.major} />
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div style={styles.card}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
    gap: "15px",
    marginBottom: "20px"
  },
  card: {
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)"
  }
};