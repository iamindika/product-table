import React from 'react';
import SearchBar from './SearchBar';

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
    const { search, inStock, submit } = this.state;
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