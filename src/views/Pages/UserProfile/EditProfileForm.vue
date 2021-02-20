<template>

  <card>

    <b-row align-v="center" slot="header" >
      
      <b-col cols="12">
        <h3 class="mb-0">Food Donation </h3>
      </b-col>

    </b-row>

    <b-form @submit.prevent="updateProfile" v-if="submited">
          <div style="float:right;"><img src="./foodbank.png" height="400" width="400"/></div>

      <h6 class="heading-small text-muted mb-4">Food Details</h6>

      <div v-for="i in c" :key="i" class="pl-lg-4">
        <b-row>
          <b-col lg="12">
            <base-input
              type="text"
              label="Item Name"
              placeholder="Item Name"
              v-model="user.username"
            >
            </base-input>
          </b-col>
        </b-row>
        
        <b-row >
          <b-col lg="12">
            <label>Food Type:</label>
            <base-checkbox type="radio" id="one" value="Dry" v-model="picked"><label for="one">Dry</label></base-checkbox>
            <base-checkbox type="radio" id="two" value="Frozen" v-model="picked">
            <label for="two">Frozen</label></base-checkbox>
            <base-checkbox type="radio" id="three" value="Canned" v-model="picked">
            <label for="two">Canned</label></base-checkbox>
          </b-col>
        </b-row>
        <b-row >
          <b-col lg="12">
            <base-input
              type="text"
              label="Quantity"
              placeholder="Quantity"
              v-model="user.firstName"
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
              v-model="user.lastName"
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
              v-model="user.address"
            ></base-input>
            <base-input
              type="text"
              label="City"
              placeholder="City"
              v-model="user.city"
            >
            </base-input>
            <base-input
              type="text"
              label="Country"
              placeholder="Country"
              v-model="user.country"
            >
            </base-input>
            <base-input
              label="Postal Code"
              placeholder="ZIP Code"
              v-model="user.postalCode"
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

export default {
  components: { BaseRadio, BaseCheckbox, BaseProgress },
  data() {
    return {
      c: 1,
      submited: true,
      user: {
        company: 'Creative Code Inc.',
        // username: 'michael23',
        email: '',
        // firstName: 'Mike',
        lastName: '',
        address: '',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      this.submited = false;
      // alert('Your data: ' + JSON.stringify(this.user));
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
