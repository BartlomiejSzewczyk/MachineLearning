import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBCjEoB2RKgBw9zPHVWS-syRsv1Vm_889w",
  authDomain: "machinelearning-cfc59.firebaseapp.com",
  databaseURL: "https://machinelearning-cfc59.firebaseio.com",
  storageBucket: "machinelearning-cfc59.appspot.com",
};

firebase.initializeApp(config);

export default firebase;
