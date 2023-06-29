import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async()=> {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMtoken()
  }
}
// requestUserPermission();
const getFCMtoken = async()=>{
   
        let fcmtoken = await AsyncStorage.getItem('fcmtoken');
         console.log('oldtoken',fcmtoken)
        if(!fcmtoken) {
            try {
                const fcmtoken = messaging.getToken();
                if(fcmtoken){
                    console.log('fmctoken',fcmtoken)
                  await  AsyncStorage.setItem('fcmtoken',fcmtoken)
                }
            } catch (error) {
                console.log(error)
            }
        }
   
}

// getFCMtoken();