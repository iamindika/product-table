import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from  './ProductTable';

export default class FilterableProductTable extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      inStock: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, e) {
    if(id === 'search') {
      this.setState({
        'search': e.target.value
      });
    } 
    
    if(id === 'inStock') {
      this.setState(prevState => ({
        'inStock': !prevState['inStock']
      }));
    }
  }

  render() {
    const { search, inStock } = this.state;
    return (
      <div className='product-table'>
        <SearchBar 
          search={search}
          inStock={inStock}
          onChange={this.handleChange}
        />
      <ProductTable search={search} inStock={inStock} />
    </div>
    )
  }
}