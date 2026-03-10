import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      height: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #f7f7f7, #ffffff)',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to ProductExplorer</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginBottom: '30px' }}>
        Discover the best products at unbeatable prices. Electronics, Jewelry, Fashion, and more!
      </p>
      <button 
        onClick={() => navigate('/products')}
        style={{ 
          padding: '15px 40px', 
          fontSize: '1.1rem', 
          backgroundColor: '#232f3e', 
          color: 'white', 
          border: 'none', 
          borderRadius: '30px', 
          cursor: 'pointer' 
        }}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default Home;