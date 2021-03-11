<template>
  <div class="register">
    <b-container>
      <br />
      <b-card bg-variant="dark" text-variant="white" title="Register">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-row>
            <b-col cols="6">
              <b-form-group
                id="input-group-1"
                label="Email address"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="6">
              <b-form-group
                id="input-group-1"
                label="Password"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="pass"
                  type="password"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="6">
              <b-form-group id="input-group-2" label="Name" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="name"
                  placeholder="Enter name"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="6">
              <b-form-group
                id="input-group-2"
                label="Surname"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="surname"
                  placeholder="Enter surname"
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
                  placeholder="Enter phone number"
                  type="tel"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="3">
              <b-form-group
                id="input-group-3"
                label="Gender"
                label-for="input-3"
              >
                <b-form-select
                  id="input-3"
                  v-model="gender"
                  :options="gender"
                  required
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
            </b-form-checkbox-group>
          </b-form-group>
          <b-button variant="success" @click="addData()">Submit</b-button>&nbsp;
          <b-button variant="danger" @click="reset()"
            >Reset</b-button
          >
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export const db = firebase.firestore();
import firebase from "firebase/app";
export default {
  data() {
    return {
      data: [],
      gender: [{ text: "Select One", value: null }, "Male", "Female", "Other"],
      show: true,
    };
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
        email: this.email,
        name: this.name,
        surname: this.surname,
        pass: this.pass,
        phone: this.phone,
        gender: this.gender,
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
        Password: this.pass,
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