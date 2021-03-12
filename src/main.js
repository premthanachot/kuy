import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDXIfIa0Z_EtWhE_vyIw3QW179EdndUx0o",
    authDomain: "midori-test-e2d15.firebaseapp.com",
    projectId: "midori-test-e2d15",
    storageBucket: "midori-test-e2d15.appspot.com",
    messagingSenderId: "1028424293729",
    appId: "1:1028424293729:web:961579088a182b99427920",
    measurementId: "G-16031ZTZ3X"
  };
  firebase.initializeApp(firebaseConfig)
}

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
