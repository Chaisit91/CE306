import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products" className="ml-4">Products</Link>
      </nav>

      <main className="p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products" element={<ProductListPage/>} />
          <Route path="/products/:productId" element={<ProductDetailPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
