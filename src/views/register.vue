<template>
  <div class="register">
    <b-card>
      <h1 class="hh2">Contact</h1>
    </b-card>
    <b-card>
      <b-card-group>
        <b-card>
          <h1 class="hh1">รายละเอียดเพิ่มเติม</h1>
          <p>
            หากคุณยังไม่ได้เป็นสมาชิกกับทางเรา คุณจำเป็นต้องทำการลงทะเบียน เพื่อที่จะได้รับ
            สิทธิประโยชน์ต่างๆจากทางเรา ขอให้ท่านเลือกซื้อสินค้าอย่างสนุก ทางเราขอขอบคุณครับ
          </p>
        </b-card>

        <br />
        <b-card class="card1" text-variant="white">
          <b-form v-if="show">
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-1"
                  label="Email address"
                  label-for="input-1"
                >
                  <b-form-input
                    class="h14"
                    id="input-1"
                    v-model="email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-1"
                  label="Password"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="pass"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="First name"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="name"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Last name"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="surname"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="3">
                <b-form-group
                  id="input-group-3"
                  label="Phone"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="phone"
                    type="tel"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col class="3">
                <b-form-group label="Gender">
                  <b-form-select
                    v-model="gender"
                    :options="options"
                  ></b-form-select
                ></b-form-group>
              </b-col>
            </b-row>
            <b-button
              squared
              v-on:click="$store.state.say('Register success!')"
              variant="outline-light"
              @click="addData"
              >Submit</b-button
            >&nbsp;
            <b-button
              squared
              onClick="javascript:location.reload();"
              variant="outline-light"
              >Reset</b-button
            >
          </b-form>
        </b-card>
      </b-card-group>
    </b-card>
    <br />
    
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

  </div>
</template>

<script>
export const db = firebase.firestore();
import firebase from "firebase/app";
export default {
  data() {
    return {
      form: { email: "", pass: "" },
      isLoading: false,
      data: [],
      show: true,
      gender: null,
      options: [
        { value: null, text: "Please select one" },
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        { value: "Other", text: "Other" },
      ],
    };
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
        Email: this.email,
        Firstname: this.name,
        Lastname: this.surname,
        Password: this.pass,
        Phone: this.phone,
        Gender: this.gender,
      };
      db.collection("User")
        .doc("infouser")
        .set(data)
        .then(function () {
          console.log("Document successfully written! -> User");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      const dataText = {
        Email: this.email,
        Firstname: this.name,
        Lasttname: this.surname,
        Phone: this.phone,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function () {
          console.log("Document successfully written! -> MyText");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    },
    reset() {},
  },
};
</script>
<style>
.h14 {
  color: rgba(0, 0, 0, 1);
}
.form-control {
  border-color: rgb(252, 249, 249);
}
.card1 {
  background-color: rgb(6, 66, 51);
}
.hh1 {
  margin-top: 50px;
}
.hh2 {
  background-color: rgb(24, 17, 51);
  color: rgb(255, 255, 255);
  line-height: 150px;
  font-size: 4rem;
}
.center6 {
  margin-top: 60px;
  text-align: center;
}
</style>