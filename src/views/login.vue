<template>
  <div class="login">
    <div class="bg-img">
       <div class="row">
        <div class="col-md-12 "></div>
        <div class="col-md-8 offset-md-2 info bg-custom">
          <p class="text-center">
            Login โดยกดปุ่ม Login by Google นะครับ 
          </p>
          <p>ต้อง Login ก่อนจึงจะเข้าหน้า Basket ได้ </p>
          <p>หน้า Basket คือหน้ากดสั่งสินค้า </p> 
        </div>
      
  <form action="/action_page.php" class="container">
    <h1>Login</h1>
    <b-form @submit.stop.prevent>
                <label for="text-password">Email</label>
                 <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="email"
                  id="text-email"
                  aria-describedby="password-help-block"
                ></b-form-input>
                 </b-input-group>
              </b-form>
              <b-form @submit.stop.prevent>
                <label for="text-password">Password</label>
                 <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="key"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  id="text-password"
                  aria-describedby="password-help-block"
                ></b-form-input>
                  </b-input-group>
              </b-form>
              <br />
    <b-button variant="outline-danger" @click="login"><b-icon icon="google"></b-icon> Login with Google+</b-button
        >&nbsp;
        <!-- <button type="submit" class="btn btn-primary">Login</button>&nbsp; -->
        <b-button
          variant="outline-info"
          @click="logout"
          v-on:click="$store.state.say('Sign Out Success!!!')"
          ><b-icon icon="power"></b-icon> Logout</b-button
        >
  </form>
  </div>
</div>
<hr/>
</div>
</template>

<script>
import firebase from "firebase/app";
export const auth = firebase.auth();
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  computed: {
    showErrors() {
      return this.errors;
    },
  },
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log("User = " + user);
          this.$router.replace("/sucess");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log('Sign-out successful')
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
};
</script>

<style>
body, html {
  height: 100%;
}
* {
  box-sizing: border-box;
}
.bg-img {
  /* The image used */
  background-image: url("https://wallpapercave.com/wp/wp2757890.gif");
  /* Control the height of the image */
  min-height: 580px;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
/* Add styles to the form container */
.container {
  position: absolute;
  right: 0;
  margin: 20px;
  max-width: 300px;
  padding: 16px;
  background-color: rgb(255, 255, 255);
}
/* Full-width input fields */
  input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 1px 0 22px 0;
  border: none;
  background: #f1f1f1;
}
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}
/* Set a style for the submit button */
.btn {
  padding: 16px 20px;
  margin: 2%;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.btn:hover {
  opacity: 1;
}
.bg-custom {
  background-color: rgba(25, 13, 77, 0.9);
  height: 30vh;
  width: 10%;
}
.bg-img .info {
  margin-top: 8%;
  transform: translateY(-15%);
  margin-left: 10%;
}
.bg-img .info p {
  font-size: 2em;
  font-weight: 500;
  color: rgb(255, 255, 255);
  letter-spacing: 2px;
  margin-top: 20px;
}
</style>