import menuData from "../data/menuData";
import FoodRating from "./FoodRating";

import chapathi from "../assets/chapathi.jpg";
import curdrice from "../assets/curdrice.jpg";
import vegBiryani from "../assets/vegbiryani.jpg";
import dosa from "../assets/dosa.jpg";
import friedRice from "../assets/friedrice.jpg";
import idiyappam from "../assets/idiyappam.jpg";
import idli from "../assets/idli.jpg";
import lemonRice from "../assets/lemonrice.jpg";
import meals from "../assets/meals.jpg";
import noodles from "../assets/noodles.jpg";
import parotta from "../assets/parotta.jpg";
import pongal from "../assets/pongal.jpg";
import poori from "../assets/poori.jpg";
import sambarRice from "../assets/sambarrice.jpg";
import tomatoRice from "../assets/tomatorice.jpg";
import upma from "../assets/upma.jpg";
import Eggdosa from "../assets/eggdosa.jpg";
import chickenBiryani from "../assets/chickenbiryani.jpg";
import ChickenFriedRice from "../assets/chickenfriedrice.jpg";

const foodImages = {
  "Idli & Sambar": idli,
  Pongal: pongal,
  Poori: poori,
  Dosa: dosa,
  Upma: upma,
  Idiyappam: idiyappam,

  "Rice, Sambar, Potato Fry": sambarRice,
  "Lemon Rice": lemonRice,
  Meals: meals,
  "Curd Rice": curdrice,
  "Veg Biryani": vegBiryani,
  "Tomato Rice": tomatoRice,

  "Chapati & Kurma": chapathi,
  Chapati: chapathi,

  "Dosa & Chutney": dosa,

  "Fried Rice": friedRice,
  Parotta: parotta,
  Noodles: noodles,

  "Egg Dosa": Eggdosa,
  "Chicken Biryani": chickenBiryani,
  "Chicken Fried Rice": ChickenFriedRice,
};

function WhatsToday() {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = days[now.getDay()];
  const hour = now.getHours();

  let mealType = "";

  if (hour < 11) {
    mealType = "breakfast";
  } else if (hour < 16) {
    mealType = "lunch";
  } else {
    mealType = "dinner";
  }

  const meal = menuData[today]?.[mealType] || "Mess Closed";

  return (
    <div className="card today-animation">
      <h2>📅 {today}</h2>

      <h3 className="today-label">
        {mealType.toUpperCase()}
      </h3>

      <p>{meal}</p>

      <div className="food-card">
        <img
          src={foodImages[meal] || meals}
          alt={meal}
          className="food-image"
        />
      </div>

      <FoodRating foodName={meal} />
    </div>
  );
}

export default WhatsToday;