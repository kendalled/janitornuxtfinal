import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// UPDATE WITH YOUR CONFIG
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBN2Ip7UP-0f4sqAIPwg21fldXqp0oubdc',
    authDomain: 'janitorutah.firebaseapp.com',
    databaseURL: 'https://janitorutah.firebaseio.com',
    projectId: 'janitorutah'
  }
  firebase.initializeApp(config)
  // Stripe.setPublishableKey('pk_test_UlizLNrbsRWD5l82SMEEWnGX005AQ946Zi')
}

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     // User is signed in.
//     // const isAnonymous = user.isAnonymous
//     // console.log(isAnonymous)
//     // const uid = user.uid
//     // console.log(uid)
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
//   // ...
// })

const fireDb = firebase.firestore()
export {
  firebase,
  fireDb
}
