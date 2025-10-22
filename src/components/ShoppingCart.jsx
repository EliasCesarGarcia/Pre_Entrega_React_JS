// src/components/ShoppingCart.jsx

import React, { useContext } from 'react'; // <-- 1. Importar useContext
import { CarritoContext } from '../context/CarritoContext'; // <-- 2. Importar el Contexto

// Ya no recibe 'cartItems' ni 'onClearCart' como props.
function ShoppingCart() {
  // 3. Usar el contexto para obtener el estado y las funciones.
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  return (
    <section className="cart-section">
      <h2>Mi Carrito</h2>
      {/* 4. Reemplazar 'cartItems' por 'carrito' y 'onClearCart' por 'vaciarCarrito' */}
      {carrito.length === 0 ? (
        <p className="empty-cart-message">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items">
            {carrito.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>${parseFloat(item.price).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-clear" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </>
      )}
    </section>
  );
}

export default ShoppingCart;