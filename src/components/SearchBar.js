import React from 'react';

export default function SearchBar({ search, inStock, onChange, onSubmit }) {
  return (
    <div className='search-bar'>
      <form onSubmit={onSubmit}>
        <div className='search-item'>
          <input 
            type="text" 
            value={search} 
            onChange={(e) => onChange('search', e)}
          />
        </div>
        <div className='search-filter'>
          <input 
            type="checkbox" 
            checked={inStock} 
            onChange={(e) => onChange('inStock', e)}
          />
          <p>Only show products in stock</p>
        </div>
      </form>
    </div>
  )
}