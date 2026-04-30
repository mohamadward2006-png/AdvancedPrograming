export default function Skills({ skills }) {
  return (
    <div style={styles.card}>
      <h3>Skills</h3>
      <div style={styles.list}>
        {skills.map((skill) => (
          <span key={skill} style={styles.tag}>
            {skill}
          </span>
        ))}
      </div>
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
  list: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },
  tag: {
    padding: "6px 12px",
    borderRadius: "20px",
    background: "#6366f1"
  }
};