import menuData from "../data/menuData";

function WeeklyMenu() {
  return (
    <div className="weekly-container">
      {Object.entries(menuData).map(([day, meals]) => (
  <div className="card" key={day}>
          <h3>{day}</h3>

          <p>
            <strong>🍳 Breakfast:</strong> {meals.breakfast}
          </p>

          <p>
            <strong>🍛 Lunch:</strong> {meals.lunch}
          </p>

          <p>
            <strong>🍲 Dinner:</strong> {meals.dinner}
          </p>
        </div>
      ))}
    </div>
  );
}

export default WeeklyMenu;