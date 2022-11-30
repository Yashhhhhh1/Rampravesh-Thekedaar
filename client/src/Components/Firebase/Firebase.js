import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAeixd5qLpvCooeMpujfRtf6b0eHIsOGAo",
    authDomain: "rampraveshthedar.firebaseapp.com",
    projectId: "rampraveshthedar",
    storageBucket: "rampraveshthedar.appspot.com",
    messagingSenderId: "238017427352",
    appId: "1:238017427352:web:f7120e4e2fcaf82c05dded",
    measurementId: "G-VDSPTCWYTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
