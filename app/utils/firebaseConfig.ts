import Firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

const app = Firebase.initializeApp({
  apiKey: 'AIzaSyC-WqNmDuCrcVUTtzEgZQh7XLQ3eSAk8A4',
  authDomain: 'rr-companion-9ab6f.firebaseapp.com',
  databaseURL: 'https://rr-companion-9ab6f.firebaseio.com',
  projectId: 'rr-companion-9ab6f',
  storageBucket: 'rr-companion-9ab6f.appspot.com',
  messagingSenderId: '277661536455',
  appId: '1:277661536455:web:1ff4f256df83f9469d2ee2',
  measurementId: 'G-FYD3BKETNK',
});

export default app;
