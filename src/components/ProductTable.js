import React from 'react';
import ProductCategory from './ProductCategory';
import ProductItem from './ProductItem';
import { findProduct } from '../helpers/search';

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default function ProductTable({ search, inStock }) {
  const categoryLabels = [];
  let displayProducts = products;

  if(search) {
    displayProducts = findProduct(displayProducts, search);
  }

  if(displayProducts.length && inStock) {
    displayProducts = displayProducts.filter(products => (
      products.stocked === inStock
    ));
  }
  
  if(displayProducts.length) {
    displayProducts.forEach(product => {
      if(!categoryLabels.includes(product.category)) {
        categoryLabels.push(product.category);
      }
    })
  }

  return (
    <div className="product-table">
      {
        categoryLabels.length === 0 
          && <p>No product matches!</p>
      }
      {
        categoryLabels.length !== 0 
          &&  <ul>
                {
                  categoryLabels.map(label => (
                    <li key={label} > 
                      <ProductCategory category={label}/>
                      <ul>
                        {
                          displayProducts
                            .filter(product => product.category === label)
                            .map(item => (
                              <li key={item.name}>
                                <ProductItem  
                                  name={item.name} 
                                  price={item.price} 
                                />
                              </li>
                            ))
                        }
                      </ul>
                    </li>
                  ))
                }
              </ul>
              
      }
    </div>
  );
}