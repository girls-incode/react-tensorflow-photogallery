import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import routes from './utils/routes';
import NotFound from './page/NotFound';
import { initUser, AppContext } from './store/AppContext';
import Header from './components/Header';
import firebase from './config/firebase';
import AuthRoute from './utils/routes/AuthRoute';

import './assets/css/style.css';
import './App.css';
import Loading from './components/Loading';
import AnimatedRoute from './utils/routes/AnimatedRoute';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(initUser.isLoggedin);
  const [user, setUser] = useState(initUser.user);
  const [loading, setLoading] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedin(true);
        setUser({ user });
        setLoading(false);
      } else {
        setUser(initUser.user);
        setIsLoggedin(initUser.isLoggedin);
        setLoading(false);
      }

      // console.log('onAuthStateChanged: ', user);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className='App w-9/12 mx-auto text-center h-screen relative'>
      <AppContext.Provider value={{ isLoggedin, user }}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch key={loc.pathname} location={loc}>
            {routes.map((route, i) => (
              <AuthRoute
                path={route.path}
                exact={route.exact}
                // component={route.component}
                key={i}
              >
                <AnimatedRoute>
                  <route.component />
                </AnimatedRoute>
              </AuthRoute>
            ))}
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </AnimatePresence>
      </AppContext.Provider>
    </div>
  );
}

export default App;
