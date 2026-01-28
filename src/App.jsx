import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [active, setActive] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (active === "All") {
      setFilteredTasks(task);
    } else if (active === "Active") {
      setFilteredTasks(task.filter((cur) => cur.done === false));
    } else if (active === "Complete") {
      setFilteredTasks(task.filter((cur) => cur.done === true));
    }
  }, [task, active]);

  function Add() {
    if (text.trim() !== "") {
      setTask([...task, { text: text, done: false }]);
      setText("");
      setFilteredTasks([...task, { text: text, done: false }]);
    } else {
      alert("Please enter a task!");
    }
  }
  function Delete(index) {
    const isConfirm = confirm("Are you sure ");
    if (isConfirm) {
      const filtered = task.filter(
        (item, filterIndex) => filterIndex !== index
      );
      setTask(filtered);
      setFilteredTasks(filtered);
    }
  }
  function ClearComp() {
    const isConfirm = confirm(
      "Are you sure you want to clear all completed tasks?"
    );
    if (isConfirm) {
      const filtered = task.filter((cur) => cur.done === false);
      setTask(filtered);
      setFilteredTasks(filtered);
    }
  }
  function toggleDone(index) {
    const newTasks = [...task];
    newTasks[index].done = !newTasks[index].done;
    setTask(newTasks);
    setFilteredTasks(newTasks);
  }

  return (
    <div className="container">
      <div className="container4">
        <div className="title">To-Do list</div>
        <div className="container2">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Add a new task..."
            className="input"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                Add();
              }
            }}
          />
          <button onClick={Add} className="addbtn">
            Add
          </button>
        </div>

        <div className="container3">
          <button
            className={active === "All" ? "button active" : "button"}
            onClick={function () {
              setActive("All");
            }}
          >
            All
          </button>
          <button
            className={active === "Active" ? "button active" : "button"}
            onClick={function () {
              setActive("Active");
            }}
          >
            Active
          </button>
          <button
            className={active === "Complete" ? "button active" : "button"}
            onClick={function () {
              setActive("Complete");
            }}
          >
            Completed
          </button>
        </div>

        <div>
          {filteredTasks.map((oneTask) => {
            const realIndex = task.indexOf(oneTask);
            return (
              <div className="taskcont" key={realIndex}>
                <p
                  style={{
                    textDecoration: oneTask.done ? "line-through" : "none",
                  }}
                  className="text"
                >
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={oneTask.done}
                    onChange={() => toggleDone(realIndex)}
                  />
                  {oneTask.text}
                </p>
                <button onClick={() => Delete(realIndex)} className="delete">
                  Delete
                </button>
              </div>
            );
          })}{" "}
          {filteredTasks.length === 0 && (
            <div className="notask">No tasks yet. Add one above!</div>
          )}
        </div>
        {task.length > 0 && (
          <div className="resultcont">
            <div className="notask">
              {task.filter((cur) => cur.done === true).length} of {task.length}{" "}
              tasks completed
            </div>
            <button onClick={ClearComp} className="clearcomp">
              Clear Completed
            </button>
          </div>
        )}
      </div>
      <div className="footer">
        <p className="notask">Powered by</p>
        <p className="notask" id="pinecone">
          Pinecone academy
        </p>
      </div>
    </div>
  );
}
export default App;
