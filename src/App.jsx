import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { TodoListItem } from "./components/TodoListItem";

const LOCAL_STORAGE_KEY = "TODOS";

export default function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return [];
    return JSON.parse(value);
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-black");
    } else {
      document.body.classList.remove("bg-black");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function handleKeyPress(e) {
    if (newTodoName === "") return;
    if (e.key === "Enter") {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          { name: newTodoName, completed: false, id: crypto.randomUUID() },
        ];
      });
      setNewTodoName("");
    }
  }

  return (
    <>
      <div
        className={isDarkMode ? "theme-wrapper dark-theme" : "theme-wrapper"}
      >
        <Nav toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div id="new-todo-form">
          <span className="todo-input-before"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            id="todo-input"
            value={newTodoName}
            onChange={(e) => setNewTodoName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <TodoListItem
            todos={todos}
            setTodos={setTodos}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </>
  );
}
