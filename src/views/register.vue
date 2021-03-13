<template>
  <div class="register">
    <b-card>
      <h1 class="hh2">Register</h1>
    </b-card>
    <b-card>
      <b-card-group>
        <b-card>
          <h1 class="hh1">Customer Service</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
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
  background-color: rgb(53, 53, 53);
  color: rgb(255, 255, 255);
  line-height: 150px;
  font-size: 4rem;
}
</style>