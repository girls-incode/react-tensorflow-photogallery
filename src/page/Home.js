import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext';

const Home = () => {
  const context = useContext(AppContext);
  const email = context.isLoggedin ? context.user.user.email : '';
  return (
    <h1>
      Welcome{' '}
      {context.isLoggedin && <b>{email.substr(0, email.indexOf('@'))}</b>}
    </h1>
  );
};

export default Home;
