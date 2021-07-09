import React from 'react';

export default function SearchBar({ search, inStock, onChange }) {
  return (
    <div className='search-bar'>
      <input
        id='search-item'
        type="text" 
        value={search}
        placeholder="Search..." 
        onChange={(e) => onChange('search', e)}
      />
      <div>
        <input 
          id='search-filter'
          type="checkbox" 
          checked={inStock} 
          onChange={(e) => onChange('inStock', e)}
        />
        <p>Only show products in stock</p>
      </div>
    </div>
  )
}