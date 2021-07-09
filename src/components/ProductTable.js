import React from 'react';
import ProductCategory from './ProductCategory';
import ProductItem from './ProductItem';

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default function ProductTable({ search, inStock, submit }) {
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