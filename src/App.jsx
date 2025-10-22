// src/App.jsx

import './styles/App.css'; 
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RutaProtegida from './components/RutaProtegida';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

function App() {
  // --- ¡EL ESTADO DEL CARRITO YA NO VIVE AQUÍ! ---
  // Ha sido movido a CarritoContext.jsx

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = 'https://68e588b521dd31f22cc2078c.mockapi.io/productos';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('La respuesta del servidor no fue exitosa.');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Error al cargar productos. Inténtalo más tarde.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAuthChange = () => {
    setIsAuthenticated(prevState => !prevState);
  };

  return (
    <div className="app-container">
      <Header />
      <Navbar isAuthenticated={isAuthenticated} onAuthChange={handleAuthChange} />

      <main className="main-content">
        <Routes>
          {/* Los componentes ya no necesitan recibir props del carrito */}
          <Route 
            path="/" 
            element={<HomePage products={products} isLoading={isLoading} error={error} />} 
          />
          <Route 
            path="/productos" 
            element={<HomePage products={products} isLoading={isLoading} error={error} />} 
          />
          <Route 
            path="/productos/:id" 
            element={<ProductDetailPage products={products} />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route 
            path="/carrito" 
            element={
              <RutaProtegida isAuthenticated={isAuthenticated}>
                {/* CartPage ya no necesita props */}
                <CartPage />
              </RutaProtegida>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <RutaProtegida isAuthenticated={isAuthenticated}>
                <AdminPage />
              </RutaProtegida>
            } 
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;