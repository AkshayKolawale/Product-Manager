import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/products')}>Go Shopping</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Your Shopping Cart</h1>
      {cart.map(item => (
        <div key={item.id} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          borderBottom: '1px solid #ddd', 
          padding: '15px 0',
          gap: '20px' 
        }}>
          <img src={item.image} alt={item.title} style={{ width: '80px' }} />
          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item.id)} style={{ color: 'red' }}>Remove</button>
        </div>
      ))}

      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button 
          onClick={() => navigate('/checkout')}
          style={{ padding: '10px 20px', background: '#f0c14b', border: '1px solid #a88734', borderRadius: '3px', cursor: 'pointer' }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;