import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    const value = text.trim();
    if (!value) return;
    setTasks([...tasks, { id: Date.now(), text: value, done: false }]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Todo List</h1>
        <p>Organize your day in a simple clean way.</p>

        <div className="input-row">
          <input
            type="text"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="tasks">
          {tasks.length === 0 ? (
            <div className="empty">No tasks yet.</div>
          ) : (
            tasks.map((task) => (
              <div className={`task ${task.done ? "done" : ""}`} key={task.id}>
                <label className="task-left">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span>{task.text}</span>
                </label>

                <button className="delete" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}