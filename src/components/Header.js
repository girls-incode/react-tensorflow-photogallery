import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import firebase from '../config/firebase';
import { AppContext } from '../store/AppContext';

const Header = () => {
  const history = useHistory();
  const context = useContext(AppContext);

  function logout(e) {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace('/login');
      })
      .catch((err) => console.log(err));
  }

  return (
    <nav className='mb-12 py-5 bg-indigo-900 text-white rounded'>
      <ul className='flex px-5'>
        <li className='mr-5'>
          <NavLink to='/' exact activeClassName='underline text-blue-200'>
            Home
          </NavLink>
        </li>
        <li className='mr-5'>
          <NavLink to='/gallery' activeClassName='underline text-blue-200'>
            Gallery
          </NavLink>
        </li>
        <li className='flex-grow text-right'>
          {context.isLoggedin ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <>
              <NavLink
                to='/login'
                className='mr-5'
                activeClassName='underline text-blue-200'
              >
                Login
              </NavLink>
              <NavLink to='/register' activeClassName='underline text-blue-200'>
                Register
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
