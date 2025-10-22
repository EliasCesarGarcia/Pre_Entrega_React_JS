// src/components/RutaProtegida.jsx

import React from 'react';
import { Navigate } from 'react-router-dom';

// Este componente actúa como un guardián para las rutas.
// Recibe dos props:
// 1. `isAuthenticated`: Un booleano que indica si el usuario ha iniciado sesión.
// 2. `children`: El componente de la página que se debe renderizar si el usuario está autenticado.
function RutaProtegida({ isAuthenticated, children }) {
  
  // Si el usuario NO está autenticado...
  if (!isAuthenticated) {
    // ...lo redirigimos a la página de login.
    // `replace` evita que el usuario pueda volver a la página anterior con el botón "atrás" del navegador.
    return <Navigate to="/login" replace />;
  }

  // Si el usuario SÍ está autenticado, simplemente mostramos el contenido de la página protegida.
  return children;
}

export default RutaProtegida;