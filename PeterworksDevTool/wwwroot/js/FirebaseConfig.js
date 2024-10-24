import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig } from "firebase/remote-config";
import { getValue } from "firebase/remote-config";


const firebaseConfig = {
    apiKey: "AIzaSyBhmm62I_pCZnohEciTuQ9PcHLlW1WjkcE",
    authDomain: "peterworksdevtool.firebaseapp.com",
    projectId: "peterworksdevtool",
    storageBucket: "peterworksdevtool.appspot.com",
    messagingSenderId: "512974132500",
    appId: "1:512974132500:web:436b076d680bd1ac619e01",
    measurementId: "G-Q3E0Y3VP2S"
  };

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
remoteConfig.defaultConfig = {
    "user_name": "고객님"  
};

function getUserValue() {

    getValue(remoteConfig, "user_name").then((value) => {
        return value.asString();
        console.log(value.asString());
    }).catch((error) => {
        console.error(error);
    });


}


