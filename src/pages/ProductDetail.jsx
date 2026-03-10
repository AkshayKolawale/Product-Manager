import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useCart } from '../hooks/useCart';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Fetching a single product by ID
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading product details...</h2>;
  if (error) return <h2 style={{ textAlign: 'center', color: 'red' }}>Error: {error}</h2>;
  if (!product) return <h2 style={{ textAlign: 'center' }}>Product not found!</h2>;

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', cursor: 'pointer' }}>
        ← Back
      </button>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Product Image */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }} 
          />
        </div>

        {/* Product Info */}
        <div style={{ flex: '1.5', minWidth: '300px' }}>
          <span style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.8rem' }}>{product.category}</span>
          <h1 style={{ margin: '10px 0' }}>{product.title}</h1>
          <p style={{ fontSize: '1.2rem', color: '#B12704', fontWeight: 'bold' }}>${product.price}</p>
          <hr />
          <h3>Description</h3>
          <p style={{ lineHeight: '1.6', color: '#333' }}>{product.description}</p>
          
          <button 
            onClick={() => addToCart(product)}
            style={{ 
              backgroundColor: '#f0c14b', 
              border: '1px solid #a88734', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;