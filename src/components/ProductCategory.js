import React from 'react';

export default function ProductCategory({ category }) {
  return (
    <div className="product-category">
      <h2>{category}</h2>
    </div>
  );
}