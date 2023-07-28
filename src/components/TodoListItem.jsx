import { useEffect, useState } from "react";
import { Footer } from "./Footer";

export function TodoListItem({ todos, setTodos, isDarkMode }) {
  const [isAll, setIsAll] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [itemsLeft, setItemsLeft] = useState("");

  useEffect(() => {
    setItemsLeft(todos.filter((todo) => todo.completed === false).length);
  }, [todos]);

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function clearCompleted() {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.completed === false);
    });
  }

  function toggleIsAll() {
    setIsAll(true);
    setIsActive(false);
    setIsCompleted(false);
  }
  function toggleIsActive() {
    setIsActive(true);
    setIsCompleted(false);
    setIsAll(false);
  }

  function toggleIsCompleted() {
    setIsCompleted(true);
    setIsActive(false);
    setIsAll(false);
  }

  return (
    <>
      <div className="list-wrapper">
        <div id="list">
          {isActive
            ? todos
                .filter((todo) => todo.completed === false)
                .map((activeTodo) => (
                  <div key={activeTodo.id} className="list-item">
                    <label className="list-item-label">
                      <input
                        checked={activeTodo.completed}
                        type="checkbox"
                        data-list-item-checkbox
                        onChange={(e) =>
                          toggleTodo(activeTodo.id, e.target.checked)
                        }
                      />
                      <span data-checkbox>
                        <img src="/assets/icon-check.svg" alt="check icon" />
                      </span>
                      <span data-list-item-text>{activeTodo.name}</span>
                    </label>
                    <span
                      className="delete-button"
                      onClick={() => deleteTodo(activeTodo.id)}
                    >
                      <img src="/assets/icon-cross.svg" alt="delete icon" />
                    </span>
                  </div>
                ))
            : isCompleted
            ? todos
                .filter((todo) => todo.completed === true)
                .map((completedTodo) => (
                  <div key={completedTodo.id} className="list-item">
                    <label className="list-item-label">
                      <input
                        checked={completedTodo.completed}
                        type="checkbox"
                        data-list-item-checkbox
                        onChange={(e) =>
                          toggleTodo(completedTodo.id, e.target.checked)
                        }
                      />
                      <span data-checkbox>
                        <img src="/assets/icon-check.svg" alt="check icon" />
                      </span>
                      <span data-list-item-text>{completedTodo.name}</span>
                    </label>
                    <span
                      className="delete-button"
                      onClick={() => deleteTodo(completedTodo.id)}
                    >
                      <img src="/assets/icon-cross.svg" alt="delete icon" />
                    </span>
                  </div>
                ))
            : isAll
            ? todos.map((todo) => (
                <div key={todo.id} className="list-item">
                  <label className="list-item-label">
                    <input
                      checked={todo.completed}
                      type="checkbox"
                      data-list-item-checkbox
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    <span data-checkbox>
                      <img src="/assets/icon-check.svg" alt="check icon" />
                    </span>
                    <span data-list-item-text>{todo.name}</span>
                  </label>
                  <span
                    className="delete-button"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <img src="/assets/icon-cross.svg" alt="delete icon" />
                  </span>
                </div>
              ))
            : todos.map((todo) => (
                <div key={todo.id} className="list-item">
                  <label className="list-item-label">
                    <input
                      checked={todo.completed}
                      type="checkbox"
                      data-list-item-checkbox
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />

                    <span data-checkbox>
                      <img src="/assets/icon-check.svg" alt="check icon" />
                    </span>
                    <span data-list-item-text>{todo.name}</span>
                  </label>
                  <span
                    className="delete-button"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <img src="/assets/icon-cross.svg" alt="delete icon" />
                  </span>
                </div>
              ))}
        </div>
        <Footer
          itemsLeft={itemsLeft}
          toggleIsAll={toggleIsAll}
          toggleIsActive={toggleIsActive}
          toggleIsCompleted={toggleIsCompleted}
          clearCompleted={clearCompleted}
          isActive={isActive}
          isAll={isAll}
          isCompleted={isCompleted}
          isDarkMode={isDarkMode}
        />
      </div>
    </>
  );
}
