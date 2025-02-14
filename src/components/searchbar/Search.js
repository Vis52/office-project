import React, { useEffect, useState } from 'react';
import alldata from '../alldata'; 
import './Search.css';

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchAllProduct, setSearchAllProduct] = useState([]);
  const [selectItem, setSelectItem] = useState(-1);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectItem((prev) => (prev < searchAllProduct.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectItem((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      if (selectItem >= 0) {
        const product = searchAllProduct[selectItem];
        setSelectedProduct(product); 
      }
    }
  };

  useEffect(() => {
    if (search !== "") {
      const newFilterData = alldata.filter((allproduct) => {
        return allproduct.name.toLowerCase().includes(search.toLowerCase());
      });
      setSearchAllProduct(newFilterData);
    } else {
      setSearchAllProduct([]);
    }
  }, [search]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <form>
          <input
            className="b1"
            type="text"
            name="name"
            placeholder="         Search Here"
            onChange={handleChange}
            value={search}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
      {searchAllProduct.length > 0 && (
        <div className="search-result">
          {searchAllProduct.map((alldata, index) => (
          
<a
  href={`/product/${alldata.name.toLowerCase()}`}  // Use product name in URL (lowercased)
  className={selectItem === index ? "search_suggestion_line active" : "search_suggestion_line"}
  onClick={() => setSelectedProduct(alldata)}  // Optionally set the selected product
>
  {alldata.name}
</a>

          ))}
        </div>
      )}

     
    </div>
  );
};

export default Search;
