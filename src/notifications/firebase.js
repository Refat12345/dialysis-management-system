// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging , getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCNVxcGV3MxRY38g6FxNBZ1q3FJ_Jz6UGY",
  authDomain: "pushnotification-6c5b9.firebaseapp.com",
  projectId: "pushnotification-6c5b9",
  storageBucket: "pushnotification-6c5b9.appspot.com",
  messagingSenderId: "109696301487",
  appId: "1:109696301487:web:93875d8ffee00af2b4175a",
  measurementId: "G-JRWKKLT2GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// export const generateToken = async () => {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//         const token =   await getToken( messaging, {
//             vapidKey : "BIjwsTNptv4tQFjXwQSmrFkZoMsM5svuFSp5PwBtfXNGp8OX6BwCIq53t-7I1OdhjQvu7YeuGMnQu_jXxmMpE-w"

//         });
    
//         console.log (token)
//     }
 

// }
let deviceToken = null;

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    deviceToken = await getToken(messaging, {
      vapidKey: "BIjwsTNptv4tQFjXwQSmrFkZoMsM5svuFSp5PwBtfXNGp8OX6BwCIq53t-7I1OdhjQvu7YeuGMnQu_jXxmMpE-w",
    });
    console.log(deviceToken);
    return deviceToken;
  } else {
    return null;
  }
};

export { deviceToken };