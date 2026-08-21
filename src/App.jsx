import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExpensesPage from './pages/ExpensesPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto p-6">
          <Routes>
            <Route path="/" element={<ExpensesPage />} />
            <Route path="/books" element={<BooksPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;