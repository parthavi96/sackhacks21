<template>

  <card>

    <b-row align-v="center" slot="header" >
      
      <b-col cols="12">
        <h3 class="mb-0">Food Donation </h3>
      </b-col>

    </b-row>

    <b-form @submit.prevent="addFoodReq" v-if="submited">
          <div style="float:right;"><img src="./foodbank.png" height="400" width="400"/></div>

      <h6 class="heading-small text-muted mb-4">Food Details</h6>

      <div v-for="i in c" :key="i" class="pl-lg-4">
        <b-row>
          <b-col lg="12">
            <base-input
              type="text"
              label="Item Name"
              placeholder="Item Name"
              v-model="food.name"
            >
            </base-input>
          </b-col>
        </b-row>
        
        <b-row >
          <b-col lg="12">
            <label>Food Type:</label>
            <base-checkbox type="radio" id="one" value="Dry" v-model="food.picked"><label for="one">Dry</label></base-checkbox>
            <base-checkbox type="radio" id="two" value="Frozen" v-model="food.picked">
            <label for="two">Frozen</label></base-checkbox>
            <base-checkbox type="radio" id="three" value="Canned" v-model="food.picked">
            <label for="two">Canned</label></base-checkbox>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="12">
            <base-input
              type="text"
              label="Quantity"
              placeholder="Quantity"
              v-model="food.quantity"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="12">
            <base-input
              type="text"
              label="Description"
              placeholder="Description"
              v-model="food.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-button v-on:click="c += 1">Add Item</b-button>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Location</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="6">
            <!-- <label>Address</label> -->
            <base-input
              type="text"
              label="Address"
              placeholder="Home Address"
              v-model="food.address"
            ></base-input>
            <base-input
              type="text"
              label="City"
              placeholder="City"
              v-model="food.city"
            >
            </base-input>
            <base-input
              type="text"
              label="Country"
              placeholder="Country"
              v-model="food.country"
            >
            </base-input>
            <base-input
              label="Postal Code"
              placeholder="ZIP Code"
              v-model="food.postalCode"
            >
            </base-input>
          </b-col>
          <b-col md="6" class="mb-4" style="float:right">
            <iframe width="100%" height="400" frameborder="0" scrolling="no" allowfullscreen src="https://arcg.is/1bKTvG"></iframe>
            <!-- <iframe src="//app.mapply.net/front-end/iframe.php?api_key=mapply.92cc0cdb57c3920409d17fbd2e48a108" style="border:none;" width="100%" height="645"></iframe> -->
          </b-col>
          
        </b-row>
        
        <base-button type="danger" native-type="submit" class="w-100">Submit</base-button>
      </div>

    </b-form>
    <div v-else>
      <h2>Thank you for the donation</h2>
      <base-progress :animated="true" :value="25" :height="20" :width="100"/>
      <b-row class="w-100 mt--2">
        <b-col>
          <img src="./triangle.png" height="20" width="20"/>
          <h3>Packing</h3>
          </b-col>
        <b-col class="text-center">
          <img src="./triangle.png" height="20" width="20"/>
          <h3>In Transit</h3>
          </b-col>
        <b-col class="text-right">
          <img src="./triangle.png" height="20" width="20"/>
          <h3>Deliverd</h3>
          </b-col>
      </b-row>
     
    </div>
  </card>
</template>
<script>
import BaseProgress from '../../../components/BaseProgress.vue';
import BaseCheckbox from '../../../components/Inputs/BaseCheckbox.vue';
import BaseRadio from '../../../components/Inputs/BaseRadio.vue';

import firebase from "firebase"
import * as fb from "../../../firebase"

export default {
  components: { BaseRadio, BaseCheckbox, BaseProgress },
  data() {
    return {
      c: 1,
      submited: true,
      food: {
        name:"",
        picked:"",
        email: '',
        // firstName: 'Mike',
        lastName: '',
        address: '',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        user_id:firebase.auth().currentUser.uid,

      }
    };
  },
  methods: {
    addFoodReq() {
      // this.submited = false;
      // alert('Your data: ' + JSON.stringify(this.user));
       fb.foodCollection.add(this.food).then(
                res =>{
                  alert("success")
                  this.submited = false;

                },err=>{
                  alert(err.message)
                }
              )
    },
    successFunction(data) {
        alert("sdc")
        var allRows = data.split(/\r?\n|\r/);
        alert("successs",allRows)
      },
    loc(){
      $.ajax({
          url: 'food-bank.xlsx',
          dataType: 'text',
        }).done(this.successFunction);
        
    }
  }
};

</script>
<style></style>
