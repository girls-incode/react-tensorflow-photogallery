// import React from 'react';
import firebase from 'firebase';

let firebaseConfig = {
  apiKey: 'AIzaSyCPxdX6MssavdGYV4RL_DtYr9o9x08sSKo',
  authDomain: 'react-pics-8ba3b.firebaseapp.com',
  databaseURL: 'https://react-pics-8ba3b.firebaseio.com',
  projectId: 'react-pics-8ba3b',
  storageBucket: 'react-pics-8ba3b.appspot.com',
  messagingSenderId: '401202766120',
  appId: '1:401202766120:web:f5b9ba716377ba26b2b01d',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
