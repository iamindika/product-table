import React from 'react';

export default function ProductItem({ item }) {
  return (
    <div className="product-item">
      <p>{item}</p>
    </div>
  );
}