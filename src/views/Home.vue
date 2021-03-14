<template>
  <body>
    <div class="container-fluid banner">
      <div class="row">
        <div class="col-md-12 "></div>
        <div class="col-md-8 offset-md-2 info bg-custom">
          <h1 class="text-center">Midori</h1>
          <p class="text-center">
            ยินดีต้อนรับลูกค้าทุกท่าน
          </p>
          <p class="text-center">เข้าสู่ร้านขายเฟอร์นิเจอร์ระดับโลก</p>
          <b-container class="text-center">
            <b-button squared variant="outline-light" size="lg" href="/product"
              >Shop Now</b-button
            >
            
          </b-container>
          
        </div>
      </div>
    </div>

    <h1 class="center1"><b-icon icon="bookmark-star"></b-icon> Sale</h1>
    <hr />
    <h1 class="center2"> Bestsellers</h1>
    <div class="container">
    <div class="team-area">
        <div class="hovereffect">
          <img :src="$store.state.i1.image"/>
          <div class="overlay">
            <h2>Bestsellers</h2>
            <a class="info"     v-on:click="
                      ($store.state.i1.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  > เพิ่มสินค้า</a>
          </div>
           <b-card-text class="center3">
            GRIMSBU กริมส์บู
            <hr />
            ฿1290
          </b-card-text>
        </div>
  
        <div class="hovereffect">
         <img :src="$store.state.i2.image"/>
          <div class="overlay">
            <h2>Bestsellers</h2>
            <a class="info"                     v-on:click="
                      ($store.state.i2.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >
              เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              TARVA ทาร์ฟวา
            <hr />
            ฿3490
          </b-card-text>
        </div>
        <div class="hovereffect">
          <img :src="$store.state.i3.image"/>
          <div class="overlay">
            <h2>Bestsellers</h2>
            <a class="info"   v-on:click="
                      ($store.state.i3.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              SONGESAND ซองเงซันด์
            <hr />
            ฿8990
          </b-card-text>
        </div>
        <div class="hovereffect">
          <img :src="$store.state.i4.image"/>
          <div class="overlay">
            <h2>Bestsellers</h2>
            <a class="info"  v-on:click="
                      ($store.state.i4.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              HEMNES เฮมเนส
            <hr />
            ฿18970
          </b-card-text>
        </div>
      </div>
      </div>  
 
    <h1 class="center6"> Brands & Designers</h1>
      
      <b-card-group class="center4">
        <b-card border-variant="secondary">
          <img src="https://www.konceptfurniture.com/dist/images/logo.png" alt="">
        </b-card>
                <b-card border-variant="secondary">
          <img src="https://i2.wp.com/www.iurban.in.th/wp-content/uploads/2016/06/logo-habitat-iurban.png?resize=1200%2C409&is-pending-load=1" alt="">
        </b-card>
                <b-card border-variant="secondary">
          <img src="https://digital.hbs.edu/platform-rctom/wp-content/uploads/sites/4/2016/11/vintage-ralph-lauren_large-480x200.png" alt="">
        </b-card>
                <b-card border-variant="secondary">
         <img src="https://searchlogovector.com/wp-content/uploads/2018/07/ethan-allen-logo-vector.png" alt="">
        </b-card>

        
      </b-card-group>
      <h1 class="center7"><img src="https://drive.google.com/uc?id=1YomJCZwim6dMXB64QNxlWHHM_f2Q27TK" style="max-width: 20rem;" alt=""></h1>
  <div class="containerler">

    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/01.jpg" alt="nature">
        </div>
      </div>
    </div>

    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/02.jpg" alt="people">
        </div>
      </div>
    </div>

    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/03.jpg" alt="sport">
        </div>
      </div>
    </div>

    <div class="gallery-container w-2 h-2">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/04.jpg" alt="fitness">
        </div>
      </div>
    </div>

    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/05.jpg" alt="food">
        </div>
      </div>
    </div>

    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/06.jpg" alt="travel">
        </div>
      </div>
    </div>

    <div class="gallery-container w-2 h-2">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/07.jpg" alt="art">
        </div>
      </div>
    </div>

    <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/08.jpg" alt="cars">
        </div>
      </div>
    </div>
     <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/09.jpg" alt="cars">
        </div>
      </div>
    </div>
     <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/10.jpg" alt="cars">
        </div>
      </div>
    </div>
     <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/11.jpg" alt="cars">
        </div>
      </div>
    </div>
     <div class="gallery-container w-1 h-1">
      <div class="gallery-item">
        <div class="image">
          <img src="https://static.parastorage.com/services/instagram-cdn/1.659.0/assets/ig-templates-accounts/Editor/Online%20Furniture%20Store/12.jpg" alt="cars">
        </div>
      </div>
    </div>

  </div>
  </body>
</template>
<style>
.containerler{
    display:grid;
    grid-template-columns: repeat(6,1fr);
    grid-auto-rows:100px 300px;
    grid-gap:10px;
    grid-auto-flow: dense;
    margin-block-end: 100px;
}
.gallery-item{
    width:100%;
    height:100%;
    position:relative;
}
.gallery-item .image{
    width:100%;
    height:100%;
    overflow:hidden;
}
.gallery-item .image img{
    width:100%;
    height:100%;
    object-fit: cover;
    object-position:50% 50%;
    cursor:pointer;
    transition:.5s ease-in-out;
}
.gallery-item:hover .image img{
    transform:scale(1.5);
}
.gallery-item .text{
    opacity:0;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#fff;
    font-size:25px;
    pointer-events:none;
    z-index:4;
    transition: .3s ease-in-out;
    -webkit-backdrop-filter: blur(5px) saturate(1.8);
    backdrop-filter: blur(5px) saturate(1.8);
}
.gallery-item:hover .text{
    opacity:1;
    animation: move-down .3s linear;
    padding:1em;
    width:100%;
}
.w-1{
    grid-column: span 1;
}
.w-2{
    grid-column: span 2;
}
.w-3{
    grid-column: span 3;
}
.w-4{
    grid-column: span 4;
}
.w-5{
    grid-column: span 5;
}
.w-6{
    grid-column: span 6;
}
.h-1{
    grid-row: span 1;
}
.h-2{
    grid-row: span 2;
}
.h-3{
    grid-row: span 3;
}
.h-4{
    grid-row: span 4;
}
.h-5{
    grid-row: span 5;
}
.h-6{
    grid-row: span 6;
}
/* เอฟเฟครูป */
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  margin: 10px;
}
.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: translate(460px, -100px) rotate(180deg);
  -ms-transform: translate(460px, -100px) rotate(180deg);
  transform: translate(460px, -100px) rotate(180deg);
  -webkit-transition: all 0.2s 0.4s ease-in-out;
  transition: all 0.2s 0.4s ease-in-out;
}
.team-area {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.hovereffect img {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
  width: 100%;
  height: 100%;
}
.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
}
.hovereffect a.info {
  display: inline-block;
  text-decoration: none;
  padding: 7px 14px;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid #fff;
  margin: 50px 0 0 0;
  background-color: transparent;
  -webkit-transform: translateY(-200px);
  -ms-transform: translateY(-200px);
  transform: translateY(-200px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.hovereffect a.info:hover {
  box-shadow: 0 0 5px #fff;
}
.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transform: translate(0px, 0px);
  -ms-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
}
.hovereffect:hover h2 {
  -webkit-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}
.hovereffect:hover a.info {
  -webkit-transform: translateY(0px);
  -ms-transform: translateY(0px);
  transform: translateY(0px);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
/* shop */
.center1 {
  margin-top: 40px;
  margin-bottom: 0.5rem;
  text-align: center;
}
.center2 {
  margin-top: 60px;
  margin-block-end: 40px;
  text-align: center;
}
.center3 {
  margin-top: 30px;
}
.center4 {
  margin-top: 10px;
  width: 100%;
}
.center6 {
  margin-top: 60px;
  text-align: center;
}
.center7 {
  margin-top: 60px;
  text-align: center;
}
.center4 img {
  width: 100%;
}
.body {
  margin: 0;
  padding: 0;
  background: #fff;
  font-family: "Raleway", sans-serif;
  color: #fff;
}
.bg-custom {
  background-color: rgba(26, 24, 36, 0.9);
  height: 50vh;
  width: 50%;
}
.banner {
  height: 100vh;
  width: 100%;
  background-image: url(https://shorturl.asia/vfej0);
  background-position: top;
  background-size: cover;
  /*background-attachment: fixed;*/
  background-repeat: no-repeat;
}
.banner .navbar {
  margin-top: 4%;
}
.banner .navbar-brand {
  color: #fff;
  font-size: 1.8em;
  font-weight: 700;
  margin-left: 10%;
}
.banner .nav {
  margin-right: 10%;
}
.banner .nav li a {
  color: #aaa;
  font-size: 1.2em;
}
.banner .info {
  margin-top: 15%;
  transform: translateY(-15%);
}
.banner .info h1 {
  font-size: 2.5em;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
  margin: 50px;
}
.banner .info p {
  font-size: 2em;
  font-weight: 500;
  color: rgb(255, 255, 255);
  letter-spacing: 2px;
}
</style>