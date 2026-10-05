# 🍽️ Campus Dining — Mess Menu

    A sleek, responsive web application built with **React 19** and **Vite** that delivers daily campus and hostel
  mess menus dynamically based on the current time and day. Featuring real-time meal detection, food ratings, weekly
  meal schedules, and a modern dark glassmorphic UI.

    ---

    ## ✨ Features

    - 🕒 **Real-Time Meal Detection**:
      - Automatically identifies current day and meal session using the client's local time:
        - **🍳 Breakfast:** Before 11:00 AM
        - **🍛 Lunch:** 11:00 AM – 4:00 PM
        - **🍲 Dinner:** 4:00 PM onwards
      - Dynamically displays matching food images for the active meal.

    - ⭐ **Interactive Meal Rating**:
      - 1-to-5 star rating component for students and diners to rate today's meal with immediate visual feedback.

    - 📅 **Full Weekly Menu View**:
      - Clean card-based schedule covering all 7 days (Monday through Sunday) for Breakfast, Lunch, and Dinner.

    - 🎨 **Modern Dark Glassmorphism UI**:
      - Custom mouse cursor glow tracking effect.
      - Floating ambient animated background blobs.
      - Elegant typography powered by Google Fonts (*Poppins*).
      - Smooth card animations and transitions.

    - 📱 **Fully Responsive**:
      - Optimized layout for mobile, tablet, and desktop screens.

    ---

    ## 🛠️ Tech Stack

    - **Frontend Library:** [React 19](https://react.dev/)
    - **Build Tool:** [Vite](https://vitejs.dev/)
    - **Styling:** Vanilla CSS3 (Custom properties, Grid/Flexbox, Keyframes)
    - **Typography:** [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)

    ---

    ## 📁 Project Structure

    ```text
    mess-menu/
    ├── index.html              # HTML entry point
    ├── package.json            # Project dependencies and npm scripts
    ├── vite.config.js          # Vite configuration
    ├── src/
    │   ├── main.jsx            # React root application entry point
    │   ├── App.jsx             # Main container component and cursor glow logic
    │   ├── App.css             # Global styles, variables, theme, and animations
    │   ├── assets/             # High-resolution food images & background patterns
    │   ├── components/
    │   │   ├── WhatsToday.jsx  # Real-time meal display with day/time filtering
    │   │   ├── WeeklyMenu.jsx  # 7-day full weekly schedule view
    │   │   └── FoodRating.jsx  # Interactive star rating component
    │   └── data/
    │       └── menuData.js     # Weekly menu dataset (Monday – Sunday)
  ──────
  ## 🚀 Getting Started

  ### Prerequisites

  Ensure you have the following installed on your machine:

  • Node.js https://nodejs.org/ (version 18.0 or higher recommended)
  • npm https://www.npmjs.com/ (bundled with Node.js) or yarn / pnpm

  ### Installation

  1. Clone the repository:
    git clone https://github.com/mathanr24/mess-menu.git
    cd mess-menu

  2. Install dependencies:
    npm install

  3. Start the development server:
    npm run dev

  4. Open in browser:
  Navigate to the local URL displayed in your terminal (typically http://localhost:5173).
  ──────
  ## 📜 Available Scripts

   Command                                    │ Description
  ────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────
   npm run dev                                │ Starts the Vite development server with Hot Module Replacement (HMR)
   npm run build                              │ Bundles the application for production inside the dist/ directory
   npm run preview                            │ Locally serves the production build for testing
  ──────
  ## ⚙️ Customization

  ### Modifying the Menu

  Edit menuData.js to adjust daily menu items:

    const menuData = {
      Monday: {
        breakfast: "Idli & Sambar",
        lunch: "Rice, Sambar, Potato Fry",
        dinner: "Chapati & Kurma",
      },
      // Add or update other days...
    };

    export default menuData;

  ### Adding New Food Images

  1. Place new image files in .
  2. Import the image in WhatsToday.jsx and map it in the foodImages object:
    import myDish from "../assets/mydish.jpg";

    const foodImages = {
      "Dish Name": myDish,
      // ...
    };

  ──────
  ## 🤝 Contributing

  Contributions, issues, and feature requests are welcome!

  1. Fork the Project
  2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
  3. Commit your Changes (git commit -m 'Add some AmazingFeature')
  4. Push to the Branch (git push origin feature/AmazingFeature)
  5. Open a Pull Request
  ──────
  ## 📄 License

  This project is open source and available under the MIT License /LICENSE.
  ──────
  Developed with ❤️ by Mathan R https://github.com/mathanr24
