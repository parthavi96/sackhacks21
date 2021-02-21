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
            <base-checkbox type="radio" id="one" value="Dry" v-model="food.Dry"><label for="one">Dry</label></base-checkbox>
            <base-checkbox type="radio" id="two" value="Frozen" v-model="food.Frozen">
            <label for="two">Frozen</label></base-checkbox>
            <base-checkbox type="radio" id="three" value="Canned" v-model="food.Canned">
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
              v-model="food.description"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-button v-on:click="addItem">Add Item</b-button>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Location</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="6">
            <!-- <label>Address</label> -->
            <label for="loc">Location:</label>
            <b-select select id="loc" name="location">
              <option value="(916) 783-1989">Abundant Life Fellowship</option>
              <option value="(916) 381-5353">Capitol City Adventist Community Services</option>
              <option value="(916) 487-8684">Carmichael Adventist Community Services</option>
              <option value="(916) 483-9232">Carmichael Food Closet</option>
              <option value="(916) 568-7606">Cathedral of Praise & Worship Center - Food Program</option>
              <option value="(916) 761-5624">Central Downtown Food Basket</option>
              <option value="(916) 419-7500">Sacramento County Department of Aging</option>
              <option value="(916) 364-8973">Cordova Community Food Locker</option>
              <option value="(916) 443-2646">Francis House</option>
              <option value="(916) 422-4962">Daughters of Zion Enterpryz</option>
              <option value="(916) 775-1479">Delta Food Bank and Community Services</option>
              <option value="(916) 685-8453">Elk Grove Food Bank Services</option>
              <option value="(916) 567-5220">Community Resource Project</option>
              <option value="(916) 428-5290">Emergency Food Closet (SSIP)</option>
              <option value="(916) 967-2838">Food and Clothes Closet - Orangevale 7th Day Adventist</option>
              <option value="(916) 456-1980">Food Assistance - Sacramento Food Bank and Family Services</option>
              <option value="(530) 622-3231">Green Valley Community Church - Food/Clothing</option>
              <option value="(916) 331-1510">North Highlands Christian Food Ministry - Food Closet</option>
              <option value="(916) 925-5313">Our Lady of Lourdes Church - Feed the Hungry Program</option>
              <option value="(916) 874-3100">Department of Human Assistance</option>
              <option value="(916) 983-0658">Powerhouse Ministries</option>
            </b-select>
            <!-- <base-input
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
            </base-input> -->
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
      res : [],
      food: {
        name:"",
        Dry:false,
        Frozen:false,
        Canned:false,
        email: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        description:'',
        user_id:firebase.auth().currentUser.uid,

      }
    };
  },
  methods: {
    addItem(){
      this.c += 1
      // this.res.push(this.food[0])
      // this.food= {
      //   name:"",
      //   Dry:false,
      //   Frozen:false,
      //   Canned:false,
      //   email: '',
      //   lastName: '',
      //   address: '',
      //   city: '',
      //   country: '',
      //   postalCode: '',
      //   description:'',
      //   user_id:firebase.auth().currentUser.uid,

      // }
    },
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
  }
};

</script>
<style></style>
