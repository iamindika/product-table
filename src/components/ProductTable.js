import React from 'react';
import ProductCategory from './ProductCategory';
import ProductItem from './ProductItem';

export default function ProductTable({ products, inStock }) {
  const categoryLabels = [];

  if(products.length) {
    const filteredProducts = products.filter(products => (
      products.stocked === inStock
    ));
  
    if(filteredProducts.length) {
      products.forEach(product => {
        if(!categoryLabels.includes(product.category)) {
          categoryLabels.push(product.category);
        }
      })
    }
  }

  return (
    <div className="product-table">
      {
        categoryLabels.length !== 0 
          &&  categoryLabels.map(label => (
                <React.Fragment>
                  <ProductCategory key={label} category={label}/>
                  {
                    products
                      .filter(product => product.category === label)
                      .map(item => (
                        <ProductItem name={item.name} price={item.price} />
                      ))
                  }
                </React.Fragment>
              ))
      }
    </div>
  );
}