import { useState } from "react";

function FoodRating({ foodName }) {
  const [rating, setRating] = useState(0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Rate this meal</h4>

      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}

      {rating > 0 && (
        <p>
          You rated <b>{foodName}</b> {rating}/5 ⭐
        </p>
      )}
    </div>
  );
}

export default FoodRating;