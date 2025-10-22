# Proyecto: E-Commerce con Carrito de Compras (React + Context API)

Este proyecto es el resultado de la **Clase N° 8** del curso de **React JS** del programa **«Talento Tech»** de Buenos Aires Ciudad. El objetivo principal es construir una aplicación de e-commerce simple, implementando un carrito de compras funcional a través del manejo de un estado global con **Context API**.

## Descripción del Proyecto

La aplicación simula una tienda online donde los usuarios pueden ver una lista de productos, agregarlos a un carrito de compras y ver el contenido de dicho carrito en tiempo real. Este proyecto sirve como una demostración práctica de cómo gestionar un estado compartido entre múltiples componentes sin la necesidad de "prop drilling" (pasar props a través de varios niveles).

## Conceptos Clave Aplicados (Clase N° 8)

El núcleo de este proyecto es la implementación de la **Context API** de React para manejar el estado del carrito de compras.

### 1. ¿Qué es Context API?

Context API es una herramienta integrada en React que permite manejar estados globales de una manera eficiente. Es ideal para compartir datos que pueden ser considerados "globales" para un árbol de componentes, como el usuario autenticado, el tema de la aplicación o, en nuestro caso, el contenido de un carrito de compras.

**¿Cuándo usarla?**
-   Cuando varios componentes en diferentes niveles necesitan acceder a los mismos datos.
-   Para evitar el "prop drilling", que es el proceso de pasar props manualmente a través de múltiples niveles de componentes anidados.

### 2. Creación del Contexto

Se crea un contexto que almacenará el estado del carrito y las funciones para manipularlo (agregar productos, vaciar carrito, etc.).

**`src/context/CarritoContext.js`**
```javascript
import React, { createContext, useState } from 'react';

// 1. Crear el contexto
export const CarritoContext = createContext();

### 3. Creación del Proveedor (Provider)
El Provider es un componente que envuelve a otros componentes y pone a su disposición el valor del contexto. Aquí se define el estado (carrito) y las funciones que lo modifican (agregarAlCarrito, vaciarCarrito).

src/context/CarritoContext.js

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}

###4. Envolver la Aplicación con el Provider
Para que toda la aplicación tenga acceso al contexto, envolvemos el componente principal (App) con nuestro CarritoProvider.

src/index.js o src/main.js```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CarritoProvider } from './context/CarritoContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<CarritoProvider>
<App />
</CarritoProvider>
</React.StrictMode>
);

### 5. Consumir el Contexto con `useContext`

Cualquier componente dentro del `Provider` puede acceder al estado y a las funciones del carrito utilizando el hook `useContext`.

**Componente para agregar un producto (`Producto.js`):**
```javascript
import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Producto({ producto }) {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al Carrito
      </button>
    </div>
  );
}

Componente para mostrar el carrito (Carrito.js):

import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

function Carrito() {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {carrito.length > 0 ? (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío.</p>
      )}

      {carrito.length > 0 && (
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      )}
    </div>
  );
}

Requerimientos del Proyecto Final (Pre-Entrega)
Requerimiento #1: Funcionalidad Básica del Carrito

Crear un componente para listar productos.

Usar el hook useState y useContext para manejar el estado del carrito.

Implementar un evento de clic para agregar productos al carrito.

Mostrar el carrito y su contenido en otro componente.

Crear un layout general para el eCommerce.
Requerimiento #2: Conectar con una API
Integrar una API externa para obtener la información de los productos.
Gestionar el estado con useState.
Manejar efectos secundarios (fetch de datos) con useEffect.
Implementar estados de carga (loading) y errores.
Requerimiento #3: Integración de Rutas
Implementar react-router-dom para la navegación.
Crear componentes para cada sección/página (Home, Producto, Carrito).
Permitir la navegación entre las diferentes vistas.
Requerimiento #4: Rutas Dinámicas y Protegidas
Crear rutas dinámicas para las páginas de detalle de cada producto.
Implementar un Navbar para una navegación consistente.
(Opcional) Crear rutas protegidas que requieran autenticación.
Cómo Ejecutar el Proyecto
Sigue estos pasos para levantar el proyecto en tu entorno local.

1. Clonar el repositorio
code
Bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
2. Instalar dependencias
Asegúrate de tener Node.js instalado.
code
Bash
npm install
3. Ejecutar la aplicación
Este comando iniciará la aplicación en modo de desarrollo.
code
Bash
npm run dev
Abre http://localhost:5173 (o el puerto que indique la terminal) para ver la aplicación en tu navegador.
Despliegue (Deploy)
La aplicación está lista para ser desplegada en plataformas como Vercel o Netlify.
Pasos Clave: