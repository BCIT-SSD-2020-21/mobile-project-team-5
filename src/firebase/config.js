import * as firebase from "firebase"
import "@firebase/auth"
import "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC7-canGMg5XsGkECWtIPdgWMY0SQV07XI",
  authDomain: "your-auth-domain-b1234.firebaseapp.com",
  databaseURL: "https://your-database-name.firebaseio.com",
  projectId: "game-stock-d93a0",
  storageBucket: "your-project-id-1234.appspot.com",
  messagingSenderId:
    "AAAA64XeCA0:APA91bFcFic4PuH0QG-LNImRzqbEiCed5wsMNlU7wsvL4oUSQpIQWyyRiAFwVGirIL1o5RTbyEBjQQzvFn6Rf1OyX2cCkC5XgaaF6QhHkzWofT6PCFdrnlskQQRnat4coWmi4GPZuvcf",
  appId: "1:1011563235341:ios:f280e71b69fe8bc87aad44",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
