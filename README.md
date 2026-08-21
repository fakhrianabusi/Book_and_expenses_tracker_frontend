# 📚 Book & Expense Tracker — Frontend

A modern, responsive, and high-performance Web Dashboard built with **React**, **Tailwind CSS v4**, and **Vite**. This application connects seamlessly to a FastAPI backend to help users track personal reading inventories and daily expenditures in real-time.

![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

* **💰 Expense Management:** Track daily costs, item quantities, total spendings, and categorize expenditures.
* **📚 Book Inventory:** Manage book collections with titles, authors, quantities, and price estimations.
* **⚡ Full CRUD Operations:** Seamless real-time data fetching, updating, creating, and deleting powered by Axios.
* **🎨 Modern UI/UX:** Built with a dark-themed, glassmorphism-inspired aesthetic powered by **Tailwind CSS v4**.
* **📱 Fully Responsive:** Fully optimized for Mobile, Tablet, and Desktop displays.
* **🔀 Smooth Navigation:** Client-side routing managed by `react-router-dom`.

---

## 🛠️ Tech Stack

* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS v4
* **HTTP Client:** Axios
* **Routing:** React Router DOM (v6+)
* **Icons & UI:** Custom Inline Elements & SVG

---

## 🚀 Getting Started

Follow these steps to set up and run the frontend locally.

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Book_and_expenses_tracker_frontend.git
cd Book_and_expenses_tracker_frontend
```

Install dependencies:

```bash
npm install
```

### Configure API Base URL

Ensure `src/api/api.js` points to your running FastAPI backend:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Update if backend port differs
});

export default api;
```

### Run the development server

```bash
npm run dev
```

Open your browser and navigate to http://localhost:5173.

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── api.js          # Axios API client configuration
│   ├── components/
│   │   └── Navbar.jsx      # Navigation bar component
│   ├── pages/
│   │   ├── BooksPage.jsx    # Book inventory dashboard
│   │   └── ExpensesPage.jsx # Expense tracking dashboard
│   ├── App.jsx             # React Router setup & app layout
│   ├── index.css           # Tailwind CSS directives
│   └── main.jsx            # Application entry point
├── public/                 # Static assets
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies & build scripts
```

---

## 🔌 API Integration

This frontend expects a RESTful API with the following routes:

| Module   | Method | Endpoint           | Description                          |
|----------|--------|--------------------|--------------------------------------|
| Expenses | GET    | /expenses/         | Fetch all expenses                   |
| Expenses | POST   | /expenses/         | Create a new expense                 |
| Expenses | PATCH  | /expenses/{id}     | Update an existing expense           |
| Expenses | DELETE | /expenses/{id}     | Delete an expense                    |
| Books    | GET    | /books/            | Fetch all books                      |
| Books    | POST   | /books/            | Create a new book entry              |
| Books    | PUT    | /books/{id}        | Update book details                  |
| Books    | DELETE | /books/{id}        | Delete a book entry                  |

---

## 📜 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Fakhri Anabusi**

- GitHub: [@fakhrianabusi](https://github.com/fakhrianabusi)

---

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.