import React from 'react';

export default function ProductItem({ name, price }) {
  return (
    <div className="product-item">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}