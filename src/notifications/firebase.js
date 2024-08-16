import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBmh91f0PtWDaL5x-ziL2U-heKsO6BKspg",
  authDomain: "daamukum-hayat.firebaseapp.com",
  projectId: "daamukum-hayat",
  storageBucket: "daamukum-hayat.appspot.com",
  messagingSenderId: "64553243591",
  appId: "1:64553243591:android:cd820ae1385823bf7affe2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

let deviceToken = null;

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    deviceToken = await getToken(messaging);
    console.log(deviceToken);
    return deviceToken;
  } else {
    return null;
  }
};

export { deviceToken };

