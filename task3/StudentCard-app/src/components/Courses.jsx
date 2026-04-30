export default function Courses({ courses }) {
  return (
    <div style={styles.card}>
      <h3>Courses</h3>
      {courses.map((c) => (
        <div key={c.name} style={styles.row}>
          <span>{c.name}</span>
          <span>{c.grade}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    marginBottom: "20px"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0"
  }
};