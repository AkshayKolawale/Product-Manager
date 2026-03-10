import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
      <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain' }} />
      <h4 style={{ height: '40px', overflow: 'hidden', margin: '10px 0' }}>{product.title}</h4>
      <p style={{ fontWeight: 'bold' }}>${product.price}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
          View Details
        </Link>
        <button 
          onClick={() => addToCart(product)}
          style={{ backgroundColor: '#ff9900', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;