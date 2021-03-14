<template>
  <div id="app">
    <div id="navbar">
      <b-navbar
        toggleable
        type="dark"
        variant="faded"
        class="shadow p-3  bg-white rounded"
      >
        <a href="/" id="logo"
          ><img
            src="https://drive.google.com/uc?id=1YomJCZwim6dMXB64QNxlWHHM_f2Q27TK"
            style="max-width: 10rem;"
            alt=""
        /></a>
        <div id="navbar-right">
          <a href="/product">Shop all</a>
          <a href="/abouts">About</a>
          <a href="/Stories">Stories</a>
          <a href="/register">Contact</a>
        </div>
      </b-navbar>
      <b-navbar>
        <div class="wow">
          <a
            ><router-link to="/login"
              ><b-icon icon="person-circle"></b-icon> Login</router-link
            ></a
          >
          <a
            ><router-link to="/about"
              ><b-icon icon="basket"></b-icon> {{ $store.state.i1.amount+$store.state.i2.amount+$store.state.i3.amount+$store.state.i4.amount+$store.state.i5.amount+$store.state.i6.amount+$store.state.i7.amount+$store.state.i8.amount+$store.state.i9.amount+$store.state.i10.amount+$store.state.i11.amount+
                $store.state.i12.amount+$store.state.i13.amount+$store.state.i14.amount+$store.state.i15.amount+$store.state.i16.amount+$store.state.i17.amount+$store.state.i18.amount+$store.state.i19.amount+$store.state.i20.amount }} </router-link
          ></a>
        </div>
      </b-navbar>
    </div>

    <router-view />
    <div class="footer">
      <img src="https://drive.google.com/uc?id=1YomJCZwim6dMXB64QNxlWHHM_f2Q27TK" style="max-width: 10rem;" alt="">
    </div>
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
<style>
#navbar a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  margin-block-end: 1px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#left {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#right {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(34, 104, 77);
  color: white;
  text-align: center;
}
.hh1 {
  font-variant: normal;
}
</style>
