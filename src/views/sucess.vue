<template>
  <div>
    <br />
    <div>
      <img :src="photoUrl" alt="Vuetify.js" class="mb-5" />
    </div>
    <footer>
      Hello!
      <em> {{ name }} </em><br />
      <br />
      <h1>+++ Thank you for Login +++</h1>
      <div>
        <b-button href="/product">Shop Now</b-button>
      </div>
      <h2></h2>
    </footer>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      name: "",
      email: "",
      photoUrl: "",
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        // show email name image
        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
      } else {
        // No user is signed in.
        // return login
        this.$router.replace("/login");
      }
    });
  },
};
</script>