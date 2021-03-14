<template>
  <div id="Home">
    <b-card class="hh2">
      <h1>Shop All</h1>
    </b-card>
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
            {{ $store.state.i1.name }}
            <hr />
            <p>โครงเตียง,</p>
                <p>เทา/ลูร์เอย,90x200 ซม.</p>
            <hr />
            {{ $store.state.i1.price }}
            <p>จำนวน {{ $store.state.i1.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
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
              {{ $store.state.i2.name }}
            <hr />
            <p>โครงเตียง,</p>
                <p>ไม้สน/ลูร์เอย,90x200 ซม.</p>
                <hr />
            {{ $store.state.i2.price  }}
            <p>จำนวน {{ $store.state.i2.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
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
              {{ $store.state.i3.name }}
            <hr />
             <p>โครงเตียงพร้อมกล่องเก็บของ 2 ใบ,</p>
                <p>ขาว/ลูร์เอย150x200 ซม.</p>
                <hr />
            {{ $store.state.i3.price  }}
            <p>จำนวน {{ $store.state.i3.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
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
              {{ $store.state.i4.name }}
            <hr />
            <p>โครงเตียงเดย์เบด 3 ลิ้นชัก,</p>
                <p>ขาว,80x200 ซม.</p>
                 <hr />
            {{ $store.state.i4.price  }}
            <p>จำนวน {{ $store.state.i4.amount }} เซ็ต</p>
          </b-card-text>
           <hr />
        </div>
        
      </div>
      </div>  
          <div class="container">
    <div class="team-area">
        <div class="hovereffect">
         <img :src="$store.state.i5.image"/>
          <div class="overlay">
            <a class="info"     v-on:click="
                      ($store.state.i5.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  > เพิ่มสินค้า</a>
          </div>
           <b-card-text class="center3">
            {{ $store.state.i5.name }}
            <hr />
            <p>โครงเตียงสูงพร้อมกล่องเก็บของ 2 ใบ,</p>
                <p>น้ำตาลดำ/ลูร์เอย,90x200 ซม.</p>
                <hr />
            {{ $store.state.i5.price  }}
            <p>จำนวน {{ $store.state.i5.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
        </div>
  
        <div class="hovereffect">
         <img :src="$store.state.i6.image"/>
          <div class="overlay">
            <a class="info"                     v-on:click="
                      ($store.state.i6.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >
              เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i6.name }}
            <hr />
            <p>โครงเตียง, ดำ/ลูร์เอย,90x200 ซม.</p>
                <p>ราคาเดิม 6,590</p>
                <hr />
            {{ $store.state.i6.price  }}
            <p>จำนวน {{ $store.state.i6.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
        </div>
        <div class="hovereffect">
          <img :src="$store.state.i7.image"/>
          <div class="overlay">
            <a class="info"   v-on:click="
                      ($store.state.i7.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i7.name }}
            <hr />
            <p>เตียงแบบซ้อนได้+ที่นอน2ชิ้น,ไม้สน,</p>
                <p>นุ่มแน่นปานกลาง80x200 ซม.</p>
                <hr />
            {{ $store.state.i7.price  }}
            <p>จำนวน {{ $store.state.i7.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
        </div>
        <div class="hovereffect">
         <img :src="$store.state.i8.image"/>
          <div class="overlay">
            <a class="info"  v-on:click="
                      ($store.state.i7.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i8.name }}
            <hr />
             <p>โครงเตียง+เตียงเสริม+ที่เก็บของ,</p>
                <p>ขาว90x200 ซม.</p>
                  <hr />
            {{ $store.state.i8.price  }}
            <p>จำนวน {{ $store.state.i8.amount }} เซ็ต</p>
          </b-card-text>
            <hr />
        </div>
        
      </div>
      </div>  
       <div class="container">
    <div class="team-area">
        <div class="hovereffect">
         <img :src="$store.state.i9.image"/>
          <div class="overlay">
            <a class="info"     v-on:click="
                      ($store.state.i9.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  > เพิ่มสินค้า</a>
          </div>
           <b-card-text class="center3">
            {{ $store.state.i9.name }}
            <hr />
            <p>เตียงเด็ก กลับด้านได้ ,</p>
                <p>ขาว/ไม้สน90x200 ซม.</p>
                <hr />
            {{ $store.state.i9.price  }}
            <p>จำนวน {{ $store.state.i9.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
        </div>
  
        <div class="hovereffect">
         <img :src="$store.state.i10.image"/>
          <div class="overlay">
            <a class="info"                     v-on:click="
                      ($store.state.i10.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >
              เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i10.name }}
            <hr />
            <p>โครงเตียงพร้อมลิ้นชัก+โซฟาโมดูลาร์,</p>
                <p>ขาว/เทา90x200 ซม.</p>
                <hr />
            {{ $store.state.i10.price  }}
            <p>จำนวน {{ $store.state.i10.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
        </div>
        <div class="hovereffect">
          <img :src="$store.state.i11.image"/>
          <div class="overlay">
            <a class="info"   v-on:click="
                      ($store.state.i11.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i11.name }}
            <hr />
             <p>โครงเตียงมีที่เก็บของ+ระแนง,</p>
                <p>ขาว90x200 ซม.</p>
                <hr />
            {{ $store.state.i11.price  }}
            <p>จำนวน {{ $store.state.i11.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
        </div>
        <div class="hovereffect">
         <img :src="$store.state.i12.image"/>
          <div class="overlay">
            <a class="info"  v-on:click="
                      ($store.state.i12.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i12.name }}
            <hr />
            <p>โครงเตียง,</p>
            <p> น้ำตาลดำ/ลูร์เอย90x200 ซม.</p>
                  <hr />
            {{ $store.state.i12.price  }}
            <p>จำนวน {{ $store.state.i12.amount }} เซ็ต</p>
          </b-card-text>  <hr />
        </div>
        
      </div>
      </div>  
       <div class="container">
    <div class="team-area">
        <div class="hovereffect">
         <img :src="$store.state.i13.image"/>
          <div class="overlay">
            <a class="info"     v-on:click="
                      ($store.state.i13.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  > เพิ่มสินค้า</a>
          </div>
           <b-card-text class="center3">
            {{ $store.state.i13.name }}
            <hr />
            <p>โครงเตียงพร้อมที่เก็บของและหัวเตียง</p><hr />
            {{ $store.state.i13.price  }}
            <p>จำนวน {{ $store.state.i13.amount }} เซ็ต</p>
          </b-card-text>
          <hr />
        </div>
  
        <div class="hovereffect">
         <img :src="$store.state.i14.image"/>
          <div class="overlay">
            <a class="info"                     v-on:click="
                      ($store.state.i14.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >
              เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i14.name }}
            <hr />
            <p>โครงเตียงพร้อมลิ้นชักเก็บของ</p><hr />
            {{ $store.state.i14.price  }}
            <p>จำนวน {{ $store.state.i14.amount }} เซ็ต</p>
          </b-card-text><hr />
        </div>
        <div class="hovereffect">
          <img :src="$store.state.i15.image"/>
          <div class="overlay">
            <h2>Bestsellers</h2>
            <a class="info"   v-on:click="
                      ($store.state.i15.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i15.name }}
            <hr /><p>เตียง (ยกพื้นเตียงขึ้นได้)</p><hr />
            {{ $store.state.i15.price  }}
            <p>จำนวน {{ $store.state.i15.amount }} เซ็ต</p>
          </b-card-text><hr />
        </div>
        <div class="hovereffect">
         <img :src="$store.state.i16.image"/>
          <div class="overlay">
            <a class="info"  v-on:click="
                      ($store.state.i16.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i16.name }}
            <hr /><p>เตียงบุนวมพร้อมกล่องเก็บของ 2 ใบ</p> <hr />
            {{ $store.state.i16.price  }}
            <p>จำนวน {{ $store.state.i16.amount }} เซ็ต</p>
          </b-card-text> <hr />
        </div>
        
      </div>
      </div>   <div class="container">
    <div class="team-area">
        <div class="hovereffect">
         <img :src="$store.state.i17.image"/>
          <div class="overlay">
            <a class="info"     v-on:click="
                      ($store.state.i17.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  > เพิ่มสินค้า</a>
          </div>
           <b-card-text class="center3">
            {{ $store.state.i17.name }}
            <hr /><p>โครงเตียง, ขาว/ลูร์เอย150x200 ซม.
</p> <hr />
            {{ $store.state.i17.price  }}
            <p>จำนวน {{ $store.state.i17.amount }} เซ็ต</p>
          </b-card-text> <hr />
        </div>
  
        <div class="hovereffect">
         <img :src="$store.state.i18.image"/>
          <div class="overlay">
            <a class="info"                     v-on:click="
                      ($store.state.i18.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >
              เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i18.name }}
            <hr /><p>โครงเตียงบุนวม  150x200 ซม.
</p><hr />
            {{ $store.state.i18.price  }}
            <p>จำนวน {{ $store.state.i18.amount }} เซ็ต</p>
          </b-card-text><hr />
        </div>
        <div class="hovereffect">
          <img :src="$store.state.i19.image"/>
          <div class="overlay">
            <a class="info"   v-on:click="
                      ($store.state.i19.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i19.name }}
            <hr /><p>โครงเตียง, ขาว/ลูร์เอย180x200 ซม.
</p><hr />
            {{ $store.state.i19.price  }}
            <p>จำนวน {{ $store.state.i19.amount }} เซ็ต</p>
          </b-card-text><hr />
        </div>
        <div class="hovereffect">
         <img :src="$store.state.i20.image"/>
          <div class="overlay">
            <a class="info"  v-on:click="
                      ($store.state.i20.amount += 1),
                        $store.state.say(
                          'เพิ่มสินค้าสำเร็จ สามารถตรวจสอบแก้ไขสินค้าได้ในตระกร้า'
                        )
                    "
                  >เพิ่มสินค้า</a>
          </div>
            <b-card-text class="center3">
              {{ $store.state.i20.name }}
            <hr /><p>โครงเตียงบุนวม 180x200 ซม.</p><hr />
            {{ $store.state.i20.price  }}
            <p>จำนวน {{ $store.state.i20.amount }} เซ็ต</p>
          </b-card-text><hr />
        </div>
        
      </div>
      </div>  
      <hr/>
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
.hh2 {
  background-color: rgb(18, 11, 36);
  color: rgb(255, 255, 255);
  line-height: 70px;
  height: 20vh;
  width: 95%;
  margin-left: 45px;
}
.hh2 h1 {
  font-size: 60px;
}
</style>