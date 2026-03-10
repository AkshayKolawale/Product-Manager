import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ShoppingCart } from 'lucide-react'; // Using lucide for a clean icon

const Navbar = () => {
  const { cart } = useCart();
  
  // Calculate total items in cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1rem 2rem', 
      background: '#232f3e', 
      color: 'white',
      alignItems: 'center' 
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
        ProductExplorer
      </Link>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <ShoppingCart size={20} />
          <span>Cart ({itemCount})</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;