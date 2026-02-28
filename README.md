# Carlota's Interactive Calculator 🚀

A functional web-based calculator built with **Node.js** and **Express**. This project was developed as part of a technical assignment to demonstrate full-stack development skills, including server-side routing, static file hosting, and complex mathematical logic.

## 🔗 Live Demo
Check out the live application here: **(https://carlotas-calculator.vercel.app/)**

## 🛠️ Tech Stack
* **Backend:** Node.js, Express.js
* **Frontend:** HTML5, CSS3 (Grid & Flexbox), JavaScript (Vanilla)
* **Deployment:** Vercel
* **Version Control:** Git

## ✨ Features
### Basic Operations
* Addition, Subtraction, Multiplication, and Division.
* Interactive screen display with real-time updates.

### Advanced Features (Required Extra Features)
* **Power Operation (`^`):** Implemented using the `**` operator with custom precedence logic to ensure correct mathematical order (Power > Multiplication > Addition).
* **Percentage (`%`):** Automatically calculates values by processing the input string into decimal format.
* **Smart Negative Handling:** Custom logic to distinguish between subtraction and negative numbers using "character masking" techniques.

## 📁 Project Structure
```text
.
├── server.js           # Express server configuration
├── package.json        # Node.js dependencies and scripts
├── .gitignore          # Files ignored by Git (node_modules, etc.)
└── public/             # Frontend static files
    ├── index.html      # Calculator structure
    ├── style.css       # Custom styling (Grid Layout)
    └── index.js        # Mathematical engine and UI logic
