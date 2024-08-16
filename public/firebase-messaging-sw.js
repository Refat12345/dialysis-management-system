/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBmh91f0PtWDaL5x-ziL2U-heKsO6BKspg",
  authDomain: "daamukum-hayat.firebaseapp.com",
  projectId: "daamukum-hayat",
  storageBucket: "daamukum-hayat.appspot.com",
  messagingSenderId: "64553243591",
  appId: "1:64553243591:android:cd820ae1385823bf7affe2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
