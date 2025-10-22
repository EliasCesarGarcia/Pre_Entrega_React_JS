// src/pages/AdminPage.jsx

import React from 'react';

function AdminPage() {
  return (
    <div className="page-container">
      <h2>Panel de Administración</h2>
      <p>
        ¡Bienvenido, administrador! Esta es una ruta protegida y solo los usuarios
        autenticados pueden acceder a este panel de control.
      </p>
    </div>
  );
}

export default AdminPage;