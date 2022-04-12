import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJR_CREzs_QIjzaOYFfiFUnmpn2U3UU_U",
  authDomain: "hotel-booking-f42a1.firebaseapp.com",
  projectId: "hotel-booking-f42a1",
  storageBucket: "hotel-booking-f42a1.appspot.com",
  messagingSenderId: "408316231741",
  appId: "1:408316231741:web:69f11b0713023624a6ea54"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth (app) ;
export default app ;