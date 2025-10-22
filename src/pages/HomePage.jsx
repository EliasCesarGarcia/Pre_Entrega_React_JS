// src/pages/HomePage.jsx

import React from 'react';
import ProductList from '../components/ProductList';

// El componente ya no recibe 'onAddToCart' como prop.
function HomePage({ products, isLoading, error }) {
  
  if (isLoading) {
    return <div className="loading-message">Cargando productos...</div>;
  }
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  // Simplemente renderiza ProductList, pasándole solo los productos.
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default HomePage;