import React from "react";

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
      <form>
      <div style={{paddingRight:"10px"}}>
        <input 
          type="text" 
          value={filterText} 
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)} />
          </div>
          <label>
          <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  }

  export default SearchBar;