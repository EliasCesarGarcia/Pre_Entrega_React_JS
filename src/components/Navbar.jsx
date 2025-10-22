// src/components/Navbar.jsx

import React from 'react';
// ¡Importante! Se cambia 'Link' por 'NavLink' para obtener la funcionalidad de clase activa.
import { NavLink } from 'react-router-dom';

// El componente sigue recibiendo las mismas props.
function Navbar({ isAuthenticated, onAuthChange }) {
  return (
    <nav className="navbar">
      
      <ul className="navbar-list">
        {/* Cada elemento de navegación ahora es un NavLink en lugar de un Link. */}
        {/* NavLink agregará la clase 'active' al enlace <a> cuando su ruta coincida con la URL actual. */}
        
        <li className="navbar-item">
          {/* El prop 'end' es importante para la ruta raíz, asegura que solo esté activa en "/" exacto */}
          <NavLink to="/" end>
            Inicio
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/productos">
            Productos
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/carrito">
            Carrito
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>

      {/* El botón de autenticación no cambia y funciona igual. */}
      <button onClick={onAuthChange} className="btn auth-btn">
        {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
      </button>

    </nav>
  );
}

export default Navbar;