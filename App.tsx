/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect,useState} from 'react';
import AppContainer from './navigation/Navigation';
import {requestUserPermission} from './pushnotification/pushmessage.js'
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native/Libraries/Alert/Alert';
import PushNotification from "react-native-push-notification";


function App(): JSX.Element {



// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token: any) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification: any) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

  const requestUserPermission = async()=> {
    try {
      const enabled = await messaging().hasPermission();
      // const enabled =
      //   authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      //   authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      console.log('permission',enabled)
      if (enabled) {
        // console.log('Authorization status:', authStatus);
        // getFCMtoken ()
        const fcmtoken = await messaging().getToken();
        console.log('fmctoken',fcmtoken)
      }
    } catch (error) {
      console.log(error)
    }
  
  }

  const notificationListner = async ()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:', remoteMessage.notification);
    });

    messaging().onMessage(async remoteMesage =>{
      console.log("recieve in forground",remoteMesage.notification)
    })


    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  }
  useEffect(()=>{
    requestUserPermission();
    notificationListner();
  },[])


  return (
  <AppContainer/>
  
  );
}

export default App;
