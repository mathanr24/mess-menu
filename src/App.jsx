import { useState, useEffect } from "react";
import WhatsToday from "./components/WhatsToday";
import WeeklyMenu from "./components/WeeklyMenu";
import "./App.css";

function App() {
  const [showToday, setShowToday] = useState(false);
  const [showWeek, setShowWeek] = useState(false);

  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    const moveGlow = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  const handleTodayClick = () => {
    setShowToday((current) => !current);
    setShowWeek(false);
  };

  const handleWeekClick = () => {
    setShowWeek((current) => !current);
    setShowToday(false);
  };

  return (
    <>
      {/* Mouse Glow Effect */}
      <div className="cursor-glow"></div>

      <main className="container">
        <header className="app-header">
          <p className="app-eyebrow">Campus Dining</p>

          <h1>🍽 Mess Menu</h1>

          <p className="app-subtitle">
            Choose an option to view today’s meals or the complete weekly menu.
          </p>
        </header>

        <div className="button-group">
          <button
            className={showToday ? "active" : ""}
            type="button"
            onClick={handleTodayClick}
            aria-expanded={showToday}
          >
            {showToday ? "Hide Today's Menu" : "What's Today?"}
          </button>

          <button
            className={showWeek ? "active" : ""}
            type="button"
            onClick={handleWeekClick}
            aria-expanded={showWeek}
          >
            {showWeek ? "Hide Weekly Menu" : "View Weekly Menu"}
          </button>
        </div>

        <section className="menu-content">
          {showToday && <WhatsToday />}
          {showWeek && <WeeklyMenu />}
        </section>
      </main>
    </>
  );
}

export default App;