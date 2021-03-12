<template>
  <div class="login">
    <div>
      
    </div>
    <br />
    <br />
    <br />
    <b-container>
      <b-card bg-variant="dark" text-variant="white" title="LOGIN">
        <b-row class="text-center">
          <b-col></b-col>
          <b-col class="8">
            <b-card-text>
              <b-form @submit.stop.prevent>
                <label for="text-password">Email</label>
                <b-form-input
                  type="email"
                  id="text-email"
                  aria-describedby="password-help-block"
                ></b-form-input>
              </b-form>
            </b-card-text>
          </b-col>
          <b-col></b-col>
        </b-row>
        <br>
        <b-row class="text-center">
          <b-col></b-col>
          <b-col class="8">
            <b-card-text>
              <b-form @submit.stop.prevent>
                <label for="text-password">Password</label>
                <b-form-input
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                ></b-form-input>
              </b-form>
            </b-card-text>
          </b-col>
          <b-col></b-col>
        </b-row>
        <br>
        <b-button variant="danger" @click="login">Login by Google</b-button>&nbsp;
        <b-button variant="info">Login</b-button>&nbsp;
        <b-button href="/register" variant="primary">Sign in</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
export const auth = firebase.auth();
export default {
   methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user
          console.log('User = ' + user)
          this.$router.replace('/product')
        })
        .catch((error) => {
          const errorCode = error.code
          console.log(errorCode)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('Sign-out successful')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style>

</style>