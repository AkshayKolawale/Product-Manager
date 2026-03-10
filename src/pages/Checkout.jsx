import { useState } from 'react';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
  const { totalPrice } = useCart();
  const [formData, setFormData] = useState({ name: '', address: '', email: '' });
  const [isOrdered, setIsOrdered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    // In a real app, you'd send formData to a server here
  };

  if (isOrdered) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Checkout</h2>
      <p>Order Total: <strong>${totalPrice.toFixed(2)}</strong></p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Full Name" 
          required 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          style={{ padding: '10px' }}
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          required 
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          style={{ padding: '10px' }}
        />
        <textarea 
          placeholder="Shipping Address" 
          required 
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '12px', background: '#232f3e', color: 'white', cursor: 'pointer' }}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;