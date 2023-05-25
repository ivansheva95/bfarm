import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCSBLPJexvTUNrad4CekoyNxg0F9JqLp20',
  authDomain: 'bfarm-7f626.firebaseapp.com',
  projectId: 'bfarm-7f626',
  storageBucket: 'bfarm-7f626.appspot.com',
  messagingSenderId: '666618294206',
  appId: '1:666618294206:web:ae82e0085799e4449293ef'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
