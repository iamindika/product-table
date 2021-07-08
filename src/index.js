import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/SearchBar';

ReactDOM.render(
  <React.StrictMode>
    <SearchBar 
      search='Scruffy' 
      inStock={true}
      onChange={(id, e) => alert(`id ${id} is ${e.target.value}`)}
      onSubmit={() => alert('Form Submitted!')}
    />
  </React.StrictMode>,
  document.getElementById('root')
);