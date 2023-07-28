export function Nav({ isDarkMode, toggleDarkMode }) {
  return (
    <nav>
      <div className="nav-wrapper">
        {" "}
        <div className="nav-title">Todo</div>
        {!isDarkMode ? (
          <img
            onClick={toggleDarkMode}
            id="moon-icon"
            src="/assets/icon-moon.svg"
            alt="moon icon dark theme switcher"
          />
        ) : (
          <img
            onClick={toggleDarkMode}
            id="moon-icon"
            src="/assets/icon-sun.svg"
            alt="moon icon light theme switcher"
          />
        )}
      </div>
    </nav>
  );
}
