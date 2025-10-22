// src/components/ProductList.jsx

import React, { useContext } from 'react'; // <-- 1. Importar useContext
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext'; // <-- 2. Importar el Contexto

// Ya no recibe 'onAddToCart' en sus props.
function ProductList({ products }) {
  // 3. Usar el contexto para obtener la función que necesitamos.
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <section className="products-section">
      <h2>Productos Disponibles</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/productos/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
            </Link>
            
            <p>${parseFloat(product.price).toFixed(2)}</p>
            
            {/* 4. Usar la función del contexto directamente. */}
            <button className="btn btn-add" onClick={() => agregarAlCarrito(product)}>
              Agregar al Carrito
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;