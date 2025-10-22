// src/pages/ProductDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

// Este componente recibe la lista completa de productos para buscar el que corresponde.
function ProductDetailPage({ products }) {
  // 1. Usamos el hook `useParams` de React Router para obtener los parámetros de la URL.
  //    En este caso, extraemos el `id` (ej: de "/productos/12", el id es "12").
  const { id } = useParams();

  // 2. Buscamos el producto específico en el array de productos.
  //    Usamos `find` y comparamos los IDs. Es importante usar `==` en lugar de `===`
  //    porque el `id` de la URL siempre es un string, mientras que el `id` en nuestros datos
  //    podría ser un número.
  const product = products.find(p => p.id == id);

  // 3. Si no se encuentra ningún producto con ese ID (por ejemplo, si se ingresa una URL inválida),
  //    mostramos un mensaje de error.
  if (!product) {
    return <div className="page-container"><h2>Producto no encontrado</h2></div>;
  }

  // 4. Si encontramos el producto, renderizamos sus detalles.
  return (
    <div className="page-container product-detail-container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <p className="product-detail-description">
        Esta es una descripción detallada para el producto. Idealmente, esta información
        también vendría de la base de datos o API. Disfruta de la calidad y el diseño superior
        de nuestro {product.name}.
      </p>
      <p className="product-detail-price">${parseFloat(product.price).toFixed(2)}</p>
    </div>
  );
}

export default ProductDetailPage;