import { useEffect, useState } from 'react';
import api from '../api/api';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    amount: '',
    price: '',
  });
  const [editingId, setEditingId] = useState(null);

  const fetchBooks = () => {
    api
      .get('/books/')
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      amount: parseInt(formData.amount, 10),
      price: parseFloat(formData.price),
    };

    if (editingId) {
      api.put(`/books/${editingId}`, payload).then(() => {
        setEditingId(null);
        setFormData({ title: '', author: '', amount: '', price: '' });
        fetchBooks();
      });
    } else {
      api.post('/books/', payload).then(() => {
        setFormData({ title: '', author: '', amount: '', price: '' });
        fetchBooks();
      });
    }
  };

  const handleEdit = (book) => {
    setEditingId(book.id);
    setFormData({
      title: book.title,
      author: book.author,
      amount: book.amount,
      price: book.price,
    });
  };

  const handleDelete = (id) => {
    api.delete(`/books/${id}`).then(() => fetchBooks());
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: '', author: '', amount: '', price: '' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          📚 Books Library
        </h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-5 rounded-2xl border border-gray-700/60 shadow-xl flex flex-wrap gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Book Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="flex-1 min-w-[200px] bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="flex-1 min-w-[180px] bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="flex-1 min-w-[120px] bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Price ($)"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="flex-1 min-w-[120px] bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />

        <div className="flex gap-2 w-full md:w-auto">
          <button
            type="submit"
            className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl font-medium text-white transition-all duration-200 shadow-md ${
              editingId
                ? 'bg-amber-600 hover:bg-amber-500 active:scale-95'
                : 'bg-indigo-600 hover:bg-indigo-500 active:scale-95'
            }`}
          >
            {editingId ? 'Update Book' : 'Add Book'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-xl font-medium transition active:scale-95"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-700/60 shadow-xl bg-gray-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-900/80 border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider">
              <th className="p-4">Title</th>
              <th className="p-4">Author</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Unit Price</th>
              <th className="p-4">Total Value</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50 text-sm text-gray-200">
            {books.length === 0 ? (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No books found in the inventory.
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-750/50 transition">
                  <td className="p-4 font-medium text-white">{book.title}</td>
                  <td className="p-4 text-gray-300">{book.author}</td>
                  <td className="p-4">{book.amount}</td>
                  <td className="p-4">${book.price}</td>
                  <td className="p-4 text-emerald-400 font-semibold">
                    ${(book.amount * book.price).toFixed(2)}
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(book)}
                      className="px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-blue-400 hover:text-white rounded-lg text-xs font-medium transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600 border border-red-500/30 text-red-400 hover:text-white rounded-lg text-xs font-medium transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}