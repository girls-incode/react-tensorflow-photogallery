import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';

export default function AuthRoute(props) {
  const { isLoggedin } = useContext(AppContext);
  const ishome = props.path === '/';
  const isLogin = props.path === '/login';
  const isRegistered = props.path === '/register';

  if (!isLoggedin) {
    if (!isLogin && !ishome && !isRegistered) return <Redirect to='/login' />;
  } else if (isLogin || isRegistered) return <Redirect to='/' />;
  return <Route {...props} />;
}
