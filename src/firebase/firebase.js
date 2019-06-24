import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDtYLOKqth0wQuE1rrgSFN0EelW0ITZnuw',
  authDomain: 'expensify-d6ca9.firebaseapp.com',
  databaseURL: 'https://expensify-d6ca9.firebaseio.com',
  projectId: 'expensify-d6ca9',
  storageBucket: 'expensify-d6ca9.appspot.com',
  messagingSenderId: '228201039137',
  appId: '1:228201039137:web:fb8c5f35e04c84f1'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Hal D',
  age: 64,
  isSingle: true,
  location: {
    city: 'Baton Rouge',
    country: 'United States'
  }
});

database.ref('attributes').set({
  height: 70,
  weight: 171
});
