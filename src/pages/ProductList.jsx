import { useState, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import useDebounce from "../hooks/useDebounce.js";
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const debouncedSearch = useDebounce(searchTerm, 500);

  // Logic for filtering by category AND search
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(p => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesSearch = p.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, category, debouncedSearch]);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error loading products: {error}</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Explorer</h1>

      {/* Filters Section */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search products..." 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <select onChange={(e) => setCategory(e.target.value)} style={{ padding: '8px' }}>
          <option value="All">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;