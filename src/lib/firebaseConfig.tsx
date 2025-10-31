import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase Production
// const firebaseConfig = {
//   apiKey: "AIzaSyBEm4Ov_JlRG6PZ6NPSAjYb6U5h3GGJNpk",
//   authDomain: "beekasir-60f31.firebaseapp.com",
//   databaseURL: "https://beekasir-60f31-default-rtdb.firebaseio.com",
//   projectId: "beekasir-60f31",
//   storageBucket: "beekasir-60f31.appspot.com",
//   messagingSenderId: "767478061624",
//   appId: "1:767478061624:web:20b5db4a8c334a4d0fe4cd",
//   measurementId: "G-WDSJE7C5XE"
// };

// Initialize Firebase Dev
const firebaseConfig = {
  apiKey: "AIzaSyC-KgDAvMSkk7Quw8oKVMhxLAp7V8xlMtM",
  authDomain: "beekasir.firebaseapp.com",
  databaseURL: "https://beekasir-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "beekasir",
  storageBucket: "beekasir.appspot.com",
  messagingSenderId: "690577079701",
  appId: "1:690577079701:web:3b2967e6733ca6ef594a9c",
  measurementId: "G-LM8GHHHQCZ"
};

const APP = initializeApp(firebaseConfig);
const DB = getFirestore(APP);

export { DB };