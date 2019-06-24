import * as firebase from 'firebase';
import config from './config';

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
