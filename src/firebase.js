import firebase from 'firebase';
import google_config from './static/data/config.js';

firebase.initializeApp(google_config);

export default firebase;
