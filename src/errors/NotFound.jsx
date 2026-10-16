import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default NotFound;