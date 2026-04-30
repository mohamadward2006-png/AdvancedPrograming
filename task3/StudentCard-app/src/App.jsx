import Profile from "./components/Profile";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import Goal from "./components/Goal";

export default function App() {
  const student = {
    name: "Mohamad Ward",
    major: "Information Engineering",
    university: "North Private University",
    year: "Third Year",
    gpa: 94,
    skills: ["AI", "Python", "Cyber Security"],
    courses: [
      { name: "Algorithms III", grade: 90 },
      { name: "Databases", grade: 80 }
    ],
    goal: "Become an AI / NLP Engineer"
  };

  return (
    <div style={styles.container}>
      <Profile student={student} />
      <Stats student={student} />
      <Skills skills={student.skills} />
      <Courses courses={student.courses} />
      <Goal goal={student.goal} />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "Inter, sans-serif",
    color: "#fff"
  }
};