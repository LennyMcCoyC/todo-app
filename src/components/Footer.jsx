import { useState } from "react";

export function Footer({
  itemsLeft,
  toggleIsAll,
  toggleIsActive,
  toggleIsCompleted,
  clearCompleted,
  isActive,
  isAll,
  isCompleted,
  isDarkMode,
}) {
  const [isAllHover, setIsAllHover] = useState(false);
  const [isActiveHover, setIsActiveHover] = useState(false);
  const [isCompletedHover, setIsCompletedHover] = useState(false);

  const handleAllMouseEnter = () => {
    setIsAllHover(true);
  };

  const handleAllMouseLeave = () => {
    setIsAllHover(false);
  };

  const handleActiveMouseEnter = () => {
    setIsActiveHover(true);
  };

  const handleActiveMouseLeave = () => {
    setIsActiveHover(false);
  };

  const handleCompletedMouseEnter = () => {
    setIsCompletedHover(true);
  };

  const handleCompletedMouseLeave = () => {
    setIsCompletedHover(false);
  };

  return (
    <footer>
      <p className="footer-left">
        <span>{itemsLeft}</span> items left
      </p>
      <ul className="footer-ul">
        <li
          style={{
            color:
              isAll && !isAllHover
                ? "#3A7CFD"
                : !isAll && isAllHover && !isDarkMode
                ? "grey"
                : !isAll && isAllHover && isDarkMode
                ? "#E3E4F1"
                : isAll && isAllHover
                ? "#3A7CFD"
                : "#9495A5",
          }}
          onClick={toggleIsAll}
          onMouseEnter={handleAllMouseEnter}
          onMouseLeave={handleAllMouseLeave}
        >
          All
        </li>
        <li
          style={{
            color:
              isActive && !isActiveHover
                ? "#3A7CFD"
                : !isActive && isActiveHover && !isDarkMode
                ? "grey"
                : !isActive && isActiveHover && isDarkMode
                ? "#E3E4F1"
                : isActive && isActiveHover
                ? "#3A7CFD"
                : "#9495A5",
          }}
          onClick={toggleIsActive}
          onMouseEnter={handleActiveMouseEnter}
          onMouseLeave={handleActiveMouseLeave}
        >
          Active
        </li>
        <li
          style={{
            color:
              isCompleted && !isCompletedHover
                ? "#3A7CFD"
                : !isCompleted && isCompletedHover && !isDarkMode
                ? "grey"
                : !isCompleted && isCompletedHover && isDarkMode
                ? "#E3E4F1"
                : isCompleted && isCompletedHover
                ? "#3A7CFD"
                : "#9495A5",
          }}
          onClick={toggleIsCompleted}
          onMouseEnter={handleCompletedMouseEnter}
          onMouseLeave={handleCompletedMouseLeave}
        >
          Completed
        </li>
      </ul>
      <button className="footer-button" onClick={clearCompleted}>
        Clear Completed
      </button>
    </footer>
  );
}
