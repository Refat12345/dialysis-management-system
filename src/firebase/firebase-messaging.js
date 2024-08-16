/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getMessaging, getToken } from "firebase/messaging";
import { showErrorToast } from "../utils/toastUtils";
import { onMessage } from "firebase/messaging";

const vapidKey =
  "BAPIPemYItXKQB2gGSkJT09eBL537m5fiZJhkdbOtVbdm00DYCI_fIgC8Uoe0A5K7Yft9kEVz__Wn6gzj1H070o";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwri75uXqA24KBqHusdsupeSuWyavYHdk",
  authDomain: "daamukum-hayat.firebaseapp.com",
  projectId: "daamukum-hayat",
  storageBucket: "daamukum-hayat.appspot.com",
  messagingSenderId: "64553243591",
  appId: "1:64553243591:web:25ab6add7912152b7affe2",
  measurementId: "G-8L7E5H3DBG",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(firebaseApp);

let fcmToken = null;

export const getFCMToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    try {
      fcmToken = await getToken(messaging, {
        vapidKey: vapidKey,
      });
      console.log(`Device token ===================> ${fcmToken}`);

      //Init Foreground Messaging
      onMessage(messaging, (payload) => {
        console.log(payload);
      });
    } catch (e) {
      console.log(e);
      showErrorToast("حدثت مشكلة معنية بالإشعارات");
    }
  } else {
    showErrorToast("لن يتم إرسال الإشعارات  لعدم القبول بالصلاحيات");
  }
};

export { fcmToken };

export function getMachineId() {
    
  let machineId = localStorage.getItem('MachineId');
  
  if (!machineId) {
      machineId = crypto.randomUUID();
      localStorage.setItem('MachineId', machineId);
  }

  return machineId;
}