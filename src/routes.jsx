import Layout from './Layout';
import Messages from './Messages';
import Login from './Login';
import Logout from './Logout';
import Info from './Info';
import Home from './Home';
import NotFound from './errors/NotFound';

async function loginAction({ request }) {
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');

  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('token', 'fake-token-123');
    return redirect('/');
  }
  return { error: 'Invalid credentials' };
}
const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/messaggi', element: <Messages /> },
      { path: '/info', element: <Info />, action: loginAction },
      { path: '/logout', element: <Logout />},
      { path: '*', element: <NotFound /> },
    ],
  },
];



export default routes;