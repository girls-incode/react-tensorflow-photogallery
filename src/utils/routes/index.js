/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Home from './../../page/Home';
import Login from './../../page/Login';
import Gallery from './../../page/Gallery';
import NotFound from './../../page/NotFound';
import Register from './../../page/Register';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/login',
    // exact: true,
    component: () => <Login />,
  },
  {
    path: '/register',
    // exact: true,
    component: () => <Register />,
  },
  {
    path: '/gallery',
    // exact: true,
    component: () => <Gallery />,
  },
  {
    path: '*',
    // exact: true,
    component: () => <NotFound />,
  },
];
