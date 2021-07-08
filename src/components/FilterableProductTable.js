import React from 'react'

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default class FilterableProductTable extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      inStock: false,
      products
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(id, e) {
    console.log(`id: ${id} is ${e.target.value}`);
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('Search Form Submitted');
  }

  render() {
    <div className='product-table'></div>
  }
}