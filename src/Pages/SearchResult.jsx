import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from './ShopPage/ProductList';

function SearchResult() {
  const { query } = useParams();
  const results = products.filter(product =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  
  // const [results, setResults] = useState([]);
  // useEffect(() => {
  //   fetch(`/api/search?query=${query}`)
  //     .then(response => response.json())
  //     .then(data => setResults(data))
  //     .catch(error => console.error(error));
  // }, [query]); 
  
  return (
    // <div>
    //   Search results for: {query}
    //   {results.map(result => (
    //     <div key={result.id}>
    //       <h2>{result.title}</h2>
    //       <p>{result.description}</p>
    //     </div>
    //   ))}
    // </div>
    <div>
      <h1>Products:</h1>
      {results.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.brand}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;