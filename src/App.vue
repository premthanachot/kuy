<template>
  <div id="app">
    <div id="left">
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="/">MIDORI</b-navbar-brand>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              ><router-link to="/about">Basket</router-link></b-nav-item>
            <b-nav-item href="/login">Login</b-nav-item>
            <b-nav-item href="/product">Product</b-nav-item>
            <!-- <b-nav-item href="/register">Register</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <div class="mt-5 pt-5 pb-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xs-12 about-company">
            <h2>Heading</h2>
            <p class="pr-5 text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis
            </p>
            <p>
              <a href="#"><i class="fa fa-facebook-square mr-1"></i></a
              ><a href="#"><i class="fa fa-linkedin-square"></i></a>
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
            <ul class="m-0 p-0">
              <li>- <a href="#">Lorem ipsum</a></li>
              <li>- <a href="#">Nam mauris velit</a></li>
              <li>- <a href="#">Etiam vitae mauris</a></li>
              <li>- <a href="#">Fusce scelerisque</a></li>
              <li>- <a href="#">Sed faucibus</a></li>
              <li>- <a href="#">Mauris efficitur nulla</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4">Location</h4>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
            <p><i class="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col copyright">
            <p class="">
              <small class="text-white-50">© 2019. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  background: #3a775d;
  color: white;
}
.links {
  ul {
    list-style-type: none;
  }
  li a {
    color: white;
    transition: color 0.2s;
    &:hover {
      text-decoration: none;
      color: #4180cb;
    }
  }
}
.about-company {
  i {
    font-size: 25px;
  }
  a {
    color: white;
    transition: color 0.2s;
    &:hover {
      color: #4180cb;
    }
  }
}
.location {
  i {
    font-size: 18px;
  }
}
.copyright p {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
