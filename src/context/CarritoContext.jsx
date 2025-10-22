// src/context/CarritoContext.jsx

import React, { createContext, useState } from 'react';

// 1. Crear el Contexto
// Este es el objeto que los componentes consumirán para acceder al estado.
export const CarritoContext = createContext();

// 2. Crear el Proveedor (Provider)
// Este es el componente que envolverá nuestra aplicación y proveerá el estado.
export function CarritoProvider({ children }) {
  // Estado para los items del carrito.
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito.
  const agregarAlCarrito = (product) => {
    // Usamos una función en setCarrito para asegurar que siempre tenemos el estado más reciente.
    setCarrito(prevCarrito => [...prevCarrito, product]);
  };

  // Función para vaciar completamente el carrito.
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // 3. Devolver el Provider con el 'value'
  // El prop 'value' contiene los datos y funciones que queremos hacer disponibles globalmente.
  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}