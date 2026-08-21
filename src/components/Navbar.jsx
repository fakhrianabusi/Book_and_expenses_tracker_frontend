import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-sm'
        : 'text-gray-400 hover:text-white hover:bg-gray-800'
    }`;
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚡</span>
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            TrackerApp
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/" className={getLinkStyle('/')}>
            💰 Expenses
          </Link>
          <Link to="/books" className={getLinkStyle('/books')}>
            📚 Books
          </Link>
        </div>
      </div>
    </nav>
  );
}