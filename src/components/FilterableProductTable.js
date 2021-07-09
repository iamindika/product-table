import React from 'react';
import SearchBar from './SearchBar';

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
      submit: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(id, e) {
    if(id === 'search') {
      this.setState({
        'search': e.target.value,
        'submit': false
      });
    } 
    
    if(id === 'inStock') {
      this.setState(prevState => ({
        'inStock': !prevState['inStock']
      }));
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submit: true
    })
  }

  render() {
    const { search, inStock } = this.state;
    return (
      <div className='product-table'>
        <SearchBar 
          search={search}
          inStock={inStock}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
      />
    </div>
    )
  }
}